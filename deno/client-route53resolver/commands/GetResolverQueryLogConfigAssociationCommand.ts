
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient.ts";
import {
  GetResolverQueryLogConfigAssociationRequest,
  GetResolverQueryLogConfigAssociationResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetResolverQueryLogConfigAssociationCommand,
  serializeAws_json1_1GetResolverQueryLogConfigAssociationCommand,
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

export type GetResolverQueryLogConfigAssociationCommandInput = GetResolverQueryLogConfigAssociationRequest;
export type GetResolverQueryLogConfigAssociationCommandOutput = GetResolverQueryLogConfigAssociationResponse &
  __MetadataBearer;

export class GetResolverQueryLogConfigAssociationCommand extends $Command<
  GetResolverQueryLogConfigAssociationCommandInput,
  GetResolverQueryLogConfigAssociationCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetResolverQueryLogConfigAssociationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ResolverClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetResolverQueryLogConfigAssociationCommandInput, GetResolverQueryLogConfigAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "GetResolverQueryLogConfigAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetResolverQueryLogConfigAssociationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetResolverQueryLogConfigAssociationResponse.filterSensitiveLog,
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
    input: GetResolverQueryLogConfigAssociationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetResolverQueryLogConfigAssociationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetResolverQueryLogConfigAssociationCommandOutput> {
    return deserializeAws_json1_1GetResolverQueryLogConfigAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
