import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient.ts";
import { GetServiceGraphRequest, GetServiceGraphResult } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetServiceGraphCommand,
  serializeAws_restJson1GetServiceGraphCommand,
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

export type GetServiceGraphCommandInput = GetServiceGraphRequest;
export type GetServiceGraphCommandOutput = GetServiceGraphResult & __MetadataBearer;

/**
 * <p>Retrieves a document that describes services that process incoming requests, and
 *       downstream services that they call as a result. Root services process incoming requests and
 *       make calls to downstream services. Root services are applications that use the <a href="https://docs.aws.amazon.com/xray/index.html">AWS X-Ray SDK</a>.
 *       Downstream services can be other applications, AWS resources, HTTP web APIs, or SQL
 *       databases.</p>
 */
export class GetServiceGraphCommand extends $Command<
  GetServiceGraphCommandInput,
  GetServiceGraphCommandOutput,
  XRayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetServiceGraphCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: XRayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetServiceGraphCommandInput, GetServiceGraphCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "XRayClient";
    const commandName = "GetServiceGraphCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetServiceGraphRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetServiceGraphResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetServiceGraphCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetServiceGraphCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetServiceGraphCommandOutput> {
    return deserializeAws_restJson1GetServiceGraphCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
