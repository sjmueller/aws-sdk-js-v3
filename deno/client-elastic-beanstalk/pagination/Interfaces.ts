
import { ElasticBeanstalk } from "../ElasticBeanstalk.ts";
import { ElasticBeanstalkClient } from "../ElasticBeanstalkClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface ElasticBeanstalkPaginationConfiguration extends PaginationConfiguration {
  client: ElasticBeanstalk | ElasticBeanstalkClient;
}
