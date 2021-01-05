import { AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput } from "./commands/AddTagsToResourceCommand.ts";
import { CancelCommandCommandInput, CancelCommandCommandOutput } from "./commands/CancelCommandCommand.ts";
import {
  CancelMaintenanceWindowExecutionCommandInput,
  CancelMaintenanceWindowExecutionCommandOutput,
} from "./commands/CancelMaintenanceWindowExecutionCommand.ts";
import { CreateActivationCommandInput, CreateActivationCommandOutput } from "./commands/CreateActivationCommand.ts";
import {
  CreateAssociationBatchCommandInput,
  CreateAssociationBatchCommandOutput,
} from "./commands/CreateAssociationBatchCommand.ts";
import { CreateAssociationCommandInput, CreateAssociationCommandOutput } from "./commands/CreateAssociationCommand.ts";
import { CreateDocumentCommandInput, CreateDocumentCommandOutput } from "./commands/CreateDocumentCommand.ts";
import {
  CreateMaintenanceWindowCommandInput,
  CreateMaintenanceWindowCommandOutput,
} from "./commands/CreateMaintenanceWindowCommand.ts";
import { CreateOpsItemCommandInput, CreateOpsItemCommandOutput } from "./commands/CreateOpsItemCommand.ts";
import { CreateOpsMetadataCommandInput, CreateOpsMetadataCommandOutput } from "./commands/CreateOpsMetadataCommand.ts";
import {
  CreatePatchBaselineCommandInput,
  CreatePatchBaselineCommandOutput,
} from "./commands/CreatePatchBaselineCommand.ts";
import {
  CreateResourceDataSyncCommandInput,
  CreateResourceDataSyncCommandOutput,
} from "./commands/CreateResourceDataSyncCommand.ts";
import { DeleteActivationCommandInput, DeleteActivationCommandOutput } from "./commands/DeleteActivationCommand.ts";
import { DeleteAssociationCommandInput, DeleteAssociationCommandOutput } from "./commands/DeleteAssociationCommand.ts";
import { DeleteDocumentCommandInput, DeleteDocumentCommandOutput } from "./commands/DeleteDocumentCommand.ts";
import { DeleteInventoryCommandInput, DeleteInventoryCommandOutput } from "./commands/DeleteInventoryCommand.ts";
import {
  DeleteMaintenanceWindowCommandInput,
  DeleteMaintenanceWindowCommandOutput,
} from "./commands/DeleteMaintenanceWindowCommand.ts";
import { DeleteOpsMetadataCommandInput, DeleteOpsMetadataCommandOutput } from "./commands/DeleteOpsMetadataCommand.ts";
import { DeleteParameterCommandInput, DeleteParameterCommandOutput } from "./commands/DeleteParameterCommand.ts";
import { DeleteParametersCommandInput, DeleteParametersCommandOutput } from "./commands/DeleteParametersCommand.ts";
import {
  DeletePatchBaselineCommandInput,
  DeletePatchBaselineCommandOutput,
} from "./commands/DeletePatchBaselineCommand.ts";
import {
  DeleteResourceDataSyncCommandInput,
  DeleteResourceDataSyncCommandOutput,
} from "./commands/DeleteResourceDataSyncCommand.ts";
import {
  DeregisterManagedInstanceCommandInput,
  DeregisterManagedInstanceCommandOutput,
} from "./commands/DeregisterManagedInstanceCommand.ts";
import {
  DeregisterPatchBaselineForPatchGroupCommandInput,
  DeregisterPatchBaselineForPatchGroupCommandOutput,
} from "./commands/DeregisterPatchBaselineForPatchGroupCommand.ts";
import {
  DeregisterTargetFromMaintenanceWindowCommandInput,
  DeregisterTargetFromMaintenanceWindowCommandOutput,
} from "./commands/DeregisterTargetFromMaintenanceWindowCommand.ts";
import {
  DeregisterTaskFromMaintenanceWindowCommandInput,
  DeregisterTaskFromMaintenanceWindowCommandOutput,
} from "./commands/DeregisterTaskFromMaintenanceWindowCommand.ts";
import {
  DescribeActivationsCommandInput,
  DescribeActivationsCommandOutput,
} from "./commands/DescribeActivationsCommand.ts";
import {
  DescribeAssociationCommandInput,
  DescribeAssociationCommandOutput,
} from "./commands/DescribeAssociationCommand.ts";
import {
  DescribeAssociationExecutionTargetsCommandInput,
  DescribeAssociationExecutionTargetsCommandOutput,
} from "./commands/DescribeAssociationExecutionTargetsCommand.ts";
import {
  DescribeAssociationExecutionsCommandInput,
  DescribeAssociationExecutionsCommandOutput,
} from "./commands/DescribeAssociationExecutionsCommand.ts";
import {
  DescribeAutomationExecutionsCommandInput,
  DescribeAutomationExecutionsCommandOutput,
} from "./commands/DescribeAutomationExecutionsCommand.ts";
import {
  DescribeAutomationStepExecutionsCommandInput,
  DescribeAutomationStepExecutionsCommandOutput,
} from "./commands/DescribeAutomationStepExecutionsCommand.ts";
import {
  DescribeAvailablePatchesCommandInput,
  DescribeAvailablePatchesCommandOutput,
} from "./commands/DescribeAvailablePatchesCommand.ts";
import { DescribeDocumentCommandInput, DescribeDocumentCommandOutput } from "./commands/DescribeDocumentCommand.ts";
import {
  DescribeDocumentPermissionCommandInput,
  DescribeDocumentPermissionCommandOutput,
} from "./commands/DescribeDocumentPermissionCommand.ts";
import {
  DescribeEffectiveInstanceAssociationsCommandInput,
  DescribeEffectiveInstanceAssociationsCommandOutput,
} from "./commands/DescribeEffectiveInstanceAssociationsCommand.ts";
import {
  DescribeEffectivePatchesForPatchBaselineCommandInput,
  DescribeEffectivePatchesForPatchBaselineCommandOutput,
} from "./commands/DescribeEffectivePatchesForPatchBaselineCommand.ts";
import {
  DescribeInstanceAssociationsStatusCommandInput,
  DescribeInstanceAssociationsStatusCommandOutput,
} from "./commands/DescribeInstanceAssociationsStatusCommand.ts";
import {
  DescribeInstanceInformationCommandInput,
  DescribeInstanceInformationCommandOutput,
} from "./commands/DescribeInstanceInformationCommand.ts";
import {
  DescribeInstancePatchStatesCommandInput,
  DescribeInstancePatchStatesCommandOutput,
} from "./commands/DescribeInstancePatchStatesCommand.ts";
import {
  DescribeInstancePatchStatesForPatchGroupCommandInput,
  DescribeInstancePatchStatesForPatchGroupCommandOutput,
} from "./commands/DescribeInstancePatchStatesForPatchGroupCommand.ts";
import {
  DescribeInstancePatchesCommandInput,
  DescribeInstancePatchesCommandOutput,
} from "./commands/DescribeInstancePatchesCommand.ts";
import {
  DescribeInventoryDeletionsCommandInput,
  DescribeInventoryDeletionsCommandOutput,
} from "./commands/DescribeInventoryDeletionsCommand.ts";
import {
  DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput,
  DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput,
} from "./commands/DescribeMaintenanceWindowExecutionTaskInvocationsCommand.ts";
import {
  DescribeMaintenanceWindowExecutionTasksCommandInput,
  DescribeMaintenanceWindowExecutionTasksCommandOutput,
} from "./commands/DescribeMaintenanceWindowExecutionTasksCommand.ts";
import {
  DescribeMaintenanceWindowExecutionsCommandInput,
  DescribeMaintenanceWindowExecutionsCommandOutput,
} from "./commands/DescribeMaintenanceWindowExecutionsCommand.ts";
import {
  DescribeMaintenanceWindowScheduleCommandInput,
  DescribeMaintenanceWindowScheduleCommandOutput,
} from "./commands/DescribeMaintenanceWindowScheduleCommand.ts";
import {
  DescribeMaintenanceWindowTargetsCommandInput,
  DescribeMaintenanceWindowTargetsCommandOutput,
} from "./commands/DescribeMaintenanceWindowTargetsCommand.ts";
import {
  DescribeMaintenanceWindowTasksCommandInput,
  DescribeMaintenanceWindowTasksCommandOutput,
} from "./commands/DescribeMaintenanceWindowTasksCommand.ts";
import {
  DescribeMaintenanceWindowsCommandInput,
  DescribeMaintenanceWindowsCommandOutput,
} from "./commands/DescribeMaintenanceWindowsCommand.ts";
import {
  DescribeMaintenanceWindowsForTargetCommandInput,
  DescribeMaintenanceWindowsForTargetCommandOutput,
} from "./commands/DescribeMaintenanceWindowsForTargetCommand.ts";
import { DescribeOpsItemsCommandInput, DescribeOpsItemsCommandOutput } from "./commands/DescribeOpsItemsCommand.ts";
import { DescribeParametersCommandInput, DescribeParametersCommandOutput } from "./commands/DescribeParametersCommand.ts";
import {
  DescribePatchBaselinesCommandInput,
  DescribePatchBaselinesCommandOutput,
} from "./commands/DescribePatchBaselinesCommand.ts";
import {
  DescribePatchGroupStateCommandInput,
  DescribePatchGroupStateCommandOutput,
} from "./commands/DescribePatchGroupStateCommand.ts";
import {
  DescribePatchGroupsCommandInput,
  DescribePatchGroupsCommandOutput,
} from "./commands/DescribePatchGroupsCommand.ts";
import {
  DescribePatchPropertiesCommandInput,
  DescribePatchPropertiesCommandOutput,
} from "./commands/DescribePatchPropertiesCommand.ts";
import { DescribeSessionsCommandInput, DescribeSessionsCommandOutput } from "./commands/DescribeSessionsCommand.ts";
import {
  GetAutomationExecutionCommandInput,
  GetAutomationExecutionCommandOutput,
} from "./commands/GetAutomationExecutionCommand.ts";
import { GetCalendarStateCommandInput, GetCalendarStateCommandOutput } from "./commands/GetCalendarStateCommand.ts";
import {
  GetCommandInvocationCommandInput,
  GetCommandInvocationCommandOutput,
} from "./commands/GetCommandInvocationCommand.ts";
import {
  GetConnectionStatusCommandInput,
  GetConnectionStatusCommandOutput,
} from "./commands/GetConnectionStatusCommand.ts";
import {
  GetDefaultPatchBaselineCommandInput,
  GetDefaultPatchBaselineCommandOutput,
} from "./commands/GetDefaultPatchBaselineCommand.ts";
import {
  GetDeployablePatchSnapshotForInstanceCommandInput,
  GetDeployablePatchSnapshotForInstanceCommandOutput,
} from "./commands/GetDeployablePatchSnapshotForInstanceCommand.ts";
import { GetDocumentCommandInput, GetDocumentCommandOutput } from "./commands/GetDocumentCommand.ts";
import { GetInventoryCommandInput, GetInventoryCommandOutput } from "./commands/GetInventoryCommand.ts";
import { GetInventorySchemaCommandInput, GetInventorySchemaCommandOutput } from "./commands/GetInventorySchemaCommand.ts";
import {
  GetMaintenanceWindowCommandInput,
  GetMaintenanceWindowCommandOutput,
} from "./commands/GetMaintenanceWindowCommand.ts";
import {
  GetMaintenanceWindowExecutionCommandInput,
  GetMaintenanceWindowExecutionCommandOutput,
} from "./commands/GetMaintenanceWindowExecutionCommand.ts";
import {
  GetMaintenanceWindowExecutionTaskCommandInput,
  GetMaintenanceWindowExecutionTaskCommandOutput,
} from "./commands/GetMaintenanceWindowExecutionTaskCommand.ts";
import {
  GetMaintenanceWindowExecutionTaskInvocationCommandInput,
  GetMaintenanceWindowExecutionTaskInvocationCommandOutput,
} from "./commands/GetMaintenanceWindowExecutionTaskInvocationCommand.ts";
import {
  GetMaintenanceWindowTaskCommandInput,
  GetMaintenanceWindowTaskCommandOutput,
} from "./commands/GetMaintenanceWindowTaskCommand.ts";
import { GetOpsItemCommandInput, GetOpsItemCommandOutput } from "./commands/GetOpsItemCommand.ts";
import { GetOpsMetadataCommandInput, GetOpsMetadataCommandOutput } from "./commands/GetOpsMetadataCommand.ts";
import { GetOpsSummaryCommandInput, GetOpsSummaryCommandOutput } from "./commands/GetOpsSummaryCommand.ts";
import { GetParameterCommandInput, GetParameterCommandOutput } from "./commands/GetParameterCommand.ts";
import {
  GetParameterHistoryCommandInput,
  GetParameterHistoryCommandOutput,
} from "./commands/GetParameterHistoryCommand.ts";
import {
  GetParametersByPathCommandInput,
  GetParametersByPathCommandOutput,
} from "./commands/GetParametersByPathCommand.ts";
import { GetParametersCommandInput, GetParametersCommandOutput } from "./commands/GetParametersCommand.ts";
import { GetPatchBaselineCommandInput, GetPatchBaselineCommandOutput } from "./commands/GetPatchBaselineCommand.ts";
import {
  GetPatchBaselineForPatchGroupCommandInput,
  GetPatchBaselineForPatchGroupCommandOutput,
} from "./commands/GetPatchBaselineForPatchGroupCommand.ts";
import { GetServiceSettingCommandInput, GetServiceSettingCommandOutput } from "./commands/GetServiceSettingCommand.ts";
import {
  LabelParameterVersionCommandInput,
  LabelParameterVersionCommandOutput,
} from "./commands/LabelParameterVersionCommand.ts";
import {
  ListAssociationVersionsCommandInput,
  ListAssociationVersionsCommandOutput,
} from "./commands/ListAssociationVersionsCommand.ts";
import { ListAssociationsCommandInput, ListAssociationsCommandOutput } from "./commands/ListAssociationsCommand.ts";
import {
  ListCommandInvocationsCommandInput,
  ListCommandInvocationsCommandOutput,
} from "./commands/ListCommandInvocationsCommand.ts";
import { ListCommandsCommandInput, ListCommandsCommandOutput } from "./commands/ListCommandsCommand.ts";
import {
  ListComplianceItemsCommandInput,
  ListComplianceItemsCommandOutput,
} from "./commands/ListComplianceItemsCommand.ts";
import {
  ListComplianceSummariesCommandInput,
  ListComplianceSummariesCommandOutput,
} from "./commands/ListComplianceSummariesCommand.ts";
import {
  ListDocumentVersionsCommandInput,
  ListDocumentVersionsCommandOutput,
} from "./commands/ListDocumentVersionsCommand.ts";
import { ListDocumentsCommandInput, ListDocumentsCommandOutput } from "./commands/ListDocumentsCommand.ts";
import {
  ListInventoryEntriesCommandInput,
  ListInventoryEntriesCommandOutput,
} from "./commands/ListInventoryEntriesCommand.ts";
import { ListOpsMetadataCommandInput, ListOpsMetadataCommandOutput } from "./commands/ListOpsMetadataCommand.ts";
import {
  ListResourceComplianceSummariesCommandInput,
  ListResourceComplianceSummariesCommandOutput,
} from "./commands/ListResourceComplianceSummariesCommand.ts";
import {
  ListResourceDataSyncCommandInput,
  ListResourceDataSyncCommandOutput,
} from "./commands/ListResourceDataSyncCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import {
  ModifyDocumentPermissionCommandInput,
  ModifyDocumentPermissionCommandOutput,
} from "./commands/ModifyDocumentPermissionCommand.ts";
import { PutComplianceItemsCommandInput, PutComplianceItemsCommandOutput } from "./commands/PutComplianceItemsCommand.ts";
import { PutInventoryCommandInput, PutInventoryCommandOutput } from "./commands/PutInventoryCommand.ts";
import { PutParameterCommandInput, PutParameterCommandOutput } from "./commands/PutParameterCommand.ts";
import {
  RegisterDefaultPatchBaselineCommandInput,
  RegisterDefaultPatchBaselineCommandOutput,
} from "./commands/RegisterDefaultPatchBaselineCommand.ts";
import {
  RegisterPatchBaselineForPatchGroupCommandInput,
  RegisterPatchBaselineForPatchGroupCommandOutput,
} from "./commands/RegisterPatchBaselineForPatchGroupCommand.ts";
import {
  RegisterTargetWithMaintenanceWindowCommandInput,
  RegisterTargetWithMaintenanceWindowCommandOutput,
} from "./commands/RegisterTargetWithMaintenanceWindowCommand.ts";
import {
  RegisterTaskWithMaintenanceWindowCommandInput,
  RegisterTaskWithMaintenanceWindowCommandOutput,
} from "./commands/RegisterTaskWithMaintenanceWindowCommand.ts";
import {
  RemoveTagsFromResourceCommandInput,
  RemoveTagsFromResourceCommandOutput,
} from "./commands/RemoveTagsFromResourceCommand.ts";
import {
  ResetServiceSettingCommandInput,
  ResetServiceSettingCommandOutput,
} from "./commands/ResetServiceSettingCommand.ts";
import { ResumeSessionCommandInput, ResumeSessionCommandOutput } from "./commands/ResumeSessionCommand.ts";
import {
  SendAutomationSignalCommandInput,
  SendAutomationSignalCommandOutput,
} from "./commands/SendAutomationSignalCommand.ts";
import { SendCommandCommandInput, SendCommandCommandOutput } from "./commands/SendCommandCommand.ts";
import {
  StartAssociationsOnceCommandInput,
  StartAssociationsOnceCommandOutput,
} from "./commands/StartAssociationsOnceCommand.ts";
import {
  StartAutomationExecutionCommandInput,
  StartAutomationExecutionCommandOutput,
} from "./commands/StartAutomationExecutionCommand.ts";
import { StartSessionCommandInput, StartSessionCommandOutput } from "./commands/StartSessionCommand.ts";
import {
  StopAutomationExecutionCommandInput,
  StopAutomationExecutionCommandOutput,
} from "./commands/StopAutomationExecutionCommand.ts";
import { TerminateSessionCommandInput, TerminateSessionCommandOutput } from "./commands/TerminateSessionCommand.ts";
import { UpdateAssociationCommandInput, UpdateAssociationCommandOutput } from "./commands/UpdateAssociationCommand.ts";
import {
  UpdateAssociationStatusCommandInput,
  UpdateAssociationStatusCommandOutput,
} from "./commands/UpdateAssociationStatusCommand.ts";
import { UpdateDocumentCommandInput, UpdateDocumentCommandOutput } from "./commands/UpdateDocumentCommand.ts";
import {
  UpdateDocumentDefaultVersionCommandInput,
  UpdateDocumentDefaultVersionCommandOutput,
} from "./commands/UpdateDocumentDefaultVersionCommand.ts";
import {
  UpdateMaintenanceWindowCommandInput,
  UpdateMaintenanceWindowCommandOutput,
} from "./commands/UpdateMaintenanceWindowCommand.ts";
import {
  UpdateMaintenanceWindowTargetCommandInput,
  UpdateMaintenanceWindowTargetCommandOutput,
} from "./commands/UpdateMaintenanceWindowTargetCommand.ts";
import {
  UpdateMaintenanceWindowTaskCommandInput,
  UpdateMaintenanceWindowTaskCommandOutput,
} from "./commands/UpdateMaintenanceWindowTaskCommand.ts";
import {
  UpdateManagedInstanceRoleCommandInput,
  UpdateManagedInstanceRoleCommandOutput,
} from "./commands/UpdateManagedInstanceRoleCommand.ts";
import { UpdateOpsItemCommandInput, UpdateOpsItemCommandOutput } from "./commands/UpdateOpsItemCommand.ts";
import { UpdateOpsMetadataCommandInput, UpdateOpsMetadataCommandOutput } from "./commands/UpdateOpsMetadataCommand.ts";
import {
  UpdatePatchBaselineCommandInput,
  UpdatePatchBaselineCommandOutput,
} from "./commands/UpdatePatchBaselineCommand.ts";
import {
  UpdateResourceDataSyncCommandInput,
  UpdateResourceDataSyncCommandOutput,
} from "./commands/UpdateResourceDataSyncCommand.ts";
import {
  UpdateServiceSettingCommandInput,
  UpdateServiceSettingCommandOutput,
} from "./commands/UpdateServiceSettingCommand.ts";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig.ts";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "../config-resolver/mod.ts";
import { getContentLengthPlugin } from "../middleware-content-length/mod.ts";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "../middleware-host-header/mod.ts";
import { getLoggerPlugin } from "../middleware-logger/mod.ts";
import { RetryInputConfig, RetryResolvedConfig, getRetryPlugin, resolveRetryConfig } from "../middleware-retry/mod.ts";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "../middleware-signing/mod.ts";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "../middleware-user-agent/mod.ts";
import { HttpHandler as __HttpHandler } from "../protocol-http/mod.ts";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "../smithy-client/mod.ts";
import {
  Provider,
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "../types/mod.ts";

export type ServiceInputTypes =
  | AddTagsToResourceCommandInput
  | CancelCommandCommandInput
  | CancelMaintenanceWindowExecutionCommandInput
  | CreateActivationCommandInput
  | CreateAssociationBatchCommandInput
  | CreateAssociationCommandInput
  | CreateDocumentCommandInput
  | CreateMaintenanceWindowCommandInput
  | CreateOpsItemCommandInput
  | CreateOpsMetadataCommandInput
  | CreatePatchBaselineCommandInput
  | CreateResourceDataSyncCommandInput
  | DeleteActivationCommandInput
  | DeleteAssociationCommandInput
  | DeleteDocumentCommandInput
  | DeleteInventoryCommandInput
  | DeleteMaintenanceWindowCommandInput
  | DeleteOpsMetadataCommandInput
  | DeleteParameterCommandInput
  | DeleteParametersCommandInput
  | DeletePatchBaselineCommandInput
  | DeleteResourceDataSyncCommandInput
  | DeregisterManagedInstanceCommandInput
  | DeregisterPatchBaselineForPatchGroupCommandInput
  | DeregisterTargetFromMaintenanceWindowCommandInput
  | DeregisterTaskFromMaintenanceWindowCommandInput
  | DescribeActivationsCommandInput
  | DescribeAssociationCommandInput
  | DescribeAssociationExecutionTargetsCommandInput
  | DescribeAssociationExecutionsCommandInput
  | DescribeAutomationExecutionsCommandInput
  | DescribeAutomationStepExecutionsCommandInput
  | DescribeAvailablePatchesCommandInput
  | DescribeDocumentCommandInput
  | DescribeDocumentPermissionCommandInput
  | DescribeEffectiveInstanceAssociationsCommandInput
  | DescribeEffectivePatchesForPatchBaselineCommandInput
  | DescribeInstanceAssociationsStatusCommandInput
  | DescribeInstanceInformationCommandInput
  | DescribeInstancePatchStatesCommandInput
  | DescribeInstancePatchStatesForPatchGroupCommandInput
  | DescribeInstancePatchesCommandInput
  | DescribeInventoryDeletionsCommandInput
  | DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput
  | DescribeMaintenanceWindowExecutionTasksCommandInput
  | DescribeMaintenanceWindowExecutionsCommandInput
  | DescribeMaintenanceWindowScheduleCommandInput
  | DescribeMaintenanceWindowTargetsCommandInput
  | DescribeMaintenanceWindowTasksCommandInput
  | DescribeMaintenanceWindowsCommandInput
  | DescribeMaintenanceWindowsForTargetCommandInput
  | DescribeOpsItemsCommandInput
  | DescribeParametersCommandInput
  | DescribePatchBaselinesCommandInput
  | DescribePatchGroupStateCommandInput
  | DescribePatchGroupsCommandInput
  | DescribePatchPropertiesCommandInput
  | DescribeSessionsCommandInput
  | GetAutomationExecutionCommandInput
  | GetCalendarStateCommandInput
  | GetCommandInvocationCommandInput
  | GetConnectionStatusCommandInput
  | GetDefaultPatchBaselineCommandInput
  | GetDeployablePatchSnapshotForInstanceCommandInput
  | GetDocumentCommandInput
  | GetInventoryCommandInput
  | GetInventorySchemaCommandInput
  | GetMaintenanceWindowCommandInput
  | GetMaintenanceWindowExecutionCommandInput
  | GetMaintenanceWindowExecutionTaskCommandInput
  | GetMaintenanceWindowExecutionTaskInvocationCommandInput
  | GetMaintenanceWindowTaskCommandInput
  | GetOpsItemCommandInput
  | GetOpsMetadataCommandInput
  | GetOpsSummaryCommandInput
  | GetParameterCommandInput
  | GetParameterHistoryCommandInput
  | GetParametersByPathCommandInput
  | GetParametersCommandInput
  | GetPatchBaselineCommandInput
  | GetPatchBaselineForPatchGroupCommandInput
  | GetServiceSettingCommandInput
  | LabelParameterVersionCommandInput
  | ListAssociationVersionsCommandInput
  | ListAssociationsCommandInput
  | ListCommandInvocationsCommandInput
  | ListCommandsCommandInput
  | ListComplianceItemsCommandInput
  | ListComplianceSummariesCommandInput
  | ListDocumentVersionsCommandInput
  | ListDocumentsCommandInput
  | ListInventoryEntriesCommandInput
  | ListOpsMetadataCommandInput
  | ListResourceComplianceSummariesCommandInput
  | ListResourceDataSyncCommandInput
  | ListTagsForResourceCommandInput
  | ModifyDocumentPermissionCommandInput
  | PutComplianceItemsCommandInput
  | PutInventoryCommandInput
  | PutParameterCommandInput
  | RegisterDefaultPatchBaselineCommandInput
  | RegisterPatchBaselineForPatchGroupCommandInput
  | RegisterTargetWithMaintenanceWindowCommandInput
  | RegisterTaskWithMaintenanceWindowCommandInput
  | RemoveTagsFromResourceCommandInput
  | ResetServiceSettingCommandInput
  | ResumeSessionCommandInput
  | SendAutomationSignalCommandInput
  | SendCommandCommandInput
  | StartAssociationsOnceCommandInput
  | StartAutomationExecutionCommandInput
  | StartSessionCommandInput
  | StopAutomationExecutionCommandInput
  | TerminateSessionCommandInput
  | UpdateAssociationCommandInput
  | UpdateAssociationStatusCommandInput
  | UpdateDocumentCommandInput
  | UpdateDocumentDefaultVersionCommandInput
  | UpdateMaintenanceWindowCommandInput
  | UpdateMaintenanceWindowTargetCommandInput
  | UpdateMaintenanceWindowTaskCommandInput
  | UpdateManagedInstanceRoleCommandInput
  | UpdateOpsItemCommandInput
  | UpdateOpsMetadataCommandInput
  | UpdatePatchBaselineCommandInput
  | UpdateResourceDataSyncCommandInput
  | UpdateServiceSettingCommandInput;

export type ServiceOutputTypes =
  | AddTagsToResourceCommandOutput
  | CancelCommandCommandOutput
  | CancelMaintenanceWindowExecutionCommandOutput
  | CreateActivationCommandOutput
  | CreateAssociationBatchCommandOutput
  | CreateAssociationCommandOutput
  | CreateDocumentCommandOutput
  | CreateMaintenanceWindowCommandOutput
  | CreateOpsItemCommandOutput
  | CreateOpsMetadataCommandOutput
  | CreatePatchBaselineCommandOutput
  | CreateResourceDataSyncCommandOutput
  | DeleteActivationCommandOutput
  | DeleteAssociationCommandOutput
  | DeleteDocumentCommandOutput
  | DeleteInventoryCommandOutput
  | DeleteMaintenanceWindowCommandOutput
  | DeleteOpsMetadataCommandOutput
  | DeleteParameterCommandOutput
  | DeleteParametersCommandOutput
  | DeletePatchBaselineCommandOutput
  | DeleteResourceDataSyncCommandOutput
  | DeregisterManagedInstanceCommandOutput
  | DeregisterPatchBaselineForPatchGroupCommandOutput
  | DeregisterTargetFromMaintenanceWindowCommandOutput
  | DeregisterTaskFromMaintenanceWindowCommandOutput
  | DescribeActivationsCommandOutput
  | DescribeAssociationCommandOutput
  | DescribeAssociationExecutionTargetsCommandOutput
  | DescribeAssociationExecutionsCommandOutput
  | DescribeAutomationExecutionsCommandOutput
  | DescribeAutomationStepExecutionsCommandOutput
  | DescribeAvailablePatchesCommandOutput
  | DescribeDocumentCommandOutput
  | DescribeDocumentPermissionCommandOutput
  | DescribeEffectiveInstanceAssociationsCommandOutput
  | DescribeEffectivePatchesForPatchBaselineCommandOutput
  | DescribeInstanceAssociationsStatusCommandOutput
  | DescribeInstanceInformationCommandOutput
  | DescribeInstancePatchStatesCommandOutput
  | DescribeInstancePatchStatesForPatchGroupCommandOutput
  | DescribeInstancePatchesCommandOutput
  | DescribeInventoryDeletionsCommandOutput
  | DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput
  | DescribeMaintenanceWindowExecutionTasksCommandOutput
  | DescribeMaintenanceWindowExecutionsCommandOutput
  | DescribeMaintenanceWindowScheduleCommandOutput
  | DescribeMaintenanceWindowTargetsCommandOutput
  | DescribeMaintenanceWindowTasksCommandOutput
  | DescribeMaintenanceWindowsCommandOutput
  | DescribeMaintenanceWindowsForTargetCommandOutput
  | DescribeOpsItemsCommandOutput
  | DescribeParametersCommandOutput
  | DescribePatchBaselinesCommandOutput
  | DescribePatchGroupStateCommandOutput
  | DescribePatchGroupsCommandOutput
  | DescribePatchPropertiesCommandOutput
  | DescribeSessionsCommandOutput
  | GetAutomationExecutionCommandOutput
  | GetCalendarStateCommandOutput
  | GetCommandInvocationCommandOutput
  | GetConnectionStatusCommandOutput
  | GetDefaultPatchBaselineCommandOutput
  | GetDeployablePatchSnapshotForInstanceCommandOutput
  | GetDocumentCommandOutput
  | GetInventoryCommandOutput
  | GetInventorySchemaCommandOutput
  | GetMaintenanceWindowCommandOutput
  | GetMaintenanceWindowExecutionCommandOutput
  | GetMaintenanceWindowExecutionTaskCommandOutput
  | GetMaintenanceWindowExecutionTaskInvocationCommandOutput
  | GetMaintenanceWindowTaskCommandOutput
  | GetOpsItemCommandOutput
  | GetOpsMetadataCommandOutput
  | GetOpsSummaryCommandOutput
  | GetParameterCommandOutput
  | GetParameterHistoryCommandOutput
  | GetParametersByPathCommandOutput
  | GetParametersCommandOutput
  | GetPatchBaselineCommandOutput
  | GetPatchBaselineForPatchGroupCommandOutput
  | GetServiceSettingCommandOutput
  | LabelParameterVersionCommandOutput
  | ListAssociationVersionsCommandOutput
  | ListAssociationsCommandOutput
  | ListCommandInvocationsCommandOutput
  | ListCommandsCommandOutput
  | ListComplianceItemsCommandOutput
  | ListComplianceSummariesCommandOutput
  | ListDocumentVersionsCommandOutput
  | ListDocumentsCommandOutput
  | ListInventoryEntriesCommandOutput
  | ListOpsMetadataCommandOutput
  | ListResourceComplianceSummariesCommandOutput
  | ListResourceDataSyncCommandOutput
  | ListTagsForResourceCommandOutput
  | ModifyDocumentPermissionCommandOutput
  | PutComplianceItemsCommandOutput
  | PutInventoryCommandOutput
  | PutParameterCommandOutput
  | RegisterDefaultPatchBaselineCommandOutput
  | RegisterPatchBaselineForPatchGroupCommandOutput
  | RegisterTargetWithMaintenanceWindowCommandOutput
  | RegisterTaskWithMaintenanceWindowCommandOutput
  | RemoveTagsFromResourceCommandOutput
  | ResetServiceSettingCommandOutput
  | ResumeSessionCommandOutput
  | SendAutomationSignalCommandOutput
  | SendCommandCommandOutput
  | StartAssociationsOnceCommandOutput
  | StartAutomationExecutionCommandOutput
  | StartSessionCommandOutput
  | StopAutomationExecutionCommandOutput
  | TerminateSessionCommandOutput
  | UpdateAssociationCommandOutput
  | UpdateAssociationStatusCommandOutput
  | UpdateDocumentCommandOutput
  | UpdateDocumentDefaultVersionCommandOutput
  | UpdateMaintenanceWindowCommandOutput
  | UpdateMaintenanceWindowTargetCommandOutput
  | UpdateMaintenanceWindowTaskCommandOutput
  | UpdateManagedInstanceRoleCommandOutput
  | UpdateOpsItemCommandOutput
  | UpdateOpsMetadataCommandOutput
  | UpdatePatchBaselineCommandOutput
  | UpdateResourceDataSyncCommandOutput
  | UpdateServiceSettingCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;
}

export type SSMClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  UserAgentInputConfig;

export type SSMClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  UserAgentResolvedConfig;

/**
 * <fullname>AWS Systems Manager</fullname>
 *          <p>AWS Systems Manager is a collection of capabilities that helps you automate management tasks such as
 *    collecting system inventory, applying operating system (OS) patches, automating the creation of
 *    Amazon Machine Images (AMIs), and configuring operating systems (OSs) and applications at scale.
 *    Systems Manager lets you remotely and securely manage the configuration of your managed instances. A
 *     <i>managed instance</i> is any Amazon Elastic Compute Cloud instance (EC2 instance), or any
 *    on-premises server or virtual machine (VM) in your hybrid environment that has been configured
 *    for Systems Manager.</p>
 *          <p>This reference is intended to be used with the <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/">AWS Systems Manager User Guide</a>.</p>
 *          <p>To get started, verify prerequisites and configure managed instances. For more information,
 *    see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up.html">Setting up
 *     AWS Systems Manager</a> in the <i>AWS Systems Manager User Guide</i>.</p>
 *          <p>For information about other API actions you can perform on EC2 instances, see the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/">Amazon EC2 API Reference</a>. For information
 *    about how to use a Query API, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/making-api-requests.html">Making API requests</a>. </p>
 */
export class SSMClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  SSMClientResolvedConfig
> {
  readonly config: SSMClientResolvedConfig;

  constructor(configuration: SSMClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration,
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveHostHeaderConfig(_config_4);
    let _config_6 = resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }

  destroy(): void {
    super.destroy();
  }
}
