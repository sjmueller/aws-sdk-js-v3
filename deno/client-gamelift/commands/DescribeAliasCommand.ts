import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient.ts";
import { DescribeAliasInput, DescribeAliasOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeAliasCommand,
  serializeAws_json1_1DescribeAliasCommand,
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

export type DescribeAliasCommandInput = DescribeAliasInput;
export type DescribeAliasCommandOutput = DescribeAliasOutput & __MetadataBearer;

/**
 * <p>Retrieves properties for an alias. This operation returns all alias metadata and
 *             settings. To get an alias's target fleet ID only, use <code>ResolveAlias</code>. </p>
 *         <p>To get alias properties, specify the alias ID. If successful, the requested alias
 *             record is returned.</p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreateAlias</a> |
 *                     <a>ListAliases</a> |
 *                     <a>DescribeAlias</a> |
 *                     <a>UpdateAlias</a> |
 *                     <a>DeleteAlias</a> |
 *                     <a>ResolveAlias</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 */
export class DescribeAliasCommand extends $Command<
  DescribeAliasCommandInput,
  DescribeAliasCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAliasCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameLiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAliasCommandInput, DescribeAliasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DescribeAliasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAliasInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAliasOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAliasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeAliasCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAliasCommandOutput> {
    return deserializeAws_json1_1DescribeAliasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
