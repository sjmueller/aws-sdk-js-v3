
import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "../../smithy-client/mod.ts";
import { MetadataBearer as $MetadataBearer } from "../../types/mod.ts";
type Readable = any;

export interface GetRawMessageContentRequest {
  __type?: "GetRawMessageContentRequest";
  /**
   * <p>The identifier of the email message to retrieve.</p>
   */
  messageId: string | undefined;
}

export namespace GetRawMessageContentRequest {
  export const filterSensitiveLog = (obj: GetRawMessageContentRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRawMessageContentRequest => __isa(o, "GetRawMessageContentRequest");
}

export interface GetRawMessageContentResponse {
  __type?: "GetRawMessageContentResponse";
  /**
   * <p>The raw content of the email message, in MIME format.</p>
   */
  messageContent: Readable | ReadableStream | Blob | undefined;
}

export namespace GetRawMessageContentResponse {
  export const filterSensitiveLog = (obj: GetRawMessageContentResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRawMessageContentResponse => __isa(o, "GetRawMessageContentResponse");
}

/**
 * <p>The requested email message is not found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceNotFoundException => __isa(o, "ResourceNotFoundException");
}
