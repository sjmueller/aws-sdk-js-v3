import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient.ts";
import { CreateClusterParameterGroupMessage, CreateClusterParameterGroupResult } from "../models/models_0.ts";
import {
  deserializeAws_queryCreateClusterParameterGroupCommand,
  serializeAws_queryCreateClusterParameterGroupCommand,
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

export interface CreateClusterParameterGroupCommandInput extends CreateClusterParameterGroupMessage {}
export interface CreateClusterParameterGroupCommandOutput extends CreateClusterParameterGroupResult, __MetadataBearer {}

/**
 * <p>Creates an Amazon Redshift parameter group.</p>
 *         <p>Creating parameter groups is independent of creating clusters. You can associate a
 *             cluster with a parameter group when you create the cluster. You can also associate an
 *             existing cluster with a parameter group after the cluster is created by using <a>ModifyCluster</a>. </p>
 *         <p>Parameters in the parameter group define specific behavior that applies to the
 *             databases you create on the cluster.
 * For more information about parameters and parameter groups, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 */
export class CreateClusterParameterGroupCommand extends $Command<
  CreateClusterParameterGroupCommandInput,
  CreateClusterParameterGroupCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateClusterParameterGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateClusterParameterGroupCommandInput, CreateClusterParameterGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "CreateClusterParameterGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateClusterParameterGroupMessage.filterSensitiveLog,
      outputFilterSensitiveLog: CreateClusterParameterGroupResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateClusterParameterGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateClusterParameterGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateClusterParameterGroupCommandOutput> {
    return deserializeAws_queryCreateClusterParameterGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
