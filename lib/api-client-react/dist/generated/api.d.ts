import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { AuthUserEnvelope, EmbeddedJobInput, ExecutiveInsightsConfig, Exercise, ExerciseAction, ExerciseInput, FeatureSettingInput, FeatureSettings, GatewayConnector, GatewayConnectorInput, GatewayConnectorUpdate, GatewayQuery, GatewayResult, GatewayState, GetEmbeddedStatus200, HealthStatus, InvestigationInput, LiveDiscovery, LiveJob, LiveJobInput, LogoutSuccess, Message, MobileTokenExchangeRequest, MobileTokenExchangeSuccess, PublicTarget, PublicTargetInput, RemediationInput, Scan, ScanInput, Scanner, ScannerInput, ScannerPoll, ScannerPollInput, ScannerRegistration, ScannerResultInput, Settings, TeamAccount, TeamAccountInput, TeamAccountUpdate, TeamAuthStatus, TeamLoginInput, TeamPasswordInput, TeamSetupInput, Workspace } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType, BodyType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getGetFeatureSettingsUrl: () => string;
export declare const getFeatureSettings: (options?: Parameters<typeof customFetch>[1]) => Promise<FeatureSettings>;
export declare const getGetFeatureSettingsQueryKey: () => readonly ["/api/v1/features"];
export declare const getGetFeatureSettingsQueryOptions: <TData = Awaited<ReturnType<typeof getFeatureSettings>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getFeatureSettings>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getFeatureSettings>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetFeatureSettingsQueryResult = NonNullable<Awaited<ReturnType<typeof getFeatureSettings>>>;
export type GetFeatureSettingsQueryError = ErrorType<unknown>;
export declare function useGetFeatureSettings<TData = Awaited<ReturnType<typeof getFeatureSettings>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getFeatureSettings>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdateFeatureSettingUrl: () => string;
export declare const updateFeatureSetting: (featureSettingInput: FeatureSettingInput, options?: Parameters<typeof customFetch>[1]) => Promise<FeatureSettings>;
export declare const getUpdateFeatureSettingMutationKey: () => readonly ["updateFeatureSetting"];
export declare const getUpdateFeatureSettingMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateFeatureSetting>>, TError, UpdateFeatureSettingMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateFeatureSetting>>, TError, UpdateFeatureSettingMutationVariables, TContext>;
export type UpdateFeatureSettingMutationResult = NonNullable<Awaited<ReturnType<typeof updateFeatureSetting>>>;
export type UpdateFeatureSettingMutationBody = BodyType<FeatureSettingInput>;
export type UpdateFeatureSettingMutationError = ErrorType<void>;
export type UpdateFeatureSettingMutationVariables = {
    data: BodyType<FeatureSettingInput>;
};
export declare const useUpdateFeatureSetting: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateFeatureSetting>>, TError, UpdateFeatureSettingMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateFeatureSetting>>, TError, UpdateFeatureSettingMutationVariables, TContext>;
export declare const getGetTeamAuthStatusUrl: () => string;
export declare const getTeamAuthStatus: (options?: Parameters<typeof customFetch>[1]) => Promise<TeamAuthStatus>;
export declare const getGetTeamAuthStatusQueryKey: () => readonly ["/api/team-auth/status"];
export declare const getGetTeamAuthStatusQueryOptions: <TData = Awaited<ReturnType<typeof getTeamAuthStatus>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTeamAuthStatus>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getTeamAuthStatus>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetTeamAuthStatusQueryResult = NonNullable<Awaited<ReturnType<typeof getTeamAuthStatus>>>;
export type GetTeamAuthStatusQueryError = ErrorType<unknown>;
export declare function useGetTeamAuthStatus<TData = Awaited<ReturnType<typeof getTeamAuthStatus>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTeamAuthStatus>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getLoginTeamAccountUrl: () => string;
export declare const loginTeamAccount: (teamLoginInput: TeamLoginInput, options?: Parameters<typeof customFetch>[1]) => Promise<TeamAccount>;
export declare const getLoginTeamAccountMutationKey: () => readonly ["loginTeamAccount"];
export declare const getLoginTeamAccountMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof loginTeamAccount>>, TError, LoginTeamAccountMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof loginTeamAccount>>, TError, LoginTeamAccountMutationVariables, TContext>;
export type LoginTeamAccountMutationResult = NonNullable<Awaited<ReturnType<typeof loginTeamAccount>>>;
export type LoginTeamAccountMutationBody = BodyType<TeamLoginInput>;
export type LoginTeamAccountMutationError = ErrorType<unknown>;
export type LoginTeamAccountMutationVariables = {
    data: BodyType<TeamLoginInput>;
};
export declare const useLoginTeamAccount: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof loginTeamAccount>>, TError, LoginTeamAccountMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof loginTeamAccount>>, TError, LoginTeamAccountMutationVariables, TContext>;
export declare const getSetupTeamAdministratorUrl: () => string;
export declare const setupTeamAdministrator: (teamSetupInput: TeamSetupInput, options?: Parameters<typeof customFetch>[1]) => Promise<TeamAccount>;
export declare const getSetupTeamAdministratorMutationKey: () => readonly ["setupTeamAdministrator"];
export declare const getSetupTeamAdministratorMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof setupTeamAdministrator>>, TError, SetupTeamAdministratorMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof setupTeamAdministrator>>, TError, SetupTeamAdministratorMutationVariables, TContext>;
export type SetupTeamAdministratorMutationResult = NonNullable<Awaited<ReturnType<typeof setupTeamAdministrator>>>;
export type SetupTeamAdministratorMutationBody = BodyType<TeamSetupInput>;
export type SetupTeamAdministratorMutationError = ErrorType<unknown>;
export type SetupTeamAdministratorMutationVariables = {
    data: BodyType<TeamSetupInput>;
};
export declare const useSetupTeamAdministrator: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof setupTeamAdministrator>>, TError, SetupTeamAdministratorMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof setupTeamAdministrator>>, TError, SetupTeamAdministratorMutationVariables, TContext>;
export declare const getLogoutTeamAccountUrl: () => string;
export declare const logoutTeamAccount: (options?: Parameters<typeof customFetch>[1]) => Promise<void>;
export declare const getLogoutTeamAccountMutationKey: () => readonly ["logoutTeamAccount"];
export declare const getLogoutTeamAccountMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof logoutTeamAccount>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof logoutTeamAccount>>, TError, void, TContext>;
export type LogoutTeamAccountMutationResult = NonNullable<Awaited<ReturnType<typeof logoutTeamAccount>>>;
export type LogoutTeamAccountMutationError = ErrorType<unknown>;
export declare const useLogoutTeamAccount: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof logoutTeamAccount>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof logoutTeamAccount>>, TError, void, TContext>;
export declare const getChangeTeamPasswordUrl: () => string;
export declare const changeTeamPassword: (teamPasswordInput: TeamPasswordInput, options?: Parameters<typeof customFetch>[1]) => Promise<TeamAccount>;
export declare const getChangeTeamPasswordMutationKey: () => readonly ["changeTeamPassword"];
export declare const getChangeTeamPasswordMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof changeTeamPassword>>, TError, ChangeTeamPasswordMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof changeTeamPassword>>, TError, ChangeTeamPasswordMutationVariables, TContext>;
export type ChangeTeamPasswordMutationResult = NonNullable<Awaited<ReturnType<typeof changeTeamPassword>>>;
export type ChangeTeamPasswordMutationBody = BodyType<TeamPasswordInput>;
export type ChangeTeamPasswordMutationError = ErrorType<unknown>;
export type ChangeTeamPasswordMutationVariables = {
    data: BodyType<TeamPasswordInput>;
};
export declare const useChangeTeamPassword: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof changeTeamPassword>>, TError, ChangeTeamPasswordMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof changeTeamPassword>>, TError, ChangeTeamPasswordMutationVariables, TContext>;
export declare const getListTeamAccountsUrl: () => string;
export declare const listTeamAccounts: (options?: Parameters<typeof customFetch>[1]) => Promise<TeamAccount[]>;
export declare const getListTeamAccountsQueryKey: () => readonly ["/api/team-auth/users"];
export declare const getListTeamAccountsQueryOptions: <TData = Awaited<ReturnType<typeof listTeamAccounts>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listTeamAccounts>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listTeamAccounts>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListTeamAccountsQueryResult = NonNullable<Awaited<ReturnType<typeof listTeamAccounts>>>;
export type ListTeamAccountsQueryError = ErrorType<unknown>;
export declare function useListTeamAccounts<TData = Awaited<ReturnType<typeof listTeamAccounts>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listTeamAccounts>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateTeamAccountUrl: () => string;
export declare const createTeamAccount: (teamAccountInput: TeamAccountInput, options?: Parameters<typeof customFetch>[1]) => Promise<TeamAccount>;
export declare const getCreateTeamAccountMutationKey: () => readonly ["createTeamAccount"];
export declare const getCreateTeamAccountMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createTeamAccount>>, TError, CreateTeamAccountMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createTeamAccount>>, TError, CreateTeamAccountMutationVariables, TContext>;
export type CreateTeamAccountMutationResult = NonNullable<Awaited<ReturnType<typeof createTeamAccount>>>;
export type CreateTeamAccountMutationBody = BodyType<TeamAccountInput>;
export type CreateTeamAccountMutationError = ErrorType<unknown>;
export type CreateTeamAccountMutationVariables = {
    data: BodyType<TeamAccountInput>;
};
export declare const useCreateTeamAccount: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createTeamAccount>>, TError, CreateTeamAccountMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createTeamAccount>>, TError, CreateTeamAccountMutationVariables, TContext>;
export declare const getUpdateTeamAccountUrl: (id: string) => string;
export declare const updateTeamAccount: (id: string, teamAccountUpdate: TeamAccountUpdate, options?: Parameters<typeof customFetch>[1]) => Promise<TeamAccount>;
export declare const getUpdateTeamAccountMutationKey: () => readonly ["updateTeamAccount"];
export declare const getUpdateTeamAccountMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateTeamAccount>>, TError, UpdateTeamAccountMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateTeamAccount>>, TError, UpdateTeamAccountMutationVariables, TContext>;
export type UpdateTeamAccountMutationResult = NonNullable<Awaited<ReturnType<typeof updateTeamAccount>>>;
export type UpdateTeamAccountMutationBody = BodyType<TeamAccountUpdate>;
export type UpdateTeamAccountMutationError = ErrorType<unknown>;
export type UpdateTeamAccountMutationVariables = {
    id: string;
    data: BodyType<TeamAccountUpdate>;
};
export declare const useUpdateTeamAccount: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateTeamAccount>>, TError, UpdateTeamAccountMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateTeamAccount>>, TError, UpdateTeamAccountMutationVariables, TContext>;
export declare const getDeleteTeamAccountUrl: (id: string) => string;
export declare const deleteTeamAccount: (id: string, options?: Parameters<typeof customFetch>[1]) => Promise<void>;
export declare const getDeleteTeamAccountMutationKey: () => readonly ["deleteTeamAccount"];
export declare const getDeleteTeamAccountMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteTeamAccount>>, TError, DeleteTeamAccountMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteTeamAccount>>, TError, DeleteTeamAccountMutationVariables, TContext>;
export type DeleteTeamAccountMutationResult = NonNullable<Awaited<ReturnType<typeof deleteTeamAccount>>>;
export type DeleteTeamAccountMutationError = ErrorType<unknown>;
export type DeleteTeamAccountMutationVariables = {
    id: string;
};
export declare const useDeleteTeamAccount: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteTeamAccount>>, TError, DeleteTeamAccountMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteTeamAccount>>, TError, DeleteTeamAccountMutationVariables, TContext>;
export declare const getGetGatewayUrl: () => string;
export declare const getGateway: (options?: Parameters<typeof customFetch>[1]) => Promise<GatewayState>;
export declare const getGetGatewayQueryKey: () => readonly ["/api/v1/gateway"];
export declare const getGetGatewayQueryOptions: <TData = Awaited<ReturnType<typeof getGateway>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getGateway>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getGateway>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetGatewayQueryResult = NonNullable<Awaited<ReturnType<typeof getGateway>>>;
export type GetGatewayQueryError = ErrorType<unknown>;
export declare function useGetGateway<TData = Awaited<ReturnType<typeof getGateway>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getGateway>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateGatewayConnectorUrl: () => string;
export declare const createGatewayConnector: (gatewayConnectorInput: GatewayConnectorInput, options?: Parameters<typeof customFetch>[1]) => Promise<GatewayConnector>;
export declare const getCreateGatewayConnectorMutationKey: () => readonly ["createGatewayConnector"];
export declare const getCreateGatewayConnectorMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createGatewayConnector>>, TError, CreateGatewayConnectorMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createGatewayConnector>>, TError, CreateGatewayConnectorMutationVariables, TContext>;
export type CreateGatewayConnectorMutationResult = NonNullable<Awaited<ReturnType<typeof createGatewayConnector>>>;
export type CreateGatewayConnectorMutationBody = BodyType<GatewayConnectorInput>;
export type CreateGatewayConnectorMutationError = ErrorType<unknown>;
export type CreateGatewayConnectorMutationVariables = {
    data: BodyType<GatewayConnectorInput>;
};
export declare const useCreateGatewayConnector: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createGatewayConnector>>, TError, CreateGatewayConnectorMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createGatewayConnector>>, TError, CreateGatewayConnectorMutationVariables, TContext>;
export declare const getUpdateGatewayConnectorUrl: (id: string) => string;
export declare const updateGatewayConnector: (id: string, gatewayConnectorUpdate: GatewayConnectorUpdate, options?: Parameters<typeof customFetch>[1]) => Promise<GatewayConnector>;
export declare const getUpdateGatewayConnectorMutationKey: () => readonly ["updateGatewayConnector"];
export declare const getUpdateGatewayConnectorMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateGatewayConnector>>, TError, UpdateGatewayConnectorMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateGatewayConnector>>, TError, UpdateGatewayConnectorMutationVariables, TContext>;
export type UpdateGatewayConnectorMutationResult = NonNullable<Awaited<ReturnType<typeof updateGatewayConnector>>>;
export type UpdateGatewayConnectorMutationBody = BodyType<GatewayConnectorUpdate>;
export type UpdateGatewayConnectorMutationError = ErrorType<unknown>;
export type UpdateGatewayConnectorMutationVariables = {
    id: string;
    data: BodyType<GatewayConnectorUpdate>;
};
export declare const useUpdateGatewayConnector: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateGatewayConnector>>, TError, UpdateGatewayConnectorMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateGatewayConnector>>, TError, UpdateGatewayConnectorMutationVariables, TContext>;
export declare const getDeleteGatewayConnectorUrl: (id: string) => string;
export declare const deleteGatewayConnector: (id: string, options?: Parameters<typeof customFetch>[1]) => Promise<Message>;
export declare const getDeleteGatewayConnectorMutationKey: () => readonly ["deleteGatewayConnector"];
export declare const getDeleteGatewayConnectorMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteGatewayConnector>>, TError, DeleteGatewayConnectorMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteGatewayConnector>>, TError, DeleteGatewayConnectorMutationVariables, TContext>;
export type DeleteGatewayConnectorMutationResult = NonNullable<Awaited<ReturnType<typeof deleteGatewayConnector>>>;
export type DeleteGatewayConnectorMutationError = ErrorType<unknown>;
export type DeleteGatewayConnectorMutationVariables = {
    id: string;
};
export declare const useDeleteGatewayConnector: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteGatewayConnector>>, TError, DeleteGatewayConnectorMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteGatewayConnector>>, TError, DeleteGatewayConnectorMutationVariables, TContext>;
export declare const getTestGatewayConnectorUrl: (id: string) => string;
export declare const testGatewayConnector: (id: string, options?: Parameters<typeof customFetch>[1]) => Promise<GatewayResult>;
export declare const getTestGatewayConnectorMutationKey: () => readonly ["testGatewayConnector"];
export declare const getTestGatewayConnectorMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof testGatewayConnector>>, TError, TestGatewayConnectorMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof testGatewayConnector>>, TError, TestGatewayConnectorMutationVariables, TContext>;
export type TestGatewayConnectorMutationResult = NonNullable<Awaited<ReturnType<typeof testGatewayConnector>>>;
export type TestGatewayConnectorMutationError = ErrorType<unknown>;
export type TestGatewayConnectorMutationVariables = {
    id: string;
};
export declare const useTestGatewayConnector: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof testGatewayConnector>>, TError, TestGatewayConnectorMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof testGatewayConnector>>, TError, TestGatewayConnectorMutationVariables, TContext>;
export declare const getQueryGatewayConnectorUrl: (id: string) => string;
export declare const queryGatewayConnector: (id: string, gatewayQuery: GatewayQuery, options?: Parameters<typeof customFetch>[1]) => Promise<GatewayResult>;
export declare const getQueryGatewayConnectorMutationKey: () => readonly ["queryGatewayConnector"];
export declare const getQueryGatewayConnectorMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof queryGatewayConnector>>, TError, QueryGatewayConnectorMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof queryGatewayConnector>>, TError, QueryGatewayConnectorMutationVariables, TContext>;
export type QueryGatewayConnectorMutationResult = NonNullable<Awaited<ReturnType<typeof queryGatewayConnector>>>;
export type QueryGatewayConnectorMutationBody = BodyType<GatewayQuery>;
export type QueryGatewayConnectorMutationError = ErrorType<unknown>;
export type QueryGatewayConnectorMutationVariables = {
    id: string;
    data: BodyType<GatewayQuery>;
};
export declare const useQueryGatewayConnector: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof queryGatewayConnector>>, TError, QueryGatewayConnectorMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof queryGatewayConnector>>, TError, QueryGatewayConnectorMutationVariables, TContext>;
export declare const getGetCurrentAuthUserUrl: () => string;
export declare const getCurrentAuthUser: (options?: Parameters<typeof customFetch>[1]) => Promise<AuthUserEnvelope>;
export declare const getGetCurrentAuthUserQueryKey: () => readonly ["/api/auth/user"];
export declare const getGetCurrentAuthUserQueryOptions: <TData = Awaited<ReturnType<typeof getCurrentAuthUser>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getCurrentAuthUser>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getCurrentAuthUser>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetCurrentAuthUserQueryResult = NonNullable<Awaited<ReturnType<typeof getCurrentAuthUser>>>;
export type GetCurrentAuthUserQueryError = ErrorType<unknown>;
export declare function useGetCurrentAuthUser<TData = Awaited<ReturnType<typeof getCurrentAuthUser>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getCurrentAuthUser>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getBeginBrowserLoginUrl: () => string;
export declare const beginBrowserLogin: (options?: Parameters<typeof customFetch>[1]) => Promise<unknown>;
export declare const getBeginBrowserLoginQueryKey: () => readonly ["/api/login"];
export declare const getBeginBrowserLoginQueryOptions: <TData = Awaited<ReturnType<typeof beginBrowserLogin>>, TError = ErrorType<void>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof beginBrowserLogin>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof beginBrowserLogin>>, TError, TData> & {
    queryKey: QueryKey;
};
export type BeginBrowserLoginQueryResult = NonNullable<Awaited<ReturnType<typeof beginBrowserLogin>>>;
export type BeginBrowserLoginQueryError = ErrorType<void>;
export declare function useBeginBrowserLogin<TData = Awaited<ReturnType<typeof beginBrowserLogin>>, TError = ErrorType<void>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof beginBrowserLogin>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getHandleBrowserLoginCallbackUrl: () => string;
export declare const handleBrowserLoginCallback: (options?: Parameters<typeof customFetch>[1]) => Promise<unknown>;
export declare const getHandleBrowserLoginCallbackQueryKey: () => readonly ["/api/callback"];
export declare const getHandleBrowserLoginCallbackQueryOptions: <TData = Awaited<ReturnType<typeof handleBrowserLoginCallback>>, TError = ErrorType<void>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof handleBrowserLoginCallback>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof handleBrowserLoginCallback>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HandleBrowserLoginCallbackQueryResult = NonNullable<Awaited<ReturnType<typeof handleBrowserLoginCallback>>>;
export type HandleBrowserLoginCallbackQueryError = ErrorType<void>;
export declare function useHandleBrowserLoginCallback<TData = Awaited<ReturnType<typeof handleBrowserLoginCallback>>, TError = ErrorType<void>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof handleBrowserLoginCallback>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getLogoutBrowserSessionUrl: () => string;
export declare const logoutBrowserSession: (options?: Parameters<typeof customFetch>[1]) => Promise<unknown>;
export declare const getLogoutBrowserSessionQueryKey: () => readonly ["/api/logout"];
export declare const getLogoutBrowserSessionQueryOptions: <TData = Awaited<ReturnType<typeof logoutBrowserSession>>, TError = ErrorType<void>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof logoutBrowserSession>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof logoutBrowserSession>>, TError, TData> & {
    queryKey: QueryKey;
};
export type LogoutBrowserSessionQueryResult = NonNullable<Awaited<ReturnType<typeof logoutBrowserSession>>>;
export type LogoutBrowserSessionQueryError = ErrorType<void>;
export declare function useLogoutBrowserSession<TData = Awaited<ReturnType<typeof logoutBrowserSession>>, TError = ErrorType<void>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof logoutBrowserSession>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getExchangeMobileAuthorizationCodeUrl: () => string;
export declare const exchangeMobileAuthorizationCode: (mobileTokenExchangeRequest: MobileTokenExchangeRequest, options?: Parameters<typeof customFetch>[1]) => Promise<MobileTokenExchangeSuccess>;
export declare const getExchangeMobileAuthorizationCodeMutationKey: () => readonly ["exchangeMobileAuthorizationCode"];
export declare const getExchangeMobileAuthorizationCodeMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof exchangeMobileAuthorizationCode>>, TError, ExchangeMobileAuthorizationCodeMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof exchangeMobileAuthorizationCode>>, TError, ExchangeMobileAuthorizationCodeMutationVariables, TContext>;
export type ExchangeMobileAuthorizationCodeMutationResult = NonNullable<Awaited<ReturnType<typeof exchangeMobileAuthorizationCode>>>;
export type ExchangeMobileAuthorizationCodeMutationBody = BodyType<MobileTokenExchangeRequest>;
export type ExchangeMobileAuthorizationCodeMutationError = ErrorType<unknown>;
export type ExchangeMobileAuthorizationCodeMutationVariables = {
    data: BodyType<MobileTokenExchangeRequest>;
};
export declare const useExchangeMobileAuthorizationCode: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof exchangeMobileAuthorizationCode>>, TError, ExchangeMobileAuthorizationCodeMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof exchangeMobileAuthorizationCode>>, TError, ExchangeMobileAuthorizationCodeMutationVariables, TContext>;
export declare const getLogoutMobileSessionUrl: () => string;
export declare const logoutMobileSession: (options?: Parameters<typeof customFetch>[1]) => Promise<LogoutSuccess>;
export declare const getLogoutMobileSessionMutationKey: () => readonly ["logoutMobileSession"];
export declare const getLogoutMobileSessionMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof logoutMobileSession>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof logoutMobileSession>>, TError, void, TContext>;
export type LogoutMobileSessionMutationResult = NonNullable<Awaited<ReturnType<typeof logoutMobileSession>>>;
export type LogoutMobileSessionMutationError = ErrorType<unknown>;
export declare const useLogoutMobileSession: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof logoutMobileSession>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof logoutMobileSession>>, TError, void, TContext>;
export declare const getGetLiveDiscoveryUrl: () => string;
export declare const getLiveDiscovery: (options?: Parameters<typeof customFetch>[1]) => Promise<LiveDiscovery>;
export declare const getGetLiveDiscoveryQueryKey: () => readonly ["/api/v1/live"];
export declare const getGetLiveDiscoveryQueryOptions: <TData = Awaited<ReturnType<typeof getLiveDiscovery>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getLiveDiscovery>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getLiveDiscovery>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetLiveDiscoveryQueryResult = NonNullable<Awaited<ReturnType<typeof getLiveDiscovery>>>;
export type GetLiveDiscoveryQueryError = ErrorType<unknown>;
export declare function useGetLiveDiscovery<TData = Awaited<ReturnType<typeof getLiveDiscovery>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getLiveDiscovery>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getRegisterScannerUrl: () => string;
export declare const registerScanner: (scannerInput: ScannerInput, options?: Parameters<typeof customFetch>[1]) => Promise<ScannerRegistration>;
export declare const getRegisterScannerMutationKey: () => readonly ["registerScanner"];
export declare const getRegisterScannerMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof registerScanner>>, TError, RegisterScannerMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof registerScanner>>, TError, RegisterScannerMutationVariables, TContext>;
export type RegisterScannerMutationResult = NonNullable<Awaited<ReturnType<typeof registerScanner>>>;
export type RegisterScannerMutationBody = BodyType<ScannerInput>;
export type RegisterScannerMutationError = ErrorType<unknown>;
export type RegisterScannerMutationVariables = {
    data: BodyType<ScannerInput>;
};
export declare const useRegisterScanner: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof registerScanner>>, TError, RegisterScannerMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof registerScanner>>, TError, RegisterScannerMutationVariables, TContext>;
export declare const getRevokeScannerUrl: (id: string) => string;
export declare const revokeScanner: (id: string, options?: Parameters<typeof customFetch>[1]) => Promise<Scanner>;
export declare const getRevokeScannerMutationKey: () => readonly ["revokeScanner"];
export declare const getRevokeScannerMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof revokeScanner>>, TError, RevokeScannerMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof revokeScanner>>, TError, RevokeScannerMutationVariables, TContext>;
export type RevokeScannerMutationResult = NonNullable<Awaited<ReturnType<typeof revokeScanner>>>;
export type RevokeScannerMutationError = ErrorType<unknown>;
export type RevokeScannerMutationVariables = {
    id: string;
};
export declare const useRevokeScanner: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof revokeScanner>>, TError, RevokeScannerMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof revokeScanner>>, TError, RevokeScannerMutationVariables, TContext>;
export declare const getApprovePublicTargetUrl: () => string;
export declare const approvePublicTarget: (publicTargetInput: PublicTargetInput, options?: Parameters<typeof customFetch>[1]) => Promise<PublicTarget>;
export declare const getApprovePublicTargetMutationKey: () => readonly ["approvePublicTarget"];
export declare const getApprovePublicTargetMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof approvePublicTarget>>, TError, ApprovePublicTargetMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof approvePublicTarget>>, TError, ApprovePublicTargetMutationVariables, TContext>;
export type ApprovePublicTargetMutationResult = NonNullable<Awaited<ReturnType<typeof approvePublicTarget>>>;
export type ApprovePublicTargetMutationBody = BodyType<PublicTargetInput>;
export type ApprovePublicTargetMutationError = ErrorType<unknown>;
export type ApprovePublicTargetMutationVariables = {
    data: BodyType<PublicTargetInput>;
};
export declare const useApprovePublicTarget: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof approvePublicTarget>>, TError, ApprovePublicTargetMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof approvePublicTarget>>, TError, ApprovePublicTargetMutationVariables, TContext>;
export declare const getRevokePublicTargetUrl: (id: string) => string;
export declare const revokePublicTarget: (id: string, options?: Parameters<typeof customFetch>[1]) => Promise<PublicTarget>;
export declare const getRevokePublicTargetMutationKey: () => readonly ["revokePublicTarget"];
export declare const getRevokePublicTargetMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof revokePublicTarget>>, TError, RevokePublicTargetMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof revokePublicTarget>>, TError, RevokePublicTargetMutationVariables, TContext>;
export type RevokePublicTargetMutationResult = NonNullable<Awaited<ReturnType<typeof revokePublicTarget>>>;
export type RevokePublicTargetMutationError = ErrorType<unknown>;
export type RevokePublicTargetMutationVariables = {
    id: string;
};
export declare const useRevokePublicTarget: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof revokePublicTarget>>, TError, RevokePublicTargetMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof revokePublicTarget>>, TError, RevokePublicTargetMutationVariables, TContext>;
export declare const getCreateLiveJobUrl: () => string;
export declare const createLiveJob: (liveJobInput: LiveJobInput, options?: Parameters<typeof customFetch>[1]) => Promise<LiveJob>;
export declare const getCreateLiveJobMutationKey: () => readonly ["createLiveJob"];
export declare const getCreateLiveJobMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createLiveJob>>, TError, CreateLiveJobMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createLiveJob>>, TError, CreateLiveJobMutationVariables, TContext>;
export type CreateLiveJobMutationResult = NonNullable<Awaited<ReturnType<typeof createLiveJob>>>;
export type CreateLiveJobMutationBody = BodyType<LiveJobInput>;
export type CreateLiveJobMutationError = ErrorType<unknown>;
export type CreateLiveJobMutationVariables = {
    data: BodyType<LiveJobInput>;
};
export declare const useCreateLiveJob: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createLiveJob>>, TError, CreateLiveJobMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createLiveJob>>, TError, CreateLiveJobMutationVariables, TContext>;
export declare const getGetEmbeddedStatusUrl: () => string;
export declare const getEmbeddedStatus: (options?: Parameters<typeof customFetch>[1]) => Promise<GetEmbeddedStatus200>;
export declare const getGetEmbeddedStatusQueryKey: () => readonly ["/api/v1/live/embedded-status"];
export declare const getGetEmbeddedStatusQueryOptions: <TData = Awaited<ReturnType<typeof getEmbeddedStatus>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getEmbeddedStatus>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getEmbeddedStatus>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetEmbeddedStatusQueryResult = NonNullable<Awaited<ReturnType<typeof getEmbeddedStatus>>>;
export type GetEmbeddedStatusQueryError = ErrorType<unknown>;
export declare function useGetEmbeddedStatus<TData = Awaited<ReturnType<typeof getEmbeddedStatus>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getEmbeddedStatus>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateEmbeddedJobUrl: () => string;
export declare const createEmbeddedJob: (embeddedJobInput: EmbeddedJobInput, options?: Parameters<typeof customFetch>[1]) => Promise<LiveJob>;
export declare const getCreateEmbeddedJobMutationKey: () => readonly ["createEmbeddedJob"];
export declare const getCreateEmbeddedJobMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createEmbeddedJob>>, TError, CreateEmbeddedJobMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createEmbeddedJob>>, TError, CreateEmbeddedJobMutationVariables, TContext>;
export type CreateEmbeddedJobMutationResult = NonNullable<Awaited<ReturnType<typeof createEmbeddedJob>>>;
export type CreateEmbeddedJobMutationBody = BodyType<EmbeddedJobInput>;
export type CreateEmbeddedJobMutationError = ErrorType<unknown>;
export type CreateEmbeddedJobMutationVariables = {
    data: BodyType<EmbeddedJobInput>;
};
export declare const useCreateEmbeddedJob: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createEmbeddedJob>>, TError, CreateEmbeddedJobMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createEmbeddedJob>>, TError, CreateEmbeddedJobMutationVariables, TContext>;
export declare const getStopAllLiveScansUrl: () => string;
export declare const stopAllLiveScans: (options?: Parameters<typeof customFetch>[1]) => Promise<LiveDiscovery>;
export declare const getStopAllLiveScansMutationKey: () => readonly ["stopAllLiveScans"];
export declare const getStopAllLiveScansMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof stopAllLiveScans>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof stopAllLiveScans>>, TError, void, TContext>;
export type StopAllLiveScansMutationResult = NonNullable<Awaited<ReturnType<typeof stopAllLiveScans>>>;
export type StopAllLiveScansMutationError = ErrorType<unknown>;
export declare const useStopAllLiveScans: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof stopAllLiveScans>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof stopAllLiveScans>>, TError, void, TContext>;
export declare const getCancelLiveJobUrl: (id: string) => string;
export declare const cancelLiveJob: (id: string, options?: Parameters<typeof customFetch>[1]) => Promise<LiveJob>;
export declare const getCancelLiveJobMutationKey: () => readonly ["cancelLiveJob"];
export declare const getCancelLiveJobMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof cancelLiveJob>>, TError, CancelLiveJobMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof cancelLiveJob>>, TError, CancelLiveJobMutationVariables, TContext>;
export type CancelLiveJobMutationResult = NonNullable<Awaited<ReturnType<typeof cancelLiveJob>>>;
export type CancelLiveJobMutationError = ErrorType<unknown>;
export type CancelLiveJobMutationVariables = {
    id: string;
};
export declare const useCancelLiveJob: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof cancelLiveJob>>, TError, CancelLiveJobMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof cancelLiveJob>>, TError, CancelLiveJobMutationVariables, TContext>;
export declare const getPollScannerUrl: () => string;
export declare const pollScanner: (scannerPollInput: ScannerPollInput, options?: Parameters<typeof customFetch>[1]) => Promise<ScannerPoll>;
export declare const getPollScannerMutationKey: () => readonly ["pollScanner"];
export declare const getPollScannerMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof pollScanner>>, TError, PollScannerMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof pollScanner>>, TError, PollScannerMutationVariables, TContext>;
export type PollScannerMutationResult = NonNullable<Awaited<ReturnType<typeof pollScanner>>>;
export type PollScannerMutationBody = BodyType<ScannerPollInput>;
export type PollScannerMutationError = ErrorType<unknown>;
export type PollScannerMutationVariables = {
    data: BodyType<ScannerPollInput>;
};
export declare const usePollScanner: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof pollScanner>>, TError, PollScannerMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof pollScanner>>, TError, PollScannerMutationVariables, TContext>;
export declare const getSubmitScannerResultUrl: () => string;
export declare const submitScannerResult: (scannerResultInput: ScannerResultInput, options?: Parameters<typeof customFetch>[1]) => Promise<LiveJob>;
export declare const getSubmitScannerResultMutationKey: () => readonly ["submitScannerResult"];
export declare const getSubmitScannerResultMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof submitScannerResult>>, TError, SubmitScannerResultMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof submitScannerResult>>, TError, SubmitScannerResultMutationVariables, TContext>;
export type SubmitScannerResultMutationResult = NonNullable<Awaited<ReturnType<typeof submitScannerResult>>>;
export type SubmitScannerResultMutationBody = BodyType<ScannerResultInput>;
export type SubmitScannerResultMutationError = ErrorType<unknown>;
export type SubmitScannerResultMutationVariables = {
    data: BodyType<ScannerResultInput>;
};
export declare const useSubmitScannerResult: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof submitScannerResult>>, TError, SubmitScannerResultMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof submitScannerResult>>, TError, SubmitScannerResultMutationVariables, TContext>;
export declare const getListExercisesUrl: () => string;
export declare const listExercises: (options?: Parameters<typeof customFetch>[1]) => Promise<Exercise[]>;
export declare const getListExercisesQueryKey: () => readonly ["/api/v1/exercises"];
export declare const getListExercisesQueryOptions: <TData = Awaited<ReturnType<typeof listExercises>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listExercises>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listExercises>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListExercisesQueryResult = NonNullable<Awaited<ReturnType<typeof listExercises>>>;
export type ListExercisesQueryError = ErrorType<unknown>;
export declare function useListExercises<TData = Awaited<ReturnType<typeof listExercises>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listExercises>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateExerciseUrl: () => string;
export declare const createExercise: (exerciseInput: ExerciseInput, options?: Parameters<typeof customFetch>[1]) => Promise<Exercise>;
export declare const getCreateExerciseMutationKey: () => readonly ["createExercise"];
export declare const getCreateExerciseMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createExercise>>, TError, CreateExerciseMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createExercise>>, TError, CreateExerciseMutationVariables, TContext>;
export type CreateExerciseMutationResult = NonNullable<Awaited<ReturnType<typeof createExercise>>>;
export type CreateExerciseMutationBody = BodyType<ExerciseInput>;
export type CreateExerciseMutationError = ErrorType<unknown>;
export type CreateExerciseMutationVariables = {
    data: BodyType<ExerciseInput>;
};
export declare const useCreateExercise: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createExercise>>, TError, CreateExerciseMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createExercise>>, TError, CreateExerciseMutationVariables, TContext>;
export declare const getActOnExerciseUrl: (id: string) => string;
export declare const actOnExercise: (id: string, exerciseAction: ExerciseAction, options?: Parameters<typeof customFetch>[1]) => Promise<Exercise>;
export declare const getActOnExerciseMutationKey: () => readonly ["actOnExercise"];
export declare const getActOnExerciseMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof actOnExercise>>, TError, ActOnExerciseMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof actOnExercise>>, TError, ActOnExerciseMutationVariables, TContext>;
export type ActOnExerciseMutationResult = NonNullable<Awaited<ReturnType<typeof actOnExercise>>>;
export type ActOnExerciseMutationBody = BodyType<ExerciseAction>;
export type ActOnExerciseMutationError = ErrorType<unknown>;
export type ActOnExerciseMutationVariables = {
    id: string;
    data: BodyType<ExerciseAction>;
};
export declare const useActOnExercise: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof actOnExercise>>, TError, ActOnExerciseMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof actOnExercise>>, TError, ActOnExerciseMutationVariables, TContext>;
export declare const getHealthCheckUrl: () => string;
export declare const healthCheck: (options?: Parameters<typeof customFetch>[1]) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetWorkspaceUrl: () => string;
export declare const getWorkspace: (options?: Parameters<typeof customFetch>[1]) => Promise<Workspace>;
export declare const getGetWorkspaceQueryKey: () => readonly ["/api/v1/workspace"];
export declare const getGetWorkspaceQueryOptions: <TData = Awaited<ReturnType<typeof getWorkspace>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getWorkspace>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getWorkspace>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetWorkspaceQueryResult = NonNullable<Awaited<ReturnType<typeof getWorkspace>>>;
export type GetWorkspaceQueryError = ErrorType<unknown>;
export declare function useGetWorkspace<TData = Awaited<ReturnType<typeof getWorkspace>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getWorkspace>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateScanUrl: () => string;
export declare const createScan: (scanInput: ScanInput, options?: Parameters<typeof customFetch>[1]) => Promise<Scan>;
export declare const getCreateScanMutationKey: () => readonly ["createScan"];
export declare const getCreateScanMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createScan>>, TError, CreateScanMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createScan>>, TError, CreateScanMutationVariables, TContext>;
export type CreateScanMutationResult = NonNullable<Awaited<ReturnType<typeof createScan>>>;
export type CreateScanMutationBody = BodyType<ScanInput>;
export type CreateScanMutationError = ErrorType<unknown>;
export type CreateScanMutationVariables = {
    data: BodyType<ScanInput>;
};
export declare const useCreateScan: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createScan>>, TError, CreateScanMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createScan>>, TError, CreateScanMutationVariables, TContext>;
export declare const getEmergencyStopUrl: () => string;
export declare const emergencyStop: (options?: Parameters<typeof customFetch>[1]) => Promise<Message>;
export declare const getEmergencyStopMutationKey: () => readonly ["emergencyStop"];
export declare const getEmergencyStopMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof emergencyStop>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof emergencyStop>>, TError, void, TContext>;
export type EmergencyStopMutationResult = NonNullable<Awaited<ReturnType<typeof emergencyStop>>>;
export type EmergencyStopMutationError = ErrorType<unknown>;
export declare const useEmergencyStop: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof emergencyStop>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof emergencyStop>>, TError, void, TContext>;
export declare const getUpdateRemediationUrl: (id: string) => string;
export declare const updateRemediation: (id: string, remediationInput: RemediationInput, options?: Parameters<typeof customFetch>[1]) => Promise<Message>;
export declare const getUpdateRemediationMutationKey: () => readonly ["updateRemediation"];
export declare const getUpdateRemediationMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateRemediation>>, TError, UpdateRemediationMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateRemediation>>, TError, UpdateRemediationMutationVariables, TContext>;
export type UpdateRemediationMutationResult = NonNullable<Awaited<ReturnType<typeof updateRemediation>>>;
export type UpdateRemediationMutationBody = BodyType<RemediationInput>;
export type UpdateRemediationMutationError = ErrorType<unknown>;
export type UpdateRemediationMutationVariables = {
    id: string;
    data: BodyType<RemediationInput>;
};
export declare const useUpdateRemediation: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateRemediation>>, TError, UpdateRemediationMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateRemediation>>, TError, UpdateRemediationMutationVariables, TContext>;
export declare const getInvestigateUrl: () => string;
export declare const investigate: (investigationInput: InvestigationInput, options?: Parameters<typeof customFetch>[1]) => Promise<Message>;
export declare const getInvestigateMutationKey: () => readonly ["investigate"];
export declare const getInvestigateMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof investigate>>, TError, InvestigateMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof investigate>>, TError, InvestigateMutationVariables, TContext>;
export type InvestigateMutationResult = NonNullable<Awaited<ReturnType<typeof investigate>>>;
export type InvestigateMutationBody = BodyType<InvestigationInput>;
export type InvestigateMutationError = ErrorType<unknown>;
export type InvestigateMutationVariables = {
    data: BodyType<InvestigationInput>;
};
export declare const useInvestigate: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof investigate>>, TError, InvestigateMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof investigate>>, TError, InvestigateMutationVariables, TContext>;
export declare const getSaveExecutiveInsightsUrl: () => string;
export declare const saveExecutiveInsights: (executiveInsightsConfig: ExecutiveInsightsConfig, options?: Parameters<typeof customFetch>[1]) => Promise<ExecutiveInsightsConfig>;
export declare const getSaveExecutiveInsightsMutationKey: () => readonly ["saveExecutiveInsights"];
export declare const getSaveExecutiveInsightsMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof saveExecutiveInsights>>, TError, SaveExecutiveInsightsMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof saveExecutiveInsights>>, TError, SaveExecutiveInsightsMutationVariables, TContext>;
export type SaveExecutiveInsightsMutationResult = NonNullable<Awaited<ReturnType<typeof saveExecutiveInsights>>>;
export type SaveExecutiveInsightsMutationBody = BodyType<ExecutiveInsightsConfig>;
export type SaveExecutiveInsightsMutationError = ErrorType<void>;
export type SaveExecutiveInsightsMutationVariables = {
    data: BodyType<ExecutiveInsightsConfig>;
};
export declare const useSaveExecutiveInsights: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof saveExecutiveInsights>>, TError, SaveExecutiveInsightsMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof saveExecutiveInsights>>, TError, SaveExecutiveInsightsMutationVariables, TContext>;
export declare const getSaveSettingsUrl: () => string;
export declare const saveSettings: (settings: Settings, options?: Parameters<typeof customFetch>[1]) => Promise<Settings>;
export declare const getSaveSettingsMutationKey: () => readonly ["saveSettings"];
export declare const getSaveSettingsMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof saveSettings>>, TError, SaveSettingsMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof saveSettings>>, TError, SaveSettingsMutationVariables, TContext>;
export type SaveSettingsMutationResult = NonNullable<Awaited<ReturnType<typeof saveSettings>>>;
export type SaveSettingsMutationBody = BodyType<Settings>;
export type SaveSettingsMutationError = ErrorType<unknown>;
export type SaveSettingsMutationVariables = {
    data: BodyType<Settings>;
};
export declare const useSaveSettings: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof saveSettings>>, TError, SaveSettingsMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof saveSettings>>, TError, SaveSettingsMutationVariables, TContext>;
export {};
//# sourceMappingURL=api.d.ts.map