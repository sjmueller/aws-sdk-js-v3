
import { CodeGuruProfiler } from "../CodeGuruProfiler.ts";
import { CodeGuruProfilerClient } from "../CodeGuruProfilerClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface CodeGuruProfilerPaginationConfiguration extends PaginationConfiguration {
  client: CodeGuruProfiler | CodeGuruProfilerClient;
}
