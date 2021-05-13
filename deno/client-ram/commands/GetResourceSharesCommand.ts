import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient.ts";
import { GetResourceSharesRequest, GetResourceSharesResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetResourceSharesCommand,
  serializeAws_restJson1GetResourceSharesCommand,
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

export interface GetResourceSharesCommandInput extends GetResourceSharesRequest {}
export interface GetResourceSharesCommandOutput extends GetResourceSharesResponse, __MetadataBearer {}

/**
 * <p>Gets the resource shares that you own or the resource shares that are shared with you.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, GetResourceSharesCommand } from "../../client-ram/mod.ts";
 * // const { RAMClient, GetResourceSharesCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new GetResourceSharesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResourceSharesCommandInput} for command's `input` shape.
 * @see {@link GetResourceSharesCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetResourceSharesCommand extends $Command<
  GetResourceSharesCommandInput,
  GetResourceSharesCommandOutput,
  RAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetResourceSharesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetResourceSharesCommandInput, GetResourceSharesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RAMClient";
    const commandName = "GetResourceSharesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetResourceSharesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetResourceSharesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetResourceSharesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetResourceSharesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetResourceSharesCommandOutput> {
    return deserializeAws_restJson1GetResourceSharesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
