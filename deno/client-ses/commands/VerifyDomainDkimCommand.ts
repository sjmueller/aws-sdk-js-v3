import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient.ts";
import { VerifyDomainDkimRequest, VerifyDomainDkimResponse } from "../models/index.ts";
import {
  deserializeAws_queryVerifyDomainDkimCommand,
  serializeAws_queryVerifyDomainDkimCommand,
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

export type VerifyDomainDkimCommandInput = VerifyDomainDkimRequest;
export type VerifyDomainDkimCommandOutput = VerifyDomainDkimResponse & __MetadataBearer;

export class VerifyDomainDkimCommand extends $Command<
  VerifyDomainDkimCommandInput,
  VerifyDomainDkimCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: VerifyDomainDkimCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<VerifyDomainDkimCommandInput, VerifyDomainDkimCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: VerifyDomainDkimRequest.filterSensitiveLog,
      outputFilterSensitiveLog: VerifyDomainDkimResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: VerifyDomainDkimCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryVerifyDomainDkimCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<VerifyDomainDkimCommandOutput> {
    return deserializeAws_queryVerifyDomainDkimCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
