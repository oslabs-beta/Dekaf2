export interface IEnvironments {
  api_version: string;
  display_name: string;
  id: string;
  kind: string;
  metadata: {
    created_at: string;
    resource_name: string;
    self: string;
    updated_at: string;
  };
}

export interface IKafkaCredentials {
  kafka_username: string;
  kafka_password: string;
}
export interface ICluster {
  api_version: string;
  id: string;
  kind: string;
  metadata: {
    created_at: string;
    resource_name: string;
    self: string;
    updated_at: string;
  };
  spec: {
    api_endpoint: string;
    availability: string;
    cloud: string;
    config: {
      kind: string;
    };
    display_name: string;
    environment: {
      id: string;
      related: string;
      resource_name: string;
    };
    http_endpoint: string;
    kafka_bootstrap_endpoint: string;
    region: string;
  };
  status: {
    phase: string;
  };
}

export interface IBroker {
  kind: string;
  metadata: {
    self: string;
    resource_name: string;
  };
  cluster_id: string;
  broker_id: number;
  host: string;
  port: number;
  configs: {
    related: string;
  };
  partition_replicas: {
    related: string;
  };
}

export interface IClusterDTO {}

export interface ITopics {
  kind: string;
  metadata: {
    self: string;
    resource_name: string;
  };
  cluster_id: string;
  topic_name: string;
  is_internal: boolean;
  replication_factor: number;
  partitions_count: number;
  partitions: {
    related: string;
  };
  configs: {
    related: string;
  };
  partition_reassignments: {
    related: string;
  };
}

export interface ITopicDetails {
  name: string;
  configs: {
    "cleanup.policy": string;
  };
  partitions: Array<IPartition>;
}

export interface IPartition {
  partition: number;
  leader: number;
  replicas: Array<IPartitionReplicas>;
}

export interface IPartitionReplicas {
  broker: number;
  leader: boolean;
  in_sync: boolean;
}

export interface ITopicsDTO {}

export interface IPartition2 {
  kind: string;
  metadata: {
    self: string;
    resource_name: string;
  };
  cluster_id: string;
  topic_name: string;
  partition_id: number;
  leader: {
    related: string;
  };
  replicas: {
    related: string;
  };
  reassignment: {
    related: string;
  };
}

export interface IMessages {}
export interface IMessagesDTO {}

export interface IError {}
// module.exports = {
//   ICluster,
//   ITopics: ITopics,
//   IMessages: IMessages,
//   IEnvironments: IEnvironments,
//   IBroker: IBroker,
// };

//Kafla API Responses
//LIST CLUSTERS
//https://api.confluent.cloud/cmk/v2/clusters?environment=${confluentEnv}
// {
//     api_version: 'cmk/v2',
//     data: [
//       {
//         api_version: 'cmk/v2',
//         id: 'lkc-377502',
//         kind: 'Cluster',
//         metadata:  {
// created_at: '2024-01-25T16:17:53.602591Z',
// resource_name: 'crn://confluent.cloud/organization=4db0c3c3-db67-4999-8080-9771e1cbc386/environment=env-3njrwm/cloud-cluster=lkc-377502/kafka=lkc-377502',
// self: 'https://api.confluent.cloud/cmk/v2/clusters/lkc-377502',
// updated_at: '2024-01-25T16:17:53.602591Z'
//  },
//         spec: {
//   created_at: '2024-01-25T16:17:53.602591Z',
//   resource_name: 'crn://confluent.cloud/organization=4db0c3c3-db67-4999-8080-9771e1cbc386/environment=env-3njrwm/cloud-cluster=lkc-377502/kafka=lkc-377502',
//   self: 'https://api.confluent.cloud/cmk/v2/clusters/lkc-377502',
//   updated_at: '2024-01-25T16:17:53.602591Z'
// },
//         status: {
//   created_at: '2024-01-25T16:17:53.602591Z',
//   resource_name: 'crn://confluent.cloud/organization=4db0c3c3-db67-4999-8080-9771e1cbc386/environment=env-3njrwm/cloud-cluster=lkc-377502/kafka=lkc-377502',
//   self: 'https://api.confluent.cloud/cmk/v2/clusters/lkc-377502',
//   updated_at: '2024-01-25T16:17:53.602591Z'
// }
//       }
//     ],
//     kind: 'ClusterList',
//     metadata: {
//       first: 'https://api.confluent.cloud/cmk/v2/clusters',
//       total_size: 1
//     }
//   }

//LIST ENVIRONMENTS
