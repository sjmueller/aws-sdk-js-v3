import { ECRPUBLICClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRPUBLICClient.ts";
import { DescribeImageTagsRequest, DescribeImageTagsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeImageTagsCommand,
  serializeAws_json1_1DescribeImageTagsCommand,
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

export interface DescribeImageTagsCommandInput extends DescribeImageTagsRequest {}
export interface DescribeImageTagsCommandOutput extends DescribeImageTagsResponse, __MetadataBearer {}

/**
 * <p>Returns the image tag details for a repository in a public registry.</p>
 */
export class DescribeImageTagsCommand extends $Command<
  DescribeImageTagsCommandInput,
  DescribeImageTagsCommandOutput,
  ECRPUBLICClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeImageTagsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRPUBLICClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeImageTagsCommandInput, DescribeImageTagsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRPUBLICClient";
    const commandName = "DescribeImageTagsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeImageTagsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeImageTagsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeImageTagsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeImageTagsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeImageTagsCommandOutput> {
    return deserializeAws_json1_1DescribeImageTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
