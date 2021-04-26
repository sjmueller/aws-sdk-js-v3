import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient.ts";
import { CheckDNSAvailabilityMessage, CheckDNSAvailabilityResultMessage } from "../models/models_0.ts";
import {
  deserializeAws_queryCheckDNSAvailabilityCommand,
  serializeAws_queryCheckDNSAvailabilityCommand,
} from "../protocols/Aws_query.ts";
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

export interface CheckDNSAvailabilityCommandInput extends CheckDNSAvailabilityMessage {}
export interface CheckDNSAvailabilityCommandOutput extends CheckDNSAvailabilityResultMessage, __MetadataBearer {}

/**
 * <p>Checks if the specified CNAME is available.</p>
 */
export class CheckDNSAvailabilityCommand extends $Command<
  CheckDNSAvailabilityCommandInput,
  CheckDNSAvailabilityCommandOutput,
  ElasticBeanstalkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CheckDNSAvailabilityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticBeanstalkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CheckDNSAvailabilityCommandInput, CheckDNSAvailabilityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "CheckDNSAvailabilityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CheckDNSAvailabilityMessage.filterSensitiveLog,
      outputFilterSensitiveLog: CheckDNSAvailabilityResultMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CheckDNSAvailabilityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCheckDNSAvailabilityCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CheckDNSAvailabilityCommandOutput> {
    return deserializeAws_queryCheckDNSAvailabilityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
