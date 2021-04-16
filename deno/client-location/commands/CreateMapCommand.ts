import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient.ts";
import { CreateMapRequest, CreateMapResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreateMapCommand,
  serializeAws_restJson1CreateMapCommand,
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

export type CreateMapCommandInput = CreateMapRequest;
export type CreateMapCommandOutput = CreateMapResponse & __MetadataBearer;

/**
 * <p>Creates a map resource in your AWS account, which provides map tiles of different
 *             styles sourced from global location data providers.</p>
 *         <note>
 *             <p>By using Maps, you agree that AWS may transmit your API queries to your selected
 *                 third party provider for processing, which may be outside the AWS region you are
 *                 currently using. For more information, see the <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a> for Amazon
 *                 Location Service. </p>
 *         </note>
 */
export class CreateMapCommand extends $Command<
  CreateMapCommandInput,
  CreateMapCommandOutput,
  LocationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateMapCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LocationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateMapCommandInput, CreateMapCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "CreateMapCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateMapRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateMapResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateMapCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateMapCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateMapCommandOutput> {
    return deserializeAws_restJson1CreateMapCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
