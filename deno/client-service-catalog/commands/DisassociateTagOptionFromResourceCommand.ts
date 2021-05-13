import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient.ts";
import { DisassociateTagOptionFromResourceInput, DisassociateTagOptionFromResourceOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DisassociateTagOptionFromResourceCommand,
  serializeAws_json1_1DisassociateTagOptionFromResourceCommand,
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

export interface DisassociateTagOptionFromResourceCommandInput extends DisassociateTagOptionFromResourceInput {}
export interface DisassociateTagOptionFromResourceCommandOutput
  extends DisassociateTagOptionFromResourceOutput,
    __MetadataBearer {}

/**
 * <p>Disassociates the specified TagOption from the specified resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DisassociateTagOptionFromResourceCommand } from "../../client-service-catalog/mod.ts";
 * // const { ServiceCatalogClient, DisassociateTagOptionFromResourceCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DisassociateTagOptionFromResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateTagOptionFromResourceCommandInput} for command's `input` shape.
 * @see {@link DisassociateTagOptionFromResourceCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DisassociateTagOptionFromResourceCommand extends $Command<
  DisassociateTagOptionFromResourceCommandInput,
  DisassociateTagOptionFromResourceCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateTagOptionFromResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateTagOptionFromResourceCommandInput, DisassociateTagOptionFromResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "DisassociateTagOptionFromResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateTagOptionFromResourceInput.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateTagOptionFromResourceOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateTagOptionFromResourceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateTagOptionFromResourceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateTagOptionFromResourceCommandOutput> {
    return deserializeAws_json1_1DisassociateTagOptionFromResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
