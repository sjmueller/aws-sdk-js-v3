import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client.ts";
import {
  GetClassificationExportConfigurationRequest,
  GetClassificationExportConfigurationResponse,
} from "../models/index.ts";
import {
  deserializeAws_restJson1GetClassificationExportConfigurationCommand,
  serializeAws_restJson1GetClassificationExportConfigurationCommand,
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

export type GetClassificationExportConfigurationCommandInput = GetClassificationExportConfigurationRequest;
export type GetClassificationExportConfigurationCommandOutput = GetClassificationExportConfigurationResponse &
  __MetadataBearer;

export class GetClassificationExportConfigurationCommand extends $Command<
  GetClassificationExportConfigurationCommandInput,
  GetClassificationExportConfigurationCommandOutput,
  Macie2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetClassificationExportConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Macie2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetClassificationExportConfigurationCommandInput, GetClassificationExportConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: GetClassificationExportConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetClassificationExportConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetClassificationExportConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetClassificationExportConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetClassificationExportConfigurationCommandOutput> {
    return deserializeAws_restJson1GetClassificationExportConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
