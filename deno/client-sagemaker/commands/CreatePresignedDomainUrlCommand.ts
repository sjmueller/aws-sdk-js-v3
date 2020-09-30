
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient.ts";
import { CreatePresignedDomainUrlRequest, CreatePresignedDomainUrlResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreatePresignedDomainUrlCommand,
  serializeAws_json1_1CreatePresignedDomainUrlCommand,
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

export type CreatePresignedDomainUrlCommandInput = CreatePresignedDomainUrlRequest;
export type CreatePresignedDomainUrlCommandOutput = CreatePresignedDomainUrlResponse & __MetadataBearer;

export class CreatePresignedDomainUrlCommand extends $Command<
  CreatePresignedDomainUrlCommandInput,
  CreatePresignedDomainUrlCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreatePresignedDomainUrlCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreatePresignedDomainUrlCommandInput, CreatePresignedDomainUrlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: CreatePresignedDomainUrlRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreatePresignedDomainUrlResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreatePresignedDomainUrlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreatePresignedDomainUrlCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePresignedDomainUrlCommandOutput> {
    return deserializeAws_json1_1CreatePresignedDomainUrlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
