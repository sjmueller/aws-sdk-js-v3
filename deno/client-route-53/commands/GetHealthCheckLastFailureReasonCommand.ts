
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client.ts";
import { GetHealthCheckLastFailureReasonRequest, GetHealthCheckLastFailureReasonResponse } from "../models/models_0.ts";
import {
  deserializeAws_restXmlGetHealthCheckLastFailureReasonCommand,
  serializeAws_restXmlGetHealthCheckLastFailureReasonCommand,
} from "../protocols/Aws_restXml.ts";
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

export type GetHealthCheckLastFailureReasonCommandInput = GetHealthCheckLastFailureReasonRequest;
export type GetHealthCheckLastFailureReasonCommandOutput = GetHealthCheckLastFailureReasonResponse & __MetadataBearer;

export class GetHealthCheckLastFailureReasonCommand extends $Command<
  GetHealthCheckLastFailureReasonCommandInput,
  GetHealthCheckLastFailureReasonCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetHealthCheckLastFailureReasonCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetHealthCheckLastFailureReasonCommandInput, GetHealthCheckLastFailureReasonCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "GetHealthCheckLastFailureReasonCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetHealthCheckLastFailureReasonRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetHealthCheckLastFailureReasonResponse.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetHealthCheckLastFailureReasonCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlGetHealthCheckLastFailureReasonCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetHealthCheckLastFailureReasonCommandOutput> {
    return deserializeAws_restXmlGetHealthCheckLastFailureReasonCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
