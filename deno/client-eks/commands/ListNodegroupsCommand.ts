import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient.ts";
import { ListNodegroupsRequest, ListNodegroupsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListNodegroupsCommand,
  serializeAws_restJson1ListNodegroupsCommand,
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

export interface ListNodegroupsCommandInput extends ListNodegroupsRequest {}
export interface ListNodegroupsCommandOutput extends ListNodegroupsResponse, __MetadataBearer {}

/**
 * <p>Lists the Amazon EKS managed node groups associated with the specified cluster in your
 *             AWS account in the specified Region. Self-managed node groups are not listed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, ListNodegroupsCommand } from "../../client-eks/mod.ts";
 * // const { EKSClient, ListNodegroupsCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new ListNodegroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListNodegroupsCommandInput} for command's `input` shape.
 * @see {@link ListNodegroupsCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListNodegroupsCommand extends $Command<
  ListNodegroupsCommandInput,
  ListNodegroupsCommandOutput,
  EKSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListNodegroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListNodegroupsCommandInput, ListNodegroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "ListNodegroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListNodegroupsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListNodegroupsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListNodegroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListNodegroupsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListNodegroupsCommandOutput> {
    return deserializeAws_restJson1ListNodegroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
