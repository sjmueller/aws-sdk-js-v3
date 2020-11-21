
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient.ts";
import { DescribeRdsDbInstancesRequest, DescribeRdsDbInstancesResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeRdsDbInstancesCommand,
  serializeAws_json1_1DescribeRdsDbInstancesCommand,
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

export type DescribeRdsDbInstancesCommandInput = DescribeRdsDbInstancesRequest;
export type DescribeRdsDbInstancesCommandOutput = DescribeRdsDbInstancesResult & __MetadataBearer;

export class DescribeRdsDbInstancesCommand extends $Command<
  DescribeRdsDbInstancesCommandInput,
  DescribeRdsDbInstancesCommandOutput,
  OpsWorksClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeRdsDbInstancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpsWorksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeRdsDbInstancesCommandInput, DescribeRdsDbInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksClient";
    const commandName = "DescribeRdsDbInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeRdsDbInstancesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeRdsDbInstancesResult.filterSensitiveLog,
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

  private serialize(input: DescribeRdsDbInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeRdsDbInstancesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeRdsDbInstancesCommandOutput> {
    return deserializeAws_json1_1DescribeRdsDbInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
