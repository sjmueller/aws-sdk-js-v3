import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient.ts";
import { DescribeAddonVersionsRequest, DescribeAddonVersionsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeAddonVersionsCommand,
  serializeAws_restJson1DescribeAddonVersionsCommand,
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

export interface DescribeAddonVersionsCommandInput extends DescribeAddonVersionsRequest {}
export interface DescribeAddonVersionsCommandOutput extends DescribeAddonVersionsResponse, __MetadataBearer {}

/**
 * <p>Describes the Kubernetes versions that the add-on can be used with.</p>
 */
export class DescribeAddonVersionsCommand extends $Command<
  DescribeAddonVersionsCommandInput,
  DescribeAddonVersionsCommandOutput,
  EKSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAddonVersionsCommandInput) {
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
  ): Handler<DescribeAddonVersionsCommandInput, DescribeAddonVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "DescribeAddonVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAddonVersionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAddonVersionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAddonVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeAddonVersionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAddonVersionsCommandOutput> {
    return deserializeAws_restJson1DescribeAddonVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
