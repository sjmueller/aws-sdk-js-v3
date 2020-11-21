
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient.ts";
import { ListEntitiesForPolicyRequest, ListEntitiesForPolicyResponse } from "../models/models_0.ts";
import {
  deserializeAws_queryListEntitiesForPolicyCommand,
  serializeAws_queryListEntitiesForPolicyCommand,
} from "../protocols/Aws_query.ts";
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

export type ListEntitiesForPolicyCommandInput = ListEntitiesForPolicyRequest;
export type ListEntitiesForPolicyCommandOutput = ListEntitiesForPolicyResponse & __MetadataBearer;

export class ListEntitiesForPolicyCommand extends $Command<
  ListEntitiesForPolicyCommandInput,
  ListEntitiesForPolicyCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListEntitiesForPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEntitiesForPolicyCommandInput, ListEntitiesForPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ListEntitiesForPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListEntitiesForPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListEntitiesForPolicyResponse.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListEntitiesForPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListEntitiesForPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEntitiesForPolicyCommandOutput> {
    return deserializeAws_queryListEntitiesForPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
