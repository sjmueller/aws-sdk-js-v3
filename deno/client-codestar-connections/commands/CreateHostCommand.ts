import {
  CodeStarConnectionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodeStarConnectionsClient.ts";
import { CreateHostInput, CreateHostOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_0CreateHostCommand,
  serializeAws_json1_0CreateHostCommand,
} from "../protocols/Aws_json1_0.ts";
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

export interface CreateHostCommandInput extends CreateHostInput {}
export interface CreateHostCommandOutput extends CreateHostOutput, __MetadataBearer {}

/**
 * <p>Creates a resource that represents the infrastructure where a third-party provider is
 *       installed. The host is used when you create connections to an installed third-party provider
 *       type, such as GitHub Enterprise Server. You create one host for all connections to that
 *       provider.</p>
 *          <note>
 *             <p>A host created through the CLI or the SDK is in `PENDING` status by
 *         default. You can make its status `AVAILABLE` by setting up the host in the console.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarConnectionsClient, CreateHostCommand } from "../../client-codestar-connections/mod.ts";
 * // const { CodeStarConnectionsClient, CreateHostCommand } = require("@aws-sdk/client-codestar-connections"); // CommonJS import
 * const client = new CodeStarConnectionsClient(config);
 * const command = new CreateHostCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateHostCommandInput} for command's `input` shape.
 * @see {@link CreateHostCommandOutput} for command's `response` shape.
 * @see {@link CodeStarConnectionsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateHostCommand extends $Command<
  CreateHostCommandInput,
  CreateHostCommandOutput,
  CodeStarConnectionsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateHostCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeStarConnectionsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateHostCommandInput, CreateHostCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeStarConnectionsClient";
    const commandName = "CreateHostCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateHostInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateHostOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateHostCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0CreateHostCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateHostCommandOutput> {
    return deserializeAws_json1_0CreateHostCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
