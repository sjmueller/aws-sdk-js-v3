import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient.ts";
import { ListWorkforcesRequest, ListWorkforcesResponse } from "../models/models_2.ts";
import {
  deserializeAws_json1_1ListWorkforcesCommand,
  serializeAws_json1_1ListWorkforcesCommand,
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

export interface ListWorkforcesCommandInput extends ListWorkforcesRequest {}
export interface ListWorkforcesCommandOutput extends ListWorkforcesResponse, __MetadataBearer {}

/**
 * <p>Use this operation to list all private and vendor workforces in an Amazon Web Services Region. Note that you can only
 *            have one private workforce per Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListWorkforcesCommand } from "../../client-sagemaker/mod.ts";
 * // const { SageMakerClient, ListWorkforcesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListWorkforcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListWorkforcesCommandInput} for command's `input` shape.
 * @see {@link ListWorkforcesCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListWorkforcesCommand extends $Command<
  ListWorkforcesCommandInput,
  ListWorkforcesCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListWorkforcesCommandInput) {
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
  ): Handler<ListWorkforcesCommandInput, ListWorkforcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListWorkforcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListWorkforcesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListWorkforcesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListWorkforcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListWorkforcesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListWorkforcesCommandOutput> {
    return deserializeAws_json1_1ListWorkforcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
