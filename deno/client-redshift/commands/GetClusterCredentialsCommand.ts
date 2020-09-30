
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient.ts";
import { ClusterCredentials, GetClusterCredentialsMessage } from "../models/models_0.ts";
import {
  deserializeAws_queryGetClusterCredentialsCommand,
  serializeAws_queryGetClusterCredentialsCommand,
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

export type GetClusterCredentialsCommandInput = GetClusterCredentialsMessage;
export type GetClusterCredentialsCommandOutput = ClusterCredentials & __MetadataBearer;

export class GetClusterCredentialsCommand extends $Command<
  GetClusterCredentialsCommandInput,
  GetClusterCredentialsCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetClusterCredentialsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetClusterCredentialsCommandInput, GetClusterCredentialsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: GetClusterCredentialsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ClusterCredentials.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetClusterCredentialsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetClusterCredentialsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetClusterCredentialsCommandOutput> {
    return deserializeAws_queryGetClusterCredentialsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
