import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient.ts";
import { ListPiiEntitiesDetectionJobsRequest, ListPiiEntitiesDetectionJobsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListPiiEntitiesDetectionJobsCommand,
  serializeAws_json1_1ListPiiEntitiesDetectionJobsCommand,
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

export interface ListPiiEntitiesDetectionJobsCommandInput extends ListPiiEntitiesDetectionJobsRequest {}
export interface ListPiiEntitiesDetectionJobsCommandOutput
  extends ListPiiEntitiesDetectionJobsResponse,
    __MetadataBearer {}

/**
 * <p>Gets a list of the PII entity detection jobs that you have submitted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, ListPiiEntitiesDetectionJobsCommand } from "../../client-comprehend/mod.ts";
 * // const { ComprehendClient, ListPiiEntitiesDetectionJobsCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new ListPiiEntitiesDetectionJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPiiEntitiesDetectionJobsCommandInput} for command's `input` shape.
 * @see {@link ListPiiEntitiesDetectionJobsCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListPiiEntitiesDetectionJobsCommand extends $Command<
  ListPiiEntitiesDetectionJobsCommandInput,
  ListPiiEntitiesDetectionJobsCommandOutput,
  ComprehendClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPiiEntitiesDetectionJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPiiEntitiesDetectionJobsCommandInput, ListPiiEntitiesDetectionJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "ListPiiEntitiesDetectionJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPiiEntitiesDetectionJobsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListPiiEntitiesDetectionJobsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPiiEntitiesDetectionJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListPiiEntitiesDetectionJobsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListPiiEntitiesDetectionJobsCommandOutput> {
    return deserializeAws_json1_1ListPiiEntitiesDetectionJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
