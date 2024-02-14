import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";
import { IMessages } from "../../../../server/shared/KafkaInterfaces";
require("dotenv").config();

type State = {
  data: any;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: any;
};

// Define a type for the slice state
export interface IMessagesState extends State {
  data: Array<IMessages>;
}

// Define the initial state using that type
const initialState: IMessagesState = {
  data: [],
  status: "idle",
  error: null,
};

export const messagesSlice = createSlice({
  name: "messages",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    add: (state, action: PayloadAction<IMessages[]>) => {
      action.payload.forEach((environment: IMessages) => {
        state.data.push(environment);
      });
    },
  },
  extraReducers(builder) {
    //Used for reducers that were not defined and auto-assigned action creators inside our slice - particular use cases
    builder
      .addCase(fetchMessages.pending, (state, action) => {
        console.log(`####### fetchMessages.pending! `, {
          state_data: state?.data,
          status: state?.status,
          action_type: action.type,
          payload: action.payload,
        });
        state.status = "loading";
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        console.log(`####### fetchMessages.fulfilled! `, {
          state_data: state?.data,
          status: state?.status,
          action_type: action.type,
          payload: action.payload,
        });
        state.data = action.payload; //Rewrites whole state with data from fetch
        state.status = "succeeded";
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        console.log("(`####### state.data ", state?.data);
        console.log("(`####### state.status ", state?.status);
        console.log(`#### action `, action);
        state.error = action.error.message;
        console.log(`####### fetchEnvironments.rejected! `, {
          state_data: state?.data,
          status: state?.status,
          action_type: action.type,
          payload: action.payload,
          error_name: action.error.name,
          error_message: action.error.message,
          error_stack: action.error.stack,
        });
        state.status = "failed";
      });
  },
});

export const { add } = messagesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAllMessages = (state: RootState) => state.messages;

/*-------------------//     The Asynkthunks helps us to deal with async
//   ASYNC THUNKS    //     requests inside our reducer letting us
//-------------------/     have methods to fetch data and update the state*/

export const fetchMessages = createAsyncThunk(
  "messages/fetchMessages",
  async () => {
    // const response = await fetch(`${process.env.API_BASE_URL}/messages`);
    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/kafka/messages`,
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000",
          },
        }
      );
      // console.log(`BASE URL: ${process.env.API_BASE_URL}`);
      const data = await response.json();
      console.log("#### fetchMessages ", data);
      return data;
    } catch (e) {
      console.log(e);
    }
  }
);

export default messagesSlice.reducer;
