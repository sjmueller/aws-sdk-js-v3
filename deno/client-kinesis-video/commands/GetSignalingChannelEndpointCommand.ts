import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient.ts";
import { GetSignalingChannelEndpointInput, GetSignalingChannelEndpointOutput } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetSignalingChannelEndpointCommand,
  serializeAws_restJson1GetSignalingChannelEndpointCommand,
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

export type GetSignalingChannelEndpointCommandInput = GetSignalingChannelEndpointInput;
export type GetSignalingChannelEndpointCommandOutput = GetSignalingChannelEndpointOutput & __MetadataBearer;

/**
 * <p>Provides an endpoint for the specified signaling channel to send and receive messages.
 *             This API uses the <code>SingleMasterChannelEndpointConfiguration</code> input parameter,
 *             which consists of the <code>Protocols</code> and <code>Role</code> properties.</p>
 *         <p>
 *             <code>Protocols</code> is used to determine the communication mechanism. For example,
 *             if you specify <code>WSS</code> as the protocol, this API produces a secure websocket
 *             endpoint. If you specify <code>HTTPS</code> as the protocol, this API generates an HTTPS
 *             endpoint. </p>
 *         <p>
 *             <code>Role</code> determines the messaging permissions. A <code>MASTER</code> role
 *             results in this API generating an endpoint that a client can use to communicate with any
 *             of the viewers on the channel. A <code>VIEWER</code> role results in this API generating
 *             an endpoint that a client can use to communicate only with a
 *                 <code>MASTER</code>. </p>
 */
export class GetSignalingChannelEndpointCommand extends $Command<
  GetSignalingChannelEndpointCommandInput,
  GetSignalingChannelEndpointCommandOutput,
  KinesisVideoClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSignalingChannelEndpointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisVideoClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSignalingChannelEndpointCommandInput, GetSignalingChannelEndpointCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisVideoClient";
    const commandName = "GetSignalingChannelEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSignalingChannelEndpointInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetSignalingChannelEndpointOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSignalingChannelEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSignalingChannelEndpointCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetSignalingChannelEndpointCommandOutput> {
    return deserializeAws_restJson1GetSignalingChannelEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
