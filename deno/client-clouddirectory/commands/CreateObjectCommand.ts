import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient.ts";
import { CreateObjectRequest, CreateObjectResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreateObjectCommand,
  serializeAws_restJson1CreateObjectCommand,
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

export interface CreateObjectCommandInput extends CreateObjectRequest {}
export interface CreateObjectCommandOutput extends CreateObjectResponse, __MetadataBearer {}

/**
 * <p>Creates an object in a <a>Directory</a>. Additionally attaches the object to
 *       a parent, if a parent reference and <code>LinkName</code> is specified. An object is simply a
 *       collection of <a>Facet</a> attributes. You can also use this API call to create a
 *       policy object, if the facet from which you create the object is a policy facet. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, CreateObjectCommand } from "../../client-clouddirectory/mod.ts";
 * // const { CloudDirectoryClient, CreateObjectCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new CreateObjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateObjectCommandInput} for command's `input` shape.
 * @see {@link CreateObjectCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateObjectCommand extends $Command<
  CreateObjectCommandInput,
  CreateObjectCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateObjectCommandInput) {
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
  ): Handler<CreateObjectCommandInput, CreateObjectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudDirectoryClient";
    const commandName = "CreateObjectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateObjectRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateObjectResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateObjectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateObjectCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateObjectCommandOutput> {
    return deserializeAws_restJson1CreateObjectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
