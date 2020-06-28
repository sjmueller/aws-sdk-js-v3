import {
  ElastiCacheClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ElastiCacheClient.ts";
import {
  CacheParameterGroupsMessage,
  DescribeCacheParameterGroupsMessage
} from "../models/index.ts";
import {
  deserializeAws_queryDescribeCacheParameterGroupsCommand,
  serializeAws_queryDescribeCacheParameterGroupsCommand
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

export type DescribeCacheParameterGroupsCommandInput = DescribeCacheParameterGroupsMessage;
export type DescribeCacheParameterGroupsCommandOutput = CacheParameterGroupsMessage &
  __MetadataBearer;

export class DescribeCacheParameterGroupsCommand extends $Command<
  DescribeCacheParameterGroupsCommandInput,
  DescribeCacheParameterGroupsCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeCacheParameterGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElastiCacheClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeCacheParameterGroupsCommandInput,
    DescribeCacheParameterGroupsCommandOutput
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
    input: DescribeCacheParameterGroupsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeCacheParameterGroupsCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeCacheParameterGroupsCommandOutput> {
    return deserializeAws_queryDescribeCacheParameterGroupsCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
