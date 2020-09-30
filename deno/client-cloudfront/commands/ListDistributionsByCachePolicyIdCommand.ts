
import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient.ts";
import { ListDistributionsByCachePolicyIdRequest, ListDistributionsByCachePolicyIdResult } from "../models/models_0.ts";
import {
  deserializeAws_restXmlListDistributionsByCachePolicyIdCommand,
  serializeAws_restXmlListDistributionsByCachePolicyIdCommand,
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

export type ListDistributionsByCachePolicyIdCommandInput = ListDistributionsByCachePolicyIdRequest;
export type ListDistributionsByCachePolicyIdCommandOutput = ListDistributionsByCachePolicyIdResult & __MetadataBearer;

export class ListDistributionsByCachePolicyIdCommand extends $Command<
  ListDistributionsByCachePolicyIdCommandInput,
  ListDistributionsByCachePolicyIdCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDistributionsByCachePolicyIdCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDistributionsByCachePolicyIdCommandInput, ListDistributionsByCachePolicyIdCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ListDistributionsByCachePolicyIdRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDistributionsByCachePolicyIdResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListDistributionsByCachePolicyIdCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlListDistributionsByCachePolicyIdCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListDistributionsByCachePolicyIdCommandOutput> {
    return deserializeAws_restXmlListDistributionsByCachePolicyIdCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
