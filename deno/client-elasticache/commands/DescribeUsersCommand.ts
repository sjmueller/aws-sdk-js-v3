import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient.ts";
import { DescribeUsersMessage, DescribeUsersResult } from "../models/models_0.ts";
import {
  deserializeAws_queryDescribeUsersCommand,
  serializeAws_queryDescribeUsersCommand,
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

export interface DescribeUsersCommandInput extends DescribeUsersMessage {}
export interface DescribeUsersCommandOutput extends DescribeUsersResult, __MetadataBearer {}

/**
 * <p>Returns a list of users.</p>
 */
export class DescribeUsersCommand extends $Command<
  DescribeUsersCommandInput,
  DescribeUsersCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeUsersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElastiCacheClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeUsersCommandInput, DescribeUsersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DescribeUsersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeUsersMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeUsersResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeUsersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeUsersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeUsersCommandOutput> {
    return deserializeAws_queryDescribeUsersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
