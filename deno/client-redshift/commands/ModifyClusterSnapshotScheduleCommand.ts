import {
  RedshiftClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../RedshiftClient.ts";
import { ModifyClusterSnapshotScheduleMessage } from "../models/index.ts";
import {
  deserializeAws_queryModifyClusterSnapshotScheduleCommand,
  serializeAws_queryModifyClusterSnapshotScheduleCommand
} from "../protocols/Aws_query.ts";
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

export type ModifyClusterSnapshotScheduleCommandInput = ModifyClusterSnapshotScheduleMessage;
export type ModifyClusterSnapshotScheduleCommandOutput = __MetadataBearer;

export class ModifyClusterSnapshotScheduleCommand extends $Command<
  ModifyClusterSnapshotScheduleCommandInput,
  ModifyClusterSnapshotScheduleCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyClusterSnapshotScheduleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ModifyClusterSnapshotScheduleCommandInput,
    ModifyClusterSnapshotScheduleCommandOutput
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
    input: ModifyClusterSnapshotScheduleCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryModifyClusterSnapshotScheduleCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyClusterSnapshotScheduleCommandOutput> {
    return deserializeAws_queryModifyClusterSnapshotScheduleCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
