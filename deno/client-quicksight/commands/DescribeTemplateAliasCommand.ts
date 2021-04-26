import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient.ts";
import { DescribeTemplateAliasRequest, DescribeTemplateAliasResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeTemplateAliasCommand,
  serializeAws_restJson1DescribeTemplateAliasCommand,
} from "../protocols/Aws_restJson1.ts";
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

export interface DescribeTemplateAliasCommandInput extends DescribeTemplateAliasRequest {}
export interface DescribeTemplateAliasCommandOutput extends DescribeTemplateAliasResponse, __MetadataBearer {}

/**
 * <p>Describes the template alias for a template.</p>
 */
export class DescribeTemplateAliasCommand extends $Command<
  DescribeTemplateAliasCommandInput,
  DescribeTemplateAliasCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeTemplateAliasCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTemplateAliasCommandInput, DescribeTemplateAliasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "DescribeTemplateAliasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTemplateAliasRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeTemplateAliasResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeTemplateAliasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeTemplateAliasCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTemplateAliasCommandOutput> {
    return deserializeAws_restJson1DescribeTemplateAliasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
