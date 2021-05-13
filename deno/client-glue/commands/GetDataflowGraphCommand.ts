import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient.ts";
import { GetDataflowGraphRequest, GetDataflowGraphResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetDataflowGraphCommand,
  serializeAws_json1_1GetDataflowGraphCommand,
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

export interface GetDataflowGraphCommandInput extends GetDataflowGraphRequest {}
export interface GetDataflowGraphCommandOutput extends GetDataflowGraphResponse, __MetadataBearer {}

/**
 * <p>Transforms a Python script into a directed acyclic graph (DAG). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetDataflowGraphCommand } from "../../client-glue/mod.ts";
 * // const { GlueClient, GetDataflowGraphCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetDataflowGraphCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDataflowGraphCommandInput} for command's `input` shape.
 * @see {@link GetDataflowGraphCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetDataflowGraphCommand extends $Command<
  GetDataflowGraphCommandInput,
  GetDataflowGraphCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDataflowGraphCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDataflowGraphCommandInput, GetDataflowGraphCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetDataflowGraphCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDataflowGraphRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDataflowGraphResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDataflowGraphCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetDataflowGraphCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDataflowGraphCommandOutput> {
    return deserializeAws_json1_1GetDataflowGraphCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
