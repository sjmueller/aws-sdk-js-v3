import {
  Route53RecoveryReadinessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryReadinessClient.ts";
import { ListTagsForResourcesRequest, ListTagsForResourcesResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListTagsForResourcesCommand,
  serializeAws_restJson1ListTagsForResourcesCommand,
} from "../protocols/Aws_restJson1.ts";
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

export interface ListTagsForResourcesCommandInput extends ListTagsForResourcesRequest {}
export interface ListTagsForResourcesCommandOutput extends ListTagsForResourcesResponse, __MetadataBearer {}

/**
 * Returns a list of the tags assigned to the specified resource.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryReadinessClient, ListTagsForResourcesCommand } from "../../client-route53-recovery-readiness/mod.ts";
 * // const { Route53RecoveryReadinessClient, ListTagsForResourcesCommand } = require("@aws-sdk/client-route53-recovery-readiness"); // CommonJS import
 * const client = new Route53RecoveryReadinessClient(config);
 * const command = new ListTagsForResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTagsForResourcesCommandInput} for command's `input` shape.
 * @see {@link ListTagsForResourcesCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryReadinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListTagsForResourcesCommand extends $Command<
  ListTagsForResourcesCommandInput,
  ListTagsForResourcesCommandOutput,
  Route53RecoveryReadinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTagsForResourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53RecoveryReadinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTagsForResourcesCommandInput, ListTagsForResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53RecoveryReadinessClient";
    const commandName = "ListTagsForResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTagsForResourcesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListTagsForResourcesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTagsForResourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListTagsForResourcesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTagsForResourcesCommandOutput> {
    return deserializeAws_restJson1ListTagsForResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
