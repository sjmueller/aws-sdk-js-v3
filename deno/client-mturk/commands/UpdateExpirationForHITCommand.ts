import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient.ts";
import { UpdateExpirationForHITRequest, UpdateExpirationForHITResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1UpdateExpirationForHITCommand,
  serializeAws_json1_1UpdateExpirationForHITCommand,
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

export interface UpdateExpirationForHITCommandInput extends UpdateExpirationForHITRequest {}
export interface UpdateExpirationForHITCommandOutput extends UpdateExpirationForHITResponse, __MetadataBearer {}

/**
 * <p>
 *             The <code>UpdateExpirationForHIT</code> operation allows you update the expiration time of a HIT.
 *             If you update it to a time in the past, the HIT will be immediately expired.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, UpdateExpirationForHITCommand } from "../../client-mturk/mod.ts";
 * // const { MTurkClient, UpdateExpirationForHITCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new UpdateExpirationForHITCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateExpirationForHITCommandInput} for command's `input` shape.
 * @see {@link UpdateExpirationForHITCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateExpirationForHITCommand extends $Command<
  UpdateExpirationForHITCommandInput,
  UpdateExpirationForHITCommandOutput,
  MTurkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateExpirationForHITCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MTurkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateExpirationForHITCommandInput, UpdateExpirationForHITCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "UpdateExpirationForHITCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateExpirationForHITRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateExpirationForHITResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateExpirationForHITCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateExpirationForHITCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateExpirationForHITCommandOutput> {
    return deserializeAws_json1_1UpdateExpirationForHITCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
