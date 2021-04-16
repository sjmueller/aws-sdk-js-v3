import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient.ts";
import { CreateUpdatedImageRequest, CreateUpdatedImageResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreateUpdatedImageCommand,
  serializeAws_json1_1CreateUpdatedImageCommand,
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

export type CreateUpdatedImageCommandInput = CreateUpdatedImageRequest;
export type CreateUpdatedImageCommandOutput = CreateUpdatedImageResult & __MetadataBearer;

/**
 * <p>Creates a new image with the latest Windows operating system updates, driver updates, and AppStream 2.0 agent software.</p>
 *
 *         <p>For more information, see the "Update an Image by Using
 *             Managed AppStream 2.0 Image Updates" section in <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/administer-images.html">Administer Your AppStream 2.0 Images</a>, in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
 */
export class CreateUpdatedImageCommand extends $Command<
  CreateUpdatedImageCommandInput,
  CreateUpdatedImageCommandOutput,
  AppStreamClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateUpdatedImageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateUpdatedImageCommandInput, CreateUpdatedImageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "CreateUpdatedImageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateUpdatedImageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateUpdatedImageResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateUpdatedImageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateUpdatedImageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateUpdatedImageCommandOutput> {
    return deserializeAws_json1_1CreateUpdatedImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
