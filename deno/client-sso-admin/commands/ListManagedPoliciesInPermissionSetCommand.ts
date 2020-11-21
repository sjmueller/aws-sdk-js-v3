
import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient.ts";
import {
  ListManagedPoliciesInPermissionSetRequest,
  ListManagedPoliciesInPermissionSetResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListManagedPoliciesInPermissionSetCommand,
  serializeAws_json1_1ListManagedPoliciesInPermissionSetCommand,
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

export type ListManagedPoliciesInPermissionSetCommandInput = ListManagedPoliciesInPermissionSetRequest;
export type ListManagedPoliciesInPermissionSetCommandOutput = ListManagedPoliciesInPermissionSetResponse &
  __MetadataBearer;

export class ListManagedPoliciesInPermissionSetCommand extends $Command<
  ListManagedPoliciesInPermissionSetCommandInput,
  ListManagedPoliciesInPermissionSetCommandOutput,
  SSOAdminClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListManagedPoliciesInPermissionSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOAdminClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListManagedPoliciesInPermissionSetCommandInput, ListManagedPoliciesInPermissionSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "ListManagedPoliciesInPermissionSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListManagedPoliciesInPermissionSetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListManagedPoliciesInPermissionSetResponse.filterSensitiveLog,
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

  private serialize(
    input: ListManagedPoliciesInPermissionSetCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListManagedPoliciesInPermissionSetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListManagedPoliciesInPermissionSetCommandOutput> {
    return deserializeAws_json1_1ListManagedPoliciesInPermissionSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
