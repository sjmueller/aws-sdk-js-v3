import { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient.ts";
import { DescribeWorkspaceRequest, DescribeWorkspaceResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeWorkspaceCommand,
  serializeAws_restJson1DescribeWorkspaceCommand,
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

export interface DescribeWorkspaceCommandInput extends DescribeWorkspaceRequest {}
export interface DescribeWorkspaceCommandOutput extends DescribeWorkspaceResponse, __MetadataBearer {}

/**
 * Describes an existing AMP workspace.
 */
export class DescribeWorkspaceCommand extends $Command<
  DescribeWorkspaceCommandInput,
  DescribeWorkspaceCommandOutput,
  AmpClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeWorkspaceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmpClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeWorkspaceCommandInput, DescribeWorkspaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmpClient";
    const commandName = "DescribeWorkspaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeWorkspaceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeWorkspaceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeWorkspaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeWorkspaceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeWorkspaceCommandOutput> {
    return deserializeAws_restJson1DescribeWorkspaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
