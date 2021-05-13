import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient.ts";
import { CreateAgentRequest, CreateAgentResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreateAgentCommand,
  serializeAws_json1_1CreateAgentCommand,
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

export interface CreateAgentCommandInput extends CreateAgentRequest {}
export interface CreateAgentCommandOutput extends CreateAgentResponse, __MetadataBearer {}

/**
 * <p>Activates an AWS DataSync agent that you have deployed on your host. The activation
 *       process associates your agent with your account. In the activation process, you specify
 *       information such as the AWS Region that you want to activate the agent in. You activate the
 *       agent in the AWS Region where your target locations (in Amazon S3 or Amazon EFS) reside. Your
 *       tasks are created in this AWS Region.</p>
 *          <p>You can activate the agent in a VPC (virtual private cloud) or provide the agent access to
 *       a VPC endpoint so you can run tasks without going over the public internet.</p>
 *          <p>You can use an agent for more than one location. If a task uses multiple agents, all of
 *       them need to have status AVAILABLE for the task to run. If you use multiple agents for a
 *       source location, the status of all the agents must be AVAILABLE for the task to run. </p>
 *
 *
 *          <p>Agents are automatically updated by AWS on a regular basis, using a mechanism that
 *       ensures minimal interruption to your tasks.</p>
 *          <p></p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CreateAgentCommand } from "../../client-datasync/mod.ts";
 * // const { DataSyncClient, CreateAgentCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new CreateAgentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAgentCommandInput} for command's `input` shape.
 * @see {@link CreateAgentCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateAgentCommand extends $Command<
  CreateAgentCommandInput,
  CreateAgentCommandOutput,
  DataSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateAgentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAgentCommandInput, CreateAgentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "CreateAgentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAgentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateAgentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAgentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateAgentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAgentCommandOutput> {
    return deserializeAws_json1_1CreateAgentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
