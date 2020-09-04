import { CodeGuruReviewer } from "../CodeGuruReviewer.ts";
import { CodeGuruReviewerClient } from "../CodeGuruReviewerClient.ts";
import { PaginationConfiguration } from "../../types/mod.ts";

export interface CodeGuruReviewerPaginationConfiguration extends PaginationConfiguration {
  client: CodeGuruReviewer | CodeGuruReviewerClient;
}
