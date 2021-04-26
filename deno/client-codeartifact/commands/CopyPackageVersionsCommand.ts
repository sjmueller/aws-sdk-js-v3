import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient.ts";
import { CopyPackageVersionsRequest, CopyPackageVersionsResult } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CopyPackageVersionsCommand,
  serializeAws_restJson1CopyPackageVersionsCommand,
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

export interface CopyPackageVersionsCommandInput extends CopyPackageVersionsRequest {}
export interface CopyPackageVersionsCommandOutput extends CopyPackageVersionsResult, __MetadataBearer {}

/**
 * <p>
 *         Copies package versions from one repository to another repository in the same domain.
 *       </p>
 *          <note>
 *             <p>
 *         You must specify <code>versions</code> or <code>versionRevisions</code>. You cannot specify both.
 *       </p>
 *          </note>
 */
export class CopyPackageVersionsCommand extends $Command<
  CopyPackageVersionsCommandInput,
  CopyPackageVersionsCommandOutput,
  CodeartifactClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CopyPackageVersionsCommandInput) {
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
  ): Handler<CopyPackageVersionsCommandInput, CopyPackageVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeartifactClient";
    const commandName = "CopyPackageVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CopyPackageVersionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CopyPackageVersionsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CopyPackageVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CopyPackageVersionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CopyPackageVersionsCommandOutput> {
    return deserializeAws_restJson1CopyPackageVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
