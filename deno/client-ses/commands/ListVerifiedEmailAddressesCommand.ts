import {
  SESClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../SESClient.ts";
import { ListVerifiedEmailAddressesResponse } from "../models/index.ts";
import {
  deserializeAws_queryListVerifiedEmailAddressesCommand,
  serializeAws_queryListVerifiedEmailAddressesCommand
} from "../protocols/Aws_query.ts";
import { getSerdePlugin } from "../../middleware-serde/mod.ts";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "../../protocol-http/mod.ts";
import { Command as $Command } from "../../smithy-client/mod.ts";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext
} from "../../types/mod.ts";

export type ListVerifiedEmailAddressesCommandInput = {};
export type ListVerifiedEmailAddressesCommandOutput = ListVerifiedEmailAddressesResponse &
  __MetadataBearer;

export class ListVerifiedEmailAddressesCommand extends $Command<
  ListVerifiedEmailAddressesCommandInput,
  ListVerifiedEmailAddressesCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListVerifiedEmailAddressesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListVerifiedEmailAddressesCommandInput,
    ListVerifiedEmailAddressesCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListVerifiedEmailAddressesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryListVerifiedEmailAddressesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListVerifiedEmailAddressesCommandOutput> {
    return deserializeAws_queryListVerifiedEmailAddressesCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
