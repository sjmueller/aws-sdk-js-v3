import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { DeleteManagedPrefixListRequest, DeleteManagedPrefixListResult } from "../models/models_2.ts";
import {
  deserializeAws_ec2DeleteManagedPrefixListCommand,
  serializeAws_ec2DeleteManagedPrefixListCommand,
} from "../protocols/Aws_ec2.ts";
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

export interface DeleteManagedPrefixListCommandInput extends DeleteManagedPrefixListRequest {}
export interface DeleteManagedPrefixListCommandOutput extends DeleteManagedPrefixListResult, __MetadataBearer {}

/**
 * <p>Deletes the specified managed prefix list. You must first remove all references to the prefix list in your resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteManagedPrefixListCommand } from "../../client-ec2/mod.ts";
 * // const { EC2Client, DeleteManagedPrefixListCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteManagedPrefixListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteManagedPrefixListCommandInput} for command's `input` shape.
 * @see {@link DeleteManagedPrefixListCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteManagedPrefixListCommand extends $Command<
  DeleteManagedPrefixListCommandInput,
  DeleteManagedPrefixListCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteManagedPrefixListCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteManagedPrefixListCommandInput, DeleteManagedPrefixListCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteManagedPrefixListCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteManagedPrefixListRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteManagedPrefixListResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteManagedPrefixListCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteManagedPrefixListCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteManagedPrefixListCommandOutput> {
    return deserializeAws_ec2DeleteManagedPrefixListCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
