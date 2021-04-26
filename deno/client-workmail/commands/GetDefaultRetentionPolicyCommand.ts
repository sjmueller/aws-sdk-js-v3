import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient.ts";
import { GetDefaultRetentionPolicyRequest, GetDefaultRetentionPolicyResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetDefaultRetentionPolicyCommand,
  serializeAws_json1_1GetDefaultRetentionPolicyCommand,
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

export interface GetDefaultRetentionPolicyCommandInput extends GetDefaultRetentionPolicyRequest {}
export interface GetDefaultRetentionPolicyCommandOutput extends GetDefaultRetentionPolicyResponse, __MetadataBearer {}

/**
 * <p>Gets the default retention policy details for the specified organization.</p>
 */
export class GetDefaultRetentionPolicyCommand extends $Command<
  GetDefaultRetentionPolicyCommandInput,
  GetDefaultRetentionPolicyCommandOutput,
  WorkMailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDefaultRetentionPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDefaultRetentionPolicyCommandInput, GetDefaultRetentionPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "GetDefaultRetentionPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDefaultRetentionPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDefaultRetentionPolicyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDefaultRetentionPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetDefaultRetentionPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetDefaultRetentionPolicyCommandOutput> {
    return deserializeAws_json1_1GetDefaultRetentionPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
