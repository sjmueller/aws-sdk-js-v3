
import {
  KinesisVideoArchivedMediaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisVideoArchivedMediaClient.ts";
import { GetMediaForFragmentListInput, GetMediaForFragmentListOutput } from "../models/index.ts";
import {
  deserializeAws_restJson1GetMediaForFragmentListCommand,
  serializeAws_restJson1GetMediaForFragmentListCommand,
} from "../protocols/Aws_restJson1.ts";
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

export type GetMediaForFragmentListCommandInput = GetMediaForFragmentListInput;
export type GetMediaForFragmentListCommandOutput = GetMediaForFragmentListOutput & __MetadataBearer;

export class GetMediaForFragmentListCommand extends $Command<
  GetMediaForFragmentListCommandInput,
  GetMediaForFragmentListCommandOutput,
  KinesisVideoArchivedMediaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetMediaForFragmentListCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisVideoArchivedMediaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMediaForFragmentListCommandInput, GetMediaForFragmentListCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: GetMediaForFragmentListInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetMediaForFragmentListOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetMediaForFragmentListCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetMediaForFragmentListCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMediaForFragmentListCommandOutput> {
    return deserializeAws_restJson1GetMediaForFragmentListCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
