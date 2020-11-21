
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient.ts";
import { UpdateUserProfileRequest } from "../models/models_0.ts";
import {
  deserializeAws_json1_1UpdateUserProfileCommand,
  serializeAws_json1_1UpdateUserProfileCommand,
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

export type UpdateUserProfileCommandInput = UpdateUserProfileRequest;
export type UpdateUserProfileCommandOutput = __MetadataBearer;

export class UpdateUserProfileCommand extends $Command<
  UpdateUserProfileCommandInput,
  UpdateUserProfileCommandOutput,
  OpsWorksClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateUserProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpsWorksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateUserProfileCommandInput, UpdateUserProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksClient";
    const commandName = "UpdateUserProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateUserProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
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

  private serialize(input: UpdateUserProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateUserProfileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateUserProfileCommandOutput> {
    return deserializeAws_json1_1UpdateUserProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
