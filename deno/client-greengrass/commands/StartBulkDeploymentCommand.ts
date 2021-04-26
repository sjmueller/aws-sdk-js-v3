import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient.ts";
import { StartBulkDeploymentRequest, StartBulkDeploymentResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1StartBulkDeploymentCommand,
  serializeAws_restJson1StartBulkDeploymentCommand,
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

export interface StartBulkDeploymentCommandInput extends StartBulkDeploymentRequest {}
export interface StartBulkDeploymentCommandOutput extends StartBulkDeploymentResponse, __MetadataBearer {}

/**
 * Deploys multiple groups in one operation. This action starts the bulk deployment of a specified set of group versions. Each group version deployment will be triggered with an adaptive rate that has a fixed upper limit. We recommend that you include an ''X-Amzn-Client-Token'' token in every ''StartBulkDeployment'' request. These requests are idempotent with respect to the token and the request parameters.
 */
export class StartBulkDeploymentCommand extends $Command<
  StartBulkDeploymentCommandInput,
  StartBulkDeploymentCommandOutput,
  GreengrassClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartBulkDeploymentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartBulkDeploymentCommandInput, StartBulkDeploymentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "StartBulkDeploymentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartBulkDeploymentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartBulkDeploymentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartBulkDeploymentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartBulkDeploymentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartBulkDeploymentCommandOutput> {
    return deserializeAws_restJson1StartBulkDeploymentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
