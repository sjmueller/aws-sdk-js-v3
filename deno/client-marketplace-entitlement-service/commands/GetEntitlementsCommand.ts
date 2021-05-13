import {
  MarketplaceEntitlementServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceEntitlementServiceClient.ts";
import { GetEntitlementsRequest, GetEntitlementsResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetEntitlementsCommand,
  serializeAws_json1_1GetEntitlementsCommand,
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

export interface GetEntitlementsCommandInput extends GetEntitlementsRequest {}
export interface GetEntitlementsCommandOutput extends GetEntitlementsResult, __MetadataBearer {}

/**
 * <p>GetEntitlements retrieves entitlement values for a given product. The results can be
 *       filtered based on customer identifier or product dimensions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceEntitlementServiceClient, GetEntitlementsCommand } from "../../client-marketplace-entitlement-service/mod.ts";
 * // const { MarketplaceEntitlementServiceClient, GetEntitlementsCommand } = require("@aws-sdk/client-marketplace-entitlement-service"); // CommonJS import
 * const client = new MarketplaceEntitlementServiceClient(config);
 * const command = new GetEntitlementsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEntitlementsCommandInput} for command's `input` shape.
 * @see {@link GetEntitlementsCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceEntitlementServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetEntitlementsCommand extends $Command<
  GetEntitlementsCommandInput,
  GetEntitlementsCommandOutput,
  MarketplaceEntitlementServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetEntitlementsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MarketplaceEntitlementServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetEntitlementsCommandInput, GetEntitlementsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MarketplaceEntitlementServiceClient";
    const commandName = "GetEntitlementsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetEntitlementsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetEntitlementsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetEntitlementsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetEntitlementsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetEntitlementsCommandOutput> {
    return deserializeAws_json1_1GetEntitlementsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
