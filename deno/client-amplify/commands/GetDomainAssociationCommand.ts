import { AmplifyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyClient.ts";
import { GetDomainAssociationRequest, GetDomainAssociationResult } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetDomainAssociationCommand,
  serializeAws_restJson1GetDomainAssociationCommand,
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

export interface GetDomainAssociationCommandInput extends GetDomainAssociationRequest {}
export interface GetDomainAssociationCommandOutput extends GetDomainAssociationResult, __MetadataBearer {}

/**
 * <p> Returns the domain information for an Amplify app. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, GetDomainAssociationCommand } from "../../client-amplify/mod.ts";
 * // const { AmplifyClient, GetDomainAssociationCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const command = new GetDomainAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDomainAssociationCommandInput} for command's `input` shape.
 * @see {@link GetDomainAssociationCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetDomainAssociationCommand extends $Command<
  GetDomainAssociationCommandInput,
  GetDomainAssociationCommandOutput,
  AmplifyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDomainAssociationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDomainAssociationCommandInput, GetDomainAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyClient";
    const commandName = "GetDomainAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDomainAssociationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDomainAssociationResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDomainAssociationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetDomainAssociationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDomainAssociationCommandOutput> {
    return deserializeAws_restJson1GetDomainAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
