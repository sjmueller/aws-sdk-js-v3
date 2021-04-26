import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient.ts";
import { GetAppsListRequest, GetAppsListResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetAppsListCommand,
  serializeAws_json1_1GetAppsListCommand,
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

export interface GetAppsListCommandInput extends GetAppsListRequest {}
export interface GetAppsListCommandOutput extends GetAppsListResponse, __MetadataBearer {}

/**
 * <p>Returns information about the specified AWS Firewall Manager applications list.</p>
 */
export class GetAppsListCommand extends $Command<
  GetAppsListCommandInput,
  GetAppsListCommandOutput,
  FMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetAppsListCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAppsListCommandInput, GetAppsListCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FMSClient";
    const commandName = "GetAppsListCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAppsListRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetAppsListResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetAppsListCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetAppsListCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAppsListCommandOutput> {
    return deserializeAws_json1_1GetAppsListCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
