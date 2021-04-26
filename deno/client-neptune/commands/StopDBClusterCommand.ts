import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient.ts";
import { StopDBClusterMessage, StopDBClusterResult } from "../models/models_0.ts";
import {
  deserializeAws_queryStopDBClusterCommand,
  serializeAws_queryStopDBClusterCommand,
} from "../protocols/Aws_query.ts";
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

export interface StopDBClusterCommandInput extends StopDBClusterMessage {}
export interface StopDBClusterCommandOutput extends StopDBClusterResult, __MetadataBearer {}

/**
 * <p>Stops an Amazon Neptune DB cluster. When you stop a DB cluster, Neptune
 *       retains the DB cluster's metadata, including its endpoints and DB parameter
 *       groups.</p>
 *
 *          <p>Neptune also retains the transaction logs so you can do a point-in-time
 *       restore if necessary.</p>
 */
export class StopDBClusterCommand extends $Command<
  StopDBClusterCommandInput,
  StopDBClusterCommandOutput,
  NeptuneClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopDBClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NeptuneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopDBClusterCommandInput, StopDBClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
    const commandName = "StopDBClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopDBClusterMessage.filterSensitiveLog,
      outputFilterSensitiveLog: StopDBClusterResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopDBClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryStopDBClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopDBClusterCommandOutput> {
    return deserializeAws_queryStopDBClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
