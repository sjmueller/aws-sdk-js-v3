import {
  ServerlessApplicationRepositoryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ServerlessApplicationRepositoryClient.ts";
import { CreateCloudFormationChangeSetRequest, CreateCloudFormationChangeSetResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreateCloudFormationChangeSetCommand,
  serializeAws_restJson1CreateCloudFormationChangeSetCommand,
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

export interface CreateCloudFormationChangeSetCommandInput extends CreateCloudFormationChangeSetRequest {}
export interface CreateCloudFormationChangeSetCommandOutput
  extends CreateCloudFormationChangeSetResponse,
    __MetadataBearer {}

/**
 * <p>Creates an AWS CloudFormation change set for the given application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServerlessApplicationRepositoryClient, CreateCloudFormationChangeSetCommand } from "../../client-serverlessapplicationrepository/mod.ts";
 * // const { ServerlessApplicationRepositoryClient, CreateCloudFormationChangeSetCommand } = require("@aws-sdk/client-serverlessapplicationrepository"); // CommonJS import
 * const client = new ServerlessApplicationRepositoryClient(config);
 * const command = new CreateCloudFormationChangeSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCloudFormationChangeSetCommandInput} for command's `input` shape.
 * @see {@link CreateCloudFormationChangeSetCommandOutput} for command's `response` shape.
 * @see {@link ServerlessApplicationRepositoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateCloudFormationChangeSetCommand extends $Command<
  CreateCloudFormationChangeSetCommandInput,
  CreateCloudFormationChangeSetCommandOutput,
  ServerlessApplicationRepositoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateCloudFormationChangeSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServerlessApplicationRepositoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateCloudFormationChangeSetCommandInput, CreateCloudFormationChangeSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServerlessApplicationRepositoryClient";
    const commandName = "CreateCloudFormationChangeSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCloudFormationChangeSetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateCloudFormationChangeSetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateCloudFormationChangeSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateCloudFormationChangeSetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateCloudFormationChangeSetCommandOutput> {
    return deserializeAws_restJson1CreateCloudFormationChangeSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
