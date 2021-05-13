import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient.ts";
import { RemoveFlowSourceRequest, RemoveFlowSourceResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1RemoveFlowSourceCommand,
  serializeAws_restJson1RemoveFlowSourceCommand,
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

export interface RemoveFlowSourceCommandInput extends RemoveFlowSourceRequest {}
export interface RemoveFlowSourceCommandOutput extends RemoveFlowSourceResponse, __MetadataBearer {}

/**
 * Removes a source from an existing flow. This request can be made only if there is more than one source on the flow.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, RemoveFlowSourceCommand } from "../../client-mediaconnect/mod.ts";
 * // const { MediaConnectClient, RemoveFlowSourceCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new RemoveFlowSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveFlowSourceCommandInput} for command's `input` shape.
 * @see {@link RemoveFlowSourceCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class RemoveFlowSourceCommand extends $Command<
  RemoveFlowSourceCommandInput,
  RemoveFlowSourceCommandOutput,
  MediaConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RemoveFlowSourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveFlowSourceCommandInput, RemoveFlowSourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaConnectClient";
    const commandName = "RemoveFlowSourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveFlowSourceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RemoveFlowSourceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RemoveFlowSourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RemoveFlowSourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RemoveFlowSourceCommandOutput> {
    return deserializeAws_restJson1RemoveFlowSourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
