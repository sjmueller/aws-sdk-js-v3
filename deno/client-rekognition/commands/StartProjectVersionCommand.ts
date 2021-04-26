import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient.ts";
import { StartProjectVersionRequest, StartProjectVersionResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1StartProjectVersionCommand,
  serializeAws_json1_1StartProjectVersionCommand,
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

export interface StartProjectVersionCommandInput extends StartProjectVersionRequest {}
export interface StartProjectVersionCommandOutput extends StartProjectVersionResponse, __MetadataBearer {}

/**
 * <p>Starts the running of the version of a model. Starting a model takes a while
 *       to complete. To check the current state of the model, use <a>DescribeProjectVersions</a>.</p>
 *          <p>Once the model is running, you can detect custom labels in new images by calling
 *          <a>DetectCustomLabels</a>.</p>
 *          <note>
 *             <p>You are charged for the amount of time that the model is running. To stop a running
 *       model, call <a>StopProjectVersion</a>.</p>
 *          </note>
 *          <p>This operation requires permissions to perform the
 *          <code>rekognition:StartProjectVersion</code> action.</p>
 */
export class StartProjectVersionCommand extends $Command<
  StartProjectVersionCommandInput,
  StartProjectVersionCommandOutput,
  RekognitionClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartProjectVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RekognitionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartProjectVersionCommandInput, StartProjectVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "StartProjectVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartProjectVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartProjectVersionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartProjectVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartProjectVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartProjectVersionCommandOutput> {
    return deserializeAws_json1_1StartProjectVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
