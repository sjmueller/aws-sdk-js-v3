import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient.ts";
import { PromoteReadReplicaDBClusterMessage, PromoteReadReplicaDBClusterResult } from "../models/models_1.ts";
import {
  deserializeAws_queryPromoteReadReplicaDBClusterCommand,
  serializeAws_queryPromoteReadReplicaDBClusterCommand,
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

export type PromoteReadReplicaDBClusterCommandInput = PromoteReadReplicaDBClusterMessage;
export type PromoteReadReplicaDBClusterCommandOutput = PromoteReadReplicaDBClusterResult & __MetadataBearer;

/**
 * <p>Promotes a read replica DB cluster to a standalone DB cluster.</p>
 *          <note>
 *             <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 */
export class PromoteReadReplicaDBClusterCommand extends $Command<
  PromoteReadReplicaDBClusterCommandInput,
  PromoteReadReplicaDBClusterCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PromoteReadReplicaDBClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PromoteReadReplicaDBClusterCommandInput, PromoteReadReplicaDBClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "PromoteReadReplicaDBClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PromoteReadReplicaDBClusterMessage.filterSensitiveLog,
      outputFilterSensitiveLog: PromoteReadReplicaDBClusterResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PromoteReadReplicaDBClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryPromoteReadReplicaDBClusterCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PromoteReadReplicaDBClusterCommandOutput> {
    return deserializeAws_queryPromoteReadReplicaDBClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
