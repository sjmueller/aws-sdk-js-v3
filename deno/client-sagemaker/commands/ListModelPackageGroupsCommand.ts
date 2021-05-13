import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient.ts";
import { ListModelPackageGroupsInput, ListModelPackageGroupsOutput } from "../models/models_2.ts";
import {
  deserializeAws_json1_1ListModelPackageGroupsCommand,
  serializeAws_json1_1ListModelPackageGroupsCommand,
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

export interface ListModelPackageGroupsCommandInput extends ListModelPackageGroupsInput {}
export interface ListModelPackageGroupsCommandOutput extends ListModelPackageGroupsOutput, __MetadataBearer {}

/**
 * <p>Gets a list of the model groups in your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListModelPackageGroupsCommand } from "../../client-sagemaker/mod.ts";
 * // const { SageMakerClient, ListModelPackageGroupsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListModelPackageGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListModelPackageGroupsCommandInput} for command's `input` shape.
 * @see {@link ListModelPackageGroupsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListModelPackageGroupsCommand extends $Command<
  ListModelPackageGroupsCommandInput,
  ListModelPackageGroupsCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListModelPackageGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListModelPackageGroupsCommandInput, ListModelPackageGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListModelPackageGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListModelPackageGroupsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListModelPackageGroupsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListModelPackageGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListModelPackageGroupsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListModelPackageGroupsCommandOutput> {
    return deserializeAws_json1_1ListModelPackageGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
