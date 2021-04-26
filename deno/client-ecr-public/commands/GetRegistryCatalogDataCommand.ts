import { ECRPUBLICClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRPUBLICClient.ts";
import { GetRegistryCatalogDataRequest, GetRegistryCatalogDataResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetRegistryCatalogDataCommand,
  serializeAws_json1_1GetRegistryCatalogDataCommand,
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

export interface GetRegistryCatalogDataCommandInput extends GetRegistryCatalogDataRequest {}
export interface GetRegistryCatalogDataCommandOutput extends GetRegistryCatalogDataResponse, __MetadataBearer {}

/**
 * <p>Retrieves catalog metadata for a public registry.</p>
 */
export class GetRegistryCatalogDataCommand extends $Command<
  GetRegistryCatalogDataCommandInput,
  GetRegistryCatalogDataCommandOutput,
  ECRPUBLICClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetRegistryCatalogDataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRPUBLICClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRegistryCatalogDataCommandInput, GetRegistryCatalogDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRPUBLICClient";
    const commandName = "GetRegistryCatalogDataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRegistryCatalogDataRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetRegistryCatalogDataResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetRegistryCatalogDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetRegistryCatalogDataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRegistryCatalogDataCommandOutput> {
    return deserializeAws_json1_1GetRegistryCatalogDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
