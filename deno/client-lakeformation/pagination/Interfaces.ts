
import { LakeFormation } from "../LakeFormation.ts";
import { LakeFormationClient } from "../LakeFormationClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface LakeFormationPaginationConfiguration extends PaginationConfiguration {
  client: LakeFormation | LakeFormationClient;
}
