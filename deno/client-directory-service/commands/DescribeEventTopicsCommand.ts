import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient.ts";
import { DescribeEventTopicsRequest, DescribeEventTopicsResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeEventTopicsCommand,
  serializeAws_json1_1DescribeEventTopicsCommand,
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

export interface DescribeEventTopicsCommandInput extends DescribeEventTopicsRequest {}
export interface DescribeEventTopicsCommandOutput extends DescribeEventTopicsResult, __MetadataBearer {}

/**
 * <p>Obtains information about which SNS topics receive status messages from the specified directory.</p>
 *          <p>If no input parameters are provided, such as DirectoryId or TopicName, this request describes all of the associations in the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeEventTopicsCommand } from "../../client-directory-service/mod.ts";
 * // const { DirectoryServiceClient, DescribeEventTopicsCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new DescribeEventTopicsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEventTopicsCommandInput} for command's `input` shape.
 * @see {@link DescribeEventTopicsCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeEventTopicsCommand extends $Command<
  DescribeEventTopicsCommandInput,
  DescribeEventTopicsCommandOutput,
  DirectoryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeEventTopicsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEventTopicsCommandInput, DescribeEventTopicsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "DescribeEventTopicsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeEventTopicsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeEventTopicsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeEventTopicsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeEventTopicsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeEventTopicsCommandOutput> {
    return deserializeAws_json1_1DescribeEventTopicsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
