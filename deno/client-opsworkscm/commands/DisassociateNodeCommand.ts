import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient.ts";
import { DisassociateNodeRequest, DisassociateNodeResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DisassociateNodeCommand,
  serializeAws_json1_1DisassociateNodeCommand,
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

export interface DisassociateNodeCommandInput extends DisassociateNodeRequest {}
export interface DisassociateNodeCommandOutput extends DisassociateNodeResponse, __MetadataBearer {}

/**
 * <p>
 *       Disassociates a node from an AWS OpsWorks CM server, and removes the node from the server's managed nodes. After a node is disassociated,
 *       the node key pair is no longer valid for accessing the configuration manager's API. For more information about how to associate a node, see <a>AssociateNode</a>.
 *     </p>
 *          <p>A node can can only be disassociated from a server that is in a <code>HEALTHY</code> state. Otherwise, an <code>InvalidStateException</code> is thrown.
 *       A <code>ResourceNotFoundException</code> is thrown when the server does not exist.
 *       A <code>ValidationException</code> is raised when parameters of the request are not valid.
 *     </p>
 */
export class DisassociateNodeCommand extends $Command<
  DisassociateNodeCommandInput,
  DisassociateNodeCommandOutput,
  OpsWorksCMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateNodeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpsWorksCMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateNodeCommandInput, DisassociateNodeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksCMClient";
    const commandName = "DisassociateNodeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateNodeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateNodeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateNodeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateNodeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateNodeCommandOutput> {
    return deserializeAws_json1_1DisassociateNodeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
