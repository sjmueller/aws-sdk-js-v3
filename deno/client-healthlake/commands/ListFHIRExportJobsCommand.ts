import { HealthLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthLakeClient.ts";
import { ListFHIRExportJobsRequest, ListFHIRExportJobsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_0ListFHIRExportJobsCommand,
  serializeAws_json1_0ListFHIRExportJobsCommand,
} from "../protocols/Aws_json1_0.ts";
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

export interface ListFHIRExportJobsCommandInput extends ListFHIRExportJobsRequest {}
export interface ListFHIRExportJobsCommandOutput extends ListFHIRExportJobsResponse, __MetadataBearer {}

/**
 * <p>
 *             Lists all FHIR export jobs associated with an account and their statuses.
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, ListFHIRExportJobsCommand } from "../../client-healthlake/mod.ts";
 * // const { HealthLakeClient, ListFHIRExportJobsCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * const client = new HealthLakeClient(config);
 * const command = new ListFHIRExportJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFHIRExportJobsCommandInput} for command's `input` shape.
 * @see {@link ListFHIRExportJobsCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListFHIRExportJobsCommand extends $Command<
  ListFHIRExportJobsCommandInput,
  ListFHIRExportJobsCommandOutput,
  HealthLakeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListFHIRExportJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: HealthLakeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListFHIRExportJobsCommandInput, ListFHIRExportJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthLakeClient";
    const commandName = "ListFHIRExportJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListFHIRExportJobsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListFHIRExportJobsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListFHIRExportJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0ListFHIRExportJobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListFHIRExportJobsCommandOutput> {
    return deserializeAws_json1_0ListFHIRExportJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
