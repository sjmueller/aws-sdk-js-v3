import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient.ts";
import { CreateVirtualServiceInput, CreateVirtualServiceOutput } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreateVirtualServiceCommand,
  serializeAws_restJson1CreateVirtualServiceCommand,
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

export interface CreateVirtualServiceCommandInput extends CreateVirtualServiceInput {}
export interface CreateVirtualServiceCommandOutput extends CreateVirtualServiceOutput, __MetadataBearer {}

/**
 * <p>Creates a virtual service within a service mesh.</p>
 *          <p>A virtual service is an abstraction of a real service that is provided by a virtual node
 *          directly or indirectly by means of a virtual router. Dependent services call your virtual
 *          service by its <code>virtualServiceName</code>, and those requests are routed to the
 *          virtual node or virtual router that is specified as the provider for the virtual
 *          service.</p>
 *          <p>For more information about virtual services, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_services.html">Virtual services</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, CreateVirtualServiceCommand } from "../../client-app-mesh/mod.ts";
 * // const { AppMeshClient, CreateVirtualServiceCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new CreateVirtualServiceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVirtualServiceCommandInput} for command's `input` shape.
 * @see {@link CreateVirtualServiceCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateVirtualServiceCommand extends $Command<
  CreateVirtualServiceCommandInput,
  CreateVirtualServiceCommandOutput,
  AppMeshClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateVirtualServiceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppMeshClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateVirtualServiceCommandInput, CreateVirtualServiceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppMeshClient";
    const commandName = "CreateVirtualServiceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateVirtualServiceInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateVirtualServiceOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateVirtualServiceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateVirtualServiceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateVirtualServiceCommandOutput> {
    return deserializeAws_restJson1CreateVirtualServiceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
