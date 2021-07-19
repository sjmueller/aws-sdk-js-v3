import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient.ts";
import { DescribeNFSFileSharesInput, DescribeNFSFileSharesOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeNFSFileSharesCommand,
  serializeAws_json1_1DescribeNFSFileSharesCommand,
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

export interface DescribeNFSFileSharesCommandInput extends DescribeNFSFileSharesInput {}
export interface DescribeNFSFileSharesCommandOutput extends DescribeNFSFileSharesOutput, __MetadataBearer {}

/**
 * <p>Gets a description for one or more Network File System (NFS) file shares from an S3 File
 *          Gateway. This operation is only supported for S3 File Gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeNFSFileSharesCommand } from "../../client-storage-gateway/mod.ts";
 * // const { StorageGatewayClient, DescribeNFSFileSharesCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DescribeNFSFileSharesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeNFSFileSharesCommandInput} for command's `input` shape.
 * @see {@link DescribeNFSFileSharesCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeNFSFileSharesCommand extends $Command<
  DescribeNFSFileSharesCommandInput,
  DescribeNFSFileSharesCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeNFSFileSharesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeNFSFileSharesCommandInput, DescribeNFSFileSharesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DescribeNFSFileSharesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeNFSFileSharesInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeNFSFileSharesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeNFSFileSharesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeNFSFileSharesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeNFSFileSharesCommandOutput> {
    return deserializeAws_json1_1DescribeNFSFileSharesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
