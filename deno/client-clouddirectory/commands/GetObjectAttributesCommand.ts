import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient.ts";
import { GetObjectAttributesRequest, GetObjectAttributesResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetObjectAttributesCommand,
  serializeAws_restJson1GetObjectAttributesCommand,
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

export interface GetObjectAttributesCommandInput extends GetObjectAttributesRequest {}
export interface GetObjectAttributesCommandOutput extends GetObjectAttributesResponse, __MetadataBearer {}

/**
 * <p>Retrieves attributes within a facet that are associated with an object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, GetObjectAttributesCommand } from "../../client-clouddirectory/mod.ts";
 * // const { CloudDirectoryClient, GetObjectAttributesCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new GetObjectAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetObjectAttributesCommandInput} for command's `input` shape.
 * @see {@link GetObjectAttributesCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetObjectAttributesCommand extends $Command<
  GetObjectAttributesCommandInput,
  GetObjectAttributesCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetObjectAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetObjectAttributesCommandInput, GetObjectAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudDirectoryClient";
    const commandName = "GetObjectAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetObjectAttributesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetObjectAttributesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetObjectAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetObjectAttributesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetObjectAttributesCommandOutput> {
    return deserializeAws_restJson1GetObjectAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
