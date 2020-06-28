import {
  GroundStationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../GroundStationClient.ts";
import {
  ListSatellitesRequest,
  ListSatellitesResponse
} from "../models/index.ts";
import {
  deserializeAws_restJson1ListSatellitesCommand,
  serializeAws_restJson1ListSatellitesCommand
} from "../protocols/Aws_restJson1.ts";
import { getSerdePlugin } from "../../middleware-serde/mod.ts";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "../../protocol-http/mod.ts";
import { Command as $Command } from "../../smithy-client/mod.ts";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext
} from "../../types/mod.ts";

export type ListSatellitesCommandInput = ListSatellitesRequest;
export type ListSatellitesCommandOutput = ListSatellitesResponse &
  __MetadataBearer;

export class ListSatellitesCommand extends $Command<
  ListSatellitesCommandInput,
  ListSatellitesCommandOutput,
  GroundStationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSatellitesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GroundStationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSatellitesCommandInput, ListSatellitesCommandOutput> {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListSatellitesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListSatellitesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListSatellitesCommandOutput> {
    return deserializeAws_restJson1ListSatellitesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
