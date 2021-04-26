import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient.ts";
import { ListProtectionGroupsRequest, ListProtectionGroupsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListProtectionGroupsCommand,
  serializeAws_json1_1ListProtectionGroupsCommand,
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

export interface ListProtectionGroupsCommandInput extends ListProtectionGroupsRequest {}
export interface ListProtectionGroupsCommandOutput extends ListProtectionGroupsResponse, __MetadataBearer {}

/**
 * <p>Retrieves the <a>ProtectionGroup</a> objects for the account.</p>
 */
export class ListProtectionGroupsCommand extends $Command<
  ListProtectionGroupsCommandInput,
  ListProtectionGroupsCommandOutput,
  ShieldClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListProtectionGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ShieldClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListProtectionGroupsCommandInput, ListProtectionGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ShieldClient";
    const commandName = "ListProtectionGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListProtectionGroupsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListProtectionGroupsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListProtectionGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListProtectionGroupsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListProtectionGroupsCommandOutput> {
    return deserializeAws_json1_1ListProtectionGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
