import { CognitoSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoSyncClient.ts";
import { SubscribeToDatasetRequest, SubscribeToDatasetResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1SubscribeToDatasetCommand,
  serializeAws_restJson1SubscribeToDatasetCommand,
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

export interface SubscribeToDatasetCommandInput extends SubscribeToDatasetRequest {}
export interface SubscribeToDatasetCommandOutput extends SubscribeToDatasetResponse, __MetadataBearer {}

/**
 * <p>Subscribes to receive notifications when a dataset is modified by another device.</p><p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>
 *       <examples>
 *          <example>
 *             <name>SubscribeToDataset</name>
 *             <description>The following examples have been edited for readability.</description>
 *             <request>
 * POST / HTTP/1.1
 * CONTENT-TYPE: application/json
 * X-AMZN-REQUESTID: 8b9932b7-201d-4418-a960-0a470e11de9f
 * X-AMZ-TARGET: com.amazonaws.cognito.sync.model.AWSCognitoSyncService.SubscribeToDataset
 * HOST: cognito-sync.us-east-1.amazonaws.com
 * X-AMZ-DATE: 20141004T195350Z
 * X-AMZ-SECURITY-TOKEN: <securitytoken>
 * AUTHORIZATION: AWS4-HMAC-SHA256 Credential=<credential>, SignedHeaders=content-type;content-length;host;x-amz-date;x-amz-target, Signature=<signature>
 *
 * {
 *     "Operation": "com.amazonaws.cognito.sync.model#SubscribeToDataset",
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
 * x-amzn-requestid: 8b9932b7-201d-4418-a960-0a470e11de9f
 * date: Sat, 04 Oct 2014 19:53:50 GMT
 * content-type: application/json
 * content-length: 99
 *
 * {
 *     "Output":
 *     {
 *         "__type": "com.amazonaws.cognito.sync.model#SubscribeToDatasetResponse"
 *     },
 *     "Version": "1.0"
 * }
 *                </response>
 *          </example>
 *       </examples>
 */
export class SubscribeToDatasetCommand extends $Command<
  SubscribeToDatasetCommandInput,
  SubscribeToDatasetCommandOutput,
  CognitoSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SubscribeToDatasetCommandInput) {
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
  ): Handler<SubscribeToDatasetCommandInput, SubscribeToDatasetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoSyncClient";
    const commandName = "SubscribeToDatasetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SubscribeToDatasetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SubscribeToDatasetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SubscribeToDatasetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SubscribeToDatasetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SubscribeToDatasetCommandOutput> {
    return deserializeAws_restJson1SubscribeToDatasetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
