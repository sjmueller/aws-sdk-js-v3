
import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient.ts";
import { GetIdentityDkimAttributesRequest, GetIdentityDkimAttributesResponse } from "../models/models_0.ts";
import {
  deserializeAws_queryGetIdentityDkimAttributesCommand,
  serializeAws_queryGetIdentityDkimAttributesCommand,
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

export type GetIdentityDkimAttributesCommandInput = GetIdentityDkimAttributesRequest;
export type GetIdentityDkimAttributesCommandOutput = GetIdentityDkimAttributesResponse & __MetadataBearer;

export class GetIdentityDkimAttributesCommand extends $Command<
  GetIdentityDkimAttributesCommandInput,
  GetIdentityDkimAttributesCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetIdentityDkimAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetIdentityDkimAttributesCommandInput, GetIdentityDkimAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "GetIdentityDkimAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetIdentityDkimAttributesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetIdentityDkimAttributesResponse.filterSensitiveLog,
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

  private serialize(input: GetIdentityDkimAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetIdentityDkimAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetIdentityDkimAttributesCommandOutput> {
    return deserializeAws_queryGetIdentityDkimAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
