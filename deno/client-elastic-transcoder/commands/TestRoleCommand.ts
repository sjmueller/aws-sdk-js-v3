import process from "https://deno.land/std@0.89.0/node/process.ts";
import {
  ElasticTranscoderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticTranscoderClient.ts";
import { TestRoleRequest, TestRoleResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1TestRoleCommand,
  serializeAws_restJson1TestRoleCommand,
} from "../protocols/Aws_restJson1.ts";
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

export interface TestRoleCommandInput extends TestRoleRequest {}
export interface TestRoleCommandOutput extends TestRoleResponse, __MetadataBearer {}

/**
 * @deprecated
 *
 * <p>The TestRole operation tests the IAM role used to create the pipeline.</p>
 *         <p>The <code>TestRole</code> action lets you determine whether the IAM role you are using
 *             has sufficient permissions to let Elastic Transcoder perform tasks associated with the transcoding
 *             process. The action attempts to assume the specified IAM role, checks read access to the
 *             input and output buckets, and tries to send a test notification to Amazon SNS topics
 *             that you specify.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, TestRoleCommand } from "../../client-elastic-transcoder/mod.ts";
 * // const { ElasticTranscoderClient, TestRoleCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * const client = new ElasticTranscoderClient(config);
 * const command = new TestRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TestRoleCommandInput} for command's `input` shape.
 * @see {@link TestRoleCommandOutput} for command's `response` shape.
 * @see {@link ElasticTranscoderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class TestRoleCommand extends $Command<
  TestRoleCommandInput,
  TestRoleCommandOutput,
  ElasticTranscoderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: TestRoleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticTranscoderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TestRoleCommandInput, TestRoleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticTranscoderClient";
    const commandName = "TestRoleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TestRoleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: TestRoleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TestRoleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1TestRoleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TestRoleCommandOutput> {
    return deserializeAws_restJson1TestRoleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
