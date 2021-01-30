import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient.ts";
import {
  ListDistributionsByOriginRequestPolicyIdRequest,
  ListDistributionsByOriginRequestPolicyIdResult,
} from "../models/models_1.ts";
import {
  deserializeAws_restXmlListDistributionsByOriginRequestPolicyIdCommand,
  serializeAws_restXmlListDistributionsByOriginRequestPolicyIdCommand,
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

export type ListDistributionsByOriginRequestPolicyIdCommandInput = ListDistributionsByOriginRequestPolicyIdRequest;
export type ListDistributionsByOriginRequestPolicyIdCommandOutput = ListDistributionsByOriginRequestPolicyIdResult &
  __MetadataBearer;

/**
 * <p>Gets a list of distribution IDs for distributions that have a cache behavior that’s
 * 			associated with the specified origin request policy.</p>
 * 		       <p>You can optionally specify the maximum number of items to receive in the response. If
 * 			the total number of items in the list exceeds the maximum that you specify, or the
 * 			default maximum, the response is paginated. To get the next page of items, send a
 * 			subsequent request that specifies the <code>NextMarker</code> value from the current
 * 			response as the <code>Marker</code> value in the subsequent request.</p>
 */
export class ListDistributionsByOriginRequestPolicyIdCommand extends $Command<
  ListDistributionsByOriginRequestPolicyIdCommandInput,
  ListDistributionsByOriginRequestPolicyIdCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDistributionsByOriginRequestPolicyIdCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListDistributionsByOriginRequestPolicyIdCommandInput,
    ListDistributionsByOriginRequestPolicyIdCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "ListDistributionsByOriginRequestPolicyIdCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDistributionsByOriginRequestPolicyIdRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDistributionsByOriginRequestPolicyIdResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListDistributionsByOriginRequestPolicyIdCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlListDistributionsByOriginRequestPolicyIdCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListDistributionsByOriginRequestPolicyIdCommandOutput> {
    return deserializeAws_restXmlListDistributionsByOriginRequestPolicyIdCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
