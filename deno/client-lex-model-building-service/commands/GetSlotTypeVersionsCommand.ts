import {
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient.ts";
import { GetSlotTypeVersionsRequest, GetSlotTypeVersionsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetSlotTypeVersionsCommand,
  serializeAws_restJson1GetSlotTypeVersionsCommand,
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

export interface GetSlotTypeVersionsCommandInput extends GetSlotTypeVersionsRequest {}
export interface GetSlotTypeVersionsCommandOutput extends GetSlotTypeVersionsResponse, __MetadataBearer {}

/**
 * <p>Gets information about all versions of a slot type.</p>
 *          <p>The <code>GetSlotTypeVersions</code> operation returns a
 *         <code>SlotTypeMetadata</code> object for each version of a slot type.
 *       For example, if a slot type has three numbered versions, the
 *         <code>GetSlotTypeVersions</code> operation returns four
 *         <code>SlotTypeMetadata</code> objects in the response, one for each
 *       numbered version and one for the <code>$LATEST</code> version. </p>
 *          <p>The <code>GetSlotTypeVersions</code> operation always returns at
 *       least one version, the <code>$LATEST</code> version.</p>
 *          <p>This operation requires permissions for the
 *         <code>lex:GetSlotTypeVersions</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetSlotTypeVersionsCommand } from "../../client-lex-model-building-service/mod.ts";
 * // const { LexModelBuildingServiceClient, GetSlotTypeVersionsCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new GetSlotTypeVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSlotTypeVersionsCommandInput} for command's `input` shape.
 * @see {@link GetSlotTypeVersionsCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetSlotTypeVersionsCommand extends $Command<
  GetSlotTypeVersionsCommandInput,
  GetSlotTypeVersionsCommandOutput,
  LexModelBuildingServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSlotTypeVersionsCommandInput) {
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
  ): Handler<GetSlotTypeVersionsCommandInput, GetSlotTypeVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "GetSlotTypeVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSlotTypeVersionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetSlotTypeVersionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSlotTypeVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSlotTypeVersionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSlotTypeVersionsCommandOutput> {
    return deserializeAws_restJson1GetSlotTypeVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
