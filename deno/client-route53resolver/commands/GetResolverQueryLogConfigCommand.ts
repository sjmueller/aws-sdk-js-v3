import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient.ts";
import { GetResolverQueryLogConfigRequest, GetResolverQueryLogConfigResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetResolverQueryLogConfigCommand,
  serializeAws_json1_1GetResolverQueryLogConfigCommand,
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

export interface GetResolverQueryLogConfigCommandInput extends GetResolverQueryLogConfigRequest {}
export interface GetResolverQueryLogConfigCommandOutput extends GetResolverQueryLogConfigResponse, __MetadataBearer {}

/**
 * <p>Gets information about a specified Resolver query logging configuration, such as the number of VPCs that the configuration
 * 			is logging queries for and the location that logs are sent to. </p>
 */
export class GetResolverQueryLogConfigCommand extends $Command<
  GetResolverQueryLogConfigCommandInput,
  GetResolverQueryLogConfigCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetResolverQueryLogConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ResolverClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetResolverQueryLogConfigCommandInput, GetResolverQueryLogConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "GetResolverQueryLogConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetResolverQueryLogConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetResolverQueryLogConfigResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetResolverQueryLogConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetResolverQueryLogConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetResolverQueryLogConfigCommandOutput> {
    return deserializeAws_json1_1GetResolverQueryLogConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
