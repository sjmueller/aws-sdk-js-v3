import { AmplifyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyClient.ts";
import { ListBranchesRequest, ListBranchesResult } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListBranchesCommand,
  serializeAws_restJson1ListBranchesCommand,
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

export interface ListBranchesCommandInput extends ListBranchesRequest {}
export interface ListBranchesCommandOutput extends ListBranchesResult, __MetadataBearer {}

/**
 * <p> Lists the branches of an Amplify app. </p>
 */
export class ListBranchesCommand extends $Command<
  ListBranchesCommandInput,
  ListBranchesCommandOutput,
  AmplifyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListBranchesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBranchesCommandInput, ListBranchesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyClient";
    const commandName = "ListBranchesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListBranchesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListBranchesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListBranchesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListBranchesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBranchesCommandOutput> {
    return deserializeAws_restJson1ListBranchesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
