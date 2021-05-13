import {
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient.ts";
import { GetBuiltinIntentsRequest, GetBuiltinIntentsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetBuiltinIntentsCommand,
  serializeAws_restJson1GetBuiltinIntentsCommand,
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

export interface GetBuiltinIntentsCommandInput extends GetBuiltinIntentsRequest {}
export interface GetBuiltinIntentsCommandOutput extends GetBuiltinIntentsResponse, __MetadataBearer {}

/**
 * <p>Gets a list of built-in intents that meet the specified
 *       criteria.</p>
 *          <p>This operation requires permission for the
 *         <code>lex:GetBuiltinIntents</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetBuiltinIntentsCommand } from "../../client-lex-model-building-service/mod.ts";
 * // const { LexModelBuildingServiceClient, GetBuiltinIntentsCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new GetBuiltinIntentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBuiltinIntentsCommandInput} for command's `input` shape.
 * @see {@link GetBuiltinIntentsCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetBuiltinIntentsCommand extends $Command<
  GetBuiltinIntentsCommandInput,
  GetBuiltinIntentsCommandOutput,
  LexModelBuildingServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetBuiltinIntentsCommandInput) {
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
  ): Handler<GetBuiltinIntentsCommandInput, GetBuiltinIntentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "GetBuiltinIntentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBuiltinIntentsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetBuiltinIntentsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetBuiltinIntentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetBuiltinIntentsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBuiltinIntentsCommandOutput> {
    return deserializeAws_restJson1GetBuiltinIntentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
