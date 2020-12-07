import { EC2 } from "../EC2.ts";
import { EC2Client } from "../EC2Client.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface EC2PaginationConfiguration extends PaginationConfiguration {
  client: EC2 | EC2Client;
}
