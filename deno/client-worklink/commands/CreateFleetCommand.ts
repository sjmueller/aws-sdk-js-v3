import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient.ts";
import { CreateFleetRequest, CreateFleetResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreateFleetCommand,
  serializeAws_restJson1CreateFleetCommand,
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

export interface CreateFleetCommandInput extends CreateFleetRequest {}
export interface CreateFleetCommandOutput extends CreateFleetResponse, __MetadataBearer {}

/**
 * <p>Creates a fleet. A fleet consists of resources and the configuration that delivers
 *             associated websites to authorized users who download and set up the Amazon WorkLink app.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, CreateFleetCommand } from "../../client-worklink/mod.ts";
 * // const { WorkLinkClient, CreateFleetCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new CreateFleetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFleetCommandInput} for command's `input` shape.
 * @see {@link CreateFleetCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateFleetCommand extends $Command<
  CreateFleetCommandInput,
  CreateFleetCommandOutput,
  WorkLinkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateFleetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkLinkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateFleetCommandInput, CreateFleetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkLinkClient";
    const commandName = "CreateFleetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateFleetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateFleetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateFleetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateFleetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateFleetCommandOutput> {
    return deserializeAws_restJson1CreateFleetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
