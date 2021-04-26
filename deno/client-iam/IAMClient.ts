import {
  AddClientIDToOpenIDConnectProviderCommandInput,
  AddClientIDToOpenIDConnectProviderCommandOutput,
} from "./commands/AddClientIDToOpenIDConnectProviderCommand.ts";
import {
  AddRoleToInstanceProfileCommandInput,
  AddRoleToInstanceProfileCommandOutput,
} from "./commands/AddRoleToInstanceProfileCommand.ts";
import { AddUserToGroupCommandInput, AddUserToGroupCommandOutput } from "./commands/AddUserToGroupCommand.ts";
import { AttachGroupPolicyCommandInput, AttachGroupPolicyCommandOutput } from "./commands/AttachGroupPolicyCommand.ts";
import { AttachRolePolicyCommandInput, AttachRolePolicyCommandOutput } from "./commands/AttachRolePolicyCommand.ts";
import { AttachUserPolicyCommandInput, AttachUserPolicyCommandOutput } from "./commands/AttachUserPolicyCommand.ts";
import { ChangePasswordCommandInput, ChangePasswordCommandOutput } from "./commands/ChangePasswordCommand.ts";
import { CreateAccessKeyCommandInput, CreateAccessKeyCommandOutput } from "./commands/CreateAccessKeyCommand.ts";
import { CreateAccountAliasCommandInput, CreateAccountAliasCommandOutput } from "./commands/CreateAccountAliasCommand.ts";
import { CreateGroupCommandInput, CreateGroupCommandOutput } from "./commands/CreateGroupCommand.ts";
import {
  CreateInstanceProfileCommandInput,
  CreateInstanceProfileCommandOutput,
} from "./commands/CreateInstanceProfileCommand.ts";
import { CreateLoginProfileCommandInput, CreateLoginProfileCommandOutput } from "./commands/CreateLoginProfileCommand.ts";
import {
  CreateOpenIDConnectProviderCommandInput,
  CreateOpenIDConnectProviderCommandOutput,
} from "./commands/CreateOpenIDConnectProviderCommand.ts";
import { CreatePolicyCommandInput, CreatePolicyCommandOutput } from "./commands/CreatePolicyCommand.ts";
import {
  CreatePolicyVersionCommandInput,
  CreatePolicyVersionCommandOutput,
} from "./commands/CreatePolicyVersionCommand.ts";
import { CreateRoleCommandInput, CreateRoleCommandOutput } from "./commands/CreateRoleCommand.ts";
import { CreateSAMLProviderCommandInput, CreateSAMLProviderCommandOutput } from "./commands/CreateSAMLProviderCommand.ts";
import {
  CreateServiceLinkedRoleCommandInput,
  CreateServiceLinkedRoleCommandOutput,
} from "./commands/CreateServiceLinkedRoleCommand.ts";
import {
  CreateServiceSpecificCredentialCommandInput,
  CreateServiceSpecificCredentialCommandOutput,
} from "./commands/CreateServiceSpecificCredentialCommand.ts";
import { CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand.ts";
import {
  CreateVirtualMFADeviceCommandInput,
  CreateVirtualMFADeviceCommandOutput,
} from "./commands/CreateVirtualMFADeviceCommand.ts";
import {
  DeactivateMFADeviceCommandInput,
  DeactivateMFADeviceCommandOutput,
} from "./commands/DeactivateMFADeviceCommand.ts";
import { DeleteAccessKeyCommandInput, DeleteAccessKeyCommandOutput } from "./commands/DeleteAccessKeyCommand.ts";
import { DeleteAccountAliasCommandInput, DeleteAccountAliasCommandOutput } from "./commands/DeleteAccountAliasCommand.ts";
import {
  DeleteAccountPasswordPolicyCommandInput,
  DeleteAccountPasswordPolicyCommandOutput,
} from "./commands/DeleteAccountPasswordPolicyCommand.ts";
import { DeleteGroupCommandInput, DeleteGroupCommandOutput } from "./commands/DeleteGroupCommand.ts";
import { DeleteGroupPolicyCommandInput, DeleteGroupPolicyCommandOutput } from "./commands/DeleteGroupPolicyCommand.ts";
import {
  DeleteInstanceProfileCommandInput,
  DeleteInstanceProfileCommandOutput,
} from "./commands/DeleteInstanceProfileCommand.ts";
import { DeleteLoginProfileCommandInput, DeleteLoginProfileCommandOutput } from "./commands/DeleteLoginProfileCommand.ts";
import {
  DeleteOpenIDConnectProviderCommandInput,
  DeleteOpenIDConnectProviderCommandOutput,
} from "./commands/DeleteOpenIDConnectProviderCommand.ts";
import { DeletePolicyCommandInput, DeletePolicyCommandOutput } from "./commands/DeletePolicyCommand.ts";
import {
  DeletePolicyVersionCommandInput,
  DeletePolicyVersionCommandOutput,
} from "./commands/DeletePolicyVersionCommand.ts";
import { DeleteRoleCommandInput, DeleteRoleCommandOutput } from "./commands/DeleteRoleCommand.ts";
import {
  DeleteRolePermissionsBoundaryCommandInput,
  DeleteRolePermissionsBoundaryCommandOutput,
} from "./commands/DeleteRolePermissionsBoundaryCommand.ts";
import { DeleteRolePolicyCommandInput, DeleteRolePolicyCommandOutput } from "./commands/DeleteRolePolicyCommand.ts";
import { DeleteSAMLProviderCommandInput, DeleteSAMLProviderCommandOutput } from "./commands/DeleteSAMLProviderCommand.ts";
import { DeleteSSHPublicKeyCommandInput, DeleteSSHPublicKeyCommandOutput } from "./commands/DeleteSSHPublicKeyCommand.ts";
import {
  DeleteServerCertificateCommandInput,
  DeleteServerCertificateCommandOutput,
} from "./commands/DeleteServerCertificateCommand.ts";
import {
  DeleteServiceLinkedRoleCommandInput,
  DeleteServiceLinkedRoleCommandOutput,
} from "./commands/DeleteServiceLinkedRoleCommand.ts";
import {
  DeleteServiceSpecificCredentialCommandInput,
  DeleteServiceSpecificCredentialCommandOutput,
} from "./commands/DeleteServiceSpecificCredentialCommand.ts";
import {
  DeleteSigningCertificateCommandInput,
  DeleteSigningCertificateCommandOutput,
} from "./commands/DeleteSigningCertificateCommand.ts";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand.ts";
import {
  DeleteUserPermissionsBoundaryCommandInput,
  DeleteUserPermissionsBoundaryCommandOutput,
} from "./commands/DeleteUserPermissionsBoundaryCommand.ts";
import { DeleteUserPolicyCommandInput, DeleteUserPolicyCommandOutput } from "./commands/DeleteUserPolicyCommand.ts";
import {
  DeleteVirtualMFADeviceCommandInput,
  DeleteVirtualMFADeviceCommandOutput,
} from "./commands/DeleteVirtualMFADeviceCommand.ts";
import { DetachGroupPolicyCommandInput, DetachGroupPolicyCommandOutput } from "./commands/DetachGroupPolicyCommand.ts";
import { DetachRolePolicyCommandInput, DetachRolePolicyCommandOutput } from "./commands/DetachRolePolicyCommand.ts";
import { DetachUserPolicyCommandInput, DetachUserPolicyCommandOutput } from "./commands/DetachUserPolicyCommand.ts";
import { EnableMFADeviceCommandInput, EnableMFADeviceCommandOutput } from "./commands/EnableMFADeviceCommand.ts";
import {
  GenerateCredentialReportCommandInput,
  GenerateCredentialReportCommandOutput,
} from "./commands/GenerateCredentialReportCommand.ts";
import {
  GenerateOrganizationsAccessReportCommandInput,
  GenerateOrganizationsAccessReportCommandOutput,
} from "./commands/GenerateOrganizationsAccessReportCommand.ts";
import {
  GenerateServiceLastAccessedDetailsCommandInput,
  GenerateServiceLastAccessedDetailsCommandOutput,
} from "./commands/GenerateServiceLastAccessedDetailsCommand.ts";
import {
  GetAccessKeyLastUsedCommandInput,
  GetAccessKeyLastUsedCommandOutput,
} from "./commands/GetAccessKeyLastUsedCommand.ts";
import {
  GetAccountAuthorizationDetailsCommandInput,
  GetAccountAuthorizationDetailsCommandOutput,
} from "./commands/GetAccountAuthorizationDetailsCommand.ts";
import {
  GetAccountPasswordPolicyCommandInput,
  GetAccountPasswordPolicyCommandOutput,
} from "./commands/GetAccountPasswordPolicyCommand.ts";
import { GetAccountSummaryCommandInput, GetAccountSummaryCommandOutput } from "./commands/GetAccountSummaryCommand.ts";
import {
  GetContextKeysForCustomPolicyCommandInput,
  GetContextKeysForCustomPolicyCommandOutput,
} from "./commands/GetContextKeysForCustomPolicyCommand.ts";
import {
  GetContextKeysForPrincipalPolicyCommandInput,
  GetContextKeysForPrincipalPolicyCommandOutput,
} from "./commands/GetContextKeysForPrincipalPolicyCommand.ts";
import {
  GetCredentialReportCommandInput,
  GetCredentialReportCommandOutput,
} from "./commands/GetCredentialReportCommand.ts";
import { GetGroupCommandInput, GetGroupCommandOutput } from "./commands/GetGroupCommand.ts";
import { GetGroupPolicyCommandInput, GetGroupPolicyCommandOutput } from "./commands/GetGroupPolicyCommand.ts";
import { GetInstanceProfileCommandInput, GetInstanceProfileCommandOutput } from "./commands/GetInstanceProfileCommand.ts";
import { GetLoginProfileCommandInput, GetLoginProfileCommandOutput } from "./commands/GetLoginProfileCommand.ts";
import {
  GetOpenIDConnectProviderCommandInput,
  GetOpenIDConnectProviderCommandOutput,
} from "./commands/GetOpenIDConnectProviderCommand.ts";
import {
  GetOrganizationsAccessReportCommandInput,
  GetOrganizationsAccessReportCommandOutput,
} from "./commands/GetOrganizationsAccessReportCommand.ts";
import { GetPolicyCommandInput, GetPolicyCommandOutput } from "./commands/GetPolicyCommand.ts";
import { GetPolicyVersionCommandInput, GetPolicyVersionCommandOutput } from "./commands/GetPolicyVersionCommand.ts";
import { GetRoleCommandInput, GetRoleCommandOutput } from "./commands/GetRoleCommand.ts";
import { GetRolePolicyCommandInput, GetRolePolicyCommandOutput } from "./commands/GetRolePolicyCommand.ts";
import { GetSAMLProviderCommandInput, GetSAMLProviderCommandOutput } from "./commands/GetSAMLProviderCommand.ts";
import { GetSSHPublicKeyCommandInput, GetSSHPublicKeyCommandOutput } from "./commands/GetSSHPublicKeyCommand.ts";
import {
  GetServerCertificateCommandInput,
  GetServerCertificateCommandOutput,
} from "./commands/GetServerCertificateCommand.ts";
import {
  GetServiceLastAccessedDetailsCommandInput,
  GetServiceLastAccessedDetailsCommandOutput,
} from "./commands/GetServiceLastAccessedDetailsCommand.ts";
import {
  GetServiceLastAccessedDetailsWithEntitiesCommandInput,
  GetServiceLastAccessedDetailsWithEntitiesCommandOutput,
} from "./commands/GetServiceLastAccessedDetailsWithEntitiesCommand.ts";
import {
  GetServiceLinkedRoleDeletionStatusCommandInput,
  GetServiceLinkedRoleDeletionStatusCommandOutput,
} from "./commands/GetServiceLinkedRoleDeletionStatusCommand.ts";
import { GetUserCommandInput, GetUserCommandOutput } from "./commands/GetUserCommand.ts";
import { GetUserPolicyCommandInput, GetUserPolicyCommandOutput } from "./commands/GetUserPolicyCommand.ts";
import { ListAccessKeysCommandInput, ListAccessKeysCommandOutput } from "./commands/ListAccessKeysCommand.ts";
import { ListAccountAliasesCommandInput, ListAccountAliasesCommandOutput } from "./commands/ListAccountAliasesCommand.ts";
import {
  ListAttachedGroupPoliciesCommandInput,
  ListAttachedGroupPoliciesCommandOutput,
} from "./commands/ListAttachedGroupPoliciesCommand.ts";
import {
  ListAttachedRolePoliciesCommandInput,
  ListAttachedRolePoliciesCommandOutput,
} from "./commands/ListAttachedRolePoliciesCommand.ts";
import {
  ListAttachedUserPoliciesCommandInput,
  ListAttachedUserPoliciesCommandOutput,
} from "./commands/ListAttachedUserPoliciesCommand.ts";
import {
  ListEntitiesForPolicyCommandInput,
  ListEntitiesForPolicyCommandOutput,
} from "./commands/ListEntitiesForPolicyCommand.ts";
import { ListGroupPoliciesCommandInput, ListGroupPoliciesCommandOutput } from "./commands/ListGroupPoliciesCommand.ts";
import { ListGroupsCommandInput, ListGroupsCommandOutput } from "./commands/ListGroupsCommand.ts";
import { ListGroupsForUserCommandInput, ListGroupsForUserCommandOutput } from "./commands/ListGroupsForUserCommand.ts";
import {
  ListInstanceProfileTagsCommandInput,
  ListInstanceProfileTagsCommandOutput,
} from "./commands/ListInstanceProfileTagsCommand.ts";
import {
  ListInstanceProfilesCommandInput,
  ListInstanceProfilesCommandOutput,
} from "./commands/ListInstanceProfilesCommand.ts";
import {
  ListInstanceProfilesForRoleCommandInput,
  ListInstanceProfilesForRoleCommandOutput,
} from "./commands/ListInstanceProfilesForRoleCommand.ts";
import { ListMFADeviceTagsCommandInput, ListMFADeviceTagsCommandOutput } from "./commands/ListMFADeviceTagsCommand.ts";
import { ListMFADevicesCommandInput, ListMFADevicesCommandOutput } from "./commands/ListMFADevicesCommand.ts";
import {
  ListOpenIDConnectProviderTagsCommandInput,
  ListOpenIDConnectProviderTagsCommandOutput,
} from "./commands/ListOpenIDConnectProviderTagsCommand.ts";
import {
  ListOpenIDConnectProvidersCommandInput,
  ListOpenIDConnectProvidersCommandOutput,
} from "./commands/ListOpenIDConnectProvidersCommand.ts";
import { ListPoliciesCommandInput, ListPoliciesCommandOutput } from "./commands/ListPoliciesCommand.ts";
import {
  ListPoliciesGrantingServiceAccessCommandInput,
  ListPoliciesGrantingServiceAccessCommandOutput,
} from "./commands/ListPoliciesGrantingServiceAccessCommand.ts";
import { ListPolicyTagsCommandInput, ListPolicyTagsCommandOutput } from "./commands/ListPolicyTagsCommand.ts";
import { ListPolicyVersionsCommandInput, ListPolicyVersionsCommandOutput } from "./commands/ListPolicyVersionsCommand.ts";
import { ListRolePoliciesCommandInput, ListRolePoliciesCommandOutput } from "./commands/ListRolePoliciesCommand.ts";
import { ListRoleTagsCommandInput, ListRoleTagsCommandOutput } from "./commands/ListRoleTagsCommand.ts";
import { ListRolesCommandInput, ListRolesCommandOutput } from "./commands/ListRolesCommand.ts";
import {
  ListSAMLProviderTagsCommandInput,
  ListSAMLProviderTagsCommandOutput,
} from "./commands/ListSAMLProviderTagsCommand.ts";
import { ListSAMLProvidersCommandInput, ListSAMLProvidersCommandOutput } from "./commands/ListSAMLProvidersCommand.ts";
import { ListSSHPublicKeysCommandInput, ListSSHPublicKeysCommandOutput } from "./commands/ListSSHPublicKeysCommand.ts";
import {
  ListServerCertificateTagsCommandInput,
  ListServerCertificateTagsCommandOutput,
} from "./commands/ListServerCertificateTagsCommand.ts";
import {
  ListServerCertificatesCommandInput,
  ListServerCertificatesCommandOutput,
} from "./commands/ListServerCertificatesCommand.ts";
import {
  ListServiceSpecificCredentialsCommandInput,
  ListServiceSpecificCredentialsCommandOutput,
} from "./commands/ListServiceSpecificCredentialsCommand.ts";
import {
  ListSigningCertificatesCommandInput,
  ListSigningCertificatesCommandOutput,
} from "./commands/ListSigningCertificatesCommand.ts";
import { ListUserPoliciesCommandInput, ListUserPoliciesCommandOutput } from "./commands/ListUserPoliciesCommand.ts";
import { ListUserTagsCommandInput, ListUserTagsCommandOutput } from "./commands/ListUserTagsCommand.ts";
import { ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand.ts";
import {
  ListVirtualMFADevicesCommandInput,
  ListVirtualMFADevicesCommandOutput,
} from "./commands/ListVirtualMFADevicesCommand.ts";
import { PutGroupPolicyCommandInput, PutGroupPolicyCommandOutput } from "./commands/PutGroupPolicyCommand.ts";
import {
  PutRolePermissionsBoundaryCommandInput,
  PutRolePermissionsBoundaryCommandOutput,
} from "./commands/PutRolePermissionsBoundaryCommand.ts";
import { PutRolePolicyCommandInput, PutRolePolicyCommandOutput } from "./commands/PutRolePolicyCommand.ts";
import {
  PutUserPermissionsBoundaryCommandInput,
  PutUserPermissionsBoundaryCommandOutput,
} from "./commands/PutUserPermissionsBoundaryCommand.ts";
import { PutUserPolicyCommandInput, PutUserPolicyCommandOutput } from "./commands/PutUserPolicyCommand.ts";
import {
  RemoveClientIDFromOpenIDConnectProviderCommandInput,
  RemoveClientIDFromOpenIDConnectProviderCommandOutput,
} from "./commands/RemoveClientIDFromOpenIDConnectProviderCommand.ts";
import {
  RemoveRoleFromInstanceProfileCommandInput,
  RemoveRoleFromInstanceProfileCommandOutput,
} from "./commands/RemoveRoleFromInstanceProfileCommand.ts";
import {
  RemoveUserFromGroupCommandInput,
  RemoveUserFromGroupCommandOutput,
} from "./commands/RemoveUserFromGroupCommand.ts";
import {
  ResetServiceSpecificCredentialCommandInput,
  ResetServiceSpecificCredentialCommandOutput,
} from "./commands/ResetServiceSpecificCredentialCommand.ts";
import { ResyncMFADeviceCommandInput, ResyncMFADeviceCommandOutput } from "./commands/ResyncMFADeviceCommand.ts";
import {
  SetDefaultPolicyVersionCommandInput,
  SetDefaultPolicyVersionCommandOutput,
} from "./commands/SetDefaultPolicyVersionCommand.ts";
import {
  SetSecurityTokenServicePreferencesCommandInput,
  SetSecurityTokenServicePreferencesCommandOutput,
} from "./commands/SetSecurityTokenServicePreferencesCommand.ts";
import {
  SimulateCustomPolicyCommandInput,
  SimulateCustomPolicyCommandOutput,
} from "./commands/SimulateCustomPolicyCommand.ts";
import {
  SimulatePrincipalPolicyCommandInput,
  SimulatePrincipalPolicyCommandOutput,
} from "./commands/SimulatePrincipalPolicyCommand.ts";
import { TagInstanceProfileCommandInput, TagInstanceProfileCommandOutput } from "./commands/TagInstanceProfileCommand.ts";
import { TagMFADeviceCommandInput, TagMFADeviceCommandOutput } from "./commands/TagMFADeviceCommand.ts";
import {
  TagOpenIDConnectProviderCommandInput,
  TagOpenIDConnectProviderCommandOutput,
} from "./commands/TagOpenIDConnectProviderCommand.ts";
import { TagPolicyCommandInput, TagPolicyCommandOutput } from "./commands/TagPolicyCommand.ts";
import { TagRoleCommandInput, TagRoleCommandOutput } from "./commands/TagRoleCommand.ts";
import { TagSAMLProviderCommandInput, TagSAMLProviderCommandOutput } from "./commands/TagSAMLProviderCommand.ts";
import {
  TagServerCertificateCommandInput,
  TagServerCertificateCommandOutput,
} from "./commands/TagServerCertificateCommand.ts";
import { TagUserCommandInput, TagUserCommandOutput } from "./commands/TagUserCommand.ts";
import {
  UntagInstanceProfileCommandInput,
  UntagInstanceProfileCommandOutput,
} from "./commands/UntagInstanceProfileCommand.ts";
import { UntagMFADeviceCommandInput, UntagMFADeviceCommandOutput } from "./commands/UntagMFADeviceCommand.ts";
import {
  UntagOpenIDConnectProviderCommandInput,
  UntagOpenIDConnectProviderCommandOutput,
} from "./commands/UntagOpenIDConnectProviderCommand.ts";
import { UntagPolicyCommandInput, UntagPolicyCommandOutput } from "./commands/UntagPolicyCommand.ts";
import { UntagRoleCommandInput, UntagRoleCommandOutput } from "./commands/UntagRoleCommand.ts";
import { UntagSAMLProviderCommandInput, UntagSAMLProviderCommandOutput } from "./commands/UntagSAMLProviderCommand.ts";
import {
  UntagServerCertificateCommandInput,
  UntagServerCertificateCommandOutput,
} from "./commands/UntagServerCertificateCommand.ts";
import { UntagUserCommandInput, UntagUserCommandOutput } from "./commands/UntagUserCommand.ts";
import { UpdateAccessKeyCommandInput, UpdateAccessKeyCommandOutput } from "./commands/UpdateAccessKeyCommand.ts";
import {
  UpdateAccountPasswordPolicyCommandInput,
  UpdateAccountPasswordPolicyCommandOutput,
} from "./commands/UpdateAccountPasswordPolicyCommand.ts";
import {
  UpdateAssumeRolePolicyCommandInput,
  UpdateAssumeRolePolicyCommandOutput,
} from "./commands/UpdateAssumeRolePolicyCommand.ts";
import { UpdateGroupCommandInput, UpdateGroupCommandOutput } from "./commands/UpdateGroupCommand.ts";
import { UpdateLoginProfileCommandInput, UpdateLoginProfileCommandOutput } from "./commands/UpdateLoginProfileCommand.ts";
import {
  UpdateOpenIDConnectProviderThumbprintCommandInput,
  UpdateOpenIDConnectProviderThumbprintCommandOutput,
} from "./commands/UpdateOpenIDConnectProviderThumbprintCommand.ts";
import { UpdateRoleCommandInput, UpdateRoleCommandOutput } from "./commands/UpdateRoleCommand.ts";
import {
  UpdateRoleDescriptionCommandInput,
  UpdateRoleDescriptionCommandOutput,
} from "./commands/UpdateRoleDescriptionCommand.ts";
import { UpdateSAMLProviderCommandInput, UpdateSAMLProviderCommandOutput } from "./commands/UpdateSAMLProviderCommand.ts";
import { UpdateSSHPublicKeyCommandInput, UpdateSSHPublicKeyCommandOutput } from "./commands/UpdateSSHPublicKeyCommand.ts";
import {
  UpdateServerCertificateCommandInput,
  UpdateServerCertificateCommandOutput,
} from "./commands/UpdateServerCertificateCommand.ts";
import {
  UpdateServiceSpecificCredentialCommandInput,
  UpdateServiceSpecificCredentialCommandOutput,
} from "./commands/UpdateServiceSpecificCredentialCommand.ts";
import {
  UpdateSigningCertificateCommandInput,
  UpdateSigningCertificateCommandOutput,
} from "./commands/UpdateSigningCertificateCommand.ts";
import { UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand.ts";
import { UploadSSHPublicKeyCommandInput, UploadSSHPublicKeyCommandOutput } from "./commands/UploadSSHPublicKeyCommand.ts";
import {
  UploadServerCertificateCommandInput,
  UploadServerCertificateCommandOutput,
} from "./commands/UploadServerCertificateCommand.ts";
import {
  UploadSigningCertificateCommandInput,
  UploadSigningCertificateCommandOutput,
} from "./commands/UploadSigningCertificateCommand.ts";
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
  | AddClientIDToOpenIDConnectProviderCommandInput
  | AddRoleToInstanceProfileCommandInput
  | AddUserToGroupCommandInput
  | AttachGroupPolicyCommandInput
  | AttachRolePolicyCommandInput
  | AttachUserPolicyCommandInput
  | ChangePasswordCommandInput
  | CreateAccessKeyCommandInput
  | CreateAccountAliasCommandInput
  | CreateGroupCommandInput
  | CreateInstanceProfileCommandInput
  | CreateLoginProfileCommandInput
  | CreateOpenIDConnectProviderCommandInput
  | CreatePolicyCommandInput
  | CreatePolicyVersionCommandInput
  | CreateRoleCommandInput
  | CreateSAMLProviderCommandInput
  | CreateServiceLinkedRoleCommandInput
  | CreateServiceSpecificCredentialCommandInput
  | CreateUserCommandInput
  | CreateVirtualMFADeviceCommandInput
  | DeactivateMFADeviceCommandInput
  | DeleteAccessKeyCommandInput
  | DeleteAccountAliasCommandInput
  | DeleteAccountPasswordPolicyCommandInput
  | DeleteGroupCommandInput
  | DeleteGroupPolicyCommandInput
  | DeleteInstanceProfileCommandInput
  | DeleteLoginProfileCommandInput
  | DeleteOpenIDConnectProviderCommandInput
  | DeletePolicyCommandInput
  | DeletePolicyVersionCommandInput
  | DeleteRoleCommandInput
  | DeleteRolePermissionsBoundaryCommandInput
  | DeleteRolePolicyCommandInput
  | DeleteSAMLProviderCommandInput
  | DeleteSSHPublicKeyCommandInput
  | DeleteServerCertificateCommandInput
  | DeleteServiceLinkedRoleCommandInput
  | DeleteServiceSpecificCredentialCommandInput
  | DeleteSigningCertificateCommandInput
  | DeleteUserCommandInput
  | DeleteUserPermissionsBoundaryCommandInput
  | DeleteUserPolicyCommandInput
  | DeleteVirtualMFADeviceCommandInput
  | DetachGroupPolicyCommandInput
  | DetachRolePolicyCommandInput
  | DetachUserPolicyCommandInput
  | EnableMFADeviceCommandInput
  | GenerateCredentialReportCommandInput
  | GenerateOrganizationsAccessReportCommandInput
  | GenerateServiceLastAccessedDetailsCommandInput
  | GetAccessKeyLastUsedCommandInput
  | GetAccountAuthorizationDetailsCommandInput
  | GetAccountPasswordPolicyCommandInput
  | GetAccountSummaryCommandInput
  | GetContextKeysForCustomPolicyCommandInput
  | GetContextKeysForPrincipalPolicyCommandInput
  | GetCredentialReportCommandInput
  | GetGroupCommandInput
  | GetGroupPolicyCommandInput
  | GetInstanceProfileCommandInput
  | GetLoginProfileCommandInput
  | GetOpenIDConnectProviderCommandInput
  | GetOrganizationsAccessReportCommandInput
  | GetPolicyCommandInput
  | GetPolicyVersionCommandInput
  | GetRoleCommandInput
  | GetRolePolicyCommandInput
  | GetSAMLProviderCommandInput
  | GetSSHPublicKeyCommandInput
  | GetServerCertificateCommandInput
  | GetServiceLastAccessedDetailsCommandInput
  | GetServiceLastAccessedDetailsWithEntitiesCommandInput
  | GetServiceLinkedRoleDeletionStatusCommandInput
  | GetUserCommandInput
  | GetUserPolicyCommandInput
  | ListAccessKeysCommandInput
  | ListAccountAliasesCommandInput
  | ListAttachedGroupPoliciesCommandInput
  | ListAttachedRolePoliciesCommandInput
  | ListAttachedUserPoliciesCommandInput
  | ListEntitiesForPolicyCommandInput
  | ListGroupPoliciesCommandInput
  | ListGroupsCommandInput
  | ListGroupsForUserCommandInput
  | ListInstanceProfileTagsCommandInput
  | ListInstanceProfilesCommandInput
  | ListInstanceProfilesForRoleCommandInput
  | ListMFADeviceTagsCommandInput
  | ListMFADevicesCommandInput
  | ListOpenIDConnectProviderTagsCommandInput
  | ListOpenIDConnectProvidersCommandInput
  | ListPoliciesCommandInput
  | ListPoliciesGrantingServiceAccessCommandInput
  | ListPolicyTagsCommandInput
  | ListPolicyVersionsCommandInput
  | ListRolePoliciesCommandInput
  | ListRoleTagsCommandInput
  | ListRolesCommandInput
  | ListSAMLProviderTagsCommandInput
  | ListSAMLProvidersCommandInput
  | ListSSHPublicKeysCommandInput
  | ListServerCertificateTagsCommandInput
  | ListServerCertificatesCommandInput
  | ListServiceSpecificCredentialsCommandInput
  | ListSigningCertificatesCommandInput
  | ListUserPoliciesCommandInput
  | ListUserTagsCommandInput
  | ListUsersCommandInput
  | ListVirtualMFADevicesCommandInput
  | PutGroupPolicyCommandInput
  | PutRolePermissionsBoundaryCommandInput
  | PutRolePolicyCommandInput
  | PutUserPermissionsBoundaryCommandInput
  | PutUserPolicyCommandInput
  | RemoveClientIDFromOpenIDConnectProviderCommandInput
  | RemoveRoleFromInstanceProfileCommandInput
  | RemoveUserFromGroupCommandInput
  | ResetServiceSpecificCredentialCommandInput
  | ResyncMFADeviceCommandInput
  | SetDefaultPolicyVersionCommandInput
  | SetSecurityTokenServicePreferencesCommandInput
  | SimulateCustomPolicyCommandInput
  | SimulatePrincipalPolicyCommandInput
  | TagInstanceProfileCommandInput
  | TagMFADeviceCommandInput
  | TagOpenIDConnectProviderCommandInput
  | TagPolicyCommandInput
  | TagRoleCommandInput
  | TagSAMLProviderCommandInput
  | TagServerCertificateCommandInput
  | TagUserCommandInput
  | UntagInstanceProfileCommandInput
  | UntagMFADeviceCommandInput
  | UntagOpenIDConnectProviderCommandInput
  | UntagPolicyCommandInput
  | UntagRoleCommandInput
  | UntagSAMLProviderCommandInput
  | UntagServerCertificateCommandInput
  | UntagUserCommandInput
  | UpdateAccessKeyCommandInput
  | UpdateAccountPasswordPolicyCommandInput
  | UpdateAssumeRolePolicyCommandInput
  | UpdateGroupCommandInput
  | UpdateLoginProfileCommandInput
  | UpdateOpenIDConnectProviderThumbprintCommandInput
  | UpdateRoleCommandInput
  | UpdateRoleDescriptionCommandInput
  | UpdateSAMLProviderCommandInput
  | UpdateSSHPublicKeyCommandInput
  | UpdateServerCertificateCommandInput
  | UpdateServiceSpecificCredentialCommandInput
  | UpdateSigningCertificateCommandInput
  | UpdateUserCommandInput
  | UploadSSHPublicKeyCommandInput
  | UploadServerCertificateCommandInput
  | UploadSigningCertificateCommandInput;

export type ServiceOutputTypes =
  | AddClientIDToOpenIDConnectProviderCommandOutput
  | AddRoleToInstanceProfileCommandOutput
  | AddUserToGroupCommandOutput
  | AttachGroupPolicyCommandOutput
  | AttachRolePolicyCommandOutput
  | AttachUserPolicyCommandOutput
  | ChangePasswordCommandOutput
  | CreateAccessKeyCommandOutput
  | CreateAccountAliasCommandOutput
  | CreateGroupCommandOutput
  | CreateInstanceProfileCommandOutput
  | CreateLoginProfileCommandOutput
  | CreateOpenIDConnectProviderCommandOutput
  | CreatePolicyCommandOutput
  | CreatePolicyVersionCommandOutput
  | CreateRoleCommandOutput
  | CreateSAMLProviderCommandOutput
  | CreateServiceLinkedRoleCommandOutput
  | CreateServiceSpecificCredentialCommandOutput
  | CreateUserCommandOutput
  | CreateVirtualMFADeviceCommandOutput
  | DeactivateMFADeviceCommandOutput
  | DeleteAccessKeyCommandOutput
  | DeleteAccountAliasCommandOutput
  | DeleteAccountPasswordPolicyCommandOutput
  | DeleteGroupCommandOutput
  | DeleteGroupPolicyCommandOutput
  | DeleteInstanceProfileCommandOutput
  | DeleteLoginProfileCommandOutput
  | DeleteOpenIDConnectProviderCommandOutput
  | DeletePolicyCommandOutput
  | DeletePolicyVersionCommandOutput
  | DeleteRoleCommandOutput
  | DeleteRolePermissionsBoundaryCommandOutput
  | DeleteRolePolicyCommandOutput
  | DeleteSAMLProviderCommandOutput
  | DeleteSSHPublicKeyCommandOutput
  | DeleteServerCertificateCommandOutput
  | DeleteServiceLinkedRoleCommandOutput
  | DeleteServiceSpecificCredentialCommandOutput
  | DeleteSigningCertificateCommandOutput
  | DeleteUserCommandOutput
  | DeleteUserPermissionsBoundaryCommandOutput
  | DeleteUserPolicyCommandOutput
  | DeleteVirtualMFADeviceCommandOutput
  | DetachGroupPolicyCommandOutput
  | DetachRolePolicyCommandOutput
  | DetachUserPolicyCommandOutput
  | EnableMFADeviceCommandOutput
  | GenerateCredentialReportCommandOutput
  | GenerateOrganizationsAccessReportCommandOutput
  | GenerateServiceLastAccessedDetailsCommandOutput
  | GetAccessKeyLastUsedCommandOutput
  | GetAccountAuthorizationDetailsCommandOutput
  | GetAccountPasswordPolicyCommandOutput
  | GetAccountSummaryCommandOutput
  | GetContextKeysForCustomPolicyCommandOutput
  | GetContextKeysForPrincipalPolicyCommandOutput
  | GetCredentialReportCommandOutput
  | GetGroupCommandOutput
  | GetGroupPolicyCommandOutput
  | GetInstanceProfileCommandOutput
  | GetLoginProfileCommandOutput
  | GetOpenIDConnectProviderCommandOutput
  | GetOrganizationsAccessReportCommandOutput
  | GetPolicyCommandOutput
  | GetPolicyVersionCommandOutput
  | GetRoleCommandOutput
  | GetRolePolicyCommandOutput
  | GetSAMLProviderCommandOutput
  | GetSSHPublicKeyCommandOutput
  | GetServerCertificateCommandOutput
  | GetServiceLastAccessedDetailsCommandOutput
  | GetServiceLastAccessedDetailsWithEntitiesCommandOutput
  | GetServiceLinkedRoleDeletionStatusCommandOutput
  | GetUserCommandOutput
  | GetUserPolicyCommandOutput
  | ListAccessKeysCommandOutput
  | ListAccountAliasesCommandOutput
  | ListAttachedGroupPoliciesCommandOutput
  | ListAttachedRolePoliciesCommandOutput
  | ListAttachedUserPoliciesCommandOutput
  | ListEntitiesForPolicyCommandOutput
  | ListGroupPoliciesCommandOutput
  | ListGroupsCommandOutput
  | ListGroupsForUserCommandOutput
  | ListInstanceProfileTagsCommandOutput
  | ListInstanceProfilesCommandOutput
  | ListInstanceProfilesForRoleCommandOutput
  | ListMFADeviceTagsCommandOutput
  | ListMFADevicesCommandOutput
  | ListOpenIDConnectProviderTagsCommandOutput
  | ListOpenIDConnectProvidersCommandOutput
  | ListPoliciesCommandOutput
  | ListPoliciesGrantingServiceAccessCommandOutput
  | ListPolicyTagsCommandOutput
  | ListPolicyVersionsCommandOutput
  | ListRolePoliciesCommandOutput
  | ListRoleTagsCommandOutput
  | ListRolesCommandOutput
  | ListSAMLProviderTagsCommandOutput
  | ListSAMLProvidersCommandOutput
  | ListSSHPublicKeysCommandOutput
  | ListServerCertificateTagsCommandOutput
  | ListServerCertificatesCommandOutput
  | ListServiceSpecificCredentialsCommandOutput
  | ListSigningCertificatesCommandOutput
  | ListUserPoliciesCommandOutput
  | ListUserTagsCommandOutput
  | ListUsersCommandOutput
  | ListVirtualMFADevicesCommandOutput
  | PutGroupPolicyCommandOutput
  | PutRolePermissionsBoundaryCommandOutput
  | PutRolePolicyCommandOutput
  | PutUserPermissionsBoundaryCommandOutput
  | PutUserPolicyCommandOutput
  | RemoveClientIDFromOpenIDConnectProviderCommandOutput
  | RemoveRoleFromInstanceProfileCommandOutput
  | RemoveUserFromGroupCommandOutput
  | ResetServiceSpecificCredentialCommandOutput
  | ResyncMFADeviceCommandOutput
  | SetDefaultPolicyVersionCommandOutput
  | SetSecurityTokenServicePreferencesCommandOutput
  | SimulateCustomPolicyCommandOutput
  | SimulatePrincipalPolicyCommandOutput
  | TagInstanceProfileCommandOutput
  | TagMFADeviceCommandOutput
  | TagOpenIDConnectProviderCommandOutput
  | TagPolicyCommandOutput
  | TagRoleCommandOutput
  | TagSAMLProviderCommandOutput
  | TagServerCertificateCommandOutput
  | TagUserCommandOutput
  | UntagInstanceProfileCommandOutput
  | UntagMFADeviceCommandOutput
  | UntagOpenIDConnectProviderCommandOutput
  | UntagPolicyCommandOutput
  | UntagRoleCommandOutput
  | UntagSAMLProviderCommandOutput
  | UntagServerCertificateCommandOutput
  | UntagUserCommandOutput
  | UpdateAccessKeyCommandOutput
  | UpdateAccountPasswordPolicyCommandOutput
  | UpdateAssumeRolePolicyCommandOutput
  | UpdateGroupCommandOutput
  | UpdateLoginProfileCommandOutput
  | UpdateOpenIDConnectProviderThumbprintCommandOutput
  | UpdateRoleCommandOutput
  | UpdateRoleDescriptionCommandOutput
  | UpdateSAMLProviderCommandOutput
  | UpdateSSHPublicKeyCommandOutput
  | UpdateServerCertificateCommandOutput
  | UpdateServiceSpecificCredentialCommandOutput
  | UpdateSigningCertificateCommandOutput
  | UpdateUserCommandOutput
  | UploadSSHPublicKeyCommandOutput
  | UploadServerCertificateCommandOutput
  | UploadSigningCertificateCommandOutput;

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
   * Default credentials provider; Not available in browser runtime.
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

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

type IAMClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of IAMClient class constructor that set the region, credentials and other options.
 */
export interface IAMClientConfig extends IAMClientConfigType {}

type IAMClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of IAMClient class. This is resolved and normalized from the {@link IAMClientConfig | constructor configuration interface}.
 */
export interface IAMClientResolvedConfig extends IAMClientResolvedConfigType {}

/**
 * <fullname>AWS Identity and Access Management</fullname>
 *          <p>AWS Identity and Access Management (IAM) is a web service for securely controlling
 *       access to AWS services. With IAM, you can centrally manage users, security credentials
 *       such as access keys, and permissions that control which AWS resources users and
 *       applications can access. For more information about IAM, see <a href="http://aws.amazon.com/iam/">AWS Identity and Access Management (IAM)</a> and the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/">AWS Identity and Access Management User Guide</a>.</p>
 */
export class IAMClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  IAMClientResolvedConfig
> {
  /**
   * The resolved configuration of IAMClient class. This is resolved and normalized from the {@link IAMClientConfig | constructor configuration interface}.
   */
  readonly config: IAMClientResolvedConfig;

  constructor(configuration: IAMClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration,
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveRetryConfig(_config_2);
    let _config_4 = resolveHostHeaderConfig(_config_3);
    let _config_5 = resolveAwsAuthConfig(_config_4);
    let _config_6 = resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
