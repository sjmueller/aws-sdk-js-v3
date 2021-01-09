import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient.ts";
import { PutDedicatedIpInPoolRequest, PutDedicatedIpInPoolResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1PutDedicatedIpInPoolCommand,
  serializeAws_restJson1PutDedicatedIpInPoolCommand,
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

export type PutDedicatedIpInPoolCommandInput = PutDedicatedIpInPoolRequest;
export type PutDedicatedIpInPoolCommandOutput = PutDedicatedIpInPoolResponse & __MetadataBearer;

/**
 * <p>Move a dedicated IP address to an existing dedicated IP pool.</p>
 *         <note>
 *             <p>The dedicated IP address that you specify must already exist, and must be
 *                 associated with your Amazon Pinpoint account.
 *
 *             </p>
 *             <p>The dedicated IP pool you specify must already exist. You can create a new pool by
 *                 using the <code>CreateDedicatedIpPool</code> operation.</p>
 *
 *         </note>
 */
export class PutDedicatedIpInPoolCommand extends $Command<
  PutDedicatedIpInPoolCommandInput,
  PutDedicatedIpInPoolCommandOutput,
  PinpointEmailClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutDedicatedIpInPoolCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointEmailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutDedicatedIpInPoolCommandInput, PutDedicatedIpInPoolCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointEmailClient";
    const commandName = "PutDedicatedIpInPoolCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutDedicatedIpInPoolRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutDedicatedIpInPoolResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutDedicatedIpInPoolCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutDedicatedIpInPoolCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutDedicatedIpInPoolCommandOutput> {
    return deserializeAws_restJson1PutDedicatedIpInPoolCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
