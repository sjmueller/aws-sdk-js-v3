import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient.ts";
import { DeleteQualificationTypeRequest, DeleteQualificationTypeResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteQualificationTypeCommand,
  serializeAws_json1_1DeleteQualificationTypeCommand,
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

export interface DeleteQualificationTypeCommandInput extends DeleteQualificationTypeRequest {}
export interface DeleteQualificationTypeCommandOutput extends DeleteQualificationTypeResponse, __MetadataBearer {}

/**
 * <p>
 *             The
 *             <code>DeleteQualificationType</code>
 *             deletes a Qualification type and deletes any HIT types that are
 *             associated with the Qualification type.
 *         </p>
 *         <p>This operation does not revoke Qualifications already assigned
 *             to Workers because the Qualifications might be needed for active HITs.
 *             If there are any pending requests for the Qualification type, Amazon
 *             Mechanical Turk rejects those requests. After you delete a
 *             Qualification type, you can no longer use it to create HITs or HIT
 *             types.</p>
 *         <note>
 *             <p>DeleteQualificationType must wait for all the HITs that use
 *                 the deleted Qualification type to be deleted before completing. It
 *                 may take up to 48 hours before DeleteQualificationType completes and
 *                 the unique name of the Qualification type is available for reuse with
 *                 CreateQualificationType.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, DeleteQualificationTypeCommand } from "../../client-mturk/mod.ts";
 * // const { MTurkClient, DeleteQualificationTypeCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new DeleteQualificationTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteQualificationTypeCommandInput} for command's `input` shape.
 * @see {@link DeleteQualificationTypeCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteQualificationTypeCommand extends $Command<
  DeleteQualificationTypeCommandInput,
  DeleteQualificationTypeCommandOutput,
  MTurkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteQualificationTypeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MTurkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteQualificationTypeCommandInput, DeleteQualificationTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "DeleteQualificationTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteQualificationTypeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteQualificationTypeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteQualificationTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteQualificationTypeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteQualificationTypeCommandOutput> {
    return deserializeAws_json1_1DeleteQualificationTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
