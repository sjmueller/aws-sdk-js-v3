import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient.ts";
import { ListDeploymentJobsRequest, ListDeploymentJobsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListDeploymentJobsCommand,
  serializeAws_restJson1ListDeploymentJobsCommand,
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

export interface ListDeploymentJobsCommandInput extends ListDeploymentJobsRequest {}
export interface ListDeploymentJobsCommandOutput extends ListDeploymentJobsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of deployment jobs for a fleet. You can optionally provide filters to
 *          retrieve specific deployment jobs. </p>
 */
export class ListDeploymentJobsCommand extends $Command<
  ListDeploymentJobsCommandInput,
  ListDeploymentJobsCommandOutput,
  RoboMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDeploymentJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RoboMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDeploymentJobsCommandInput, ListDeploymentJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "ListDeploymentJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDeploymentJobsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDeploymentJobsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDeploymentJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListDeploymentJobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDeploymentJobsCommandOutput> {
    return deserializeAws_restJson1ListDeploymentJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
