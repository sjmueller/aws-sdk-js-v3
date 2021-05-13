import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient.ts";
import { ListAssignmentsForHITRequest, ListAssignmentsForHITResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListAssignmentsForHITCommand,
  serializeAws_json1_1ListAssignmentsForHITCommand,
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

export interface ListAssignmentsForHITCommandInput extends ListAssignmentsForHITRequest {}
export interface ListAssignmentsForHITCommandOutput extends ListAssignmentsForHITResponse, __MetadataBearer {}

/**
 * <p>
 *             The
 *             <code>ListAssignmentsForHIT</code>
 *             operation retrieves completed assignments for a HIT. You can use this
 *             operation to retrieve the results for a HIT.
 *         </p>
 *         <p> You can get assignments for a HIT at any time, even if the
 *             HIT is not yet Reviewable. If a HIT requested multiple assignments,
 *             and has received some results but has not yet become Reviewable, you
 *             can still retrieve the partial results with this operation.
 *         </p>
 *         <p> Use the AssignmentStatus parameter to control which set of
 *             assignments for a HIT are returned. The ListAssignmentsForHIT
 *             operation
 *             can return submitted assignments awaiting approval, or it can return
 *             assignments that have already been approved or rejected. You can set
 *             AssignmentStatus=Approved,Rejected to get assignments that have
 *             already been approved and rejected together in one result set.
 *         </p>
 *         <p> Only the Requester who created the HIT can retrieve the
 *             assignments for that HIT.
 *         </p>
 *         <p> Results are sorted and divided into numbered pages and the
 *             operation returns a single page of results. You can use the
 *             parameters
 *             of the operation to control sorting and pagination.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ListAssignmentsForHITCommand } from "../../client-mturk/mod.ts";
 * // const { MTurkClient, ListAssignmentsForHITCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new ListAssignmentsForHITCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAssignmentsForHITCommandInput} for command's `input` shape.
 * @see {@link ListAssignmentsForHITCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListAssignmentsForHITCommand extends $Command<
  ListAssignmentsForHITCommandInput,
  ListAssignmentsForHITCommandOutput,
  MTurkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAssignmentsForHITCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MTurkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAssignmentsForHITCommandInput, ListAssignmentsForHITCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "ListAssignmentsForHITCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAssignmentsForHITRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAssignmentsForHITResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAssignmentsForHITCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAssignmentsForHITCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAssignmentsForHITCommandOutput> {
    return deserializeAws_json1_1ListAssignmentsForHITCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
