
import {
  MigrationHubConfigClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubConfigClient.ts";
import { DescribeHomeRegionControlsRequest, DescribeHomeRegionControlsResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeHomeRegionControlsCommand,
  serializeAws_json1_1DescribeHomeRegionControlsCommand,
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

export type DescribeHomeRegionControlsCommandInput = DescribeHomeRegionControlsRequest;
export type DescribeHomeRegionControlsCommandOutput = DescribeHomeRegionControlsResult & __MetadataBearer;

export class DescribeHomeRegionControlsCommand extends $Command<
  DescribeHomeRegionControlsCommandInput,
  DescribeHomeRegionControlsCommandOutput,
  MigrationHubConfigClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeHomeRegionControlsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MigrationHubConfigClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeHomeRegionControlsCommandInput, DescribeHomeRegionControlsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubConfigClient";
    const commandName = "DescribeHomeRegionControlsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeHomeRegionControlsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeHomeRegionControlsResult.filterSensitiveLog,
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

  private serialize(input: DescribeHomeRegionControlsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeHomeRegionControlsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeHomeRegionControlsCommandOutput> {
    return deserializeAws_json1_1DescribeHomeRegionControlsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
