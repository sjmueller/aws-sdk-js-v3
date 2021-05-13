import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient.ts";
import { CreateDiskFromSnapshotRequest, CreateDiskFromSnapshotResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreateDiskFromSnapshotCommand,
  serializeAws_json1_1CreateDiskFromSnapshotCommand,
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

export interface CreateDiskFromSnapshotCommandInput extends CreateDiskFromSnapshotRequest {}
export interface CreateDiskFromSnapshotCommandOutput extends CreateDiskFromSnapshotResult, __MetadataBearer {}

/**
 * <p>Creates a block storage disk from a manual or automatic snapshot of a disk. The resulting
 *       disk can be attached to an Amazon Lightsail instance in the same Availability Zone (e.g.,
 *         <code>us-east-2a</code>).</p>
 *          <p>The <code>create disk from snapshot</code> operation supports tag-based access control via
 *       request tags and resource tags applied to the resource identified by <code>disk snapshot
 *         name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateDiskFromSnapshotCommand } from "../../client-lightsail/mod.ts";
 * // const { LightsailClient, CreateDiskFromSnapshotCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CreateDiskFromSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDiskFromSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateDiskFromSnapshotCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateDiskFromSnapshotCommand extends $Command<
  CreateDiskFromSnapshotCommandInput,
  CreateDiskFromSnapshotCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDiskFromSnapshotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDiskFromSnapshotCommandInput, CreateDiskFromSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "CreateDiskFromSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDiskFromSnapshotRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDiskFromSnapshotResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDiskFromSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateDiskFromSnapshotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDiskFromSnapshotCommandOutput> {
    return deserializeAws_json1_1CreateDiskFromSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
