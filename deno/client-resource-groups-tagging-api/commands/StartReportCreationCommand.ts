import {
  ResourceGroupsTaggingAPIClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ResourceGroupsTaggingAPIClient.ts";
import { StartReportCreationInput, StartReportCreationOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1StartReportCreationCommand,
  serializeAws_json1_1StartReportCreationCommand,
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

export type StartReportCreationCommandInput = StartReportCreationInput;
export type StartReportCreationCommandOutput = StartReportCreationOutput & __MetadataBearer;

/**
 * <p>Generates a report that lists all tagged resources in accounts across your
 *             organization and tells whether each resource is compliant with the effective tag policy.
 *             Compliance data is refreshed daily. </p>
 *         <p>The generated report is saved to the following location:</p>
 *         <p>
 *             <code>s3://example-bucket/AwsTagPolicies/o-exampleorgid/YYYY-MM-ddTHH:mm:ssZ/report.csv</code>
 *          </p>
 *         <p>You can call this operation only from the organization's master account and from the us-east-1 Region.</p>
 */
export class StartReportCreationCommand extends $Command<
  StartReportCreationCommandInput,
  StartReportCreationCommandOutput,
  ResourceGroupsTaggingAPIClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartReportCreationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResourceGroupsTaggingAPIClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartReportCreationCommandInput, StartReportCreationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResourceGroupsTaggingAPIClient";
    const commandName = "StartReportCreationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartReportCreationInput.filterSensitiveLog,
      outputFilterSensitiveLog: StartReportCreationOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartReportCreationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartReportCreationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartReportCreationCommandOutput> {
    return deserializeAws_json1_1StartReportCreationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
