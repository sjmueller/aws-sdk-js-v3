import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient.ts";
import { DeleteNodegroupRequest, DeleteNodegroupResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteNodegroupCommand,
  serializeAws_restJson1DeleteNodegroupCommand,
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

export interface DeleteNodegroupCommandInput extends DeleteNodegroupRequest {}
export interface DeleteNodegroupCommandOutput extends DeleteNodegroupResponse, __MetadataBearer {}

/**
 * <p>Deletes an Amazon EKS node group for a cluster.</p>
 */
export class DeleteNodegroupCommand extends $Command<
  DeleteNodegroupCommandInput,
  DeleteNodegroupCommandOutput,
  EKSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteNodegroupCommandInput) {
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
  ): Handler<DeleteNodegroupCommandInput, DeleteNodegroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "DeleteNodegroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteNodegroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteNodegroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteNodegroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteNodegroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteNodegroupCommandOutput> {
    return deserializeAws_restJson1DeleteNodegroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
