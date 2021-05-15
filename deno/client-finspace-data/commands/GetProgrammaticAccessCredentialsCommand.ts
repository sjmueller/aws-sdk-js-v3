import { FinspaceDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceDataClient.ts";
import { GetProgrammaticAccessCredentialsRequest, GetProgrammaticAccessCredentialsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetProgrammaticAccessCredentialsCommand,
  serializeAws_restJson1GetProgrammaticAccessCredentialsCommand,
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

export interface GetProgrammaticAccessCredentialsCommandInput extends GetProgrammaticAccessCredentialsRequest {}
export interface GetProgrammaticAccessCredentialsCommandOutput
  extends GetProgrammaticAccessCredentialsResponse,
    __MetadataBearer {}

/**
 * <p>Request programmatic credentials to use with Habanero SDK.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, GetProgrammaticAccessCredentialsCommand } from "../../client-finspace-data/mod.ts";
 * // const { FinspaceDataClient, GetProgrammaticAccessCredentialsCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * const client = new FinspaceDataClient(config);
 * const command = new GetProgrammaticAccessCredentialsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetProgrammaticAccessCredentialsCommandInput} for command's `input` shape.
 * @see {@link GetProgrammaticAccessCredentialsCommandOutput} for command's `response` shape.
 * @see {@link FinspaceDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetProgrammaticAccessCredentialsCommand extends $Command<
  GetProgrammaticAccessCredentialsCommandInput,
  GetProgrammaticAccessCredentialsCommandOutput,
  FinspaceDataClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetProgrammaticAccessCredentialsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FinspaceDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetProgrammaticAccessCredentialsCommandInput, GetProgrammaticAccessCredentialsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FinspaceDataClient";
    const commandName = "GetProgrammaticAccessCredentialsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetProgrammaticAccessCredentialsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetProgrammaticAccessCredentialsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetProgrammaticAccessCredentialsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetProgrammaticAccessCredentialsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetProgrammaticAccessCredentialsCommandOutput> {
    return deserializeAws_restJson1GetProgrammaticAccessCredentialsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
