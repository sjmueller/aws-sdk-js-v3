
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient.ts";
import { CreateDBClusterEndpointMessage, DBClusterEndpoint } from "../models/models_0.ts";
import {
  deserializeAws_queryCreateDBClusterEndpointCommand,
  serializeAws_queryCreateDBClusterEndpointCommand,
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

export type CreateDBClusterEndpointCommandInput = CreateDBClusterEndpointMessage;
export type CreateDBClusterEndpointCommandOutput = DBClusterEndpoint & __MetadataBearer;

export class CreateDBClusterEndpointCommand extends $Command<
  CreateDBClusterEndpointCommandInput,
  CreateDBClusterEndpointCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDBClusterEndpointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDBClusterEndpointCommandInput, CreateDBClusterEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "CreateDBClusterEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDBClusterEndpointMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DBClusterEndpoint.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDBClusterEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateDBClusterEndpointCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDBClusterEndpointCommandOutput> {
    return deserializeAws_queryCreateDBClusterEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
