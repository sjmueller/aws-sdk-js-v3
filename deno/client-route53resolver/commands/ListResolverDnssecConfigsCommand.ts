import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient.ts";
import { ListResolverDnssecConfigsRequest, ListResolverDnssecConfigsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListResolverDnssecConfigsCommand,
  serializeAws_json1_1ListResolverDnssecConfigsCommand,
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

export type ListResolverDnssecConfigsCommandInput = ListResolverDnssecConfigsRequest;
export type ListResolverDnssecConfigsCommandOutput = ListResolverDnssecConfigsResponse & __MetadataBearer;

/**
 * <p>Lists the configurations for DNSSEC validation that are associated with the current AWS account.</p>
 */
export class ListResolverDnssecConfigsCommand extends $Command<
  ListResolverDnssecConfigsCommandInput,
  ListResolverDnssecConfigsCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListResolverDnssecConfigsCommandInput) {
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
  ): Handler<ListResolverDnssecConfigsCommandInput, ListResolverDnssecConfigsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "ListResolverDnssecConfigsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListResolverDnssecConfigsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListResolverDnssecConfigsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListResolverDnssecConfigsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListResolverDnssecConfigsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListResolverDnssecConfigsCommandOutput> {
    return deserializeAws_json1_1ListResolverDnssecConfigsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
