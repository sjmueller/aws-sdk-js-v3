import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient.ts";
import { UpdatePackageVersionsStatusRequest, UpdatePackageVersionsStatusResult } from "../models/models_0.ts";
import {
  deserializeAws_restJson1UpdatePackageVersionsStatusCommand,
  serializeAws_restJson1UpdatePackageVersionsStatusCommand,
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

export type UpdatePackageVersionsStatusCommandInput = UpdatePackageVersionsStatusRequest;
export type UpdatePackageVersionsStatusCommandOutput = UpdatePackageVersionsStatusResult & __MetadataBearer;

/**
 * <p>
 *       Updates the status of one or more versions of a package.
 *     </p>
 */
export class UpdatePackageVersionsStatusCommand extends $Command<
  UpdatePackageVersionsStatusCommandInput,
  UpdatePackageVersionsStatusCommandOutput,
  CodeartifactClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdatePackageVersionsStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeartifactClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdatePackageVersionsStatusCommandInput, UpdatePackageVersionsStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeartifactClient";
    const commandName = "UpdatePackageVersionsStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdatePackageVersionsStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdatePackageVersionsStatusResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdatePackageVersionsStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdatePackageVersionsStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdatePackageVersionsStatusCommandOutput> {
    return deserializeAws_restJson1UpdatePackageVersionsStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
