import {
  ElastiCacheClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ElastiCacheClient.ts";
import {
  DescribeReservedCacheNodesOfferingsMessage,
  ReservedCacheNodesOfferingMessage
} from "../models/index.ts";
import {
  deserializeAws_queryDescribeReservedCacheNodesOfferingsCommand,
  serializeAws_queryDescribeReservedCacheNodesOfferingsCommand
} from "../protocols/Aws_query.ts";
import { getSerdePlugin } from "../../middleware-serde/mod.ts";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "../../protocol-http/mod.ts";
import { Command as $Command } from "../../smithy-client/mod.ts";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext
} from "../../types/mod.ts";

export type DescribeReservedCacheNodesOfferingsCommandInput = DescribeReservedCacheNodesOfferingsMessage;
export type DescribeReservedCacheNodesOfferingsCommandOutput = ReservedCacheNodesOfferingMessage &
  __MetadataBearer;

export class DescribeReservedCacheNodesOfferingsCommand extends $Command<
  DescribeReservedCacheNodesOfferingsCommandInput,
  DescribeReservedCacheNodesOfferingsCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeReservedCacheNodesOfferingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElastiCacheClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeReservedCacheNodesOfferingsCommandInput,
    DescribeReservedCacheNodesOfferingsCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeReservedCacheNodesOfferingsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeReservedCacheNodesOfferingsCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeReservedCacheNodesOfferingsCommandOutput> {
    return deserializeAws_queryDescribeReservedCacheNodesOfferingsCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
