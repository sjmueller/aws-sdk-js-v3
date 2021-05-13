import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient.ts";
import { ListStreamProcessorsRequest, ListStreamProcessorsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListStreamProcessorsCommand,
  serializeAws_json1_1ListStreamProcessorsCommand,
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

export interface ListStreamProcessorsCommandInput extends ListStreamProcessorsRequest {}
export interface ListStreamProcessorsCommandOutput extends ListStreamProcessorsResponse, __MetadataBearer {}

/**
 * <p>Gets a list of stream processors that you have created with <a>CreateStreamProcessor</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, ListStreamProcessorsCommand } from "../../client-rekognition/mod.ts";
 * // const { RekognitionClient, ListStreamProcessorsCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new ListStreamProcessorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStreamProcessorsCommandInput} for command's `input` shape.
 * @see {@link ListStreamProcessorsCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListStreamProcessorsCommand extends $Command<
  ListStreamProcessorsCommandInput,
  ListStreamProcessorsCommandOutput,
  RekognitionClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListStreamProcessorsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RekognitionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListStreamProcessorsCommandInput, ListStreamProcessorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "ListStreamProcessorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListStreamProcessorsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListStreamProcessorsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListStreamProcessorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListStreamProcessorsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListStreamProcessorsCommandOutput> {
    return deserializeAws_json1_1ListStreamProcessorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
