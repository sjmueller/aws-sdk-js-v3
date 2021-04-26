import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient.ts";
import { ListDeviceFleetsRequest, ListDeviceFleetsResponse } from "../models/models_2.ts";
import {
  deserializeAws_json1_1ListDeviceFleetsCommand,
  serializeAws_json1_1ListDeviceFleetsCommand,
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

export interface ListDeviceFleetsCommandInput extends ListDeviceFleetsRequest {}
export interface ListDeviceFleetsCommandOutput extends ListDeviceFleetsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of devices in the fleet.</p>
 */
export class ListDeviceFleetsCommand extends $Command<
  ListDeviceFleetsCommandInput,
  ListDeviceFleetsCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDeviceFleetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDeviceFleetsCommandInput, ListDeviceFleetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListDeviceFleetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDeviceFleetsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDeviceFleetsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDeviceFleetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListDeviceFleetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDeviceFleetsCommandOutput> {
    return deserializeAws_json1_1ListDeviceFleetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
