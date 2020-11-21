
import { STSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../STSClient.ts";
import { AssumeRoleWithSAMLRequest, AssumeRoleWithSAMLResponse } from "../models/models_0.ts";
import {
  deserializeAws_queryAssumeRoleWithSAMLCommand,
  serializeAws_queryAssumeRoleWithSAMLCommand,
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

export type AssumeRoleWithSAMLCommandInput = AssumeRoleWithSAMLRequest;
export type AssumeRoleWithSAMLCommandOutput = AssumeRoleWithSAMLResponse & __MetadataBearer;

export class AssumeRoleWithSAMLCommand extends $Command<
  AssumeRoleWithSAMLCommandInput,
  AssumeRoleWithSAMLCommandOutput,
  STSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssumeRoleWithSAMLCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: STSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssumeRoleWithSAMLCommandInput, AssumeRoleWithSAMLCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "STSClient";
    const commandName = "AssumeRoleWithSAMLCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssumeRoleWithSAMLRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssumeRoleWithSAMLResponse.filterSensitiveLog,
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

  private serialize(input: AssumeRoleWithSAMLCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryAssumeRoleWithSAMLCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssumeRoleWithSAMLCommandOutput> {
    return deserializeAws_queryAssumeRoleWithSAMLCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
