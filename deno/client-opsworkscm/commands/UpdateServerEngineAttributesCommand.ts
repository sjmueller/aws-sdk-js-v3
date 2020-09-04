import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient.ts";
import { UpdateServerEngineAttributesRequest, UpdateServerEngineAttributesResponse } from "../models/index.ts";
import {
  deserializeAws_json1_1UpdateServerEngineAttributesCommand,
  serializeAws_json1_1UpdateServerEngineAttributesCommand,
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

export type UpdateServerEngineAttributesCommandInput = UpdateServerEngineAttributesRequest;
export type UpdateServerEngineAttributesCommandOutput = UpdateServerEngineAttributesResponse & __MetadataBearer;

export class UpdateServerEngineAttributesCommand extends $Command<
  UpdateServerEngineAttributesCommandInput,
  UpdateServerEngineAttributesCommandOutput,
  OpsWorksCMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateServerEngineAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpsWorksCMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateServerEngineAttributesCommandInput, UpdateServerEngineAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: UpdateServerEngineAttributesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateServerEngineAttributesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateServerEngineAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateServerEngineAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateServerEngineAttributesCommandOutput> {
    return deserializeAws_json1_1UpdateServerEngineAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
