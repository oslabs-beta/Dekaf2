import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { store, type RootState } from "../../store/store";
import { ITopics } from "../../../../server/shared/KafkaInterfaces";
require("dotenv").config();

type State = {
  data: any;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: any;
};

// Define a type for the slice state
export interface ITopicsState extends State {
  data: Array<ITopics>;
}

// Define the initial state using that type
const initialState: ITopicsState = {
  data: [],
  status: "idle",
  error: null,
};

export const topicsSlice = createSlice({
  name: "topics",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ITopics[]>) => {
      action.payload.forEach((topics) => {
        state.data.push(topics);
      });
    },
  },
  extraReducers(builder) {
    //Used for reducers that were not defined and auto-assigned action creators inside our slice - particular use cases
    builder
      .addCase(fetchTopics.pending, (state, action) => {
        state.status = "loading";
        console.log(`####### fetchTopics.pending! `, {
          state_data: state?.data,
          status: state?.status,
          action_type: action.type,
          payload: action.payload,
        });
      })
      .addCase(fetchTopics.fulfilled, (state, action) => {
        state.data = action.payload; //Rewrites whole state with data from fetch
        state.status = "succeeded";
        console.log(`####### fetchTopics.fulfilled! `, {
          state_data: state?.data,
          status: state?.status,
          action_type: action.type,
          payload: action.payload,
        });
      })
      .addCase(fetchTopics.rejected, (state, action) => {
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

export const { add } = topicsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAllTopics = (state: RootState) => state.topics;

/*-------------------//     The Asynkthunks helps us to deal with async
//   ASYNC THUNKS    //     requests inside our reducer letting us
//-------------------/      have methods to fetch data and update the state*/

export const fetchTopics = createAsyncThunk("topics/fetchTopics", async () => {
  try {
    const clusterState = store.getState().clusters;
    if (clusterState.status === "succeeded") {
      const clusters = clusterState.data;
      console.log(`#### clusters State `, clusterState);
      console.log(`#### clusters `, clusters);
      const response = await fetch(
        `http://localhost:3000/api/v1/kafka/topics`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000",
          },
          body: JSON.stringify({ clusters: clusters }),
        }
      );
      // console.log(`BASE URL: ${process.env.API_BASE_URL}`);
      const data = await response.json();
      console.log("#### fetchTopics ", data);
      return data;
    }

    // // const response = await fetch(`${process.env.API_BASE_URL}/topics`);
    // async function getTopics() {
    //   const response = await fetch(`http://localhost:3000/api/v1/kafka/topics`, {
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Access-Control-Allow-Origin": "http://localhost:3000",
    //     },
    //     body: JSON.stringify(clusters),
    //   });
    //   // console.log(`BASE URL: ${process.env.API_BASE_URL}`);
    //   const data = await response.json();
    //   console.log("#### fetchTopics ", data);
    //   return data;
    // }
    // const clusters = useSelector(selectAllClusters);
    // try {
    //   if (clusters.status === "succeeded") {
    //     return await getTopics();
    //   } else {
    //     dispatch(fetchClusters).then(async () => {
    //       if (clusters.status === "succeeded") await getTopics();
    //       setTimeout(async () => {
    //         if (clusters.status === "succeeded") await getTopics();
    //       }, 2000);
    //     }); // Needs improvemente, but checks if clusters were successuflly retrieved before getting topics
    //   }
  } catch (e) {
    console.log(e);
  }
});

export default topicsSlice.reducer;
