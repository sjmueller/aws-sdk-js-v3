import {
  ComprehendMedicalClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ComprehendMedicalClient.ts";
import {
  StartEntitiesDetectionV2JobRequest,
  StartEntitiesDetectionV2JobResponse
} from "../models/index.ts";
import {
  deserializeAws_json1_1StartEntitiesDetectionV2JobCommand,
  serializeAws_json1_1StartEntitiesDetectionV2JobCommand
} from "../protocols/Aws_json1_1.ts";
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

export type StartEntitiesDetectionV2JobCommandInput = StartEntitiesDetectionV2JobRequest;
export type StartEntitiesDetectionV2JobCommandOutput = StartEntitiesDetectionV2JobResponse &
  __MetadataBearer;

export class StartEntitiesDetectionV2JobCommand extends $Command<
  StartEntitiesDetectionV2JobCommandInput,
  StartEntitiesDetectionV2JobCommandOutput,
  ComprehendMedicalClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartEntitiesDetectionV2JobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendMedicalClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    StartEntitiesDetectionV2JobCommandInput,
    StartEntitiesDetectionV2JobCommandOutput
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
    input: StartEntitiesDetectionV2JobCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1StartEntitiesDetectionV2JobCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartEntitiesDetectionV2JobCommandOutput> {
    return deserializeAws_json1_1StartEntitiesDetectionV2JobCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
