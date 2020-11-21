
import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient.ts";
import { ListUserHierarchyGroupsRequest, ListUserHierarchyGroupsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListUserHierarchyGroupsCommand,
  serializeAws_restJson1ListUserHierarchyGroupsCommand,
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

export type ListUserHierarchyGroupsCommandInput = ListUserHierarchyGroupsRequest;
export type ListUserHierarchyGroupsCommandOutput = ListUserHierarchyGroupsResponse & __MetadataBearer;

export class ListUserHierarchyGroupsCommand extends $Command<
  ListUserHierarchyGroupsCommandInput,
  ListUserHierarchyGroupsCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListUserHierarchyGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListUserHierarchyGroupsCommandInput, ListUserHierarchyGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "ListUserHierarchyGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListUserHierarchyGroupsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListUserHierarchyGroupsResponse.filterSensitiveLog,
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

  private serialize(input: ListUserHierarchyGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListUserHierarchyGroupsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListUserHierarchyGroupsCommandOutput> {
    return deserializeAws_restJson1ListUserHierarchyGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
