import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient.ts";
import {
  DescribeReplicationConfigurationTemplatesRequest,
  DescribeReplicationConfigurationTemplatesResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeReplicationConfigurationTemplatesCommand,
  serializeAws_restJson1DescribeReplicationConfigurationTemplatesCommand,
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

export type DescribeReplicationConfigurationTemplatesCommandInput = DescribeReplicationConfigurationTemplatesRequest;
export type DescribeReplicationConfigurationTemplatesCommandOutput = DescribeReplicationConfigurationTemplatesResponse &
  __MetadataBearer;

/**
 * <p>Lists all ReplicationConfigurationTemplates, filtered by Source Server IDs.</p>
 */
export class DescribeReplicationConfigurationTemplatesCommand extends $Command<
  DescribeReplicationConfigurationTemplatesCommandInput,
  DescribeReplicationConfigurationTemplatesCommandOutput,
  MgnClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeReplicationConfigurationTemplatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MgnClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeReplicationConfigurationTemplatesCommandInput,
    DescribeReplicationConfigurationTemplatesCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MgnClient";
    const commandName = "DescribeReplicationConfigurationTemplatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeReplicationConfigurationTemplatesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeReplicationConfigurationTemplatesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeReplicationConfigurationTemplatesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeReplicationConfigurationTemplatesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeReplicationConfigurationTemplatesCommandOutput> {
    return deserializeAws_restJson1DescribeReplicationConfigurationTemplatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
