
import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient.ts";
import { GetLogGroupFieldsRequest, GetLogGroupFieldsResponse } from "../models/index.ts";
import {
  deserializeAws_json1_1GetLogGroupFieldsCommand,
  serializeAws_json1_1GetLogGroupFieldsCommand,
} from "../protocols/Aws_json1_1.ts";
import { getSerdePlugin } from "../../middleware-serde/mod.ts";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "../../protocol-http/mod.ts";
import { Command as $Command } from "../../smithy-client/mod.ts";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "../../types/mod.ts";

export type GetLogGroupFieldsCommandInput = GetLogGroupFieldsRequest;
export type GetLogGroupFieldsCommandOutput = GetLogGroupFieldsResponse & __MetadataBearer;

export class GetLogGroupFieldsCommand extends $Command<
  GetLogGroupFieldsCommandInput,
  GetLogGroupFieldsCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetLogGroupFieldsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetLogGroupFieldsCommandInput, GetLogGroupFieldsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: GetLogGroupFieldsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetLogGroupFieldsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetLogGroupFieldsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetLogGroupFieldsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLogGroupFieldsCommandOutput> {
    return deserializeAws_json1_1GetLogGroupFieldsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
