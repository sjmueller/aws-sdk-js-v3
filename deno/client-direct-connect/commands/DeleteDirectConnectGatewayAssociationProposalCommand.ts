import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient.ts";
import {
  DeleteDirectConnectGatewayAssociationProposalRequest,
  DeleteDirectConnectGatewayAssociationProposalResult,
} from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalCommand,
  serializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalCommand,
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

export interface DeleteDirectConnectGatewayAssociationProposalCommandInput
  extends DeleteDirectConnectGatewayAssociationProposalRequest {}
export interface DeleteDirectConnectGatewayAssociationProposalCommandOutput
  extends DeleteDirectConnectGatewayAssociationProposalResult,
    __MetadataBearer {}

/**
 * <p>Deletes the association proposal request between the specified Direct Connect gateway and virtual private gateway or transit gateway.</p>
 */
export class DeleteDirectConnectGatewayAssociationProposalCommand extends $Command<
  DeleteDirectConnectGatewayAssociationProposalCommandInput,
  DeleteDirectConnectGatewayAssociationProposalCommandOutput,
  DirectConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteDirectConnectGatewayAssociationProposalCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteDirectConnectGatewayAssociationProposalCommandInput,
    DeleteDirectConnectGatewayAssociationProposalCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "DeleteDirectConnectGatewayAssociationProposalCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDirectConnectGatewayAssociationProposalRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteDirectConnectGatewayAssociationProposalResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteDirectConnectGatewayAssociationProposalCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteDirectConnectGatewayAssociationProposalCommandOutput> {
    return deserializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
