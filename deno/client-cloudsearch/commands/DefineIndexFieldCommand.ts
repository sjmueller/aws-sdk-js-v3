
import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient.ts";
import { DefineIndexFieldRequest, DefineIndexFieldResponse } from "../models/index.ts";
import {
  deserializeAws_queryDefineIndexFieldCommand,
  serializeAws_queryDefineIndexFieldCommand,
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

export type DefineIndexFieldCommandInput = DefineIndexFieldRequest;
export type DefineIndexFieldCommandOutput = DefineIndexFieldResponse & __MetadataBearer;

export class DefineIndexFieldCommand extends $Command<
  DefineIndexFieldCommandInput,
  DefineIndexFieldCommandOutput,
  CloudSearchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DefineIndexFieldCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DefineIndexFieldCommandInput, DefineIndexFieldCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DefineIndexFieldRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DefineIndexFieldResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DefineIndexFieldCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDefineIndexFieldCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DefineIndexFieldCommandOutput> {
    return deserializeAws_queryDefineIndexFieldCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
