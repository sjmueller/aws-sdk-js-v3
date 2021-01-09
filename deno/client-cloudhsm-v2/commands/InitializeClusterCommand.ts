import { CloudHSMV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMV2Client.ts";
import { InitializeClusterRequest, InitializeClusterResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1InitializeClusterCommand,
  serializeAws_json1_1InitializeClusterCommand,
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

export type InitializeClusterCommandInput = InitializeClusterRequest;
export type InitializeClusterCommandOutput = InitializeClusterResponse & __MetadataBearer;

/**
 * <p>Claims an AWS CloudHSM cluster by submitting the cluster certificate issued by your
 *       issuing certificate authority (CA) and the CA's root certificate. Before you can claim a
 *       cluster, you must sign the cluster's certificate signing request (CSR) with your issuing CA.
 *       To get the cluster's CSR, use <a>DescribeClusters</a>.</p>
 */
export class InitializeClusterCommand extends $Command<
  InitializeClusterCommandInput,
  InitializeClusterCommandOutput,
  CloudHSMV2ClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: InitializeClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudHSMV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<InitializeClusterCommandInput, InitializeClusterCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudHSMV2Client";
    const commandName = "InitializeClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: InitializeClusterRequest.filterSensitiveLog,
      outputFilterSensitiveLog: InitializeClusterResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: InitializeClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1InitializeClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<InitializeClusterCommandOutput> {
    return deserializeAws_json1_1InitializeClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
