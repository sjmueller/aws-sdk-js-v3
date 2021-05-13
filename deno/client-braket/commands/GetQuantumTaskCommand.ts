import { BraketClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BraketClient.ts";
import { GetQuantumTaskRequest, GetQuantumTaskResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetQuantumTaskCommand,
  serializeAws_restJson1GetQuantumTaskCommand,
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

export interface GetQuantumTaskCommandInput extends GetQuantumTaskRequest {}
export interface GetQuantumTaskCommandOutput extends GetQuantumTaskResponse, __MetadataBearer {}

/**
 * <p>Retrieves the specified quantum task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BraketClient, GetQuantumTaskCommand } from "../../client-braket/mod.ts";
 * // const { BraketClient, GetQuantumTaskCommand } = require("@aws-sdk/client-braket"); // CommonJS import
 * const client = new BraketClient(config);
 * const command = new GetQuantumTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetQuantumTaskCommandInput} for command's `input` shape.
 * @see {@link GetQuantumTaskCommandOutput} for command's `response` shape.
 * @see {@link BraketClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetQuantumTaskCommand extends $Command<
  GetQuantumTaskCommandInput,
  GetQuantumTaskCommandOutput,
  BraketClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetQuantumTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BraketClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetQuantumTaskCommandInput, GetQuantumTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BraketClient";
    const commandName = "GetQuantumTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetQuantumTaskRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetQuantumTaskResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetQuantumTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetQuantumTaskCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetQuantumTaskCommandOutput> {
    return deserializeAws_restJson1GetQuantumTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
