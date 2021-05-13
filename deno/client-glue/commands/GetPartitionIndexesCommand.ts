import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient.ts";
import { GetPartitionIndexesRequest, GetPartitionIndexesResponse } from "../models/models_1.ts";
import {
  deserializeAws_json1_1GetPartitionIndexesCommand,
  serializeAws_json1_1GetPartitionIndexesCommand,
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

export interface GetPartitionIndexesCommandInput extends GetPartitionIndexesRequest {}
export interface GetPartitionIndexesCommandOutput extends GetPartitionIndexesResponse, __MetadataBearer {}

/**
 * <p>Retrieves the partition indexes associated with a table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetPartitionIndexesCommand } from "../../client-glue/mod.ts";
 * // const { GlueClient, GetPartitionIndexesCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetPartitionIndexesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPartitionIndexesCommandInput} for command's `input` shape.
 * @see {@link GetPartitionIndexesCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetPartitionIndexesCommand extends $Command<
  GetPartitionIndexesCommandInput,
  GetPartitionIndexesCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetPartitionIndexesCommandInput) {
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
  ): Handler<GetPartitionIndexesCommandInput, GetPartitionIndexesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetPartitionIndexesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetPartitionIndexesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetPartitionIndexesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetPartitionIndexesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetPartitionIndexesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPartitionIndexesCommandOutput> {
    return deserializeAws_json1_1GetPartitionIndexesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
