import { CognitoSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoSyncClient.ts";
import { UnsubscribeFromDatasetRequest, UnsubscribeFromDatasetResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1UnsubscribeFromDatasetCommand,
  serializeAws_restJson1UnsubscribeFromDatasetCommand,
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

export interface UnsubscribeFromDatasetCommandInput extends UnsubscribeFromDatasetRequest {}
export interface UnsubscribeFromDatasetCommandOutput extends UnsubscribeFromDatasetResponse, __MetadataBearer {}

/**
 * <p>Unsubscribes from receiving notifications when a dataset is modified by another device.</p><p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>
 *       <examples>
 *          <example>
 *             <name>UnsubscribeFromDataset</name>
 *             <description>The following examples have been edited for readability.</description>
 *             <request>
 * POST / HTTP/1.1
 * CONTENT-TYPE: application/json
 * X-AMZ-REQUESTSUPERTRACE: true
 * X-AMZN-REQUESTID: 676896d6-14ca-45b1-8029-6d36b10a077e
 * X-AMZ-TARGET: com.amazonaws.cognito.sync.model.AWSCognitoSyncService.UnsubscribeFromDataset
 * HOST: cognito-sync.us-east-1.amazonaws.com
 * X-AMZ-DATE: 20141004T195446Z
 * X-AMZ-SECURITY-TOKEN: <securitytoken>
 * AUTHORIZATION: AWS4-HMAC-SHA256 Credential=<credential>, SignedHeaders=content-type;content-length;host;x-amz-date;x-amz-target, Signature=<signature>
 *
 * {
 *     "Operation": "com.amazonaws.cognito.sync.model#UnsubscribeFromDataset",
 *     "Service": "com.amazonaws.cognito.sync.model#AWSCognitoSyncService",
 *     "Input":
 *     {
 *         "IdentityPoolId": "ID_POOL_ID",
 *         "IdentityId": "IDENTITY_ID",
 *         "DatasetName": "Rufus",
 *         "DeviceId": "5cd28fbe-dd83-47ab-9f83-19093a5fb014"
 *     }
 * }
 *                </request>
 *             <response>
 * 1.1 200 OK
 * x-amzn-requestid: 676896d6-14ca-45b1-8029-6d36b10a077e
 * date: Sat, 04 Oct 2014 19:54:46 GMT
 * content-type: application/json
 * content-length: 103
 *
 * {
 *     "Output":
 *     {
 *         "__type": "com.amazonaws.cognito.sync.model#UnsubscribeFromDatasetResponse"
 *     },
 *     "Version": "1.0"
 * }
 *                </response>
 *          </example>
 *       </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoSyncClient, UnsubscribeFromDatasetCommand } from "../../client-cognito-sync/mod.ts";
 * // const { CognitoSyncClient, UnsubscribeFromDatasetCommand } = require("@aws-sdk/client-cognito-sync"); // CommonJS import
 * const client = new CognitoSyncClient(config);
 * const command = new UnsubscribeFromDatasetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UnsubscribeFromDatasetCommandInput} for command's `input` shape.
 * @see {@link UnsubscribeFromDatasetCommandOutput} for command's `response` shape.
 * @see {@link CognitoSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UnsubscribeFromDatasetCommand extends $Command<
  UnsubscribeFromDatasetCommandInput,
  UnsubscribeFromDatasetCommandOutput,
  CognitoSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UnsubscribeFromDatasetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UnsubscribeFromDatasetCommandInput, UnsubscribeFromDatasetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoSyncClient";
    const commandName = "UnsubscribeFromDatasetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UnsubscribeFromDatasetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UnsubscribeFromDatasetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UnsubscribeFromDatasetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UnsubscribeFromDatasetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UnsubscribeFromDatasetCommandOutput> {
    return deserializeAws_restJson1UnsubscribeFromDatasetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
