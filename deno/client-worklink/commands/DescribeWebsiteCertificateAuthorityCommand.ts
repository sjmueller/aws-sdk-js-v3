import {
  ServiceInputTypes,
  ServiceOutputTypes,
  WorkLinkClientResolvedConfig
} from "../WorkLinkClient.ts";
import {
  DescribeWebsiteCertificateAuthorityRequest,
  DescribeWebsiteCertificateAuthorityResponse
} from "../models/index.ts";
import {
  deserializeAws_restJson1DescribeWebsiteCertificateAuthorityCommand,
  serializeAws_restJson1DescribeWebsiteCertificateAuthorityCommand
} from "../protocols/Aws_restJson1.ts";
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

export type DescribeWebsiteCertificateAuthorityCommandInput = DescribeWebsiteCertificateAuthorityRequest;
export type DescribeWebsiteCertificateAuthorityCommandOutput = DescribeWebsiteCertificateAuthorityResponse &
  __MetadataBearer;

export class DescribeWebsiteCertificateAuthorityCommand extends $Command<
  DescribeWebsiteCertificateAuthorityCommandInput,
  DescribeWebsiteCertificateAuthorityCommandOutput,
  WorkLinkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeWebsiteCertificateAuthorityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkLinkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeWebsiteCertificateAuthorityCommandInput,
    DescribeWebsiteCertificateAuthorityCommandOutput
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
    input: DescribeWebsiteCertificateAuthorityCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeWebsiteCertificateAuthorityCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeWebsiteCertificateAuthorityCommandOutput> {
    return deserializeAws_restJson1DescribeWebsiteCertificateAuthorityCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
