
import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient.ts";
import { ApplyEnvironmentManagedActionRequest, ApplyEnvironmentManagedActionResult } from "../models/index.ts";
import {
  deserializeAws_queryApplyEnvironmentManagedActionCommand,
  serializeAws_queryApplyEnvironmentManagedActionCommand,
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

export type ApplyEnvironmentManagedActionCommandInput = ApplyEnvironmentManagedActionRequest;
export type ApplyEnvironmentManagedActionCommandOutput = ApplyEnvironmentManagedActionResult & __MetadataBearer;

export class ApplyEnvironmentManagedActionCommand extends $Command<
  ApplyEnvironmentManagedActionCommandInput,
  ApplyEnvironmentManagedActionCommandOutput,
  ElasticBeanstalkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ApplyEnvironmentManagedActionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticBeanstalkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ApplyEnvironmentManagedActionCommandInput, ApplyEnvironmentManagedActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ApplyEnvironmentManagedActionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ApplyEnvironmentManagedActionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ApplyEnvironmentManagedActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryApplyEnvironmentManagedActionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ApplyEnvironmentManagedActionCommandOutput> {
    return deserializeAws_queryApplyEnvironmentManagedActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
