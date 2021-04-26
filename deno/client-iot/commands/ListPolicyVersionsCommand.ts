import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import { ListPolicyVersionsRequest, ListPolicyVersionsResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1ListPolicyVersionsCommand,
  serializeAws_restJson1ListPolicyVersionsCommand,
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

export interface ListPolicyVersionsCommandInput extends ListPolicyVersionsRequest {}
export interface ListPolicyVersionsCommandOutput extends ListPolicyVersionsResponse, __MetadataBearer {}

/**
 * <p>Lists the versions of the specified policy and identifies the default
 *          version.</p>
 */
export class ListPolicyVersionsCommand extends $Command<
  ListPolicyVersionsCommandInput,
  ListPolicyVersionsCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPolicyVersionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPolicyVersionsCommandInput, ListPolicyVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListPolicyVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPolicyVersionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListPolicyVersionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPolicyVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListPolicyVersionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPolicyVersionsCommandOutput> {
    return deserializeAws_restJson1ListPolicyVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
