import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient.ts";
import { DescribeWorkspacesRequest, DescribeWorkspacesResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeWorkspacesCommand,
  serializeAws_json1_1DescribeWorkspacesCommand,
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

export interface DescribeWorkspacesCommandInput extends DescribeWorkspacesRequest {}
export interface DescribeWorkspacesCommandOutput extends DescribeWorkspacesResult, __MetadataBearer {}

/**
 * <p>Describes the specified WorkSpaces.</p>
 *          <p>You can filter the results by using the bundle identifier, directory identifier, or
 *          owner, but you can specify only one filter at a time.</p>
 */
export class DescribeWorkspacesCommand extends $Command<
  DescribeWorkspacesCommandInput,
  DescribeWorkspacesCommandOutput,
  WorkSpacesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeWorkspacesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeWorkspacesCommandInput, DescribeWorkspacesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "DescribeWorkspacesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeWorkspacesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeWorkspacesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeWorkspacesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeWorkspacesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeWorkspacesCommandOutput> {
    return deserializeAws_json1_1DescribeWorkspacesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
