import {
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient.ts";
import { GetBuiltinIntentRequest, GetBuiltinIntentResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetBuiltinIntentCommand,
  serializeAws_restJson1GetBuiltinIntentCommand,
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

export interface GetBuiltinIntentCommandInput extends GetBuiltinIntentRequest {}
export interface GetBuiltinIntentCommandOutput extends GetBuiltinIntentResponse, __MetadataBearer {}

/**
 * <p>Returns information about a built-in intent.</p>
 *          <p>This operation requires permission for the
 *         <code>lex:GetBuiltinIntent</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetBuiltinIntentCommand } from "../../client-lex-model-building-service/mod.ts";
 * // const { LexModelBuildingServiceClient, GetBuiltinIntentCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new GetBuiltinIntentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBuiltinIntentCommandInput} for command's `input` shape.
 * @see {@link GetBuiltinIntentCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetBuiltinIntentCommand extends $Command<
  GetBuiltinIntentCommandInput,
  GetBuiltinIntentCommandOutput,
  LexModelBuildingServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetBuiltinIntentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelBuildingServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBuiltinIntentCommandInput, GetBuiltinIntentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "GetBuiltinIntentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBuiltinIntentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetBuiltinIntentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetBuiltinIntentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetBuiltinIntentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBuiltinIntentCommandOutput> {
    return deserializeAws_restJson1GetBuiltinIntentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
