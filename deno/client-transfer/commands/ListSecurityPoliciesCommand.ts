import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient.ts";
import { ListSecurityPoliciesRequest, ListSecurityPoliciesResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListSecurityPoliciesCommand,
  serializeAws_json1_1ListSecurityPoliciesCommand,
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

export interface ListSecurityPoliciesCommandInput extends ListSecurityPoliciesRequest {}
export interface ListSecurityPoliciesCommandOutput extends ListSecurityPoliciesResponse, __MetadataBearer {}

/**
 * <p>Lists the security policies that are attached to your file transfer protocol-enabled
 *       servers.</p>
 */
export class ListSecurityPoliciesCommand extends $Command<
  ListSecurityPoliciesCommandInput,
  ListSecurityPoliciesCommandOutput,
  TransferClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSecurityPoliciesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TransferClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSecurityPoliciesCommandInput, ListSecurityPoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TransferClient";
    const commandName = "ListSecurityPoliciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSecurityPoliciesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListSecurityPoliciesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSecurityPoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListSecurityPoliciesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSecurityPoliciesCommandOutput> {
    return deserializeAws_json1_1ListSecurityPoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
