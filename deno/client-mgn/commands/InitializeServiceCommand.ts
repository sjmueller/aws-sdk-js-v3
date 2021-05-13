import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient.ts";
import { InitializeServiceRequest, InitializeServiceResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1InitializeServiceCommand,
  serializeAws_restJson1InitializeServiceCommand,
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

export interface InitializeServiceCommandInput extends InitializeServiceRequest {}
export interface InitializeServiceCommandOutput extends InitializeServiceResponse, __MetadataBearer {}

/**
 * <p>Initialize Application Migration Service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, InitializeServiceCommand } from "../../client-mgn/mod.ts";
 * // const { MgnClient, InitializeServiceCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new InitializeServiceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InitializeServiceCommandInput} for command's `input` shape.
 * @see {@link InitializeServiceCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class InitializeServiceCommand extends $Command<
  InitializeServiceCommandInput,
  InitializeServiceCommandOutput,
  MgnClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: InitializeServiceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MgnClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<InitializeServiceCommandInput, InitializeServiceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MgnClient";
    const commandName = "InitializeServiceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: InitializeServiceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: InitializeServiceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: InitializeServiceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1InitializeServiceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<InitializeServiceCommandOutput> {
    return deserializeAws_restJson1InitializeServiceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
