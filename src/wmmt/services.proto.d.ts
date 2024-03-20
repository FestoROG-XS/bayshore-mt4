import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace v388. */
export namespace v388 {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Represents a Rpc */
        class Rpc extends $protobuf.rpc.Service {

            /**
             * Constructs a new Rpc service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new Rpc service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Rpc;

            /**
             * Calls register_system_info.
             * @param request RegisterSystemInfoRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and RegisterSystemInfoResponse
             */
            public register_system_info(request: v388.protobuf.IRegisterSystemInfoRequest, callback: v388.protobuf.Rpc.register_system_infoCallback): void;

            /**
             * Calls register_system_info.
             * @param request RegisterSystemInfoRequest message or plain object
             * @returns Promise
             */
            public register_system_info(request: v388.protobuf.IRegisterSystemInfoRequest): Promise<v388.protobuf.RegisterSystemInfoResponse>;

            /**
             * Calls register_system_stats.
             * @param request RegisterSystemStatsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and RegisterSystemStatsResponse
             */
            public register_system_stats(request: v388.protobuf.IRegisterSystemStatsRequest, callback: v388.protobuf.Rpc.register_system_statsCallback): void;

            /**
             * Calls register_system_stats.
             * @param request RegisterSystemStatsRequest message or plain object
             * @returns Promise
             */
            public register_system_stats(request: v388.protobuf.IRegisterSystemStatsRequest): Promise<v388.protobuf.RegisterSystemStatsResponse>;

            /**
             * Calls register_ghost_trail.
             * @param request RegisterGhostTrailRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and RegisterGhostTrailResponse
             */
            public register_ghost_trail(request: v388.protobuf.IRegisterGhostTrailRequest, callback: v388.protobuf.Rpc.register_ghost_trailCallback): void;

            /**
             * Calls register_ghost_trail.
             * @param request RegisterGhostTrailRequest message or plain object
             * @returns Promise
             */
            public register_ghost_trail(request: v388.protobuf.IRegisterGhostTrailRequest): Promise<v388.protobuf.RegisterGhostTrailResponse>;

            /**
             * Calls load_user.
             * @param request LoadUserRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and LoadUserResponse
             */
            public load_user(request: v388.protobuf.ILoadUserRequest, callback: v388.protobuf.Rpc.load_userCallback): void;

            /**
             * Calls load_user.
             * @param request LoadUserRequest message or plain object
             * @returns Promise
             */
            public load_user(request: v388.protobuf.ILoadUserRequest): Promise<v388.protobuf.LoadUserResponse>;

            /**
             * Calls update_user_lock.
             * @param request UpdateUserLockRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and UpdateUserLockResponse
             */
            public update_user_lock(request: v388.protobuf.IUpdateUserLockRequest, callback: v388.protobuf.Rpc.update_user_lockCallback): void;

            /**
             * Calls update_user_lock.
             * @param request UpdateUserLockRequest message or plain object
             * @returns Promise
             */
            public update_user_lock(request: v388.protobuf.IUpdateUserLockRequest): Promise<v388.protobuf.UpdateUserLockResponse>;

            /**
             * Calls load_car.
             * @param request LoadCarRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and LoadCarResponse
             */
            public load_car(request: v388.protobuf.ILoadCarRequest, callback: v388.protobuf.Rpc.load_carCallback): void;

            /**
             * Calls load_car.
             * @param request LoadCarRequest message or plain object
             * @returns Promise
             */
            public load_car(request: v388.protobuf.ILoadCarRequest): Promise<v388.protobuf.LoadCarResponse>;

            /**
             * Calls create_car.
             * @param request CreateCarRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and CreateCarResponse
             */
            public create_car(request: v388.protobuf.ICreateCarRequest, callback: v388.protobuf.Rpc.create_carCallback): void;

            /**
             * Calls create_car.
             * @param request CreateCarRequest message or plain object
             * @returns Promise
             */
            public create_car(request: v388.protobuf.ICreateCarRequest): Promise<v388.protobuf.CreateCarResponse>;

            /**
             * Calls load_game_history.
             * @param request LoadGameHistoryRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and LoadGameHistoryResponse
             */
            public load_game_history(request: v388.protobuf.ILoadGameHistoryRequest, callback: v388.protobuf.Rpc.load_game_historyCallback): void;

            /**
             * Calls load_game_history.
             * @param request LoadGameHistoryRequest message or plain object
             * @returns Promise
             */
            public load_game_history(request: v388.protobuf.ILoadGameHistoryRequest): Promise<v388.protobuf.LoadGameHistoryResponse>;

            /**
             * Calls update_car.
             * @param request UpdateCarRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and UpdateCarResponse
             */
            public update_car(request: v388.protobuf.IUpdateCarRequest, callback: v388.protobuf.Rpc.update_carCallback): void;

            /**
             * Calls update_car.
             * @param request UpdateCarRequest message or plain object
             * @returns Promise
             */
            public update_car(request: v388.protobuf.IUpdateCarRequest): Promise<v388.protobuf.UpdateCarResponse>;

            /**
             * Calls save_game_result.
             * @param request SaveGameResultRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and SaveGameResultResponse
             */
            public save_game_result(request: v388.protobuf.ISaveGameResultRequest, callback: v388.protobuf.Rpc.save_game_resultCallback): void;

            /**
             * Calls save_game_result.
             * @param request SaveGameResultRequest message or plain object
             * @returns Promise
             */
            public save_game_result(request: v388.protobuf.ISaveGameResultRequest): Promise<v388.protobuf.SaveGameResultResponse>;

            /**
             * Calls save_multi_game_result.
             * @param request SaveMultiGameResultRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and SaveMultiGameResultResponse
             */
            public save_multi_game_result(request: v388.protobuf.ISaveMultiGameResultRequest, callback: v388.protobuf.Rpc.save_multi_game_resultCallback): void;

            /**
             * Calls save_multi_game_result.
             * @param request SaveMultiGameResultRequest message or plain object
             * @returns Promise
             */
            public save_multi_game_result(request: v388.protobuf.ISaveMultiGameResultRequest): Promise<v388.protobuf.SaveMultiGameResultResponse>;

            /**
             * Calls save_charge.
             * @param request SaveChargeRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and SaveChargeResponse
             */
            public save_charge(request: v388.protobuf.ISaveChargeRequest, callback: v388.protobuf.Rpc.save_chargeCallback): void;

            /**
             * Calls save_charge.
             * @param request SaveChargeRequest message or plain object
             * @returns Promise
             */
            public save_charge(request: v388.protobuf.ISaveChargeRequest): Promise<v388.protobuf.SaveChargeResponse>;

            /**
             * Calls load_revenges.
             * @param request LoadRevengesRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and LoadRevengesResponse
             */
            public load_revenges(request: v388.protobuf.ILoadRevengesRequest, callback: v388.protobuf.Rpc.load_revengesCallback): void;

            /**
             * Calls load_revenges.
             * @param request LoadRevengesRequest message or plain object
             * @returns Promise
             */
            public load_revenges(request: v388.protobuf.ILoadRevengesRequest): Promise<v388.protobuf.LoadRevengesResponse>;

            /**
             * Calls load_ghost_battle_history.
             * @param request LoadGhostBattleHistoryRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and LoadGhostBattleHistoryResponse
             */
            public load_ghost_battle_history(request: v388.protobuf.ILoadGhostBattleHistoryRequest, callback: v388.protobuf.Rpc.load_ghost_battle_historyCallback): void;

            /**
             * Calls load_ghost_battle_history.
             * @param request LoadGhostBattleHistoryRequest message or plain object
             * @returns Promise
             */
            public load_ghost_battle_history(request: v388.protobuf.ILoadGhostBattleHistoryRequest): Promise<v388.protobuf.LoadGhostBattleHistoryResponse>;

            /**
             * Calls load_ghost_battle_info.
             * @param request LoadGhostBattleInfoRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and LoadGhostBattleInfoResponse
             */
            public load_ghost_battle_info(request: v388.protobuf.ILoadGhostBattleInfoRequest, callback: v388.protobuf.Rpc.load_ghost_battle_infoCallback): void;

            /**
             * Calls load_ghost_battle_info.
             * @param request LoadGhostBattleInfoRequest message or plain object
             * @returns Promise
             */
            public load_ghost_battle_info(request: v388.protobuf.ILoadGhostBattleInfoRequest): Promise<v388.protobuf.LoadGhostBattleInfoResponse>;

            /**
             * Calls load_ghost_competition_info.
             * @param request LoadGhostCompetitionInfoRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and LoadGhostCompetitionInfoResponse
             */
            public load_ghost_competition_info(request: v388.protobuf.ILoadGhostCompetitionInfoRequest, callback: v388.protobuf.Rpc.load_ghost_competition_infoCallback): void;

            /**
             * Calls load_ghost_competition_info.
             * @param request LoadGhostCompetitionInfoRequest message or plain object
             * @returns Promise
             */
            public load_ghost_competition_info(request: v388.protobuf.ILoadGhostCompetitionInfoRequest): Promise<v388.protobuf.LoadGhostCompetitionInfoResponse>;

            /**
             * Calls load_time_attack_record.
             * @param request LoadTimeAttackRecordRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and LoadTimeAttackRecordResponse
             */
            public load_time_attack_record(request: v388.protobuf.ILoadTimeAttackRecordRequest, callback: v388.protobuf.Rpc.load_time_attack_recordCallback): void;

            /**
             * Calls load_time_attack_record.
             * @param request LoadTimeAttackRecordRequest message or plain object
             * @returns Promise
             */
            public load_time_attack_record(request: v388.protobuf.ILoadTimeAttackRecordRequest): Promise<v388.protobuf.LoadTimeAttackRecordResponse>;

            /**
             * Calls save_terminal_result.
             * @param request SaveTerminalResultRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and SaveTerminalResultResponse
             */
            public save_terminal_result(request: v388.protobuf.ISaveTerminalResultRequest, callback: v388.protobuf.Rpc.save_terminal_resultCallback): void;

            /**
             * Calls save_terminal_result.
             * @param request SaveTerminalResultRequest message or plain object
             * @returns Promise
             */
            public save_terminal_result(request: v388.protobuf.ISaveTerminalResultRequest): Promise<v388.protobuf.SaveTerminalResultResponse>;

            /**
             * Calls ping.
             * @param request PingRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and PingResponse
             */
            public ping(request: v388.protobuf.IPingRequest, callback: v388.protobuf.Rpc.pingCallback): void;

            /**
             * Calls ping.
             * @param request PingRequest message or plain object
             * @returns Promise
             */
            public ping(request: v388.protobuf.IPingRequest): Promise<v388.protobuf.PingResponse>;

            /**
             * Calls load_team_information.
             * @param request LoadTeamInformationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and LoadTeamInformationResponse
             */
            public load_team_information(request: v388.protobuf.ILoadTeamInformationRequest, callback: v388.protobuf.Rpc.load_team_informationCallback): void;

            /**
             * Calls load_team_information.
             * @param request LoadTeamInformationRequest message or plain object
             * @returns Promise
             */
            public load_team_information(request: v388.protobuf.ILoadTeamInformationRequest): Promise<v388.protobuf.LoadTeamInformationResponse>;

            /**
             * Calls create_user.
             * @param request CreateUserRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and CreateUserResponse
             */
            public create_user(request: v388.protobuf.ICreateUserRequest, callback: v388.protobuf.Rpc.create_userCallback): void;

            /**
             * Calls create_user.
             * @param request CreateUserRequest message or plain object
             * @returns Promise
             */
            public create_user(request: v388.protobuf.ICreateUserRequest): Promise<v388.protobuf.CreateUserResponse>;

            /**
             * Calls ask_access_code.
             * @param request AskAccessCodeRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and AskAccessCodeResponse
             */
            public ask_access_code(request: v388.protobuf.IAskAccessCodeRequest, callback: v388.protobuf.Rpc.ask_access_codeCallback): void;

            /**
             * Calls ask_access_code.
             * @param request AskAccessCodeRequest message or plain object
             * @returns Promise
             */
            public ask_access_code(request: v388.protobuf.IAskAccessCodeRequest): Promise<v388.protobuf.AskAccessCodeResponse>;

            /**
             * Calls prepare_car_succession.
             * @param request PrepareCarSuccessionRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and PrepareCarSuccessionResponse
             */
            public prepare_car_succession(request: v388.protobuf.IPrepareCarSuccessionRequest, callback: v388.protobuf.Rpc.prepare_car_successionCallback): void;

            /**
             * Calls prepare_car_succession.
             * @param request PrepareCarSuccessionRequest message or plain object
             * @returns Promise
             */
            public prepare_car_succession(request: v388.protobuf.IPrepareCarSuccessionRequest): Promise<v388.protobuf.PrepareCarSuccessionResponse>;

            /**
             * Calls succeed_car.
             * @param request SucceedCarRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and SucceedCarResponse
             */
            public succeed_car(request: v388.protobuf.ISucceedCarRequest, callback: v388.protobuf.Rpc.succeed_carCallback): void;

            /**
             * Calls succeed_car.
             * @param request SucceedCarRequest message or plain object
             * @returns Promise
             */
            public succeed_car(request: v388.protobuf.ISucceedCarRequest): Promise<v388.protobuf.SucceedCarResponse>;

            /**
             * Calls register_opponent_ghost.
             * @param request RegisterOpponentGhostRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and RegisterOpponentGhostResponse
             */
            public register_opponent_ghost(request: v388.protobuf.IRegisterOpponentGhostRequest, callback: v388.protobuf.Rpc.register_opponent_ghostCallback): void;

            /**
             * Calls register_opponent_ghost.
             * @param request RegisterOpponentGhostRequest message or plain object
             * @returns Promise
             */
            public register_opponent_ghost(request: v388.protobuf.IRegisterOpponentGhostRequest): Promise<v388.protobuf.RegisterOpponentGhostResponse>;

            /**
             * Calls check_team_name.
             * @param request CheckTeamNameRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and CheckTeamNameResponse
             */
            public check_team_name(request: v388.protobuf.ICheckTeamNameRequest, callback: v388.protobuf.Rpc.check_team_nameCallback): void;

            /**
             * Calls check_team_name.
             * @param request CheckTeamNameRequest message or plain object
             * @returns Promise
             */
            public check_team_name(request: v388.protobuf.ICheckTeamNameRequest): Promise<v388.protobuf.CheckTeamNameResponse>;

            /**
             * Calls create_team.
             * @param request CreateTeamRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and CreateTeamResponse
             */
            public create_team(request: v388.protobuf.ICreateTeamRequest, callback: v388.protobuf.Rpc.create_teamCallback): void;

            /**
             * Calls create_team.
             * @param request CreateTeamRequest message or plain object
             * @returns Promise
             */
            public create_team(request: v388.protobuf.ICreateTeamRequest): Promise<v388.protobuf.CreateTeamResponse>;

            /**
             * Calls search_team.
             * @param request SearchTeamRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and SearchTeamResponse
             */
            public search_team(request: v388.protobuf.ISearchTeamRequest, callback: v388.protobuf.Rpc.search_teamCallback): void;

            /**
             * Calls search_team.
             * @param request SearchTeamRequest message or plain object
             * @returns Promise
             */
            public search_team(request: v388.protobuf.ISearchTeamRequest): Promise<v388.protobuf.SearchTeamResponse>;

            /**
             * Calls join_team.
             * @param request JoinTeamRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and JoinTeamResponse
             */
            public join_team(request: v388.protobuf.IJoinTeamRequest, callback: v388.protobuf.Rpc.join_teamCallback): void;

            /**
             * Calls join_team.
             * @param request JoinTeamRequest message or plain object
             * @returns Promise
             */
            public join_team(request: v388.protobuf.IJoinTeamRequest): Promise<v388.protobuf.JoinTeamResponse>;

            /**
             * Calls approve_team_applicants.
             * @param request ApproveTeamApplicantsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ApproveTeamApplicantsResponse
             */
            public approve_team_applicants(request: v388.protobuf.IApproveTeamApplicantsRequest, callback: v388.protobuf.Rpc.approve_team_applicantsCallback): void;

            /**
             * Calls approve_team_applicants.
             * @param request ApproveTeamApplicantsRequest message or plain object
             * @returns Promise
             */
            public approve_team_applicants(request: v388.protobuf.IApproveTeamApplicantsRequest): Promise<v388.protobuf.ApproveTeamApplicantsResponse>;

            /**
             * Calls leave_team.
             * @param request LeaveTeamRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and LeaveTeamResponse
             */
            public leave_team(request: v388.protobuf.ILeaveTeamRequest, callback: v388.protobuf.Rpc.leave_teamCallback): void;

            /**
             * Calls leave_team.
             * @param request LeaveTeamRequest message or plain object
             * @returns Promise
             */
            public leave_team(request: v388.protobuf.ILeaveTeamRequest): Promise<v388.protobuf.LeaveTeamResponse>;

            /**
             * Calls dissolve_team.
             * @param request DissolveTeamRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and DissolveTeamResponse
             */
            public dissolve_team(request: v388.protobuf.IDissolveTeamRequest, callback: v388.protobuf.Rpc.dissolve_teamCallback): void;

            /**
             * Calls dissolve_team.
             * @param request DissolveTeamRequest message or plain object
             * @returns Promise
             */
            public dissolve_team(request: v388.protobuf.IDissolveTeamRequest): Promise<v388.protobuf.DissolveTeamResponse>;

            /**
             * Calls load_team_members.
             * @param request LoadTeamMembersRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and LoadTeamMembersResponse
             */
            public load_team_members(request: v388.protobuf.ILoadTeamMembersRequest, callback: v388.protobuf.Rpc.load_team_membersCallback): void;

            /**
             * Calls load_team_members.
             * @param request LoadTeamMembersRequest message or plain object
             * @returns Promise
             */
            public load_team_members(request: v388.protobuf.ILoadTeamMembersRequest): Promise<v388.protobuf.LoadTeamMembersResponse>;

            /**
             * Calls load_team_applicants.
             * @param request LoadTeamApplicantsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and LoadTeamApplicantsResponse
             */
            public load_team_applicants(request: v388.protobuf.ILoadTeamApplicantsRequest, callback: v388.protobuf.Rpc.load_team_applicantsCallback): void;

            /**
             * Calls load_team_applicants.
             * @param request LoadTeamApplicantsRequest message or plain object
             * @returns Promise
             */
            public load_team_applicants(request: v388.protobuf.ILoadTeamApplicantsRequest): Promise<v388.protobuf.LoadTeamApplicantsResponse>;

            /**
             * Calls update_team_stickers.
             * @param request UpdateTeamStickersRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and UpdateTeamStickersResponse
             */
            public update_team_stickers(request: v388.protobuf.IUpdateTeamStickersRequest, callback: v388.protobuf.Rpc.update_team_stickersCallback): void;

            /**
             * Calls update_team_stickers.
             * @param request UpdateTeamStickersRequest message or plain object
             * @returns Promise
             */
            public update_team_stickers(request: v388.protobuf.IUpdateTeamStickersRequest): Promise<v388.protobuf.UpdateTeamStickersResponse>;

            /**
             * Calls update_team.
             * @param request UpdateTeamRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and UpdateTeamResponse
             */
            public update_team(request: v388.protobuf.IUpdateTeamRequest, callback: v388.protobuf.Rpc.update_teamCallback): void;

            /**
             * Calls update_team.
             * @param request UpdateTeamRequest message or plain object
             * @returns Promise
             */
            public update_team(request: v388.protobuf.IUpdateTeamRequest): Promise<v388.protobuf.UpdateTeamResponse>;

            /**
             * Calls grant_car_right.
             * @param request GrantCarRightRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and GrantCarRightResponse
             */
            public grant_car_right(request: v388.protobuf.IGrantCarRightRequest, callback: v388.protobuf.Rpc.grant_car_rightCallback): void;

            /**
             * Calls grant_car_right.
             * @param request GrantCarRightRequest message or plain object
             * @returns Promise
             */
            public grant_car_right(request: v388.protobuf.IGrantCarRightRequest): Promise<v388.protobuf.GrantCarRightResponse>;

            /**
             * Calls get_team_campaign_status.
             * @param request GetTeamCampaignStatusRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and GetTeamCampaignStatusResponse
             */
            public get_team_campaign_status(request: v388.protobuf.IGetTeamCampaignStatusRequest, callback: v388.protobuf.Rpc.get_team_campaign_statusCallback): void;

            /**
             * Calls get_team_campaign_status.
             * @param request GetTeamCampaignStatusRequest message or plain object
             * @returns Promise
             */
            public get_team_campaign_status(request: v388.protobuf.IGetTeamCampaignStatusRequest): Promise<v388.protobuf.GetTeamCampaignStatusResponse>;

            /**
             * Calls pre_apply_team_campaign.
             * @param request PreApplyTeamCampaignRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and PreApplyTeamCampaignResponse
             */
            public pre_apply_team_campaign(request: v388.protobuf.IPreApplyTeamCampaignRequest, callback: v388.protobuf.Rpc.pre_apply_team_campaignCallback): void;

            /**
             * Calls pre_apply_team_campaign.
             * @param request PreApplyTeamCampaignRequest message or plain object
             * @returns Promise
             */
            public pre_apply_team_campaign(request: v388.protobuf.IPreApplyTeamCampaignRequest): Promise<v388.protobuf.PreApplyTeamCampaignResponse>;

            /**
             * Calls apply_team_campaign.
             * @param request ApplyTeamCampaignRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ApplyTeamCampaignResponse
             */
            public apply_team_campaign(request: v388.protobuf.IApplyTeamCampaignRequest, callback: v388.protobuf.Rpc.apply_team_campaignCallback): void;

            /**
             * Calls apply_team_campaign.
             * @param request ApplyTeamCampaignRequest message or plain object
             * @returns Promise
             */
            public apply_team_campaign(request: v388.protobuf.IApplyTeamCampaignRequest): Promise<v388.protobuf.ApplyTeamCampaignResponse>;

            /**
             * Calls load_car_campaign_info.
             * @param request LoadCarCampaignInfoRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and LoadCarCampaignInfoResponse
             */
            public load_car_campaign_info(request: v388.protobuf.ILoadCarCampaignInfoRequest, callback: v388.protobuf.Rpc.load_car_campaign_infoCallback): void;

            /**
             * Calls load_car_campaign_info.
             * @param request LoadCarCampaignInfoRequest message or plain object
             * @returns Promise
             */
            public load_car_campaign_info(request: v388.protobuf.ILoadCarCampaignInfoRequest): Promise<v388.protobuf.LoadCarCampaignInfoResponse>;

            /**
             * Calls save_car_campaign_info.
             * @param request SaveCarCampaignInfoRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and SaveCarCampaignInfoResponse
             */
            public save_car_campaign_info(request: v388.protobuf.ISaveCarCampaignInfoRequest, callback: v388.protobuf.Rpc.save_car_campaign_infoCallback): void;

            /**
             * Calls save_car_campaign_info.
             * @param request SaveCarCampaignInfoRequest message or plain object
             * @returns Promise
             */
            public save_car_campaign_info(request: v388.protobuf.ISaveCarCampaignInfoRequest): Promise<v388.protobuf.SaveCarCampaignInfoResponse>;

            /**
             * Calls accept_car_campaign.
             * @param request AcceptCarCampaignRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and AcceptCarCampaignResponse
             */
            public accept_car_campaign(request: v388.protobuf.IAcceptCarCampaignRequest, callback: v388.protobuf.Rpc.accept_car_campaignCallback): void;

            /**
             * Calls accept_car_campaign.
             * @param request AcceptCarCampaignRequest message or plain object
             * @returns Promise
             */
            public accept_car_campaign(request: v388.protobuf.IAcceptCarCampaignRequest): Promise<v388.protobuf.AcceptCarCampaignResponse>;

            /**
             * Calls load_ghost_competition_ranking.
             * @param request LoadGhostCompetitionRankingRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and LoadGhostCompetitionRankingResponse
             */
            public load_ghost_competition_ranking(request: v388.protobuf.ILoadGhostCompetitionRankingRequest, callback: v388.protobuf.Rpc.load_ghost_competition_rankingCallback): void;

            /**
             * Calls load_ghost_competition_ranking.
             * @param request LoadGhostCompetitionRankingRequest message or plain object
             * @returns Promise
             */
            public load_ghost_competition_ranking(request: v388.protobuf.ILoadGhostCompetitionRankingRequest): Promise<v388.protobuf.LoadGhostCompetitionRankingResponse>;

            /**
             * Calls save_face_recognition_result.
             * @param request SaveFaceRecognitionResultRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and SaveFaceRecognitionResultResponse
             */
            public save_face_recognition_result(request: v388.protobuf.ISaveFaceRecognitionResultRequest, callback: v388.protobuf.Rpc.save_face_recognition_resultCallback): void;

            /**
             * Calls save_face_recognition_result.
             * @param request SaveFaceRecognitionResultRequest message or plain object
             * @returns Promise
             */
            public save_face_recognition_result(request: v388.protobuf.ISaveFaceRecognitionResultRequest): Promise<v388.protobuf.SaveFaceRecognitionResultResponse>;

            /**
             * Calls lock_crown.
             * @param request LockCrownRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and LockCrownResponse
             */
            public lock_crown(request: v388.protobuf.ILockCrownRequest, callback: v388.protobuf.Rpc.lock_crownCallback): void;

            /**
             * Calls lock_crown.
             * @param request LockCrownRequest message or plain object
             * @returns Promise
             */
            public lock_crown(request: v388.protobuf.ILockCrownRequest): Promise<v388.protobuf.LockCrownResponse>;
        }

        namespace Rpc {

            /**
             * Callback as used by {@link v388.protobuf.Rpc#register_system_info}.
             * @param error Error, if any
             * @param [response] RegisterSystemInfoResponse
             */
            type register_system_infoCallback = (error: (Error|null), response?: v388.protobuf.RegisterSystemInfoResponse) => void;

            /**
             * Callback as used by {@link v388.protobuf.Rpc#register_system_stats}.
             * @param error Error, if any
             * @param [response] RegisterSystemStatsResponse
             */
            type register_system_statsCallback = (error: (Error|null), response?: v388.protobuf.RegisterSystemStatsResponse) => void;

            /**
             * Callback as used by {@link v388.protobuf.Rpc#register_ghost_trail}.
             * @param error Error, if any
             * @param [response] RegisterGhostTrailResponse
             */
            type register_ghost_trailCallback = (error: (Error|null), response?: v388.protobuf.RegisterGhostTrailResponse) => void;

            /**
             * Callback as used by {@link v388.protobuf.Rpc#load_user}.
             * @param error Error, if any
             * @param [response] LoadUserResponse
             */
            type load_userCallback = (error: (Error|null), response?: v388.protobuf.LoadUserResponse) => void;

            /**
             * Callback as used by {@link v388.protobuf.Rpc#update_user_lock}.
             * @param error Error, if any
             * @param [response] UpdateUserLockResponse
             */
            type update_user_lockCallback = (error: (Error|null), response?: v388.protobuf.UpdateUserLockResponse) => void;

            /**
             * Callback as used by {@link v388.protobuf.Rpc#load_car}.
             * @param error Error, if any
             * @param [response] LoadCarResponse
             */
            type load_carCallback = (error: (Error|null), response?: v388.protobuf.LoadCarResponse) => void;

            /**
             * Callback as used by {@link v388.protobuf.Rpc#create_car}.
             * @param error Error, if any
             * @param [response] CreateCarResponse
             */
            type create_carCallback = (error: (Error|null), response?: v388.protobuf.CreateCarResponse) => void;

            /**
             * Callback as used by {@link v388.protobuf.Rpc#load_game_history}.
             * @param error Error, if any
             * @param [response] LoadGameHistoryResponse
             */
            type load_game_historyCallback = (error: (Error|null), response?: v388.protobuf.LoadGameHistoryResponse) => void;

            /**
             * Callback as used by {@link v388.protobuf.Rpc#update_car}.
             * @param error Error, if any
             * @param [response] UpdateCarResponse
             */
            type update_carCallback = (error: (Error|null), response?: v388.protobuf.UpdateCarResponse) => void;

            /**
             * Callback as used by {@link v388.protobuf.Rpc#save_game_result}.
             * @param error Error, if any
             * @param [response] SaveGameResultResponse
             */
            type save_game_resultCallback = (error: (Error|null), response?: v388.protobuf.SaveGameResultResponse) => void;

            /**
             * Callback as used by {@link v388.protobuf.Rpc#save_multi_game_result}.
             * @param error Error, if any
             * @param [response] SaveMultiGameResultResponse
             */
            type save_multi_game_resultCallback = (error: (Error|null), response?: v388.protobuf.SaveMultiGameResultResponse) => void;

            /**
             * Callback as used by {@link v388.protobuf.Rpc#save_charge}.
             * @param error Error, if any
             * @param [response] SaveChargeResponse
             */
            type save_chargeCallback = (error: (Error|null), response?: v388.protobuf.SaveChargeResponse) => void;

            /**
             * Callback as used by {@link v388.protobuf.Rpc#load_revenges}.
             * @param error Error, if any
             * @param [response] LoadRevengesResponse
             */
            type load_revengesCallback = (error: (Error|null), response?: v388.protobuf.LoadRevengesResponse) => void;

            /**
             * Callback as used by {@link v388.protobuf.Rpc#load_ghost_battle_history}.
             * @param error Error, if any
             * @param [response] LoadGhostBattleHistoryResponse
             */
            type load_ghost_battle_historyCallback = (error: (Error|null), response?: v388.protobuf.LoadGhostBattleHistoryResponse) => void;

            /**
             * Callback as used by {@link v388.protobuf.Rpc#load_ghost_battle_info}.
             * @param error Error, if any
             * @param [response] LoadGhostBattleInfoResponse
             */
            type load_ghost_battle_infoCallback = (error: (Error|null), response?: v388.protobuf.LoadGhostBattleInfoResponse) => void;

            /**
             * Callback as used by {@link v388.protobuf.Rpc#load_ghost_competition_info}.
             * @param error Error, if any
             * @param [response] LoadGhostCompetitionInfoResponse
             */
            type load_ghost_competition_infoCallback = (error: (Error|null), response?: v388.protobuf.LoadGhostCompetitionInfoResponse) => void;

            /**
             * Callback as used by {@link v388.protobuf.Rpc#load_time_attack_record}.
             * @param error Error, if any
             * @param [response] LoadTimeAttackRecordResponse
             */
            type load_time_attack_recordCallback = (error: (Error|null), response?: v388.protobuf.LoadTimeAttackRecordResponse) => void;

            /**
             * Callback as used by {@link v388.protobuf.Rpc#save_terminal_result}.
             * @param error Error, if any
             * @param [response] SaveTerminalResultResponse
             */
            type save_terminal_resultCallback = (error: (Error|null), response?: v388.protobuf.SaveTerminalResultResponse) => void;

            /**
             * Callback as used by {@link v388.protobuf.Rpc#ping}.
             * @param error Error, if any
             * @param [response] PingResponse
             */
            type pingCallback = (error: (Error|null), response?: v388.protobuf.PingResponse) => void;

            /**
             * Callback as used by {@link v388.protobuf.Rpc#load_team_information}.
             * @param error Error, if any
             * @param [response] LoadTeamInformationResponse
             */
            type load_team_informationCallback = (error: (Error|null), response?: v388.protobuf.LoadTeamInformationResponse) => void;

            /**
             * Callback as used by {@link v388.protobuf.Rpc#create_user}.
             * @param error Error, if any
             * @param [response] CreateUserResponse
             */
            type create_userCallback = (error: (Error|null), response?: v388.protobuf.CreateUserResponse) => void;

            /**
             * Callback as used by {@link v388.protobuf.Rpc#ask_access_code}.
             * @param error Error, if any
             * @param [response] AskAccessCodeResponse
             */
            type ask_access_codeCallback = (error: (Error|null), response?: v388.protobuf.AskAccessCodeResponse) => void;

            /**
             * Callback as used by {@link v388.protobuf.Rpc#prepare_car_succession}.
             * @param error Error, if any
             * @param [response] PrepareCarSuccessionResponse
             */
            type prepare_car_successionCallback = (error: (Error|null), response?: v388.protobuf.PrepareCarSuccessionResponse) => void;

            /**
             * Callback as used by {@link v388.protobuf.Rpc#succeed_car}.
             * @param error Error, if any
             * @param [response] SucceedCarResponse
             */
            type succeed_carCallback = (error: (Error|null), response?: v388.protobuf.SucceedCarResponse) => void;

            /**
             * Callback as used by {@link v388.protobuf.Rpc#register_opponent_ghost}.
             * @param error Error, if any
             * @param [response] RegisterOpponentGhostResponse
             */
            type register_opponent_ghostCallback = (error: (Error|null), response?: v388.protobuf.RegisterOpponentGhostResponse) => void;

            /**
             * Callback as used by {@link v388.protobuf.Rpc#check_team_name}.
             * @param error Error, if any
             * @param [response] CheckTeamNameResponse
             */
            type check_team_nameCallback = (error: (Error|null), response?: v388.protobuf.CheckTeamNameResponse) => void;

            /**
             * Callback as used by {@link v388.protobuf.Rpc#create_team}.
             * @param error Error, if any
             * @param [response] CreateTeamResponse
             */
            type create_teamCallback = (error: (Error|null), response?: v388.protobuf.CreateTeamResponse) => void;

            /**
             * Callback as used by {@link v388.protobuf.Rpc#search_team}.
             * @param error Error, if any
             * @param [response] SearchTeamResponse
             */
            type search_teamCallback = (error: (Error|null), response?: v388.protobuf.SearchTeamResponse) => void;

            /**
             * Callback as used by {@link v388.protobuf.Rpc#join_team}.
             * @param error Error, if any
             * @param [response] JoinTeamResponse
             */
            type join_teamCallback = (error: (Error|null), response?: v388.protobuf.JoinTeamResponse) => void;

            /**
             * Callback as used by {@link v388.protobuf.Rpc#approve_team_applicants}.
             * @param error Error, if any
             * @param [response] ApproveTeamApplicantsResponse
             */
            type approve_team_applicantsCallback = (error: (Error|null), response?: v388.protobuf.ApproveTeamApplicantsResponse) => void;

            /**
             * Callback as used by {@link v388.protobuf.Rpc#leave_team}.
             * @param error Error, if any
             * @param [response] LeaveTeamResponse
             */
            type leave_teamCallback = (error: (Error|null), response?: v388.protobuf.LeaveTeamResponse) => void;

            /**
             * Callback as used by {@link v388.protobuf.Rpc#dissolve_team}.
             * @param error Error, if any
             * @param [response] DissolveTeamResponse
             */
            type dissolve_teamCallback = (error: (Error|null), response?: v388.protobuf.DissolveTeamResponse) => void;

            /**
             * Callback as used by {@link v388.protobuf.Rpc#load_team_members}.
             * @param error Error, if any
             * @param [response] LoadTeamMembersResponse
             */
            type load_team_membersCallback = (error: (Error|null), response?: v388.protobuf.LoadTeamMembersResponse) => void;

            /**
             * Callback as used by {@link v388.protobuf.Rpc#load_team_applicants}.
             * @param error Error, if any
             * @param [response] LoadTeamApplicantsResponse
             */
            type load_team_applicantsCallback = (error: (Error|null), response?: v388.protobuf.LoadTeamApplicantsResponse) => void;

            /**
             * Callback as used by {@link v388.protobuf.Rpc#update_team_stickers}.
             * @param error Error, if any
             * @param [response] UpdateTeamStickersResponse
             */
            type update_team_stickersCallback = (error: (Error|null), response?: v388.protobuf.UpdateTeamStickersResponse) => void;

            /**
             * Callback as used by {@link v388.protobuf.Rpc#update_team}.
             * @param error Error, if any
             * @param [response] UpdateTeamResponse
             */
            type update_teamCallback = (error: (Error|null), response?: v388.protobuf.UpdateTeamResponse) => void;

            /**
             * Callback as used by {@link v388.protobuf.Rpc#grant_car_right}.
             * @param error Error, if any
             * @param [response] GrantCarRightResponse
             */
            type grant_car_rightCallback = (error: (Error|null), response?: v388.protobuf.GrantCarRightResponse) => void;

            /**
             * Callback as used by {@link v388.protobuf.Rpc#get_team_campaign_status}.
             * @param error Error, if any
             * @param [response] GetTeamCampaignStatusResponse
             */
            type get_team_campaign_statusCallback = (error: (Error|null), response?: v388.protobuf.GetTeamCampaignStatusResponse) => void;

            /**
             * Callback as used by {@link v388.protobuf.Rpc#pre_apply_team_campaign}.
             * @param error Error, if any
             * @param [response] PreApplyTeamCampaignResponse
             */
            type pre_apply_team_campaignCallback = (error: (Error|null), response?: v388.protobuf.PreApplyTeamCampaignResponse) => void;

            /**
             * Callback as used by {@link v388.protobuf.Rpc#apply_team_campaign}.
             * @param error Error, if any
             * @param [response] ApplyTeamCampaignResponse
             */
            type apply_team_campaignCallback = (error: (Error|null), response?: v388.protobuf.ApplyTeamCampaignResponse) => void;

            /**
             * Callback as used by {@link v388.protobuf.Rpc#load_car_campaign_info}.
             * @param error Error, if any
             * @param [response] LoadCarCampaignInfoResponse
             */
            type load_car_campaign_infoCallback = (error: (Error|null), response?: v388.protobuf.LoadCarCampaignInfoResponse) => void;

            /**
             * Callback as used by {@link v388.protobuf.Rpc#save_car_campaign_info}.
             * @param error Error, if any
             * @param [response] SaveCarCampaignInfoResponse
             */
            type save_car_campaign_infoCallback = (error: (Error|null), response?: v388.protobuf.SaveCarCampaignInfoResponse) => void;

            /**
             * Callback as used by {@link v388.protobuf.Rpc#accept_car_campaign}.
             * @param error Error, if any
             * @param [response] AcceptCarCampaignResponse
             */
            type accept_car_campaignCallback = (error: (Error|null), response?: v388.protobuf.AcceptCarCampaignResponse) => void;

            /**
             * Callback as used by {@link v388.protobuf.Rpc#load_ghost_competition_ranking}.
             * @param error Error, if any
             * @param [response] LoadGhostCompetitionRankingResponse
             */
            type load_ghost_competition_rankingCallback = (error: (Error|null), response?: v388.protobuf.LoadGhostCompetitionRankingResponse) => void;

            /**
             * Callback as used by {@link v388.protobuf.Rpc#save_face_recognition_result}.
             * @param error Error, if any
             * @param [response] SaveFaceRecognitionResultResponse
             */
            type save_face_recognition_resultCallback = (error: (Error|null), response?: v388.protobuf.SaveFaceRecognitionResultResponse) => void;

            /**
             * Callback as used by {@link v388.protobuf.Rpc#lock_crown}.
             * @param error Error, if any
             * @param [response] LockCrownResponse
             */
            type lock_crownCallback = (error: (Error|null), response?: v388.protobuf.LockCrownResponse) => void;
        }

        /** Represents a Resource */
        class Resource extends $protobuf.rpc.Service {

            /**
             * Constructs a new Resource service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new Resource service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Resource;

            /**
             * Calls place_list.
             * @param request PlaceListQuery message or plain object
             * @param callback Node-style callback called with the error, if any, and PlaceList
             */
            public place_list(request: v388.protobuf.IPlaceListQuery, callback: v388.protobuf.Resource.place_listCallback): void;

            /**
             * Calls place_list.
             * @param request PlaceListQuery message or plain object
             * @returns Promise
             */
            public place_list(request: v388.protobuf.IPlaceListQuery): Promise<v388.protobuf.PlaceList>;

            /**
             * Calls ghost_list.
             * @param request GhostListQuery message or plain object
             * @param callback Node-style callback called with the error, if any, and GhostList
             */
            public ghost_list(request: v388.protobuf.IGhostListQuery, callback: v388.protobuf.Resource.ghost_listCallback): void;

            /**
             * Calls ghost_list.
             * @param request GhostListQuery message or plain object
             * @returns Promise
             */
            public ghost_list(request: v388.protobuf.IGhostListQuery): Promise<v388.protobuf.GhostList>;

            /**
             * Calls ghost_trail.
             * @param request GhostTrailQuery message or plain object
             * @param callback Node-style callback called with the error, if any, and GhostTrail
             */
            public ghost_trail(request: v388.protobuf.IGhostTrailQuery, callback: v388.protobuf.Resource.ghost_trailCallback): void;

            /**
             * Calls ghost_trail.
             * @param request GhostTrailQuery message or plain object
             * @returns Promise
             */
            public ghost_trail(request: v388.protobuf.IGhostTrailQuery): Promise<v388.protobuf.GhostTrail>;

            /**
             * Calls car_summary.
             * @param request CarSummaryQuery message or plain object
             * @param callback Node-style callback called with the error, if any, and CarSummary
             */
            public car_summary(request: v388.protobuf.ICarSummaryQuery, callback: v388.protobuf.Resource.car_summaryCallback): void;

            /**
             * Calls car_summary.
             * @param request CarSummaryQuery message or plain object
             * @returns Promise
             */
            public car_summary(request: v388.protobuf.ICarSummaryQuery): Promise<v388.protobuf.CarSummary>;

            /**
             * Calls ghost_summary.
             * @param request GhostSummaryQuery message or plain object
             * @param callback Node-style callback called with the error, if any, and GhostSummary
             */
            public ghost_summary(request: v388.protobuf.IGhostSummaryQuery, callback: v388.protobuf.Resource.ghost_summaryCallback): void;

            /**
             * Calls ghost_summary.
             * @param request GhostSummaryQuery message or plain object
             * @returns Promise
             */
            public ghost_summary(request: v388.protobuf.IGhostSummaryQuery): Promise<v388.protobuf.GhostSummary>;

            /**
             * Calls car_summary_count.
             * @param request CarSummaryCountQuery message or plain object
             * @param callback Node-style callback called with the error, if any, and CarSummaryCount
             */
            public car_summary_count(request: v388.protobuf.ICarSummaryCountQuery, callback: v388.protobuf.Resource.car_summary_countCallback): void;

            /**
             * Calls car_summary_count.
             * @param request CarSummaryCountQuery message or plain object
             * @returns Promise
             */
            public car_summary_count(request: v388.protobuf.ICarSummaryCountQuery): Promise<v388.protobuf.CarSummaryCount>;

            /**
             * Calls file_list.
             * @param request FileListQuery message or plain object
             * @param callback Node-style callback called with the error, if any, and FileList
             */
            public file_list(request: v388.protobuf.IFileListQuery, callback: v388.protobuf.Resource.file_listCallback): void;

            /**
             * Calls file_list.
             * @param request FileListQuery message or plain object
             * @returns Promise
             */
            public file_list(request: v388.protobuf.IFileListQuery): Promise<v388.protobuf.FileList>;

            /**
             * Calls ghost_competition_target.
             * @param request GhostCompetitionTargetQuery message or plain object
             * @param callback Node-style callback called with the error, if any, and GhostCompetitionTarget
             */
            public ghost_competition_target(request: v388.protobuf.IGhostCompetitionTargetQuery, callback: v388.protobuf.Resource.ghost_competition_targetCallback): void;

            /**
             * Calls ghost_competition_target.
             * @param request GhostCompetitionTargetQuery message or plain object
             * @returns Promise
             */
            public ghost_competition_target(request: v388.protobuf.IGhostCompetitionTargetQuery): Promise<v388.protobuf.GhostCompetitionTarget>;

            /**
             * Calls active_team_list.
             * @param request ActiveTeamListQuery message or plain object
             * @param callback Node-style callback called with the error, if any, and ActiveTeamList
             */
            public active_team_list(request: v388.protobuf.IActiveTeamListQuery, callback: v388.protobuf.Resource.active_team_listCallback): void;

            /**
             * Calls active_team_list.
             * @param request ActiveTeamListQuery message or plain object
             * @returns Promise
             */
            public active_team_list(request: v388.protobuf.IActiveTeamListQuery): Promise<v388.protobuf.ActiveTeamList>;

            /**
             * Calls crown_list.
             * @param request CrownListQuery message or plain object
             * @param callback Node-style callback called with the error, if any, and CrownList
             */
            public crown_list(request: v388.protobuf.ICrownListQuery, callback: v388.protobuf.Resource.crown_listCallback): void;

            /**
             * Calls crown_list.
             * @param request CrownListQuery message or plain object
             * @returns Promise
             */
            public crown_list(request: v388.protobuf.ICrownListQuery): Promise<v388.protobuf.CrownList>;

            /**
             * Calls ranking.
             * @param request RankingQuery message or plain object
             * @param callback Node-style callback called with the error, if any, and Ranking
             */
            public ranking(request: v388.protobuf.IRankingQuery, callback: v388.protobuf.Resource.rankingCallback): void;

            /**
             * Calls ranking.
             * @param request RankingQuery message or plain object
             * @returns Promise
             */
            public ranking(request: v388.protobuf.IRankingQuery): Promise<v388.protobuf.Ranking>;
        }

        namespace Resource {

            /**
             * Callback as used by {@link v388.protobuf.Resource#place_list}.
             * @param error Error, if any
             * @param [response] PlaceList
             */
            type place_listCallback = (error: (Error|null), response?: v388.protobuf.PlaceList) => void;

            /**
             * Callback as used by {@link v388.protobuf.Resource#ghost_list}.
             * @param error Error, if any
             * @param [response] GhostList
             */
            type ghost_listCallback = (error: (Error|null), response?: v388.protobuf.GhostList) => void;

            /**
             * Callback as used by {@link v388.protobuf.Resource#ghost_trail}.
             * @param error Error, if any
             * @param [response] GhostTrail
             */
            type ghost_trailCallback = (error: (Error|null), response?: v388.protobuf.GhostTrail) => void;

            /**
             * Callback as used by {@link v388.protobuf.Resource#car_summary}.
             * @param error Error, if any
             * @param [response] CarSummary
             */
            type car_summaryCallback = (error: (Error|null), response?: v388.protobuf.CarSummary) => void;

            /**
             * Callback as used by {@link v388.protobuf.Resource#ghost_summary}.
             * @param error Error, if any
             * @param [response] GhostSummary
             */
            type ghost_summaryCallback = (error: (Error|null), response?: v388.protobuf.GhostSummary) => void;

            /**
             * Callback as used by {@link v388.protobuf.Resource#car_summary_count}.
             * @param error Error, if any
             * @param [response] CarSummaryCount
             */
            type car_summary_countCallback = (error: (Error|null), response?: v388.protobuf.CarSummaryCount) => void;

            /**
             * Callback as used by {@link v388.protobuf.Resource#file_list}.
             * @param error Error, if any
             * @param [response] FileList
             */
            type file_listCallback = (error: (Error|null), response?: v388.protobuf.FileList) => void;

            /**
             * Callback as used by {@link v388.protobuf.Resource#ghost_competition_target}.
             * @param error Error, if any
             * @param [response] GhostCompetitionTarget
             */
            type ghost_competition_targetCallback = (error: (Error|null), response?: v388.protobuf.GhostCompetitionTarget) => void;

            /**
             * Callback as used by {@link v388.protobuf.Resource#active_team_list}.
             * @param error Error, if any
             * @param [response] ActiveTeamList
             */
            type active_team_listCallback = (error: (Error|null), response?: v388.protobuf.ActiveTeamList) => void;

            /**
             * Callback as used by {@link v388.protobuf.Resource#crown_list}.
             * @param error Error, if any
             * @param [response] CrownList
             */
            type crown_listCallback = (error: (Error|null), response?: v388.protobuf.CrownList) => void;

            /**
             * Callback as used by {@link v388.protobuf.Resource#ranking}.
             * @param error Error, if any
             * @param [response] Ranking
             */
            type rankingCallback = (error: (Error|null), response?: v388.protobuf.Ranking) => void;
        }

        /** Properties of a PlaceListQuery. */
        interface IPlaceListQuery {

            /** PlaceListQuery regionId */
            regionId?: (number|null);
        }

        /** Represents a PlaceListQuery. */
        class PlaceListQuery implements IPlaceListQuery {

            /**
             * Constructs a new PlaceListQuery.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IPlaceListQuery);

            /** PlaceListQuery regionId. */
            public regionId: number;

            /**
             * Creates a new PlaceListQuery instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PlaceListQuery instance
             */
            public static create(properties?: v388.protobuf.IPlaceListQuery): v388.protobuf.PlaceListQuery;

            /**
             * Encodes the specified PlaceListQuery message. Does not implicitly {@link v388.protobuf.PlaceListQuery.verify|verify} messages.
             * @param message PlaceListQuery message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IPlaceListQuery, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PlaceListQuery message, length delimited. Does not implicitly {@link v388.protobuf.PlaceListQuery.verify|verify} messages.
             * @param message PlaceListQuery message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IPlaceListQuery, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PlaceListQuery message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PlaceListQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.PlaceListQuery;

            /**
             * Decodes a PlaceListQuery message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PlaceListQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.PlaceListQuery;

            /**
             * Verifies a PlaceListQuery message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PlaceListQuery message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PlaceListQuery
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.PlaceListQuery;

            /**
             * Creates a plain object from a PlaceListQuery message. Also converts values to other types if specified.
             * @param message PlaceListQuery
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.PlaceListQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PlaceListQuery to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PlaceListQuery
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GhostListQuery. */
        interface IGhostListQuery {

            /** GhostListQuery carId */
            carId: number;

            /** GhostListQuery area */
            area?: (number|null);
        }

        /** Represents a GhostListQuery. */
        class GhostListQuery implements IGhostListQuery {

            /**
             * Constructs a new GhostListQuery.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IGhostListQuery);

            /** GhostListQuery carId. */
            public carId: number;

            /** GhostListQuery area. */
            public area: number;

            /**
             * Creates a new GhostListQuery instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GhostListQuery instance
             */
            public static create(properties?: v388.protobuf.IGhostListQuery): v388.protobuf.GhostListQuery;

            /**
             * Encodes the specified GhostListQuery message. Does not implicitly {@link v388.protobuf.GhostListQuery.verify|verify} messages.
             * @param message GhostListQuery message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IGhostListQuery, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GhostListQuery message, length delimited. Does not implicitly {@link v388.protobuf.GhostListQuery.verify|verify} messages.
             * @param message GhostListQuery message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IGhostListQuery, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GhostListQuery message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GhostListQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.GhostListQuery;

            /**
             * Decodes a GhostListQuery message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GhostListQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.GhostListQuery;

            /**
             * Verifies a GhostListQuery message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GhostListQuery message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GhostListQuery
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.GhostListQuery;

            /**
             * Creates a plain object from a GhostListQuery message. Also converts values to other types if specified.
             * @param message GhostListQuery
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.GhostListQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GhostListQuery to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GhostListQuery
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GhostTrailQuery. */
        interface IGhostTrailQuery {

            /** GhostTrailQuery carId */
            carId: number;

            /** GhostTrailQuery area */
            area?: (number|null);

            /** GhostTrailQuery trailId */
            trailId?: (number|Long|null);

            /** GhostTrailQuery foreign */
            foreign?: (number|null);
        }

        /** Represents a GhostTrailQuery. */
        class GhostTrailQuery implements IGhostTrailQuery {

            /**
             * Constructs a new GhostTrailQuery.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IGhostTrailQuery);

            /** GhostTrailQuery carId. */
            public carId: number;

            /** GhostTrailQuery area. */
            public area: number;

            /** GhostTrailQuery trailId. */
            public trailId: (number|Long);

            /** GhostTrailQuery foreign. */
            public foreign: number;

            /**
             * Creates a new GhostTrailQuery instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GhostTrailQuery instance
             */
            public static create(properties?: v388.protobuf.IGhostTrailQuery): v388.protobuf.GhostTrailQuery;

            /**
             * Encodes the specified GhostTrailQuery message. Does not implicitly {@link v388.protobuf.GhostTrailQuery.verify|verify} messages.
             * @param message GhostTrailQuery message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IGhostTrailQuery, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GhostTrailQuery message, length delimited. Does not implicitly {@link v388.protobuf.GhostTrailQuery.verify|verify} messages.
             * @param message GhostTrailQuery message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IGhostTrailQuery, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GhostTrailQuery message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GhostTrailQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.GhostTrailQuery;

            /**
             * Decodes a GhostTrailQuery message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GhostTrailQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.GhostTrailQuery;

            /**
             * Verifies a GhostTrailQuery message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GhostTrailQuery message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GhostTrailQuery
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.GhostTrailQuery;

            /**
             * Creates a plain object from a GhostTrailQuery message. Also converts values to other types if specified.
             * @param message GhostTrailQuery
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.GhostTrailQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GhostTrailQuery to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GhostTrailQuery
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CarSummaryQuery. */
        interface ICarSummaryQuery {

            /** CarSummaryQuery regionId */
            regionId?: (number|null);

            /** CarSummaryQuery ghostLevel */
            ghostLevel?: (number|null);

            /** CarSummaryQuery manufacturer */
            manufacturer?: (number|null);

            /** CarSummaryQuery model */
            model?: (number|null);

            /** CarSummaryQuery name */
            name?: (string|null);

            /** CarSummaryQuery searchCode */
            searchCode?: (string|null);
        }

        /** Represents a CarSummaryQuery. */
        class CarSummaryQuery implements ICarSummaryQuery {

            /**
             * Constructs a new CarSummaryQuery.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ICarSummaryQuery);

            /** CarSummaryQuery regionId. */
            public regionId: number;

            /** CarSummaryQuery ghostLevel. */
            public ghostLevel: number;

            /** CarSummaryQuery manufacturer. */
            public manufacturer: number;

            /** CarSummaryQuery model. */
            public model: number;

            /** CarSummaryQuery name. */
            public name: string;

            /** CarSummaryQuery searchCode. */
            public searchCode: string;

            /**
             * Creates a new CarSummaryQuery instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CarSummaryQuery instance
             */
            public static create(properties?: v388.protobuf.ICarSummaryQuery): v388.protobuf.CarSummaryQuery;

            /**
             * Encodes the specified CarSummaryQuery message. Does not implicitly {@link v388.protobuf.CarSummaryQuery.verify|verify} messages.
             * @param message CarSummaryQuery message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ICarSummaryQuery, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CarSummaryQuery message, length delimited. Does not implicitly {@link v388.protobuf.CarSummaryQuery.verify|verify} messages.
             * @param message CarSummaryQuery message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ICarSummaryQuery, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CarSummaryQuery message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CarSummaryQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.CarSummaryQuery;

            /**
             * Decodes a CarSummaryQuery message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CarSummaryQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.CarSummaryQuery;

            /**
             * Verifies a CarSummaryQuery message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CarSummaryQuery message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CarSummaryQuery
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.CarSummaryQuery;

            /**
             * Creates a plain object from a CarSummaryQuery message. Also converts values to other types if specified.
             * @param message CarSummaryQuery
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.CarSummaryQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CarSummaryQuery to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CarSummaryQuery
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GhostSummaryQuery. */
        interface IGhostSummaryQuery {

            /** GhostSummaryQuery regionId */
            regionId?: (number|null);

            /** GhostSummaryQuery ghostLevel */
            ghostLevel?: (number|null);

            /** GhostSummaryQuery area */
            area?: (number|null);

            /** GhostSummaryQuery foreign */
            foreign?: (number|null);
        }

        /** Represents a GhostSummaryQuery. */
        class GhostSummaryQuery implements IGhostSummaryQuery {

            /**
             * Constructs a new GhostSummaryQuery.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IGhostSummaryQuery);

            /** GhostSummaryQuery regionId. */
            public regionId: number;

            /** GhostSummaryQuery ghostLevel. */
            public ghostLevel: number;

            /** GhostSummaryQuery area. */
            public area: number;

            /** GhostSummaryQuery foreign. */
            public foreign: number;

            /**
             * Creates a new GhostSummaryQuery instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GhostSummaryQuery instance
             */
            public static create(properties?: v388.protobuf.IGhostSummaryQuery): v388.protobuf.GhostSummaryQuery;

            /**
             * Encodes the specified GhostSummaryQuery message. Does not implicitly {@link v388.protobuf.GhostSummaryQuery.verify|verify} messages.
             * @param message GhostSummaryQuery message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IGhostSummaryQuery, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GhostSummaryQuery message, length delimited. Does not implicitly {@link v388.protobuf.GhostSummaryQuery.verify|verify} messages.
             * @param message GhostSummaryQuery message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IGhostSummaryQuery, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GhostSummaryQuery message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GhostSummaryQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.GhostSummaryQuery;

            /**
             * Decodes a GhostSummaryQuery message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GhostSummaryQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.GhostSummaryQuery;

            /**
             * Verifies a GhostSummaryQuery message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GhostSummaryQuery message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GhostSummaryQuery
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.GhostSummaryQuery;

            /**
             * Creates a plain object from a GhostSummaryQuery message. Also converts values to other types if specified.
             * @param message GhostSummaryQuery
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.GhostSummaryQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GhostSummaryQuery to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GhostSummaryQuery
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CarSummaryCountQuery. */
        interface ICarSummaryCountQuery {
        }

        /** Represents a CarSummaryCountQuery. */
        class CarSummaryCountQuery implements ICarSummaryCountQuery {

            /**
             * Constructs a new CarSummaryCountQuery.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ICarSummaryCountQuery);

            /**
             * Creates a new CarSummaryCountQuery instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CarSummaryCountQuery instance
             */
            public static create(properties?: v388.protobuf.ICarSummaryCountQuery): v388.protobuf.CarSummaryCountQuery;

            /**
             * Encodes the specified CarSummaryCountQuery message. Does not implicitly {@link v388.protobuf.CarSummaryCountQuery.verify|verify} messages.
             * @param message CarSummaryCountQuery message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ICarSummaryCountQuery, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CarSummaryCountQuery message, length delimited. Does not implicitly {@link v388.protobuf.CarSummaryCountQuery.verify|verify} messages.
             * @param message CarSummaryCountQuery message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ICarSummaryCountQuery, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CarSummaryCountQuery message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CarSummaryCountQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.CarSummaryCountQuery;

            /**
             * Decodes a CarSummaryCountQuery message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CarSummaryCountQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.CarSummaryCountQuery;

            /**
             * Verifies a CarSummaryCountQuery message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CarSummaryCountQuery message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CarSummaryCountQuery
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.CarSummaryCountQuery;

            /**
             * Creates a plain object from a CarSummaryCountQuery message. Also converts values to other types if specified.
             * @param message CarSummaryCountQuery
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.CarSummaryCountQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CarSummaryCountQuery to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CarSummaryCountQuery
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FileListQuery. */
        interface IFileListQuery {
        }

        /** Represents a FileListQuery. */
        class FileListQuery implements IFileListQuery {

            /**
             * Constructs a new FileListQuery.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IFileListQuery);

            /**
             * Creates a new FileListQuery instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileListQuery instance
             */
            public static create(properties?: v388.protobuf.IFileListQuery): v388.protobuf.FileListQuery;

            /**
             * Encodes the specified FileListQuery message. Does not implicitly {@link v388.protobuf.FileListQuery.verify|verify} messages.
             * @param message FileListQuery message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IFileListQuery, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileListQuery message, length delimited. Does not implicitly {@link v388.protobuf.FileListQuery.verify|verify} messages.
             * @param message FileListQuery message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IFileListQuery, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileListQuery message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileListQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.FileListQuery;

            /**
             * Decodes a FileListQuery message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileListQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.FileListQuery;

            /**
             * Verifies a FileListQuery message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileListQuery message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileListQuery
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.FileListQuery;

            /**
             * Creates a plain object from a FileListQuery message. Also converts values to other types if specified.
             * @param message FileListQuery
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.FileListQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileListQuery to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileListQuery
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GhostCompetitionTargetQuery. */
        interface IGhostCompetitionTargetQuery {

            /** GhostCompetitionTargetQuery competitionId */
            competitionId: number;

            /** GhostCompetitionTargetQuery periodId */
            periodId?: (number|null);
        }

        /** Represents a GhostCompetitionTargetQuery. */
        class GhostCompetitionTargetQuery implements IGhostCompetitionTargetQuery {

            /**
             * Constructs a new GhostCompetitionTargetQuery.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IGhostCompetitionTargetQuery);

            /** GhostCompetitionTargetQuery competitionId. */
            public competitionId: number;

            /** GhostCompetitionTargetQuery periodId. */
            public periodId: number;

            /**
             * Creates a new GhostCompetitionTargetQuery instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GhostCompetitionTargetQuery instance
             */
            public static create(properties?: v388.protobuf.IGhostCompetitionTargetQuery): v388.protobuf.GhostCompetitionTargetQuery;

            /**
             * Encodes the specified GhostCompetitionTargetQuery message. Does not implicitly {@link v388.protobuf.GhostCompetitionTargetQuery.verify|verify} messages.
             * @param message GhostCompetitionTargetQuery message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IGhostCompetitionTargetQuery, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GhostCompetitionTargetQuery message, length delimited. Does not implicitly {@link v388.protobuf.GhostCompetitionTargetQuery.verify|verify} messages.
             * @param message GhostCompetitionTargetQuery message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IGhostCompetitionTargetQuery, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GhostCompetitionTargetQuery message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GhostCompetitionTargetQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.GhostCompetitionTargetQuery;

            /**
             * Decodes a GhostCompetitionTargetQuery message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GhostCompetitionTargetQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.GhostCompetitionTargetQuery;

            /**
             * Verifies a GhostCompetitionTargetQuery message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GhostCompetitionTargetQuery message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GhostCompetitionTargetQuery
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.GhostCompetitionTargetQuery;

            /**
             * Creates a plain object from a GhostCompetitionTargetQuery message. Also converts values to other types if specified.
             * @param message GhostCompetitionTargetQuery
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.GhostCompetitionTargetQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GhostCompetitionTargetQuery to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GhostCompetitionTargetQuery
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an ActiveTeamListQuery. */
        interface IActiveTeamListQuery {
        }

        /** Represents an ActiveTeamListQuery. */
        class ActiveTeamListQuery implements IActiveTeamListQuery {

            /**
             * Constructs a new ActiveTeamListQuery.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IActiveTeamListQuery);

            /**
             * Creates a new ActiveTeamListQuery instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ActiveTeamListQuery instance
             */
            public static create(properties?: v388.protobuf.IActiveTeamListQuery): v388.protobuf.ActiveTeamListQuery;

            /**
             * Encodes the specified ActiveTeamListQuery message. Does not implicitly {@link v388.protobuf.ActiveTeamListQuery.verify|verify} messages.
             * @param message ActiveTeamListQuery message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IActiveTeamListQuery, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ActiveTeamListQuery message, length delimited. Does not implicitly {@link v388.protobuf.ActiveTeamListQuery.verify|verify} messages.
             * @param message ActiveTeamListQuery message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IActiveTeamListQuery, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ActiveTeamListQuery message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ActiveTeamListQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.ActiveTeamListQuery;

            /**
             * Decodes an ActiveTeamListQuery message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ActiveTeamListQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.ActiveTeamListQuery;

            /**
             * Verifies an ActiveTeamListQuery message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ActiveTeamListQuery message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ActiveTeamListQuery
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.ActiveTeamListQuery;

            /**
             * Creates a plain object from an ActiveTeamListQuery message. Also converts values to other types if specified.
             * @param message ActiveTeamListQuery
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.ActiveTeamListQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ActiveTeamListQuery to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ActiveTeamListQuery
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LockCrownRequest. */
        interface ILockCrownRequest {

            /** LockCrownRequest carId */
            carId?: (number|null);

            /** LockCrownRequest area */
            area?: (number|null);

            /** LockCrownRequest lockTime */
            lockTime: number;
        }

        /** Represents a LockCrownRequest. */
        class LockCrownRequest implements ILockCrownRequest {

            /**
             * Constructs a new LockCrownRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ILockCrownRequest);

            /** LockCrownRequest carId. */
            public carId: number;

            /** LockCrownRequest area. */
            public area: number;

            /** LockCrownRequest lockTime. */
            public lockTime: number;

            /**
             * Creates a new LockCrownRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LockCrownRequest instance
             */
            public static create(properties?: v388.protobuf.ILockCrownRequest): v388.protobuf.LockCrownRequest;

            /**
             * Encodes the specified LockCrownRequest message. Does not implicitly {@link v388.protobuf.LockCrownRequest.verify|verify} messages.
             * @param message LockCrownRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ILockCrownRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LockCrownRequest message, length delimited. Does not implicitly {@link v388.protobuf.LockCrownRequest.verify|verify} messages.
             * @param message LockCrownRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ILockCrownRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LockCrownRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LockCrownRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.LockCrownRequest;

            /**
             * Decodes a LockCrownRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LockCrownRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.LockCrownRequest;

            /**
             * Verifies a LockCrownRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LockCrownRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LockCrownRequest
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.LockCrownRequest;

            /**
             * Creates a plain object from a LockCrownRequest message. Also converts values to other types if specified.
             * @param message LockCrownRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.LockCrownRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LockCrownRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LockCrownRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LockCrownResponse. */
        interface ILockCrownResponse {

            /** LockCrownResponse error */
            error: v388.protobuf.ErrorCode;
        }

        /** Represents a LockCrownResponse. */
        class LockCrownResponse implements ILockCrownResponse {

            /**
             * Constructs a new LockCrownResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ILockCrownResponse);

            /** LockCrownResponse error. */
            public error: v388.protobuf.ErrorCode;

            /**
             * Creates a new LockCrownResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LockCrownResponse instance
             */
            public static create(properties?: v388.protobuf.ILockCrownResponse): v388.protobuf.LockCrownResponse;

            /**
             * Encodes the specified LockCrownResponse message. Does not implicitly {@link v388.protobuf.LockCrownResponse.verify|verify} messages.
             * @param message LockCrownResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ILockCrownResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LockCrownResponse message, length delimited. Does not implicitly {@link v388.protobuf.LockCrownResponse.verify|verify} messages.
             * @param message LockCrownResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ILockCrownResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LockCrownResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LockCrownResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.LockCrownResponse;

            /**
             * Decodes a LockCrownResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LockCrownResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.LockCrownResponse;

            /**
             * Verifies a LockCrownResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LockCrownResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LockCrownResponse
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.LockCrownResponse;

            /**
             * Creates a plain object from a LockCrownResponse message. Also converts values to other types if specified.
             * @param message LockCrownResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.LockCrownResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LockCrownResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LockCrownResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Crown. */
        interface ICrown {

            /** Crown carId */
            carId: number;

            /** Crown area */
            area: number;

            /** Crown unlockAt */
            unlockAt?: (number|null);

            /** Crown car */
            car?: (v388.protobuf.ICar|null);
        }

        /** Represents a Crown. */
        class Crown implements ICrown {

            /**
             * Constructs a new Crown.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ICrown);

            /** Crown carId. */
            public carId: number;

            /** Crown area. */
            public area: number;

            /** Crown unlockAt. */
            public unlockAt: number;

            /** Crown car. */
            public car?: (v388.protobuf.ICar|null);

            /**
             * Creates a new Crown instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Crown instance
             */
            public static create(properties?: v388.protobuf.ICrown): v388.protobuf.Crown;

            /**
             * Encodes the specified Crown message. Does not implicitly {@link v388.protobuf.Crown.verify|verify} messages.
             * @param message Crown message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ICrown, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Crown message, length delimited. Does not implicitly {@link v388.protobuf.Crown.verify|verify} messages.
             * @param message Crown message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ICrown, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Crown message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Crown
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.Crown;

            /**
             * Decodes a Crown message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Crown
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.Crown;

            /**
             * Verifies a Crown message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Crown message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Crown
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.Crown;

            /**
             * Creates a plain object from a Crown message. Also converts values to other types if specified.
             * @param message Crown
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.Crown, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Crown to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Crown
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CrownListQuery. */
        interface ICrownListQuery {

            /** CrownListQuery carId */
            carId?: (number|null);

            /** CrownListQuery area */
            area?: (number|null);
        }

        /** Represents a CrownListQuery. */
        class CrownListQuery implements ICrownListQuery {

            /**
             * Constructs a new CrownListQuery.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ICrownListQuery);

            /** CrownListQuery carId. */
            public carId: number;

            /** CrownListQuery area. */
            public area: number;

            /**
             * Creates a new CrownListQuery instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CrownListQuery instance
             */
            public static create(properties?: v388.protobuf.ICrownListQuery): v388.protobuf.CrownListQuery;

            /**
             * Encodes the specified CrownListQuery message. Does not implicitly {@link v388.protobuf.CrownListQuery.verify|verify} messages.
             * @param message CrownListQuery message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ICrownListQuery, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CrownListQuery message, length delimited. Does not implicitly {@link v388.protobuf.CrownListQuery.verify|verify} messages.
             * @param message CrownListQuery message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ICrownListQuery, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CrownListQuery message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CrownListQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.CrownListQuery;

            /**
             * Decodes a CrownListQuery message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CrownListQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.CrownListQuery;

            /**
             * Verifies a CrownListQuery message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CrownListQuery message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CrownListQuery
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.CrownListQuery;

            /**
             * Creates a plain object from a CrownListQuery message. Also converts values to other types if specified.
             * @param message CrownListQuery
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.CrownListQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CrownListQuery to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CrownListQuery
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CrownList. */
        interface ICrownList {

            /** CrownList crowns */
            crowns?: (v388.protobuf.ICrown[]|null);
        }

        /** Represents a CrownList. */
        class CrownList implements ICrownList {

            /**
             * Constructs a new CrownList.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ICrownList);

            /** CrownList crowns. */
            public crowns: v388.protobuf.ICrown[];

            /**
             * Creates a new CrownList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CrownList instance
             */
            public static create(properties?: v388.protobuf.ICrownList): v388.protobuf.CrownList;

            /**
             * Encodes the specified CrownList message. Does not implicitly {@link v388.protobuf.CrownList.verify|verify} messages.
             * @param message CrownList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ICrownList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CrownList message, length delimited. Does not implicitly {@link v388.protobuf.CrownList.verify|verify} messages.
             * @param message CrownList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ICrownList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CrownList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CrownList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.CrownList;

            /**
             * Decodes a CrownList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CrownList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.CrownList;

            /**
             * Verifies a CrownList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CrownList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CrownList
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.CrownList;

            /**
             * Creates a plain object from a CrownList message. Also converts values to other types if specified.
             * @param message CrownList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.CrownList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CrownList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CrownList
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RankingQuery. */
        interface IRankingQuery {

            /** RankingQuery rankingType */
            rankingType?: (v388.protobuf.RankingType|null);
        }

        /** Represents a RankingQuery. */
        class RankingQuery implements IRankingQuery {

            /**
             * Constructs a new RankingQuery.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IRankingQuery);

            /** RankingQuery rankingType. */
            public rankingType: v388.protobuf.RankingType;

            /**
             * Creates a new RankingQuery instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RankingQuery instance
             */
            public static create(properties?: v388.protobuf.IRankingQuery): v388.protobuf.RankingQuery;

            /**
             * Encodes the specified RankingQuery message. Does not implicitly {@link v388.protobuf.RankingQuery.verify|verify} messages.
             * @param message RankingQuery message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IRankingQuery, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RankingQuery message, length delimited. Does not implicitly {@link v388.protobuf.RankingQuery.verify|verify} messages.
             * @param message RankingQuery message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IRankingQuery, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RankingQuery message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RankingQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.RankingQuery;

            /**
             * Decodes a RankingQuery message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RankingQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.RankingQuery;

            /**
             * Verifies a RankingQuery message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RankingQuery message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RankingQuery
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.RankingQuery;

            /**
             * Creates a plain object from a RankingQuery message. Also converts values to other types if specified.
             * @param message RankingQuery
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.RankingQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RankingQuery to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RankingQuery
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Ranking. */
        interface IRanking {

            /** Ranking lists */
            lists?: (v388.protobuf.Ranking.IList[]|null);
        }

        /** Represents a Ranking. */
        class Ranking implements IRanking {

            /**
             * Constructs a new Ranking.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IRanking);

            /** Ranking lists. */
            public lists: v388.protobuf.Ranking.IList[];

            /**
             * Creates a new Ranking instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Ranking instance
             */
            public static create(properties?: v388.protobuf.IRanking): v388.protobuf.Ranking;

            /**
             * Encodes the specified Ranking message. Does not implicitly {@link v388.protobuf.Ranking.verify|verify} messages.
             * @param message Ranking message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IRanking, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Ranking message, length delimited. Does not implicitly {@link v388.protobuf.Ranking.verify|verify} messages.
             * @param message Ranking message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IRanking, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Ranking message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Ranking
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.Ranking;

            /**
             * Decodes a Ranking message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Ranking
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.Ranking;

            /**
             * Verifies a Ranking message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Ranking message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Ranking
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.Ranking;

            /**
             * Creates a plain object from a Ranking message. Also converts values to other types if specified.
             * @param message Ranking
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.Ranking, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Ranking to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Ranking
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace Ranking {

            /** Properties of a List. */
            interface IList {

                /** List rankingType */
                rankingType: v388.protobuf.RankingType;

                /** List topRecords */
                topRecords?: (v388.protobuf.Ranking.IEntry[]|null);
            }

            /** Represents a List. */
            class List implements IList {

                /**
                 * Constructs a new List.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: v388.protobuf.Ranking.IList);

                /** List rankingType. */
                public rankingType: v388.protobuf.RankingType;

                /** List topRecords. */
                public topRecords: v388.protobuf.Ranking.IEntry[];

                /**
                 * Creates a new List instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns List instance
                 */
                public static create(properties?: v388.protobuf.Ranking.IList): v388.protobuf.Ranking.List;

                /**
                 * Encodes the specified List message. Does not implicitly {@link v388.protobuf.Ranking.List.verify|verify} messages.
                 * @param message List message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: v388.protobuf.Ranking.IList, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified List message, length delimited. Does not implicitly {@link v388.protobuf.Ranking.List.verify|verify} messages.
                 * @param message List message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: v388.protobuf.Ranking.IList, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a List message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns List
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.Ranking.List;

                /**
                 * Decodes a List message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns List
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.Ranking.List;

                /**
                 * Verifies a List message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a List message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns List
                 */
                public static fromObject(object: { [k: string]: any }): v388.protobuf.Ranking.List;

                /**
                 * Creates a plain object from a List message. Also converts values to other types if specified.
                 * @param message List
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: v388.protobuf.Ranking.List, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this List to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for List
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an Entry. */
            interface IEntry {

                /** Entry rank */
                rank: number;

                /** Entry result */
                result: number;

                /** Entry carId */
                carId: number;

                /** Entry name */
                name: string;

                /** Entry regionId */
                regionId: number;

                /** Entry model */
                model: number;

                /** Entry visualModel */
                visualModel: number;

                /** Entry defaultColor */
                defaultColor: number;

                /** Entry tunePower */
                tunePower: number;

                /** Entry tuneHandling */
                tuneHandling: number;

                /** Entry title */
                title: number;

                /** Entry level */
                level: number;
            }

            /** Represents an Entry. */
            class Entry implements IEntry {

                /**
                 * Constructs a new Entry.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: v388.protobuf.Ranking.IEntry);

                /** Entry rank. */
                public rank: number;

                /** Entry result. */
                public result: number;

                /** Entry carId. */
                public carId: number;

                /** Entry name. */
                public name: string;

                /** Entry regionId. */
                public regionId: number;

                /** Entry model. */
                public model: number;

                /** Entry visualModel. */
                public visualModel: number;

                /** Entry defaultColor. */
                public defaultColor: number;

                /** Entry tunePower. */
                public tunePower: number;

                /** Entry tuneHandling. */
                public tuneHandling: number;

                /** Entry title. */
                public title: number;

                /** Entry level. */
                public level: number;

                /**
                 * Creates a new Entry instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Entry instance
                 */
                public static create(properties?: v388.protobuf.Ranking.IEntry): v388.protobuf.Ranking.Entry;

                /**
                 * Encodes the specified Entry message. Does not implicitly {@link v388.protobuf.Ranking.Entry.verify|verify} messages.
                 * @param message Entry message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: v388.protobuf.Ranking.IEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Entry message, length delimited. Does not implicitly {@link v388.protobuf.Ranking.Entry.verify|verify} messages.
                 * @param message Entry message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: v388.protobuf.Ranking.IEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Entry message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Entry
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.Ranking.Entry;

                /**
                 * Decodes an Entry message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Entry
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.Ranking.Entry;

                /**
                 * Verifies an Entry message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Entry message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Entry
                 */
                public static fromObject(object: { [k: string]: any }): v388.protobuf.Ranking.Entry;

                /**
                 * Creates a plain object from an Entry message. Also converts values to other types if specified.
                 * @param message Entry
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: v388.protobuf.Ranking.Entry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Entry to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Entry
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** RankingType enum. */
        enum RankingType {
            RANKING_TA_C1IN = 0,
            RANKING_TA_C1OUT = 1,
            RANKING_TA_RINGLEFT = 2,
            RANKING_TA_RINGRIGHT = 3,
            RANKING_TA_WANGANEAST = 4,
            RANKING_TA_WANGANWEST = 5,
            RANKING_TA_K1_DOWN = 6,
            RANKING_TA_K1_UP = 7,
            RANKING_TA_YAESUIN = 8,
            RANKING_TA_YAESUOUT = 9,
            RANKING_TA_YOKOHAMAIN = 10,
            RANKING_TA_YOKOHAMAOUT = 11,
            RANKING_TA_NAGOYA = 12,
            RANKING_TA_OSAKA = 13,
            RANKING_TA_FUKUOKA = 14,
            RANKING_TA_HAKONEFOR = 15,
            RANKING_TA_HAKONEBACK = 16,
            RANKING_TA_TOKYOALL = 17,
            RANKING_TA_KANAGAWAALL = 18,
            RANKING_VS_STAR = 100,
            RANKING_MAXI_COIN = 101
        }

        /** Properties of a RegisterSystemInfoRequest. */
        interface IRegisterSystemInfoRequest {

            /** RegisterSystemInfoRequest pcbSerial */
            pcbSerial: string;

            /** RegisterSystemInfoRequest terminalType */
            terminalType: v388.protobuf.TerminalType;

            /** RegisterSystemInfoRequest romVersion */
            romVersion: number;

            /** RegisterSystemInfoRequest country */
            country: string;

            /** RegisterSystemInfoRequest lineType */
            lineType: v388.protobuf.LineType;

            /** RegisterSystemInfoRequest shopName */
            shopName: string;

            /** RegisterSystemInfoRequest shopNickname */
            shopNickname: string;

            /** RegisterSystemInfoRequest allnetPlaceId */
            allnetPlaceId?: (number|null);

            /** RegisterSystemInfoRequest allnetRegion0 */
            allnetRegion0?: (number|null);

            /** RegisterSystemInfoRequest muchaPlaceId */
            muchaPlaceId?: (string|null);

            /** RegisterSystemInfoRequest muchaPrefectureId */
            muchaPrefectureId?: (number|null);

            /** RegisterSystemInfoRequest regionName0 */
            regionName0: string;

            /** RegisterSystemInfoRequest regionName1 */
            regionName1: string;

            /** RegisterSystemInfoRequest regionName2 */
            regionName2: string;

            /** RegisterSystemInfoRequest regionName3 */
            regionName3: string;

            /** RegisterSystemInfoRequest timezoneOffset */
            timezoneOffset: number;

            /** RegisterSystemInfoRequest systemSetting */
            systemSetting: v388.protobuf.ISystemSetting;

            /** RegisterSystemInfoRequest errorLogs */
            errorLogs?: (v388.protobuf.RegisterSystemInfoRequest.IErrorLogEntry[]|null);
        }

        /** Represents a RegisterSystemInfoRequest. */
        class RegisterSystemInfoRequest implements IRegisterSystemInfoRequest {

            /**
             * Constructs a new RegisterSystemInfoRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IRegisterSystemInfoRequest);

            /** RegisterSystemInfoRequest pcbSerial. */
            public pcbSerial: string;

            /** RegisterSystemInfoRequest terminalType. */
            public terminalType: v388.protobuf.TerminalType;

            /** RegisterSystemInfoRequest romVersion. */
            public romVersion: number;

            /** RegisterSystemInfoRequest country. */
            public country: string;

            /** RegisterSystemInfoRequest lineType. */
            public lineType: v388.protobuf.LineType;

            /** RegisterSystemInfoRequest shopName. */
            public shopName: string;

            /** RegisterSystemInfoRequest shopNickname. */
            public shopNickname: string;

            /** RegisterSystemInfoRequest allnetPlaceId. */
            public allnetPlaceId: number;

            /** RegisterSystemInfoRequest allnetRegion0. */
            public allnetRegion0: number;

            /** RegisterSystemInfoRequest muchaPlaceId. */
            public muchaPlaceId: string;

            /** RegisterSystemInfoRequest muchaPrefectureId. */
            public muchaPrefectureId: number;

            /** RegisterSystemInfoRequest regionName0. */
            public regionName0: string;

            /** RegisterSystemInfoRequest regionName1. */
            public regionName1: string;

            /** RegisterSystemInfoRequest regionName2. */
            public regionName2: string;

            /** RegisterSystemInfoRequest regionName3. */
            public regionName3: string;

            /** RegisterSystemInfoRequest timezoneOffset. */
            public timezoneOffset: number;

            /** RegisterSystemInfoRequest systemSetting. */
            public systemSetting: v388.protobuf.ISystemSetting;

            /** RegisterSystemInfoRequest errorLogs. */
            public errorLogs: v388.protobuf.RegisterSystemInfoRequest.IErrorLogEntry[];

            /**
             * Creates a new RegisterSystemInfoRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RegisterSystemInfoRequest instance
             */
            public static create(properties?: v388.protobuf.IRegisterSystemInfoRequest): v388.protobuf.RegisterSystemInfoRequest;

            /**
             * Encodes the specified RegisterSystemInfoRequest message. Does not implicitly {@link v388.protobuf.RegisterSystemInfoRequest.verify|verify} messages.
             * @param message RegisterSystemInfoRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IRegisterSystemInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RegisterSystemInfoRequest message, length delimited. Does not implicitly {@link v388.protobuf.RegisterSystemInfoRequest.verify|verify} messages.
             * @param message RegisterSystemInfoRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IRegisterSystemInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RegisterSystemInfoRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RegisterSystemInfoRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.RegisterSystemInfoRequest;

            /**
             * Decodes a RegisterSystemInfoRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RegisterSystemInfoRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.RegisterSystemInfoRequest;

            /**
             * Verifies a RegisterSystemInfoRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RegisterSystemInfoRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RegisterSystemInfoRequest
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.RegisterSystemInfoRequest;

            /**
             * Creates a plain object from a RegisterSystemInfoRequest message. Also converts values to other types if specified.
             * @param message RegisterSystemInfoRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.RegisterSystemInfoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RegisterSystemInfoRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RegisterSystemInfoRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace RegisterSystemInfoRequest {

            /** Properties of an ErrorLogEntry. */
            interface IErrorLogEntry {

                /** ErrorLogEntry datetime */
                datetime: number;

                /** ErrorLogEntry message */
                message: string;
            }

            /** Represents an ErrorLogEntry. */
            class ErrorLogEntry implements IErrorLogEntry {

                /**
                 * Constructs a new ErrorLogEntry.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: v388.protobuf.RegisterSystemInfoRequest.IErrorLogEntry);

                /** ErrorLogEntry datetime. */
                public datetime: number;

                /** ErrorLogEntry message. */
                public message: string;

                /**
                 * Creates a new ErrorLogEntry instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ErrorLogEntry instance
                 */
                public static create(properties?: v388.protobuf.RegisterSystemInfoRequest.IErrorLogEntry): v388.protobuf.RegisterSystemInfoRequest.ErrorLogEntry;

                /**
                 * Encodes the specified ErrorLogEntry message. Does not implicitly {@link v388.protobuf.RegisterSystemInfoRequest.ErrorLogEntry.verify|verify} messages.
                 * @param message ErrorLogEntry message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: v388.protobuf.RegisterSystemInfoRequest.IErrorLogEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ErrorLogEntry message, length delimited. Does not implicitly {@link v388.protobuf.RegisterSystemInfoRequest.ErrorLogEntry.verify|verify} messages.
                 * @param message ErrorLogEntry message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: v388.protobuf.RegisterSystemInfoRequest.IErrorLogEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ErrorLogEntry message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ErrorLogEntry
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.RegisterSystemInfoRequest.ErrorLogEntry;

                /**
                 * Decodes an ErrorLogEntry message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ErrorLogEntry
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.RegisterSystemInfoRequest.ErrorLogEntry;

                /**
                 * Verifies an ErrorLogEntry message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ErrorLogEntry message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ErrorLogEntry
                 */
                public static fromObject(object: { [k: string]: any }): v388.protobuf.RegisterSystemInfoRequest.ErrorLogEntry;

                /**
                 * Creates a plain object from an ErrorLogEntry message. Also converts values to other types if specified.
                 * @param message ErrorLogEntry
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: v388.protobuf.RegisterSystemInfoRequest.ErrorLogEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ErrorLogEntry to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ErrorLogEntry
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a RegisterSystemInfoResponse. */
        interface IRegisterSystemInfoResponse {

            /** RegisterSystemInfoResponse error */
            error: v388.protobuf.ErrorCode;

            /** RegisterSystemInfoResponse regionId */
            regionId: number;

            /** RegisterSystemInfoResponse placeId */
            placeId: string;

            /** RegisterSystemInfoResponse pajeroDiscloseAt */
            pajeroDiscloseAt: number;

            /** RegisterSystemInfoResponse carCampaignStartAt */
            carCampaignStartAt: number;

            /** RegisterSystemInfoResponse carCampaignEndAt */
            carCampaignEndAt: number;

            /** RegisterSystemInfoResponse teamSuspensionAnnouncementStartAt */
            teamSuspensionAnnouncementStartAt: number;

            /** RegisterSystemInfoResponse teamSuspensionStartAt */
            teamSuspensionStartAt: number;

            /** RegisterSystemInfoResponse successionCloseAnnouncementStartAt */
            successionCloseAnnouncementStartAt: number;

            /** RegisterSystemInfoResponse successionCloseAt */
            successionCloseAt: number;

            /** RegisterSystemInfoResponse successionCloseAnnouncementEndAt */
            successionCloseAnnouncementEndAt: number;

            /** RegisterSystemInfoResponse faceRecognitionPermitted */
            faceRecognitionPermitted: boolean;

            /** RegisterSystemInfoResponse latestCompetitionId */
            latestCompetitionId?: (number|null);

            /** RegisterSystemInfoResponse competitionSchedule */
            competitionSchedule?: (v388.protobuf.IGhostCompetitionSchedule|null);
        }

        /** Represents a RegisterSystemInfoResponse. */
        class RegisterSystemInfoResponse implements IRegisterSystemInfoResponse {

            /**
             * Constructs a new RegisterSystemInfoResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IRegisterSystemInfoResponse);

            /** RegisterSystemInfoResponse error. */
            public error: v388.protobuf.ErrorCode;

            /** RegisterSystemInfoResponse regionId. */
            public regionId: number;

            /** RegisterSystemInfoResponse placeId. */
            public placeId: string;

            /** RegisterSystemInfoResponse pajeroDiscloseAt. */
            public pajeroDiscloseAt: number;

            /** RegisterSystemInfoResponse carCampaignStartAt. */
            public carCampaignStartAt: number;

            /** RegisterSystemInfoResponse carCampaignEndAt. */
            public carCampaignEndAt: number;

            /** RegisterSystemInfoResponse teamSuspensionAnnouncementStartAt. */
            public teamSuspensionAnnouncementStartAt: number;

            /** RegisterSystemInfoResponse teamSuspensionStartAt. */
            public teamSuspensionStartAt: number;

            /** RegisterSystemInfoResponse successionCloseAnnouncementStartAt. */
            public successionCloseAnnouncementStartAt: number;

            /** RegisterSystemInfoResponse successionCloseAt. */
            public successionCloseAt: number;

            /** RegisterSystemInfoResponse successionCloseAnnouncementEndAt. */
            public successionCloseAnnouncementEndAt: number;

            /** RegisterSystemInfoResponse faceRecognitionPermitted. */
            public faceRecognitionPermitted: boolean;

            /** RegisterSystemInfoResponse latestCompetitionId. */
            public latestCompetitionId: number;

            /** RegisterSystemInfoResponse competitionSchedule. */
            public competitionSchedule?: (v388.protobuf.IGhostCompetitionSchedule|null);

            /**
             * Creates a new RegisterSystemInfoResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RegisterSystemInfoResponse instance
             */
            public static create(properties?: v388.protobuf.IRegisterSystemInfoResponse): v388.protobuf.RegisterSystemInfoResponse;

            /**
             * Encodes the specified RegisterSystemInfoResponse message. Does not implicitly {@link v388.protobuf.RegisterSystemInfoResponse.verify|verify} messages.
             * @param message RegisterSystemInfoResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IRegisterSystemInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RegisterSystemInfoResponse message, length delimited. Does not implicitly {@link v388.protobuf.RegisterSystemInfoResponse.verify|verify} messages.
             * @param message RegisterSystemInfoResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IRegisterSystemInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RegisterSystemInfoResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RegisterSystemInfoResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.RegisterSystemInfoResponse;

            /**
             * Decodes a RegisterSystemInfoResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RegisterSystemInfoResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.RegisterSystemInfoResponse;

            /**
             * Verifies a RegisterSystemInfoResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RegisterSystemInfoResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RegisterSystemInfoResponse
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.RegisterSystemInfoResponse;

            /**
             * Creates a plain object from a RegisterSystemInfoResponse message. Also converts values to other types if specified.
             * @param message RegisterSystemInfoResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.RegisterSystemInfoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RegisterSystemInfoResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RegisterSystemInfoResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RegisterSystemStatsRequest. */
        interface IRegisterSystemStatsRequest {

            /** RegisterSystemStatsRequest pcbSerial */
            pcbSerial: string;

            /** RegisterSystemStatsRequest driveStats */
            driveStats?: (v388.protobuf.RegisterSystemStatsRequest.IDriveStats|null);

            /** RegisterSystemStatsRequest terminalStats */
            terminalStats?: (v388.protobuf.RegisterSystemStatsRequest.ITerminalStats|null);
        }

        /** Represents a RegisterSystemStatsRequest. */
        class RegisterSystemStatsRequest implements IRegisterSystemStatsRequest {

            /**
             * Constructs a new RegisterSystemStatsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IRegisterSystemStatsRequest);

            /** RegisterSystemStatsRequest pcbSerial. */
            public pcbSerial: string;

            /** RegisterSystemStatsRequest driveStats. */
            public driveStats?: (v388.protobuf.RegisterSystemStatsRequest.IDriveStats|null);

            /** RegisterSystemStatsRequest terminalStats. */
            public terminalStats?: (v388.protobuf.RegisterSystemStatsRequest.ITerminalStats|null);

            /**
             * Creates a new RegisterSystemStatsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RegisterSystemStatsRequest instance
             */
            public static create(properties?: v388.protobuf.IRegisterSystemStatsRequest): v388.protobuf.RegisterSystemStatsRequest;

            /**
             * Encodes the specified RegisterSystemStatsRequest message. Does not implicitly {@link v388.protobuf.RegisterSystemStatsRequest.verify|verify} messages.
             * @param message RegisterSystemStatsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IRegisterSystemStatsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RegisterSystemStatsRequest message, length delimited. Does not implicitly {@link v388.protobuf.RegisterSystemStatsRequest.verify|verify} messages.
             * @param message RegisterSystemStatsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IRegisterSystemStatsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RegisterSystemStatsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RegisterSystemStatsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.RegisterSystemStatsRequest;

            /**
             * Decodes a RegisterSystemStatsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RegisterSystemStatsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.RegisterSystemStatsRequest;

            /**
             * Verifies a RegisterSystemStatsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RegisterSystemStatsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RegisterSystemStatsRequest
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.RegisterSystemStatsRequest;

            /**
             * Creates a plain object from a RegisterSystemStatsRequest message. Also converts values to other types if specified.
             * @param message RegisterSystemStatsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.RegisterSystemStatsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RegisterSystemStatsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RegisterSystemStatsRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace RegisterSystemStatsRequest {

            /** Properties of a DriveStats. */
            interface IDriveStats {

                /** DriveStats operation */
                operation?: (number[]|null);

                /** DriveStats story */
                story?: (number[]|null);

                /** DriveStats versus */
                versus?: (number[]|null);

                /** DriveStats ghost */
                ghost?: (number[]|null);

                /** DriveStats timeAttack */
                timeAttack?: (number[]|null);

                /** DriveStats event */
                event?: (number[]|null);

                /** DriveStats ghostSelection */
                ghostSelection?: (number[]|null);
            }

            /** Represents a DriveStats. */
            class DriveStats implements IDriveStats {

                /**
                 * Constructs a new DriveStats.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: v388.protobuf.RegisterSystemStatsRequest.IDriveStats);

                /** DriveStats operation. */
                public operation: number[];

                /** DriveStats story. */
                public story: number[];

                /** DriveStats versus. */
                public versus: number[];

                /** DriveStats ghost. */
                public ghost: number[];

                /** DriveStats timeAttack. */
                public timeAttack: number[];

                /** DriveStats event. */
                public event: number[];

                /** DriveStats ghostSelection. */
                public ghostSelection: number[];

                /**
                 * Creates a new DriveStats instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DriveStats instance
                 */
                public static create(properties?: v388.protobuf.RegisterSystemStatsRequest.IDriveStats): v388.protobuf.RegisterSystemStatsRequest.DriveStats;

                /**
                 * Encodes the specified DriveStats message. Does not implicitly {@link v388.protobuf.RegisterSystemStatsRequest.DriveStats.verify|verify} messages.
                 * @param message DriveStats message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: v388.protobuf.RegisterSystemStatsRequest.IDriveStats, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DriveStats message, length delimited. Does not implicitly {@link v388.protobuf.RegisterSystemStatsRequest.DriveStats.verify|verify} messages.
                 * @param message DriveStats message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: v388.protobuf.RegisterSystemStatsRequest.IDriveStats, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DriveStats message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DriveStats
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.RegisterSystemStatsRequest.DriveStats;

                /**
                 * Decodes a DriveStats message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DriveStats
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.RegisterSystemStatsRequest.DriveStats;

                /**
                 * Verifies a DriveStats message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DriveStats message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DriveStats
                 */
                public static fromObject(object: { [k: string]: any }): v388.protobuf.RegisterSystemStatsRequest.DriveStats;

                /**
                 * Creates a plain object from a DriveStats message. Also converts values to other types if specified.
                 * @param message DriveStats
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: v388.protobuf.RegisterSystemStatsRequest.DriveStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DriveStats to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DriveStats
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TerminalStats. */
            interface ITerminalStats {

                /** TerminalStats operation */
                operation?: (number[]|null);
            }

            /** Represents a TerminalStats. */
            class TerminalStats implements ITerminalStats {

                /**
                 * Constructs a new TerminalStats.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: v388.protobuf.RegisterSystemStatsRequest.ITerminalStats);

                /** TerminalStats operation. */
                public operation: number[];

                /**
                 * Creates a new TerminalStats instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TerminalStats instance
                 */
                public static create(properties?: v388.protobuf.RegisterSystemStatsRequest.ITerminalStats): v388.protobuf.RegisterSystemStatsRequest.TerminalStats;

                /**
                 * Encodes the specified TerminalStats message. Does not implicitly {@link v388.protobuf.RegisterSystemStatsRequest.TerminalStats.verify|verify} messages.
                 * @param message TerminalStats message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: v388.protobuf.RegisterSystemStatsRequest.ITerminalStats, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TerminalStats message, length delimited. Does not implicitly {@link v388.protobuf.RegisterSystemStatsRequest.TerminalStats.verify|verify} messages.
                 * @param message TerminalStats message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: v388.protobuf.RegisterSystemStatsRequest.ITerminalStats, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TerminalStats message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TerminalStats
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.RegisterSystemStatsRequest.TerminalStats;

                /**
                 * Decodes a TerminalStats message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TerminalStats
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.RegisterSystemStatsRequest.TerminalStats;

                /**
                 * Verifies a TerminalStats message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TerminalStats message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TerminalStats
                 */
                public static fromObject(object: { [k: string]: any }): v388.protobuf.RegisterSystemStatsRequest.TerminalStats;

                /**
                 * Creates a plain object from a TerminalStats message. Also converts values to other types if specified.
                 * @param message TerminalStats
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: v388.protobuf.RegisterSystemStatsRequest.TerminalStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TerminalStats to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TerminalStats
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a RegisterSystemStatsResponse. */
        interface IRegisterSystemStatsResponse {

            /** RegisterSystemStatsResponse error */
            error: v388.protobuf.ErrorCode;
        }

        /** Represents a RegisterSystemStatsResponse. */
        class RegisterSystemStatsResponse implements IRegisterSystemStatsResponse {

            /**
             * Constructs a new RegisterSystemStatsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IRegisterSystemStatsResponse);

            /** RegisterSystemStatsResponse error. */
            public error: v388.protobuf.ErrorCode;

            /**
             * Creates a new RegisterSystemStatsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RegisterSystemStatsResponse instance
             */
            public static create(properties?: v388.protobuf.IRegisterSystemStatsResponse): v388.protobuf.RegisterSystemStatsResponse;

            /**
             * Encodes the specified RegisterSystemStatsResponse message. Does not implicitly {@link v388.protobuf.RegisterSystemStatsResponse.verify|verify} messages.
             * @param message RegisterSystemStatsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IRegisterSystemStatsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RegisterSystemStatsResponse message, length delimited. Does not implicitly {@link v388.protobuf.RegisterSystemStatsResponse.verify|verify} messages.
             * @param message RegisterSystemStatsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IRegisterSystemStatsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RegisterSystemStatsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RegisterSystemStatsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.RegisterSystemStatsResponse;

            /**
             * Decodes a RegisterSystemStatsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RegisterSystemStatsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.RegisterSystemStatsResponse;

            /**
             * Verifies a RegisterSystemStatsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RegisterSystemStatsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RegisterSystemStatsResponse
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.RegisterSystemStatsResponse;

            /**
             * Creates a plain object from a RegisterSystemStatsResponse message. Also converts values to other types if specified.
             * @param message RegisterSystemStatsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.RegisterSystemStatsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RegisterSystemStatsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RegisterSystemStatsResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RegisterGhostTrailRequest. */
        interface IRegisterGhostTrailRequest {

            /** RegisterGhostTrailRequest ghostSessionId */
            ghostSessionId: (number|Long);

            /** RegisterGhostTrailRequest ghost */
            ghost: v388.protobuf.IGhostCar;

            /** RegisterGhostTrailRequest trail */
            trail: Uint8Array;
        }

        /** Represents a RegisterGhostTrailRequest. */
        class RegisterGhostTrailRequest implements IRegisterGhostTrailRequest {

            /**
             * Constructs a new RegisterGhostTrailRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IRegisterGhostTrailRequest);

            /** RegisterGhostTrailRequest ghostSessionId. */
            public ghostSessionId: (number|Long);

            /** RegisterGhostTrailRequest ghost. */
            public ghost: v388.protobuf.IGhostCar;

            /** RegisterGhostTrailRequest trail. */
            public trail: Uint8Array;

            /**
             * Creates a new RegisterGhostTrailRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RegisterGhostTrailRequest instance
             */
            public static create(properties?: v388.protobuf.IRegisterGhostTrailRequest): v388.protobuf.RegisterGhostTrailRequest;

            /**
             * Encodes the specified RegisterGhostTrailRequest message. Does not implicitly {@link v388.protobuf.RegisterGhostTrailRequest.verify|verify} messages.
             * @param message RegisterGhostTrailRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IRegisterGhostTrailRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RegisterGhostTrailRequest message, length delimited. Does not implicitly {@link v388.protobuf.RegisterGhostTrailRequest.verify|verify} messages.
             * @param message RegisterGhostTrailRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IRegisterGhostTrailRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RegisterGhostTrailRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RegisterGhostTrailRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.RegisterGhostTrailRequest;

            /**
             * Decodes a RegisterGhostTrailRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RegisterGhostTrailRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.RegisterGhostTrailRequest;

            /**
             * Verifies a RegisterGhostTrailRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RegisterGhostTrailRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RegisterGhostTrailRequest
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.RegisterGhostTrailRequest;

            /**
             * Creates a plain object from a RegisterGhostTrailRequest message. Also converts values to other types if specified.
             * @param message RegisterGhostTrailRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.RegisterGhostTrailRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RegisterGhostTrailRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RegisterGhostTrailRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RegisterGhostTrailResponse. */
        interface IRegisterGhostTrailResponse {

            /** RegisterGhostTrailResponse error */
            error: v388.protobuf.ErrorCode;
        }

        /** Represents a RegisterGhostTrailResponse. */
        class RegisterGhostTrailResponse implements IRegisterGhostTrailResponse {

            /**
             * Constructs a new RegisterGhostTrailResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IRegisterGhostTrailResponse);

            /** RegisterGhostTrailResponse error. */
            public error: v388.protobuf.ErrorCode;

            /**
             * Creates a new RegisterGhostTrailResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RegisterGhostTrailResponse instance
             */
            public static create(properties?: v388.protobuf.IRegisterGhostTrailResponse): v388.protobuf.RegisterGhostTrailResponse;

            /**
             * Encodes the specified RegisterGhostTrailResponse message. Does not implicitly {@link v388.protobuf.RegisterGhostTrailResponse.verify|verify} messages.
             * @param message RegisterGhostTrailResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IRegisterGhostTrailResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RegisterGhostTrailResponse message, length delimited. Does not implicitly {@link v388.protobuf.RegisterGhostTrailResponse.verify|verify} messages.
             * @param message RegisterGhostTrailResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IRegisterGhostTrailResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RegisterGhostTrailResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RegisterGhostTrailResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.RegisterGhostTrailResponse;

            /**
             * Decodes a RegisterGhostTrailResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RegisterGhostTrailResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.RegisterGhostTrailResponse;

            /**
             * Verifies a RegisterGhostTrailResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RegisterGhostTrailResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RegisterGhostTrailResponse
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.RegisterGhostTrailResponse;

            /**
             * Creates a plain object from a RegisterGhostTrailResponse message. Also converts values to other types if specified.
             * @param message RegisterGhostTrailResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.RegisterGhostTrailResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RegisterGhostTrailResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RegisterGhostTrailResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadUserRequest. */
        interface ILoadUserRequest {

            /** LoadUserRequest cardChipId */
            cardChipId: string;

            /** LoadUserRequest accessCode */
            accessCode?: (string|null);

            /** LoadUserRequest cardTypeCode */
            cardTypeCode?: (number|null);

            /** LoadUserRequest cardRegionCode */
            cardRegionCode?: (number|null);

            /** LoadUserRequest device */
            device: v388.protobuf.DeviceType;

            /** LoadUserRequest romVersion */
            romVersion: number;

            /** LoadUserRequest maxCars */
            maxCars: number;

            /** LoadUserRequest createUser */
            createUser?: (boolean|null);
        }

        /** Represents a LoadUserRequest. */
        class LoadUserRequest implements ILoadUserRequest {

            /**
             * Constructs a new LoadUserRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ILoadUserRequest);

            /** LoadUserRequest cardChipId. */
            public cardChipId: string;

            /** LoadUserRequest accessCode. */
            public accessCode: string;

            /** LoadUserRequest cardTypeCode. */
            public cardTypeCode: number;

            /** LoadUserRequest cardRegionCode. */
            public cardRegionCode: number;

            /** LoadUserRequest device. */
            public device: v388.protobuf.DeviceType;

            /** LoadUserRequest romVersion. */
            public romVersion: number;

            /** LoadUserRequest maxCars. */
            public maxCars: number;

            /** LoadUserRequest createUser. */
            public createUser: boolean;

            /**
             * Creates a new LoadUserRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadUserRequest instance
             */
            public static create(properties?: v388.protobuf.ILoadUserRequest): v388.protobuf.LoadUserRequest;

            /**
             * Encodes the specified LoadUserRequest message. Does not implicitly {@link v388.protobuf.LoadUserRequest.verify|verify} messages.
             * @param message LoadUserRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ILoadUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadUserRequest message, length delimited. Does not implicitly {@link v388.protobuf.LoadUserRequest.verify|verify} messages.
             * @param message LoadUserRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ILoadUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadUserRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadUserRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.LoadUserRequest;

            /**
             * Decodes a LoadUserRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadUserRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.LoadUserRequest;

            /**
             * Verifies a LoadUserRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadUserRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadUserRequest
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.LoadUserRequest;

            /**
             * Creates a plain object from a LoadUserRequest message. Also converts values to other types if specified.
             * @param message LoadUserRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.LoadUserRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadUserRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadUserRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadUserResponse. */
        interface ILoadUserResponse {

            /** LoadUserResponse error */
            error: v388.protobuf.ErrorCode;

            /** LoadUserResponse unlockAt */
            unlockAt?: (number|null);

            /** LoadUserResponse accessCode */
            accessCode?: (string|null);

            /** LoadUserResponse banapassportAmId */
            banapassportAmId?: (number|null);

            /** LoadUserResponse personalId */
            personalId?: (number|null);

            /** LoadUserResponse userId */
            userId?: (number|null);

            /** LoadUserResponse numOfOwnedCars */
            numOfOwnedCars: number;

            /** LoadUserResponse cars */
            cars?: (v388.protobuf.ICar[]|null);

            /** LoadUserResponse carStates */
            carStates?: (v388.protobuf.LoadUserResponse.ICarState[]|null);

            /** LoadUserResponse hasHp600Car */
            hasHp600Car: boolean;

            /** LoadUserResponse hp600Count */
            hp600Count: number;

            /** LoadUserResponse tutorials */
            tutorials: number;

            /** LoadUserResponse carCampaignUserState */
            carCampaignUserState?: (v388.protobuf.CarCampaignUserState|null);

            /** LoadUserResponse competitionUserState */
            competitionUserState?: (v388.protobuf.GhostCompetitionParticipantState|null);

            /** LoadUserResponse teamId */
            teamId?: (number|null);

            /** LoadUserResponse teamName */
            teamName?: (string|null);

            /** LoadUserResponse teamStickerFont */
            teamStickerFont?: (number|null);
        }

        /** Represents a LoadUserResponse. */
        class LoadUserResponse implements ILoadUserResponse {

            /**
             * Constructs a new LoadUserResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ILoadUserResponse);

            /** LoadUserResponse error. */
            public error: v388.protobuf.ErrorCode;

            /** LoadUserResponse unlockAt. */
            public unlockAt: number;

            /** LoadUserResponse accessCode. */
            public accessCode: string;

            /** LoadUserResponse banapassportAmId. */
            public banapassportAmId: number;

            /** LoadUserResponse personalId. */
            public personalId: number;

            /** LoadUserResponse userId. */
            public userId: number;

            /** LoadUserResponse numOfOwnedCars. */
            public numOfOwnedCars: number;

            /** LoadUserResponse cars. */
            public cars: v388.protobuf.ICar[];

            /** LoadUserResponse carStates. */
            public carStates: v388.protobuf.LoadUserResponse.ICarState[];

            /** LoadUserResponse hasHp600Car. */
            public hasHp600Car: boolean;

            /** LoadUserResponse hp600Count. */
            public hp600Count: number;

            /** LoadUserResponse tutorials. */
            public tutorials: number;

            /** LoadUserResponse carCampaignUserState. */
            public carCampaignUserState: v388.protobuf.CarCampaignUserState;

            /** LoadUserResponse competitionUserState. */
            public competitionUserState: v388.protobuf.GhostCompetitionParticipantState;

            /** LoadUserResponse teamId. */
            public teamId: number;

            /** LoadUserResponse teamName. */
            public teamName: string;

            /** LoadUserResponse teamStickerFont. */
            public teamStickerFont: number;

            /**
             * Creates a new LoadUserResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadUserResponse instance
             */
            public static create(properties?: v388.protobuf.ILoadUserResponse): v388.protobuf.LoadUserResponse;

            /**
             * Encodes the specified LoadUserResponse message. Does not implicitly {@link v388.protobuf.LoadUserResponse.verify|verify} messages.
             * @param message LoadUserResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ILoadUserResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadUserResponse message, length delimited. Does not implicitly {@link v388.protobuf.LoadUserResponse.verify|verify} messages.
             * @param message LoadUserResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ILoadUserResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadUserResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadUserResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.LoadUserResponse;

            /**
             * Decodes a LoadUserResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadUserResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.LoadUserResponse;

            /**
             * Verifies a LoadUserResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadUserResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadUserResponse
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.LoadUserResponse;

            /**
             * Creates a plain object from a LoadUserResponse message. Also converts values to other types if specified.
             * @param message LoadUserResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.LoadUserResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadUserResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadUserResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace LoadUserResponse {

            /** Properties of a CarState. */
            interface ICarState {

                /** CarState hasOpponentGhost */
                hasOpponentGhost: boolean;

                /** CarState competitionState */
                competitionState?: (v388.protobuf.GhostCompetitionParticipantState|null);
            }

            /** Represents a CarState. */
            class CarState implements ICarState {

                /**
                 * Constructs a new CarState.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: v388.protobuf.LoadUserResponse.ICarState);

                /** CarState hasOpponentGhost. */
                public hasOpponentGhost: boolean;

                /** CarState competitionState. */
                public competitionState: v388.protobuf.GhostCompetitionParticipantState;

                /**
                 * Creates a new CarState instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CarState instance
                 */
                public static create(properties?: v388.protobuf.LoadUserResponse.ICarState): v388.protobuf.LoadUserResponse.CarState;

                /**
                 * Encodes the specified CarState message. Does not implicitly {@link v388.protobuf.LoadUserResponse.CarState.verify|verify} messages.
                 * @param message CarState message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: v388.protobuf.LoadUserResponse.ICarState, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CarState message, length delimited. Does not implicitly {@link v388.protobuf.LoadUserResponse.CarState.verify|verify} messages.
                 * @param message CarState message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: v388.protobuf.LoadUserResponse.ICarState, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CarState message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CarState
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.LoadUserResponse.CarState;

                /**
                 * Decodes a CarState message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CarState
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.LoadUserResponse.CarState;

                /**
                 * Verifies a CarState message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CarState message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CarState
                 */
                public static fromObject(object: { [k: string]: any }): v388.protobuf.LoadUserResponse.CarState;

                /**
                 * Creates a plain object from a CarState message. Also converts values to other types if specified.
                 * @param message CarState
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: v388.protobuf.LoadUserResponse.CarState, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CarState to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CarState
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an UpdateUserLockRequest. */
        interface IUpdateUserLockRequest {

            /** UpdateUserLockRequest userId */
            userId?: (number|null);

            /** UpdateUserLockRequest cardChipId */
            cardChipId?: (string|null);

            /** UpdateUserLockRequest accessCode */
            accessCode?: (string|null);

            /** UpdateUserLockRequest cardTypeCode */
            cardTypeCode?: (number|null);

            /** UpdateUserLockRequest cardRegionCode */
            cardRegionCode?: (number|null);

            /** UpdateUserLockRequest device */
            device?: (v388.protobuf.DeviceType|null);

            /** UpdateUserLockRequest unlockAt */
            unlockAt: number;
        }

        /** Represents an UpdateUserLockRequest. */
        class UpdateUserLockRequest implements IUpdateUserLockRequest {

            /**
             * Constructs a new UpdateUserLockRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IUpdateUserLockRequest);

            /** UpdateUserLockRequest userId. */
            public userId: number;

            /** UpdateUserLockRequest cardChipId. */
            public cardChipId: string;

            /** UpdateUserLockRequest accessCode. */
            public accessCode: string;

            /** UpdateUserLockRequest cardTypeCode. */
            public cardTypeCode: number;

            /** UpdateUserLockRequest cardRegionCode. */
            public cardRegionCode: number;

            /** UpdateUserLockRequest device. */
            public device: v388.protobuf.DeviceType;

            /** UpdateUserLockRequest unlockAt. */
            public unlockAt: number;

            /**
             * Creates a new UpdateUserLockRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateUserLockRequest instance
             */
            public static create(properties?: v388.protobuf.IUpdateUserLockRequest): v388.protobuf.UpdateUserLockRequest;

            /**
             * Encodes the specified UpdateUserLockRequest message. Does not implicitly {@link v388.protobuf.UpdateUserLockRequest.verify|verify} messages.
             * @param message UpdateUserLockRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IUpdateUserLockRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateUserLockRequest message, length delimited. Does not implicitly {@link v388.protobuf.UpdateUserLockRequest.verify|verify} messages.
             * @param message UpdateUserLockRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IUpdateUserLockRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateUserLockRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdateUserLockRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.UpdateUserLockRequest;

            /**
             * Decodes an UpdateUserLockRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateUserLockRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.UpdateUserLockRequest;

            /**
             * Verifies an UpdateUserLockRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdateUserLockRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpdateUserLockRequest
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.UpdateUserLockRequest;

            /**
             * Creates a plain object from an UpdateUserLockRequest message. Also converts values to other types if specified.
             * @param message UpdateUserLockRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.UpdateUserLockRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateUserLockRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UpdateUserLockRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an UpdateUserLockResponse. */
        interface IUpdateUserLockResponse {

            /** UpdateUserLockResponse error */
            error: v388.protobuf.ErrorCode;
        }

        /** Represents an UpdateUserLockResponse. */
        class UpdateUserLockResponse implements IUpdateUserLockResponse {

            /**
             * Constructs a new UpdateUserLockResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IUpdateUserLockResponse);

            /** UpdateUserLockResponse error. */
            public error: v388.protobuf.ErrorCode;

            /**
             * Creates a new UpdateUserLockResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateUserLockResponse instance
             */
            public static create(properties?: v388.protobuf.IUpdateUserLockResponse): v388.protobuf.UpdateUserLockResponse;

            /**
             * Encodes the specified UpdateUserLockResponse message. Does not implicitly {@link v388.protobuf.UpdateUserLockResponse.verify|verify} messages.
             * @param message UpdateUserLockResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IUpdateUserLockResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateUserLockResponse message, length delimited. Does not implicitly {@link v388.protobuf.UpdateUserLockResponse.verify|verify} messages.
             * @param message UpdateUserLockResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IUpdateUserLockResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateUserLockResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdateUserLockResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.UpdateUserLockResponse;

            /**
             * Decodes an UpdateUserLockResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateUserLockResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.UpdateUserLockResponse;

            /**
             * Verifies an UpdateUserLockResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdateUserLockResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpdateUserLockResponse
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.UpdateUserLockResponse;

            /**
             * Creates a plain object from an UpdateUserLockResponse message. Also converts values to other types if specified.
             * @param message UpdateUserLockResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.UpdateUserLockResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateUserLockResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UpdateUserLockResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadCarRequest. */
        interface ILoadCarRequest {

            /** LoadCarRequest carId */
            carId: number;
        }

        /** Represents a LoadCarRequest. */
        class LoadCarRequest implements ILoadCarRequest {

            /**
             * Constructs a new LoadCarRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ILoadCarRequest);

            /** LoadCarRequest carId. */
            public carId: number;

            /**
             * Creates a new LoadCarRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadCarRequest instance
             */
            public static create(properties?: v388.protobuf.ILoadCarRequest): v388.protobuf.LoadCarRequest;

            /**
             * Encodes the specified LoadCarRequest message. Does not implicitly {@link v388.protobuf.LoadCarRequest.verify|verify} messages.
             * @param message LoadCarRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ILoadCarRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadCarRequest message, length delimited. Does not implicitly {@link v388.protobuf.LoadCarRequest.verify|verify} messages.
             * @param message LoadCarRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ILoadCarRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadCarRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadCarRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.LoadCarRequest;

            /**
             * Decodes a LoadCarRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadCarRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.LoadCarRequest;

            /**
             * Verifies a LoadCarRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadCarRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadCarRequest
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.LoadCarRequest;

            /**
             * Creates a plain object from a LoadCarRequest message. Also converts values to other types if specified.
             * @param message LoadCarRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.LoadCarRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadCarRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadCarRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadCarResponse. */
        interface ILoadCarResponse {

            /** LoadCarResponse error */
            error: v388.protobuf.ErrorCode;

            /** LoadCarResponse car */
            car: v388.protobuf.ICar;

            /** LoadCarResponse tuningPoint */
            tuningPoint: number;

            /** LoadCarResponse dressupPoint */
            dressupPoint: number;

            /** LoadCarResponse dressupLevel */
            dressupLevel: number;

            /** LoadCarResponse odometer */
            odometer: number;

            /** LoadCarResponse playCount */
            playCount: number;

            /** LoadCarResponse earnedCustomColor */
            earnedCustomColor: boolean;

            /** LoadCarResponse ownedCustomColors */
            ownedCustomColors: number;

            /** LoadCarResponse ownedDressupParts */
            ownedDressupParts: number;

            /** LoadCarResponse setting */
            setting: v388.protobuf.ICarSetting;

            /** LoadCarResponse vsPlayCount */
            vsPlayCount: number;

            /** LoadCarResponse vsBurstCount */
            vsBurstCount: number;

            /** LoadCarResponse vsStarCount */
            vsStarCount: number;

            /** LoadCarResponse vsStarCountMax */
            vsStarCountMax: number;

            /** LoadCarResponse vsCoolOrWild */
            vsCoolOrWild: number;

            /** LoadCarResponse vsSmoothOrRough */
            vsSmoothOrRough: number;

            /** LoadCarResponse rgPlayCount */
            rgPlayCount: number;

            /** LoadCarResponse rgWinCount */
            rgWinCount: number;

            /** LoadCarResponse maxiCoin */
            maxiCoin: number;

            /** LoadCarResponse rgBlock */
            rgBlock: number;

            /** LoadCarResponse rgProgress */
            rgProgress?: (number[]|null);

            /** LoadCarResponse rgClearCount */
            rgClearCount: number;

            /** LoadCarResponse rgConsecutiveLosses */
            rgConsecutiveLosses: number;

            /** LoadCarResponse stPlayCount */
            stPlayCount: number;

            /** LoadCarResponse stClearBits */
            stClearBits: number;

            /** LoadCarResponse stClearDivCount */
            stClearDivCount: number;

            /** LoadCarResponse stClearCount */
            stClearCount: number;

            /** LoadCarResponse stLoseBits */
            stLoseBits: (number|Long);

            /** LoadCarResponse stLose */
            stLose: boolean;

            /** LoadCarResponse stConsecutiveWins */
            stConsecutiveWins: number;

            /** LoadCarResponse stConsecutiveWinsMax */
            stConsecutiveWinsMax: number;

            /** LoadCarResponse ownedMeters */
            ownedMeters: number;

            /** LoadCarResponse ownedBgm */
            ownedBgm: number;

            /** LoadCarResponse challenger */
            challenger?: (v388.protobuf.IGhostCar|null);

            /** LoadCarResponse opponentGhost */
            opponentGhost?: (v388.protobuf.IGhostCar|null);

            /** LoadCarResponse opponentTrailId */
            opponentTrailId?: (number|Long|null);

            /** LoadCarResponse opponentCompetitionId */
            opponentCompetitionId?: (number|null);

            /** LoadCarResponse competitionParameter */
            competitionParameter?: (v388.protobuf.IGhostCompetitionParameter|null);

            /** LoadCarResponse ownedNameplates */
            ownedNameplates: number;

            /** LoadCarResponse specialTitle */
            specialTitle?: (number|null);

            /** LoadCarResponse earnedTitle */
            earnedTitle?: (number|null);
        }

        /** Represents a LoadCarResponse. */
        class LoadCarResponse implements ILoadCarResponse {

            /**
             * Constructs a new LoadCarResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ILoadCarResponse);

            /** LoadCarResponse error. */
            public error: v388.protobuf.ErrorCode;

            /** LoadCarResponse car. */
            public car: v388.protobuf.ICar;

            /** LoadCarResponse tuningPoint. */
            public tuningPoint: number;

            /** LoadCarResponse dressupPoint. */
            public dressupPoint: number;

            /** LoadCarResponse dressupLevel. */
            public dressupLevel: number;

            /** LoadCarResponse odometer. */
            public odometer: number;

            /** LoadCarResponse playCount. */
            public playCount: number;

            /** LoadCarResponse earnedCustomColor. */
            public earnedCustomColor: boolean;

            /** LoadCarResponse ownedCustomColors. */
            public ownedCustomColors: number;

            /** LoadCarResponse ownedDressupParts. */
            public ownedDressupParts: number;

            /** LoadCarResponse setting. */
            public setting: v388.protobuf.ICarSetting;

            /** LoadCarResponse vsPlayCount. */
            public vsPlayCount: number;

            /** LoadCarResponse vsBurstCount. */
            public vsBurstCount: number;

            /** LoadCarResponse vsStarCount. */
            public vsStarCount: number;

            /** LoadCarResponse vsStarCountMax. */
            public vsStarCountMax: number;

            /** LoadCarResponse vsCoolOrWild. */
            public vsCoolOrWild: number;

            /** LoadCarResponse vsSmoothOrRough. */
            public vsSmoothOrRough: number;

            /** LoadCarResponse rgPlayCount. */
            public rgPlayCount: number;

            /** LoadCarResponse rgWinCount. */
            public rgWinCount: number;

            /** LoadCarResponse maxiCoin. */
            public maxiCoin: number;

            /** LoadCarResponse rgBlock. */
            public rgBlock: number;

            /** LoadCarResponse rgProgress. */
            public rgProgress: number[];

            /** LoadCarResponse rgClearCount. */
            public rgClearCount: number;

            /** LoadCarResponse rgConsecutiveLosses. */
            public rgConsecutiveLosses: number;

            /** LoadCarResponse stPlayCount. */
            public stPlayCount: number;

            /** LoadCarResponse stClearBits. */
            public stClearBits: number;

            /** LoadCarResponse stClearDivCount. */
            public stClearDivCount: number;

            /** LoadCarResponse stClearCount. */
            public stClearCount: number;

            /** LoadCarResponse stLoseBits. */
            public stLoseBits: (number|Long);

            /** LoadCarResponse stLose. */
            public stLose: boolean;

            /** LoadCarResponse stConsecutiveWins. */
            public stConsecutiveWins: number;

            /** LoadCarResponse stConsecutiveWinsMax. */
            public stConsecutiveWinsMax: number;

            /** LoadCarResponse ownedMeters. */
            public ownedMeters: number;

            /** LoadCarResponse ownedBgm. */
            public ownedBgm: number;

            /** LoadCarResponse challenger. */
            public challenger?: (v388.protobuf.IGhostCar|null);

            /** LoadCarResponse opponentGhost. */
            public opponentGhost?: (v388.protobuf.IGhostCar|null);

            /** LoadCarResponse opponentTrailId. */
            public opponentTrailId: (number|Long);

            /** LoadCarResponse opponentCompetitionId. */
            public opponentCompetitionId: number;

            /** LoadCarResponse competitionParameter. */
            public competitionParameter?: (v388.protobuf.IGhostCompetitionParameter|null);

            /** LoadCarResponse ownedNameplates. */
            public ownedNameplates: number;

            /** LoadCarResponse specialTitle. */
            public specialTitle: number;

            /** LoadCarResponse earnedTitle. */
            public earnedTitle: number;

            /**
             * Creates a new LoadCarResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadCarResponse instance
             */
            public static create(properties?: v388.protobuf.ILoadCarResponse): v388.protobuf.LoadCarResponse;

            /**
             * Encodes the specified LoadCarResponse message. Does not implicitly {@link v388.protobuf.LoadCarResponse.verify|verify} messages.
             * @param message LoadCarResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ILoadCarResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadCarResponse message, length delimited. Does not implicitly {@link v388.protobuf.LoadCarResponse.verify|verify} messages.
             * @param message LoadCarResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ILoadCarResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadCarResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadCarResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.LoadCarResponse;

            /**
             * Decodes a LoadCarResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadCarResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.LoadCarResponse;

            /**
             * Verifies a LoadCarResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadCarResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadCarResponse
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.LoadCarResponse;

            /**
             * Creates a plain object from a LoadCarResponse message. Also converts values to other types if specified.
             * @param message LoadCarResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.LoadCarResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadCarResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadCarResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CreateCarRequest. */
        interface ICreateCarRequest {

            /** CreateCarRequest userId */
            userId?: (number|null);

            /** CreateCarRequest banapassportAmId */
            banapassportAmId?: (number|null);

            /** CreateCarRequest cardChipId */
            cardChipId?: (string|null);

            /** CreateCarRequest accessCode */
            accessCode?: (string|null);

            /** CreateCarRequest cardTypeCode */
            cardTypeCode?: (number|null);

            /** CreateCarRequest cardRegionCode */
            cardRegionCode?: (number|null);

            /** CreateCarRequest device */
            device?: (v388.protobuf.DeviceType|null);

            /** CreateCarRequest car */
            car: v388.protobuf.ICar;

            /** CreateCarRequest transmission */
            transmission: boolean;

            /** CreateCarRequest method */
            method: v388.protobuf.CarCreationMethod;

            /** CreateCarRequest timestamp */
            timestamp: number;
        }

        /** Represents a CreateCarRequest. */
        class CreateCarRequest implements ICreateCarRequest {

            /**
             * Constructs a new CreateCarRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ICreateCarRequest);

            /** CreateCarRequest userId. */
            public userId: number;

            /** CreateCarRequest banapassportAmId. */
            public banapassportAmId: number;

            /** CreateCarRequest cardChipId. */
            public cardChipId: string;

            /** CreateCarRequest accessCode. */
            public accessCode: string;

            /** CreateCarRequest cardTypeCode. */
            public cardTypeCode: number;

            /** CreateCarRequest cardRegionCode. */
            public cardRegionCode: number;

            /** CreateCarRequest device. */
            public device: v388.protobuf.DeviceType;

            /** CreateCarRequest car. */
            public car: v388.protobuf.ICar;

            /** CreateCarRequest transmission. */
            public transmission: boolean;

            /** CreateCarRequest method. */
            public method: v388.protobuf.CarCreationMethod;

            /** CreateCarRequest timestamp. */
            public timestamp: number;

            /**
             * Creates a new CreateCarRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateCarRequest instance
             */
            public static create(properties?: v388.protobuf.ICreateCarRequest): v388.protobuf.CreateCarRequest;

            /**
             * Encodes the specified CreateCarRequest message. Does not implicitly {@link v388.protobuf.CreateCarRequest.verify|verify} messages.
             * @param message CreateCarRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ICreateCarRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateCarRequest message, length delimited. Does not implicitly {@link v388.protobuf.CreateCarRequest.verify|verify} messages.
             * @param message CreateCarRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ICreateCarRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateCarRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateCarRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.CreateCarRequest;

            /**
             * Decodes a CreateCarRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateCarRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.CreateCarRequest;

            /**
             * Verifies a CreateCarRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateCarRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateCarRequest
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.CreateCarRequest;

            /**
             * Creates a plain object from a CreateCarRequest message. Also converts values to other types if specified.
             * @param message CreateCarRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.CreateCarRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateCarRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CreateCarRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CreateCarResponse. */
        interface ICreateCarResponse {

            /** CreateCarResponse error */
            error: v388.protobuf.ErrorCode;

            /** CreateCarResponse accessCode */
            accessCode?: (string|null);

            /** CreateCarResponse banapassportAmId */
            banapassportAmId?: (number|null);

            /** CreateCarResponse personalId */
            personalId?: (number|null);

            /** CreateCarResponse userId */
            userId: number;

            /** CreateCarResponse carId */
            carId: number;

            /** CreateCarResponse searchCode */
            searchCode: string;

            /** CreateCarResponse stClearBits */
            stClearBits?: (number|null);

            /** CreateCarResponse stClearDivCount */
            stClearDivCount?: (number|null);

            /** CreateCarResponse stClearCount */
            stClearCount?: (number|null);

            /** CreateCarResponse stLoseBits */
            stLoseBits?: (number|Long|null);

            /** CreateCarResponse stLose */
            stLose?: (boolean|null);

            /** CreateCarResponse stConsecutiveWins */
            stConsecutiveWins?: (number|null);

            /** CreateCarResponse stConsecutiveWinsMax */
            stConsecutiveWinsMax?: (number|null);
        }

        /** Represents a CreateCarResponse. */
        class CreateCarResponse implements ICreateCarResponse {

            /**
             * Constructs a new CreateCarResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ICreateCarResponse);

            /** CreateCarResponse error. */
            public error: v388.protobuf.ErrorCode;

            /** CreateCarResponse accessCode. */
            public accessCode: string;

            /** CreateCarResponse banapassportAmId. */
            public banapassportAmId: number;

            /** CreateCarResponse personalId. */
            public personalId: number;

            /** CreateCarResponse userId. */
            public userId: number;

            /** CreateCarResponse carId. */
            public carId: number;

            /** CreateCarResponse searchCode. */
            public searchCode: string;

            /** CreateCarResponse stClearBits. */
            public stClearBits: number;

            /** CreateCarResponse stClearDivCount. */
            public stClearDivCount: number;

            /** CreateCarResponse stClearCount. */
            public stClearCount: number;

            /** CreateCarResponse stLoseBits. */
            public stLoseBits: (number|Long);

            /** CreateCarResponse stLose. */
            public stLose: boolean;

            /** CreateCarResponse stConsecutiveWins. */
            public stConsecutiveWins: number;

            /** CreateCarResponse stConsecutiveWinsMax. */
            public stConsecutiveWinsMax: number;

            /**
             * Creates a new CreateCarResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateCarResponse instance
             */
            public static create(properties?: v388.protobuf.ICreateCarResponse): v388.protobuf.CreateCarResponse;

            /**
             * Encodes the specified CreateCarResponse message. Does not implicitly {@link v388.protobuf.CreateCarResponse.verify|verify} messages.
             * @param message CreateCarResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ICreateCarResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateCarResponse message, length delimited. Does not implicitly {@link v388.protobuf.CreateCarResponse.verify|verify} messages.
             * @param message CreateCarResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ICreateCarResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateCarResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateCarResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.CreateCarResponse;

            /**
             * Decodes a CreateCarResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateCarResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.CreateCarResponse;

            /**
             * Verifies a CreateCarResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateCarResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateCarResponse
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.CreateCarResponse;

            /**
             * Creates a plain object from a CreateCarResponse message. Also converts values to other types if specified.
             * @param message CreateCarResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.CreateCarResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateCarResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CreateCarResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadGameHistoryRequest. */
        interface ILoadGameHistoryRequest {

            /** LoadGameHistoryRequest carId */
            carId: number;
        }

        /** Represents a LoadGameHistoryRequest. */
        class LoadGameHistoryRequest implements ILoadGameHistoryRequest {

            /**
             * Constructs a new LoadGameHistoryRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ILoadGameHistoryRequest);

            /** LoadGameHistoryRequest carId. */
            public carId: number;

            /**
             * Creates a new LoadGameHistoryRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadGameHistoryRequest instance
             */
            public static create(properties?: v388.protobuf.ILoadGameHistoryRequest): v388.protobuf.LoadGameHistoryRequest;

            /**
             * Encodes the specified LoadGameHistoryRequest message. Does not implicitly {@link v388.protobuf.LoadGameHistoryRequest.verify|verify} messages.
             * @param message LoadGameHistoryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ILoadGameHistoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadGameHistoryRequest message, length delimited. Does not implicitly {@link v388.protobuf.LoadGameHistoryRequest.verify|verify} messages.
             * @param message LoadGameHistoryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ILoadGameHistoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadGameHistoryRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadGameHistoryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.LoadGameHistoryRequest;

            /**
             * Decodes a LoadGameHistoryRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadGameHistoryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.LoadGameHistoryRequest;

            /**
             * Verifies a LoadGameHistoryRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadGameHistoryRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadGameHistoryRequest
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.LoadGameHistoryRequest;

            /**
             * Creates a plain object from a LoadGameHistoryRequest message. Also converts values to other types if specified.
             * @param message LoadGameHistoryRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.LoadGameHistoryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadGameHistoryRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadGameHistoryRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadGameHistoryResponse. */
        interface ILoadGameHistoryResponse {

            /** LoadGameHistoryResponse error */
            error: v388.protobuf.ErrorCode;

            /** LoadGameHistoryResponse taRecords */
            taRecords?: (v388.protobuf.LoadGameHistoryResponse.ITimeAttackRecord[]|null);

            /** LoadGameHistoryResponse taRankingUpdatedAt */
            taRankingUpdatedAt: number;

            /** LoadGameHistoryResponse ghostHistory */
            ghostHistory?: (v388.protobuf.LoadGameHistoryResponse.IGhostBattleRecord[]|null);

            /** LoadGameHistoryResponse ghostBattleCount */
            ghostBattleCount: number;

            /** LoadGameHistoryResponse ghostBattleWinCount */
            ghostBattleWinCount: number;
        }

        /** Represents a LoadGameHistoryResponse. */
        class LoadGameHistoryResponse implements ILoadGameHistoryResponse {

            /**
             * Constructs a new LoadGameHistoryResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ILoadGameHistoryResponse);

            /** LoadGameHistoryResponse error. */
            public error: v388.protobuf.ErrorCode;

            /** LoadGameHistoryResponse taRecords. */
            public taRecords: v388.protobuf.LoadGameHistoryResponse.ITimeAttackRecord[];

            /** LoadGameHistoryResponse taRankingUpdatedAt. */
            public taRankingUpdatedAt: number;

            /** LoadGameHistoryResponse ghostHistory. */
            public ghostHistory: v388.protobuf.LoadGameHistoryResponse.IGhostBattleRecord[];

            /** LoadGameHistoryResponse ghostBattleCount. */
            public ghostBattleCount: number;

            /** LoadGameHistoryResponse ghostBattleWinCount. */
            public ghostBattleWinCount: number;

            /**
             * Creates a new LoadGameHistoryResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadGameHistoryResponse instance
             */
            public static create(properties?: v388.protobuf.ILoadGameHistoryResponse): v388.protobuf.LoadGameHistoryResponse;

            /**
             * Encodes the specified LoadGameHistoryResponse message. Does not implicitly {@link v388.protobuf.LoadGameHistoryResponse.verify|verify} messages.
             * @param message LoadGameHistoryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ILoadGameHistoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadGameHistoryResponse message, length delimited. Does not implicitly {@link v388.protobuf.LoadGameHistoryResponse.verify|verify} messages.
             * @param message LoadGameHistoryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ILoadGameHistoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadGameHistoryResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadGameHistoryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.LoadGameHistoryResponse;

            /**
             * Decodes a LoadGameHistoryResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadGameHistoryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.LoadGameHistoryResponse;

            /**
             * Verifies a LoadGameHistoryResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadGameHistoryResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadGameHistoryResponse
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.LoadGameHistoryResponse;

            /**
             * Creates a plain object from a LoadGameHistoryResponse message. Also converts values to other types if specified.
             * @param message LoadGameHistoryResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.LoadGameHistoryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadGameHistoryResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadGameHistoryResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace LoadGameHistoryResponse {

            /** Properties of a TimeAttackRecord. */
            interface ITimeAttackRecord {

                /** TimeAttackRecord course */
                course: number;

                /** TimeAttackRecord time */
                time?: (number|null);

                /** TimeAttackRecord tunePower */
                tunePower?: (number|null);

                /** TimeAttackRecord tuneHandling */
                tuneHandling?: (number|null);

                /** TimeAttackRecord wholeRank */
                wholeRank?: (number|null);

                /** TimeAttackRecord wholeParticipants */
                wholeParticipants: number;

                /** TimeAttackRecord modelRank */
                modelRank?: (number|null);

                /** TimeAttackRecord modelParticipants */
                modelParticipants: number;
            }

            /** Represents a TimeAttackRecord. */
            class TimeAttackRecord implements ITimeAttackRecord {

                /**
                 * Constructs a new TimeAttackRecord.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: v388.protobuf.LoadGameHistoryResponse.ITimeAttackRecord);

                /** TimeAttackRecord course. */
                public course: number;

                /** TimeAttackRecord time. */
                public time: number;

                /** TimeAttackRecord tunePower. */
                public tunePower: number;

                /** TimeAttackRecord tuneHandling. */
                public tuneHandling: number;

                /** TimeAttackRecord wholeRank. */
                public wholeRank: number;

                /** TimeAttackRecord wholeParticipants. */
                public wholeParticipants: number;

                /** TimeAttackRecord modelRank. */
                public modelRank: number;

                /** TimeAttackRecord modelParticipants. */
                public modelParticipants: number;

                /**
                 * Creates a new TimeAttackRecord instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TimeAttackRecord instance
                 */
                public static create(properties?: v388.protobuf.LoadGameHistoryResponse.ITimeAttackRecord): v388.protobuf.LoadGameHistoryResponse.TimeAttackRecord;

                /**
                 * Encodes the specified TimeAttackRecord message. Does not implicitly {@link v388.protobuf.LoadGameHistoryResponse.TimeAttackRecord.verify|verify} messages.
                 * @param message TimeAttackRecord message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: v388.protobuf.LoadGameHistoryResponse.ITimeAttackRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TimeAttackRecord message, length delimited. Does not implicitly {@link v388.protobuf.LoadGameHistoryResponse.TimeAttackRecord.verify|verify} messages.
                 * @param message TimeAttackRecord message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: v388.protobuf.LoadGameHistoryResponse.ITimeAttackRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TimeAttackRecord message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TimeAttackRecord
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.LoadGameHistoryResponse.TimeAttackRecord;

                /**
                 * Decodes a TimeAttackRecord message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TimeAttackRecord
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.LoadGameHistoryResponse.TimeAttackRecord;

                /**
                 * Verifies a TimeAttackRecord message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TimeAttackRecord message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TimeAttackRecord
                 */
                public static fromObject(object: { [k: string]: any }): v388.protobuf.LoadGameHistoryResponse.TimeAttackRecord;

                /**
                 * Creates a plain object from a TimeAttackRecord message. Also converts values to other types if specified.
                 * @param message TimeAttackRecord
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: v388.protobuf.LoadGameHistoryResponse.TimeAttackRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TimeAttackRecord to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TimeAttackRecord
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GhostBattleRecord. */
            interface IGhostBattleRecord {

                /** GhostBattleRecord opponentName */
                opponentName: string;

                /** GhostBattleRecord opponentModel */
                opponentModel: number;

                /** GhostBattleRecord opponentVisualModel */
                opponentVisualModel: number;

                /** GhostBattleRecord opponentDefaultColor */
                opponentDefaultColor: number;

                /** GhostBattleRecord opponentRegionId */
                opponentRegionId: number;

                /** GhostBattleRecord opponentTunePower */
                opponentTunePower: number;

                /** GhostBattleRecord opponentTuneHandling */
                opponentTuneHandling: number;

                /** GhostBattleRecord area */
                area: number;

                /** GhostBattleRecord result */
                result: number;

                /** GhostBattleRecord playedAt */
                playedAt: number;

                /** GhostBattleRecord playedShopName */
                playedShopName: string;
            }

            /** Represents a GhostBattleRecord. */
            class GhostBattleRecord implements IGhostBattleRecord {

                /**
                 * Constructs a new GhostBattleRecord.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: v388.protobuf.LoadGameHistoryResponse.IGhostBattleRecord);

                /** GhostBattleRecord opponentName. */
                public opponentName: string;

                /** GhostBattleRecord opponentModel. */
                public opponentModel: number;

                /** GhostBattleRecord opponentVisualModel. */
                public opponentVisualModel: number;

                /** GhostBattleRecord opponentDefaultColor. */
                public opponentDefaultColor: number;

                /** GhostBattleRecord opponentRegionId. */
                public opponentRegionId: number;

                /** GhostBattleRecord opponentTunePower. */
                public opponentTunePower: number;

                /** GhostBattleRecord opponentTuneHandling. */
                public opponentTuneHandling: number;

                /** GhostBattleRecord area. */
                public area: number;

                /** GhostBattleRecord result. */
                public result: number;

                /** GhostBattleRecord playedAt. */
                public playedAt: number;

                /** GhostBattleRecord playedShopName. */
                public playedShopName: string;

                /**
                 * Creates a new GhostBattleRecord instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GhostBattleRecord instance
                 */
                public static create(properties?: v388.protobuf.LoadGameHistoryResponse.IGhostBattleRecord): v388.protobuf.LoadGameHistoryResponse.GhostBattleRecord;

                /**
                 * Encodes the specified GhostBattleRecord message. Does not implicitly {@link v388.protobuf.LoadGameHistoryResponse.GhostBattleRecord.verify|verify} messages.
                 * @param message GhostBattleRecord message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: v388.protobuf.LoadGameHistoryResponse.IGhostBattleRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GhostBattleRecord message, length delimited. Does not implicitly {@link v388.protobuf.LoadGameHistoryResponse.GhostBattleRecord.verify|verify} messages.
                 * @param message GhostBattleRecord message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: v388.protobuf.LoadGameHistoryResponse.IGhostBattleRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GhostBattleRecord message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GhostBattleRecord
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.LoadGameHistoryResponse.GhostBattleRecord;

                /**
                 * Decodes a GhostBattleRecord message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GhostBattleRecord
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.LoadGameHistoryResponse.GhostBattleRecord;

                /**
                 * Verifies a GhostBattleRecord message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GhostBattleRecord message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GhostBattleRecord
                 */
                public static fromObject(object: { [k: string]: any }): v388.protobuf.LoadGameHistoryResponse.GhostBattleRecord;

                /**
                 * Creates a plain object from a GhostBattleRecord message. Also converts values to other types if specified.
                 * @param message GhostBattleRecord
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: v388.protobuf.LoadGameHistoryResponse.GhostBattleRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GhostBattleRecord to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GhostBattleRecord
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an UpdateCarRequest. */
        interface IUpdateCarRequest {

            /** UpdateCarRequest carId */
            carId: number;

            /** UpdateCarRequest car */
            car?: (v388.protobuf.ICar|null);

            /** UpdateCarRequest hp600Count */
            hp600Count?: (number|null);

            /** UpdateCarRequest ownedCustomColors */
            ownedCustomColors?: (number|null);

            /** UpdateCarRequest setting */
            setting?: (v388.protobuf.ICarSetting|null);

            /** UpdateCarRequest timestamp */
            timestamp: number;
        }

        /** Represents an UpdateCarRequest. */
        class UpdateCarRequest implements IUpdateCarRequest {

            /**
             * Constructs a new UpdateCarRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IUpdateCarRequest);

            /** UpdateCarRequest carId. */
            public carId: number;

            /** UpdateCarRequest car. */
            public car?: (v388.protobuf.ICar|null);

            /** UpdateCarRequest hp600Count. */
            public hp600Count: number;

            /** UpdateCarRequest ownedCustomColors. */
            public ownedCustomColors: number;

            /** UpdateCarRequest setting. */
            public setting?: (v388.protobuf.ICarSetting|null);

            /** UpdateCarRequest timestamp. */
            public timestamp: number;

            /**
             * Creates a new UpdateCarRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateCarRequest instance
             */
            public static create(properties?: v388.protobuf.IUpdateCarRequest): v388.protobuf.UpdateCarRequest;

            /**
             * Encodes the specified UpdateCarRequest message. Does not implicitly {@link v388.protobuf.UpdateCarRequest.verify|verify} messages.
             * @param message UpdateCarRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IUpdateCarRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateCarRequest message, length delimited. Does not implicitly {@link v388.protobuf.UpdateCarRequest.verify|verify} messages.
             * @param message UpdateCarRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IUpdateCarRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateCarRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdateCarRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.UpdateCarRequest;

            /**
             * Decodes an UpdateCarRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateCarRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.UpdateCarRequest;

            /**
             * Verifies an UpdateCarRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdateCarRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpdateCarRequest
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.UpdateCarRequest;

            /**
             * Creates a plain object from an UpdateCarRequest message. Also converts values to other types if specified.
             * @param message UpdateCarRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.UpdateCarRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateCarRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UpdateCarRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an UpdateCarResponse. */
        interface IUpdateCarResponse {

            /** UpdateCarResponse error */
            error: v388.protobuf.ErrorCode;
        }

        /** Represents an UpdateCarResponse. */
        class UpdateCarResponse implements IUpdateCarResponse {

            /**
             * Constructs a new UpdateCarResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IUpdateCarResponse);

            /** UpdateCarResponse error. */
            public error: v388.protobuf.ErrorCode;

            /**
             * Creates a new UpdateCarResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateCarResponse instance
             */
            public static create(properties?: v388.protobuf.IUpdateCarResponse): v388.protobuf.UpdateCarResponse;

            /**
             * Encodes the specified UpdateCarResponse message. Does not implicitly {@link v388.protobuf.UpdateCarResponse.verify|verify} messages.
             * @param message UpdateCarResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IUpdateCarResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateCarResponse message, length delimited. Does not implicitly {@link v388.protobuf.UpdateCarResponse.verify|verify} messages.
             * @param message UpdateCarResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IUpdateCarResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateCarResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdateCarResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.UpdateCarResponse;

            /**
             * Decodes an UpdateCarResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateCarResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.UpdateCarResponse;

            /**
             * Verifies an UpdateCarResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdateCarResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpdateCarResponse
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.UpdateCarResponse;

            /**
             * Creates a plain object from an UpdateCarResponse message. Also converts values to other types if specified.
             * @param message UpdateCarResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.UpdateCarResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateCarResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UpdateCarResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SaveGameResultRequest. */
        interface ISaveGameResultRequest {

            /** SaveGameResultRequest carId */
            carId: number;

            /** SaveGameResultRequest gameMode */
            gameMode: v388.protobuf.GameMode;

            /** SaveGameResultRequest playedAt */
            playedAt: number;

            /** SaveGameResultRequest playCount */
            playCount: number;

            /** SaveGameResultRequest retired */
            retired: boolean;

            /** SaveGameResultRequest timeup */
            timeup: boolean;

            /** SaveGameResultRequest car */
            car?: (v388.protobuf.ICar|null);

            /** SaveGameResultRequest setting */
            setting?: (v388.protobuf.ICarSetting|null);

            /** SaveGameResultRequest odometer */
            odometer?: (number|null);

            /** SaveGameResultRequest tutorials */
            tutorials?: (number|null);

            /** SaveGameResultRequest hp600Count */
            hp600Count?: (number|null);

            /** SaveGameResultRequest earnedCustomColor */
            earnedCustomColor?: (boolean|null);

            /** SaveGameResultRequest ownedCustomColors */
            ownedCustomColors?: (number|null);

            /** SaveGameResultRequest stResult */
            stResult?: (v388.protobuf.SaveGameResultRequest.IStoryResult|null);

            /** SaveGameResultRequest taResult */
            taResult?: (v388.protobuf.SaveGameResultRequest.ITimeAttackResult|null);

            /** SaveGameResultRequest vsResult */
            vsResult?: (v388.protobuf.SaveGameResultRequest.IVersusBattleResult|null);

            /** SaveGameResultRequest rgResult */
            rgResult?: (v388.protobuf.SaveGameResultRequest.IGhostBattleResult|null);
        }

        /** Represents a SaveGameResultRequest. */
        class SaveGameResultRequest implements ISaveGameResultRequest {

            /**
             * Constructs a new SaveGameResultRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ISaveGameResultRequest);

            /** SaveGameResultRequest carId. */
            public carId: number;

            /** SaveGameResultRequest gameMode. */
            public gameMode: v388.protobuf.GameMode;

            /** SaveGameResultRequest playedAt. */
            public playedAt: number;

            /** SaveGameResultRequest playCount. */
            public playCount: number;

            /** SaveGameResultRequest retired. */
            public retired: boolean;

            /** SaveGameResultRequest timeup. */
            public timeup: boolean;

            /** SaveGameResultRequest car. */
            public car?: (v388.protobuf.ICar|null);

            /** SaveGameResultRequest setting. */
            public setting?: (v388.protobuf.ICarSetting|null);

            /** SaveGameResultRequest odometer. */
            public odometer: number;

            /** SaveGameResultRequest tutorials. */
            public tutorials: number;

            /** SaveGameResultRequest hp600Count. */
            public hp600Count: number;

            /** SaveGameResultRequest earnedCustomColor. */
            public earnedCustomColor: boolean;

            /** SaveGameResultRequest ownedCustomColors. */
            public ownedCustomColors: number;

            /** SaveGameResultRequest stResult. */
            public stResult?: (v388.protobuf.SaveGameResultRequest.IStoryResult|null);

            /** SaveGameResultRequest taResult. */
            public taResult?: (v388.protobuf.SaveGameResultRequest.ITimeAttackResult|null);

            /** SaveGameResultRequest vsResult. */
            public vsResult?: (v388.protobuf.SaveGameResultRequest.IVersusBattleResult|null);

            /** SaveGameResultRequest rgResult. */
            public rgResult?: (v388.protobuf.SaveGameResultRequest.IGhostBattleResult|null);

            /**
             * Creates a new SaveGameResultRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveGameResultRequest instance
             */
            public static create(properties?: v388.protobuf.ISaveGameResultRequest): v388.protobuf.SaveGameResultRequest;

            /**
             * Encodes the specified SaveGameResultRequest message. Does not implicitly {@link v388.protobuf.SaveGameResultRequest.verify|verify} messages.
             * @param message SaveGameResultRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ISaveGameResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveGameResultRequest message, length delimited. Does not implicitly {@link v388.protobuf.SaveGameResultRequest.verify|verify} messages.
             * @param message SaveGameResultRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ISaveGameResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveGameResultRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveGameResultRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.SaveGameResultRequest;

            /**
             * Decodes a SaveGameResultRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveGameResultRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.SaveGameResultRequest;

            /**
             * Verifies a SaveGameResultRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveGameResultRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveGameResultRequest
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.SaveGameResultRequest;

            /**
             * Creates a plain object from a SaveGameResultRequest message. Also converts values to other types if specified.
             * @param message SaveGameResultRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.SaveGameResultRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveGameResultRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SaveGameResultRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace SaveGameResultRequest {

            /** Properties of a StoryResult. */
            interface IStoryResult {

                /** StoryResult stPlayCount */
                stPlayCount: number;

                /** StoryResult tuningPoint */
                tuningPoint?: (number|null);

                /** StoryResult stClearBits */
                stClearBits?: (number|null);

                /** StoryResult stClearDivCount */
                stClearDivCount?: (number|null);

                /** StoryResult stClearCount */
                stClearCount?: (number|null);

                /** StoryResult stLoseBits */
                stLoseBits?: (number|Long|null);

                /** StoryResult stLose */
                stLose?: (boolean|null);

                /** StoryResult stConsecutiveWins */
                stConsecutiveWins?: (number|null);

                /** StoryResult ownedMeters */
                ownedMeters?: (number|null);

                /** StoryResult ownedBgm */
                ownedBgm?: (number|null);
            }

            /** Represents a StoryResult. */
            class StoryResult implements IStoryResult {

                /**
                 * Constructs a new StoryResult.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: v388.protobuf.SaveGameResultRequest.IStoryResult);

                /** StoryResult stPlayCount. */
                public stPlayCount: number;

                /** StoryResult tuningPoint. */
                public tuningPoint: number;

                /** StoryResult stClearBits. */
                public stClearBits: number;

                /** StoryResult stClearDivCount. */
                public stClearDivCount: number;

                /** StoryResult stClearCount. */
                public stClearCount: number;

                /** StoryResult stLoseBits. */
                public stLoseBits: (number|Long);

                /** StoryResult stLose. */
                public stLose: boolean;

                /** StoryResult stConsecutiveWins. */
                public stConsecutiveWins: number;

                /** StoryResult ownedMeters. */
                public ownedMeters: number;

                /** StoryResult ownedBgm. */
                public ownedBgm: number;

                /**
                 * Creates a new StoryResult instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StoryResult instance
                 */
                public static create(properties?: v388.protobuf.SaveGameResultRequest.IStoryResult): v388.protobuf.SaveGameResultRequest.StoryResult;

                /**
                 * Encodes the specified StoryResult message. Does not implicitly {@link v388.protobuf.SaveGameResultRequest.StoryResult.verify|verify} messages.
                 * @param message StoryResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: v388.protobuf.SaveGameResultRequest.IStoryResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StoryResult message, length delimited. Does not implicitly {@link v388.protobuf.SaveGameResultRequest.StoryResult.verify|verify} messages.
                 * @param message StoryResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: v388.protobuf.SaveGameResultRequest.IStoryResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StoryResult message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StoryResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.SaveGameResultRequest.StoryResult;

                /**
                 * Decodes a StoryResult message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StoryResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.SaveGameResultRequest.StoryResult;

                /**
                 * Verifies a StoryResult message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StoryResult message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StoryResult
                 */
                public static fromObject(object: { [k: string]: any }): v388.protobuf.SaveGameResultRequest.StoryResult;

                /**
                 * Creates a plain object from a StoryResult message. Also converts values to other types if specified.
                 * @param message StoryResult
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: v388.protobuf.SaveGameResultRequest.StoryResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StoryResult to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for StoryResult
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TimeAttackResult. */
            interface ITimeAttackResult {

                /** TimeAttackResult time */
                time: number;

                /** TimeAttackResult course */
                course: number;

                /** TimeAttackResult section_1Time */
                section_1Time: number;

                /** TimeAttackResult section_2Time */
                section_2Time: number;

                /** TimeAttackResult section_3Time */
                section_3Time: number;

                /** TimeAttackResult section_4Time */
                section_4Time: number;

                /** TimeAttackResult section_5Time */
                section_5Time?: (number|null);

                /** TimeAttackResult section_6Time */
                section_6Time?: (number|null);

                /** TimeAttackResult section_7Time */
                section_7Time?: (number|null);
            }

            /** Represents a TimeAttackResult. */
            class TimeAttackResult implements ITimeAttackResult {

                /**
                 * Constructs a new TimeAttackResult.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: v388.protobuf.SaveGameResultRequest.ITimeAttackResult);

                /** TimeAttackResult time. */
                public time: number;

                /** TimeAttackResult course. */
                public course: number;

                /** TimeAttackResult section_1Time. */
                public section_1Time: number;

                /** TimeAttackResult section_2Time. */
                public section_2Time: number;

                /** TimeAttackResult section_3Time. */
                public section_3Time: number;

                /** TimeAttackResult section_4Time. */
                public section_4Time: number;

                /** TimeAttackResult section_5Time. */
                public section_5Time: number;

                /** TimeAttackResult section_6Time. */
                public section_6Time: number;

                /** TimeAttackResult section_7Time. */
                public section_7Time: number;

                /**
                 * Creates a new TimeAttackResult instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TimeAttackResult instance
                 */
                public static create(properties?: v388.protobuf.SaveGameResultRequest.ITimeAttackResult): v388.protobuf.SaveGameResultRequest.TimeAttackResult;

                /**
                 * Encodes the specified TimeAttackResult message. Does not implicitly {@link v388.protobuf.SaveGameResultRequest.TimeAttackResult.verify|verify} messages.
                 * @param message TimeAttackResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: v388.protobuf.SaveGameResultRequest.ITimeAttackResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TimeAttackResult message, length delimited. Does not implicitly {@link v388.protobuf.SaveGameResultRequest.TimeAttackResult.verify|verify} messages.
                 * @param message TimeAttackResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: v388.protobuf.SaveGameResultRequest.ITimeAttackResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TimeAttackResult message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TimeAttackResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.SaveGameResultRequest.TimeAttackResult;

                /**
                 * Decodes a TimeAttackResult message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TimeAttackResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.SaveGameResultRequest.TimeAttackResult;

                /**
                 * Verifies a TimeAttackResult message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TimeAttackResult message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TimeAttackResult
                 */
                public static fromObject(object: { [k: string]: any }): v388.protobuf.SaveGameResultRequest.TimeAttackResult;

                /**
                 * Creates a plain object from a TimeAttackResult message. Also converts values to other types if specified.
                 * @param message TimeAttackResult
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: v388.protobuf.SaveGameResultRequest.TimeAttackResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TimeAttackResult to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TimeAttackResult
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a VersusBattleResult. */
            interface IVersusBattleResult {

                /** VersusBattleResult result */
                result: number;

                /** VersusBattleResult survived */
                survived: boolean;

                /** VersusBattleResult opponentCarId */
                opponentCarId?: (number[]|null);

                /** VersusBattleResult vsPlayCount */
                vsPlayCount: number;

                /** VersusBattleResult vsBurstCount */
                vsBurstCount?: (number|null);

                /** VersusBattleResult vsStarCount */
                vsStarCount?: (number|null);

                /** VersusBattleResult vsCoolOrWild */
                vsCoolOrWild?: (number|null);

                /** VersusBattleResult vsSmoothOrRough */
                vsSmoothOrRough?: (number|null);
            }

            /** Represents a VersusBattleResult. */
            class VersusBattleResult implements IVersusBattleResult {

                /**
                 * Constructs a new VersusBattleResult.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: v388.protobuf.SaveGameResultRequest.IVersusBattleResult);

                /** VersusBattleResult result. */
                public result: number;

                /** VersusBattleResult survived. */
                public survived: boolean;

                /** VersusBattleResult opponentCarId. */
                public opponentCarId: number[];

                /** VersusBattleResult vsPlayCount. */
                public vsPlayCount: number;

                /** VersusBattleResult vsBurstCount. */
                public vsBurstCount: number;

                /** VersusBattleResult vsStarCount. */
                public vsStarCount: number;

                /** VersusBattleResult vsCoolOrWild. */
                public vsCoolOrWild: number;

                /** VersusBattleResult vsSmoothOrRough. */
                public vsSmoothOrRough: number;

                /**
                 * Creates a new VersusBattleResult instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns VersusBattleResult instance
                 */
                public static create(properties?: v388.protobuf.SaveGameResultRequest.IVersusBattleResult): v388.protobuf.SaveGameResultRequest.VersusBattleResult;

                /**
                 * Encodes the specified VersusBattleResult message. Does not implicitly {@link v388.protobuf.SaveGameResultRequest.VersusBattleResult.verify|verify} messages.
                 * @param message VersusBattleResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: v388.protobuf.SaveGameResultRequest.IVersusBattleResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified VersusBattleResult message, length delimited. Does not implicitly {@link v388.protobuf.SaveGameResultRequest.VersusBattleResult.verify|verify} messages.
                 * @param message VersusBattleResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: v388.protobuf.SaveGameResultRequest.IVersusBattleResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a VersusBattleResult message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns VersusBattleResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.SaveGameResultRequest.VersusBattleResult;

                /**
                 * Decodes a VersusBattleResult message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns VersusBattleResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.SaveGameResultRequest.VersusBattleResult;

                /**
                 * Verifies a VersusBattleResult message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a VersusBattleResult message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns VersusBattleResult
                 */
                public static fromObject(object: { [k: string]: any }): v388.protobuf.SaveGameResultRequest.VersusBattleResult;

                /**
                 * Creates a plain object from a VersusBattleResult message. Also converts values to other types if specified.
                 * @param message VersusBattleResult
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: v388.protobuf.SaveGameResultRequest.VersusBattleResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this VersusBattleResult to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for VersusBattleResult
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GhostBattleResult. */
            interface IGhostBattleResult {

                /** GhostBattleResult result */
                result: number;

                /** GhostBattleResult opponentCarId */
                opponentCarId: number;

                /** GhostBattleResult opponentTeamId */
                opponentTeamId?: (number|null);

                /** GhostBattleResult area */
                area: number;

                /** GhostBattleResult revenged */
                revenged: boolean;

                /** GhostBattleResult selectionMethod */
                selectionMethod: v388.protobuf.GhostSelectionMethod;

                /** GhostBattleResult rgPlayCount */
                rgPlayCount: number;

                /** GhostBattleResult rgWinCount */
                rgWinCount?: (number|null);

                /** GhostBattleResult maxiCoin */
                maxiCoin?: (number|null);

                /** GhostBattleResult dressupPoint */
                dressupPoint?: (number|null);

                /** GhostBattleResult dressupLevel */
                dressupLevel?: (number|null);

                /** GhostBattleResult ownedDressupParts */
                ownedDressupParts?: (number|null);

                /** GhostBattleResult rgBlock */
                rgBlock?: (number|null);

                /** GhostBattleResult rgProgress */
                rgProgress?: (number[]|null);

                /** GhostBattleResult rgClearCount */
                rgClearCount?: (number|null);

                /** GhostBattleResult competitionId */
                competitionId?: (number|null);

                /** GhostBattleResult periodId */
                periodId?: (number|null);

                /** GhostBattleResult brakingPoint */
                brakingPoint?: (number|null);

                /** GhostBattleResult earnedNameplate */
                earnedNameplate?: (number|null);
            }

            /** Represents a GhostBattleResult. */
            class GhostBattleResult implements IGhostBattleResult {

                /**
                 * Constructs a new GhostBattleResult.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: v388.protobuf.SaveGameResultRequest.IGhostBattleResult);

                /** GhostBattleResult result. */
                public result: number;

                /** GhostBattleResult opponentCarId. */
                public opponentCarId: number;

                /** GhostBattleResult opponentTeamId. */
                public opponentTeamId: number;

                /** GhostBattleResult area. */
                public area: number;

                /** GhostBattleResult revenged. */
                public revenged: boolean;

                /** GhostBattleResult selectionMethod. */
                public selectionMethod: v388.protobuf.GhostSelectionMethod;

                /** GhostBattleResult rgPlayCount. */
                public rgPlayCount: number;

                /** GhostBattleResult rgWinCount. */
                public rgWinCount: number;

                /** GhostBattleResult maxiCoin. */
                public maxiCoin: number;

                /** GhostBattleResult dressupPoint. */
                public dressupPoint: number;

                /** GhostBattleResult dressupLevel. */
                public dressupLevel: number;

                /** GhostBattleResult ownedDressupParts. */
                public ownedDressupParts: number;

                /** GhostBattleResult rgBlock. */
                public rgBlock: number;

                /** GhostBattleResult rgProgress. */
                public rgProgress: number[];

                /** GhostBattleResult rgClearCount. */
                public rgClearCount: number;

                /** GhostBattleResult competitionId. */
                public competitionId: number;

                /** GhostBattleResult periodId. */
                public periodId: number;

                /** GhostBattleResult brakingPoint. */
                public brakingPoint: number;

                /** GhostBattleResult earnedNameplate. */
                public earnedNameplate: number;

                /**
                 * Creates a new GhostBattleResult instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GhostBattleResult instance
                 */
                public static create(properties?: v388.protobuf.SaveGameResultRequest.IGhostBattleResult): v388.protobuf.SaveGameResultRequest.GhostBattleResult;

                /**
                 * Encodes the specified GhostBattleResult message. Does not implicitly {@link v388.protobuf.SaveGameResultRequest.GhostBattleResult.verify|verify} messages.
                 * @param message GhostBattleResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: v388.protobuf.SaveGameResultRequest.IGhostBattleResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GhostBattleResult message, length delimited. Does not implicitly {@link v388.protobuf.SaveGameResultRequest.GhostBattleResult.verify|verify} messages.
                 * @param message GhostBattleResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: v388.protobuf.SaveGameResultRequest.IGhostBattleResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GhostBattleResult message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GhostBattleResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.SaveGameResultRequest.GhostBattleResult;

                /**
                 * Decodes a GhostBattleResult message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GhostBattleResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.SaveGameResultRequest.GhostBattleResult;

                /**
                 * Verifies a GhostBattleResult message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GhostBattleResult message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GhostBattleResult
                 */
                public static fromObject(object: { [k: string]: any }): v388.protobuf.SaveGameResultRequest.GhostBattleResult;

                /**
                 * Creates a plain object from a GhostBattleResult message. Also converts values to other types if specified.
                 * @param message GhostBattleResult
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: v388.protobuf.SaveGameResultRequest.GhostBattleResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GhostBattleResult to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GhostBattleResult
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a SaveGameResultResponse. */
        interface ISaveGameResultResponse {

            /** SaveGameResultResponse error */
            error: v388.protobuf.ErrorCode;

            /** SaveGameResultResponse ghostSessionId */
            ghostSessionId?: (number|Long|null);
        }

        /** Represents a SaveGameResultResponse. */
        class SaveGameResultResponse implements ISaveGameResultResponse {

            /**
             * Constructs a new SaveGameResultResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ISaveGameResultResponse);

            /** SaveGameResultResponse error. */
            public error: v388.protobuf.ErrorCode;

            /** SaveGameResultResponse ghostSessionId. */
            public ghostSessionId: (number|Long);

            /**
             * Creates a new SaveGameResultResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveGameResultResponse instance
             */
            public static create(properties?: v388.protobuf.ISaveGameResultResponse): v388.protobuf.SaveGameResultResponse;

            /**
             * Encodes the specified SaveGameResultResponse message. Does not implicitly {@link v388.protobuf.SaveGameResultResponse.verify|verify} messages.
             * @param message SaveGameResultResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ISaveGameResultResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveGameResultResponse message, length delimited. Does not implicitly {@link v388.protobuf.SaveGameResultResponse.verify|verify} messages.
             * @param message SaveGameResultResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ISaveGameResultResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveGameResultResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveGameResultResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.SaveGameResultResponse;

            /**
             * Decodes a SaveGameResultResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveGameResultResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.SaveGameResultResponse;

            /**
             * Verifies a SaveGameResultResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveGameResultResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveGameResultResponse
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.SaveGameResultResponse;

            /**
             * Creates a plain object from a SaveGameResultResponse message. Also converts values to other types if specified.
             * @param message SaveGameResultResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.SaveGameResultResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveGameResultResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SaveGameResultResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SaveMultiGameResultRequest. */
        interface ISaveMultiGameResultRequest {

            /** SaveMultiGameResultRequest carId */
            carId: number;

            /** SaveMultiGameResultRequest playedAt */
            playedAt: number;

            /** SaveMultiGameResultRequest playCount */
            playCount: number;

            /** SaveMultiGameResultRequest car */
            car?: (v388.protobuf.ICar|null);

            /** SaveMultiGameResultRequest setting */
            setting?: (v388.protobuf.ICarSetting|null);

            /** SaveMultiGameResultRequest odometer */
            odometer?: (number|null);

            /** SaveMultiGameResultRequest tutorials */
            tutorials?: (number|null);

            /** SaveMultiGameResultRequest hp600Count */
            hp600Count?: (number|null);

            /** SaveMultiGameResultRequest earnedCustomColor */
            earnedCustomColor?: (boolean|null);

            /** SaveMultiGameResultRequest ownedCustomColors */
            ownedCustomColors?: (number|null);

            /** SaveMultiGameResultRequest stResult */
            stResult?: (v388.protobuf.SaveGameResultRequest.IStoryResult|null);

            /** SaveMultiGameResultRequest taResult */
            taResult?: (v388.protobuf.SaveGameResultRequest.ITimeAttackResult[]|null);

            /** SaveMultiGameResultRequest vsResult */
            vsResult?: (v388.protobuf.SaveGameResultRequest.IVersusBattleResult|null);
        }

        /** Represents a SaveMultiGameResultRequest. */
        class SaveMultiGameResultRequest implements ISaveMultiGameResultRequest {

            /**
             * Constructs a new SaveMultiGameResultRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ISaveMultiGameResultRequest);

            /** SaveMultiGameResultRequest carId. */
            public carId: number;

            /** SaveMultiGameResultRequest playedAt. */
            public playedAt: number;

            /** SaveMultiGameResultRequest playCount. */
            public playCount: number;

            /** SaveMultiGameResultRequest car. */
            public car?: (v388.protobuf.ICar|null);

            /** SaveMultiGameResultRequest setting. */
            public setting?: (v388.protobuf.ICarSetting|null);

            /** SaveMultiGameResultRequest odometer. */
            public odometer: number;

            /** SaveMultiGameResultRequest tutorials. */
            public tutorials: number;

            /** SaveMultiGameResultRequest hp600Count. */
            public hp600Count: number;

            /** SaveMultiGameResultRequest earnedCustomColor. */
            public earnedCustomColor: boolean;

            /** SaveMultiGameResultRequest ownedCustomColors. */
            public ownedCustomColors: number;

            /** SaveMultiGameResultRequest stResult. */
            public stResult?: (v388.protobuf.SaveGameResultRequest.IStoryResult|null);

            /** SaveMultiGameResultRequest taResult. */
            public taResult: v388.protobuf.SaveGameResultRequest.ITimeAttackResult[];

            /** SaveMultiGameResultRequest vsResult. */
            public vsResult?: (v388.protobuf.SaveGameResultRequest.IVersusBattleResult|null);

            /**
             * Creates a new SaveMultiGameResultRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveMultiGameResultRequest instance
             */
            public static create(properties?: v388.protobuf.ISaveMultiGameResultRequest): v388.protobuf.SaveMultiGameResultRequest;

            /**
             * Encodes the specified SaveMultiGameResultRequest message. Does not implicitly {@link v388.protobuf.SaveMultiGameResultRequest.verify|verify} messages.
             * @param message SaveMultiGameResultRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ISaveMultiGameResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveMultiGameResultRequest message, length delimited. Does not implicitly {@link v388.protobuf.SaveMultiGameResultRequest.verify|verify} messages.
             * @param message SaveMultiGameResultRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ISaveMultiGameResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveMultiGameResultRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveMultiGameResultRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.SaveMultiGameResultRequest;

            /**
             * Decodes a SaveMultiGameResultRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveMultiGameResultRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.SaveMultiGameResultRequest;

            /**
             * Verifies a SaveMultiGameResultRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveMultiGameResultRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveMultiGameResultRequest
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.SaveMultiGameResultRequest;

            /**
             * Creates a plain object from a SaveMultiGameResultRequest message. Also converts values to other types if specified.
             * @param message SaveMultiGameResultRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.SaveMultiGameResultRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveMultiGameResultRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SaveMultiGameResultRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SaveMultiGameResultResponse. */
        interface ISaveMultiGameResultResponse {

            /** SaveMultiGameResultResponse error */
            error: v388.protobuf.ErrorCode;
        }

        /** Represents a SaveMultiGameResultResponse. */
        class SaveMultiGameResultResponse implements ISaveMultiGameResultResponse {

            /**
             * Constructs a new SaveMultiGameResultResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ISaveMultiGameResultResponse);

            /** SaveMultiGameResultResponse error. */
            public error: v388.protobuf.ErrorCode;

            /**
             * Creates a new SaveMultiGameResultResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveMultiGameResultResponse instance
             */
            public static create(properties?: v388.protobuf.ISaveMultiGameResultResponse): v388.protobuf.SaveMultiGameResultResponse;

            /**
             * Encodes the specified SaveMultiGameResultResponse message. Does not implicitly {@link v388.protobuf.SaveMultiGameResultResponse.verify|verify} messages.
             * @param message SaveMultiGameResultResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ISaveMultiGameResultResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveMultiGameResultResponse message, length delimited. Does not implicitly {@link v388.protobuf.SaveMultiGameResultResponse.verify|verify} messages.
             * @param message SaveMultiGameResultResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ISaveMultiGameResultResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveMultiGameResultResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveMultiGameResultResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.SaveMultiGameResultResponse;

            /**
             * Decodes a SaveMultiGameResultResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveMultiGameResultResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.SaveMultiGameResultResponse;

            /**
             * Verifies a SaveMultiGameResultResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveMultiGameResultResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveMultiGameResultResponse
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.SaveMultiGameResultResponse;

            /**
             * Creates a plain object from a SaveMultiGameResultResponse message. Also converts values to other types if specified.
             * @param message SaveMultiGameResultResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.SaveMultiGameResultResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveMultiGameResultResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SaveMultiGameResultResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SaveChargeRequest. */
        interface ISaveChargeRequest {

            /** SaveChargeRequest chargeLogs */
            chargeLogs?: (v388.protobuf.SaveChargeRequest.IChargeLog[]|null);
        }

        /** Represents a SaveChargeRequest. */
        class SaveChargeRequest implements ISaveChargeRequest {

            /**
             * Constructs a new SaveChargeRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ISaveChargeRequest);

            /** SaveChargeRequest chargeLogs. */
            public chargeLogs: v388.protobuf.SaveChargeRequest.IChargeLog[];

            /**
             * Creates a new SaveChargeRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveChargeRequest instance
             */
            public static create(properties?: v388.protobuf.ISaveChargeRequest): v388.protobuf.SaveChargeRequest;

            /**
             * Encodes the specified SaveChargeRequest message. Does not implicitly {@link v388.protobuf.SaveChargeRequest.verify|verify} messages.
             * @param message SaveChargeRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ISaveChargeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveChargeRequest message, length delimited. Does not implicitly {@link v388.protobuf.SaveChargeRequest.verify|verify} messages.
             * @param message SaveChargeRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ISaveChargeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveChargeRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveChargeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.SaveChargeRequest;

            /**
             * Decodes a SaveChargeRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveChargeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.SaveChargeRequest;

            /**
             * Verifies a SaveChargeRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveChargeRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveChargeRequest
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.SaveChargeRequest;

            /**
             * Creates a plain object from a SaveChargeRequest message. Also converts values to other types if specified.
             * @param message SaveChargeRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.SaveChargeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveChargeRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SaveChargeRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace SaveChargeRequest {

            /** Properties of a ChargeLog. */
            interface IChargeLog {

                /** ChargeLog datetime */
                datetime: number;

                /** ChargeLog pcbSerial */
                pcbSerial: string;

                /** ChargeLog placeId */
                placeId: string;
            }

            /** Represents a ChargeLog. */
            class ChargeLog implements IChargeLog {

                /**
                 * Constructs a new ChargeLog.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: v388.protobuf.SaveChargeRequest.IChargeLog);

                /** ChargeLog datetime. */
                public datetime: number;

                /** ChargeLog pcbSerial. */
                public pcbSerial: string;

                /** ChargeLog placeId. */
                public placeId: string;

                /**
                 * Creates a new ChargeLog instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ChargeLog instance
                 */
                public static create(properties?: v388.protobuf.SaveChargeRequest.IChargeLog): v388.protobuf.SaveChargeRequest.ChargeLog;

                /**
                 * Encodes the specified ChargeLog message. Does not implicitly {@link v388.protobuf.SaveChargeRequest.ChargeLog.verify|verify} messages.
                 * @param message ChargeLog message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: v388.protobuf.SaveChargeRequest.IChargeLog, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ChargeLog message, length delimited. Does not implicitly {@link v388.protobuf.SaveChargeRequest.ChargeLog.verify|verify} messages.
                 * @param message ChargeLog message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: v388.protobuf.SaveChargeRequest.IChargeLog, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ChargeLog message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ChargeLog
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.SaveChargeRequest.ChargeLog;

                /**
                 * Decodes a ChargeLog message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ChargeLog
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.SaveChargeRequest.ChargeLog;

                /**
                 * Verifies a ChargeLog message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ChargeLog message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ChargeLog
                 */
                public static fromObject(object: { [k: string]: any }): v388.protobuf.SaveChargeRequest.ChargeLog;

                /**
                 * Creates a plain object from a ChargeLog message. Also converts values to other types if specified.
                 * @param message ChargeLog
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: v388.protobuf.SaveChargeRequest.ChargeLog, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ChargeLog to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ChargeLog
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a SaveChargeResponse. */
        interface ISaveChargeResponse {

            /** SaveChargeResponse error */
            error: v388.protobuf.ErrorCode;
        }

        /** Represents a SaveChargeResponse. */
        class SaveChargeResponse implements ISaveChargeResponse {

            /**
             * Constructs a new SaveChargeResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ISaveChargeResponse);

            /** SaveChargeResponse error. */
            public error: v388.protobuf.ErrorCode;

            /**
             * Creates a new SaveChargeResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveChargeResponse instance
             */
            public static create(properties?: v388.protobuf.ISaveChargeResponse): v388.protobuf.SaveChargeResponse;

            /**
             * Encodes the specified SaveChargeResponse message. Does not implicitly {@link v388.protobuf.SaveChargeResponse.verify|verify} messages.
             * @param message SaveChargeResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ISaveChargeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveChargeResponse message, length delimited. Does not implicitly {@link v388.protobuf.SaveChargeResponse.verify|verify} messages.
             * @param message SaveChargeResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ISaveChargeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveChargeResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveChargeResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.SaveChargeResponse;

            /**
             * Decodes a SaveChargeResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveChargeResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.SaveChargeResponse;

            /**
             * Verifies a SaveChargeResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveChargeResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveChargeResponse
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.SaveChargeResponse;

            /**
             * Creates a plain object from a SaveChargeResponse message. Also converts values to other types if specified.
             * @param message SaveChargeResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.SaveChargeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveChargeResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SaveChargeResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadRevengesRequest. */
        interface ILoadRevengesRequest {

            /** LoadRevengesRequest carId */
            carId: number;
        }

        /** Represents a LoadRevengesRequest. */
        class LoadRevengesRequest implements ILoadRevengesRequest {

            /**
             * Constructs a new LoadRevengesRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ILoadRevengesRequest);

            /** LoadRevengesRequest carId. */
            public carId: number;

            /**
             * Creates a new LoadRevengesRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadRevengesRequest instance
             */
            public static create(properties?: v388.protobuf.ILoadRevengesRequest): v388.protobuf.LoadRevengesRequest;

            /**
             * Encodes the specified LoadRevengesRequest message. Does not implicitly {@link v388.protobuf.LoadRevengesRequest.verify|verify} messages.
             * @param message LoadRevengesRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ILoadRevengesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadRevengesRequest message, length delimited. Does not implicitly {@link v388.protobuf.LoadRevengesRequest.verify|verify} messages.
             * @param message LoadRevengesRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ILoadRevengesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadRevengesRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadRevengesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.LoadRevengesRequest;

            /**
             * Decodes a LoadRevengesRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadRevengesRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.LoadRevengesRequest;

            /**
             * Verifies a LoadRevengesRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadRevengesRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadRevengesRequest
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.LoadRevengesRequest;

            /**
             * Creates a plain object from a LoadRevengesRequest message. Also converts values to other types if specified.
             * @param message LoadRevengesRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.LoadRevengesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadRevengesRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadRevengesRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadRevengesResponse. */
        interface ILoadRevengesResponse {

            /** LoadRevengesResponse error */
            error: v388.protobuf.ErrorCode;

            /** LoadRevengesResponse ghosts */
            ghosts?: (v388.protobuf.IGhostCar[]|null);
        }

        /** Represents a LoadRevengesResponse. */
        class LoadRevengesResponse implements ILoadRevengesResponse {

            /**
             * Constructs a new LoadRevengesResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ILoadRevengesResponse);

            /** LoadRevengesResponse error. */
            public error: v388.protobuf.ErrorCode;

            /** LoadRevengesResponse ghosts. */
            public ghosts: v388.protobuf.IGhostCar[];

            /**
             * Creates a new LoadRevengesResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadRevengesResponse instance
             */
            public static create(properties?: v388.protobuf.ILoadRevengesResponse): v388.protobuf.LoadRevengesResponse;

            /**
             * Encodes the specified LoadRevengesResponse message. Does not implicitly {@link v388.protobuf.LoadRevengesResponse.verify|verify} messages.
             * @param message LoadRevengesResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ILoadRevengesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadRevengesResponse message, length delimited. Does not implicitly {@link v388.protobuf.LoadRevengesResponse.verify|verify} messages.
             * @param message LoadRevengesResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ILoadRevengesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadRevengesResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadRevengesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.LoadRevengesResponse;

            /**
             * Decodes a LoadRevengesResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadRevengesResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.LoadRevengesResponse;

            /**
             * Verifies a LoadRevengesResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadRevengesResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadRevengesResponse
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.LoadRevengesResponse;

            /**
             * Creates a plain object from a LoadRevengesResponse message. Also converts values to other types if specified.
             * @param message LoadRevengesResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.LoadRevengesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadRevengesResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadRevengesResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadGhostBattleHistoryRequest. */
        interface ILoadGhostBattleHistoryRequest {

            /** LoadGhostBattleHistoryRequest carId */
            carId: number;
        }

        /** Represents a LoadGhostBattleHistoryRequest. */
        class LoadGhostBattleHistoryRequest implements ILoadGhostBattleHistoryRequest {

            /**
             * Constructs a new LoadGhostBattleHistoryRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ILoadGhostBattleHistoryRequest);

            /** LoadGhostBattleHistoryRequest carId. */
            public carId: number;

            /**
             * Creates a new LoadGhostBattleHistoryRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadGhostBattleHistoryRequest instance
             */
            public static create(properties?: v388.protobuf.ILoadGhostBattleHistoryRequest): v388.protobuf.LoadGhostBattleHistoryRequest;

            /**
             * Encodes the specified LoadGhostBattleHistoryRequest message. Does not implicitly {@link v388.protobuf.LoadGhostBattleHistoryRequest.verify|verify} messages.
             * @param message LoadGhostBattleHistoryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ILoadGhostBattleHistoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadGhostBattleHistoryRequest message, length delimited. Does not implicitly {@link v388.protobuf.LoadGhostBattleHistoryRequest.verify|verify} messages.
             * @param message LoadGhostBattleHistoryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ILoadGhostBattleHistoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadGhostBattleHistoryRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadGhostBattleHistoryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.LoadGhostBattleHistoryRequest;

            /**
             * Decodes a LoadGhostBattleHistoryRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadGhostBattleHistoryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.LoadGhostBattleHistoryRequest;

            /**
             * Verifies a LoadGhostBattleHistoryRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadGhostBattleHistoryRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadGhostBattleHistoryRequest
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.LoadGhostBattleHistoryRequest;

            /**
             * Creates a plain object from a LoadGhostBattleHistoryRequest message. Also converts values to other types if specified.
             * @param message LoadGhostBattleHistoryRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.LoadGhostBattleHistoryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadGhostBattleHistoryRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadGhostBattleHistoryRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadGhostBattleHistoryResponse. */
        interface ILoadGhostBattleHistoryResponse {

            /** LoadGhostBattleHistoryResponse error */
            error: v388.protobuf.ErrorCode;

            /** LoadGhostBattleHistoryResponse cars */
            cars?: (v388.protobuf.ICar[]|null);
        }

        /** Represents a LoadGhostBattleHistoryResponse. */
        class LoadGhostBattleHistoryResponse implements ILoadGhostBattleHistoryResponse {

            /**
             * Constructs a new LoadGhostBattleHistoryResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ILoadGhostBattleHistoryResponse);

            /** LoadGhostBattleHistoryResponse error. */
            public error: v388.protobuf.ErrorCode;

            /** LoadGhostBattleHistoryResponse cars. */
            public cars: v388.protobuf.ICar[];

            /**
             * Creates a new LoadGhostBattleHistoryResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadGhostBattleHistoryResponse instance
             */
            public static create(properties?: v388.protobuf.ILoadGhostBattleHistoryResponse): v388.protobuf.LoadGhostBattleHistoryResponse;

            /**
             * Encodes the specified LoadGhostBattleHistoryResponse message. Does not implicitly {@link v388.protobuf.LoadGhostBattleHistoryResponse.verify|verify} messages.
             * @param message LoadGhostBattleHistoryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ILoadGhostBattleHistoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadGhostBattleHistoryResponse message, length delimited. Does not implicitly {@link v388.protobuf.LoadGhostBattleHistoryResponse.verify|verify} messages.
             * @param message LoadGhostBattleHistoryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ILoadGhostBattleHistoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadGhostBattleHistoryResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadGhostBattleHistoryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.LoadGhostBattleHistoryResponse;

            /**
             * Decodes a LoadGhostBattleHistoryResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadGhostBattleHistoryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.LoadGhostBattleHistoryResponse;

            /**
             * Verifies a LoadGhostBattleHistoryResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadGhostBattleHistoryResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadGhostBattleHistoryResponse
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.LoadGhostBattleHistoryResponse;

            /**
             * Creates a plain object from a LoadGhostBattleHistoryResponse message. Also converts values to other types if specified.
             * @param message LoadGhostBattleHistoryResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.LoadGhostBattleHistoryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadGhostBattleHistoryResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadGhostBattleHistoryResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadGhostBattleInfoRequest. */
        interface ILoadGhostBattleInfoRequest {

            /** LoadGhostBattleInfoRequest carId */
            carId: number;
        }

        /** Represents a LoadGhostBattleInfoRequest. */
        class LoadGhostBattleInfoRequest implements ILoadGhostBattleInfoRequest {

            /**
             * Constructs a new LoadGhostBattleInfoRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ILoadGhostBattleInfoRequest);

            /** LoadGhostBattleInfoRequest carId. */
            public carId: number;

            /**
             * Creates a new LoadGhostBattleInfoRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadGhostBattleInfoRequest instance
             */
            public static create(properties?: v388.protobuf.ILoadGhostBattleInfoRequest): v388.protobuf.LoadGhostBattleInfoRequest;

            /**
             * Encodes the specified LoadGhostBattleInfoRequest message. Does not implicitly {@link v388.protobuf.LoadGhostBattleInfoRequest.verify|verify} messages.
             * @param message LoadGhostBattleInfoRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ILoadGhostBattleInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadGhostBattleInfoRequest message, length delimited. Does not implicitly {@link v388.protobuf.LoadGhostBattleInfoRequest.verify|verify} messages.
             * @param message LoadGhostBattleInfoRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ILoadGhostBattleInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadGhostBattleInfoRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadGhostBattleInfoRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.LoadGhostBattleInfoRequest;

            /**
             * Decodes a LoadGhostBattleInfoRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadGhostBattleInfoRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.LoadGhostBattleInfoRequest;

            /**
             * Verifies a LoadGhostBattleInfoRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadGhostBattleInfoRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadGhostBattleInfoRequest
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.LoadGhostBattleInfoRequest;

            /**
             * Creates a plain object from a LoadGhostBattleInfoRequest message. Also converts values to other types if specified.
             * @param message LoadGhostBattleInfoRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.LoadGhostBattleInfoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadGhostBattleInfoRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadGhostBattleInfoRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadGhostBattleInfoResponse. */
        interface ILoadGhostBattleInfoResponse {

            /** LoadGhostBattleInfoResponse error */
            error: v388.protobuf.ErrorCode;

            /** LoadGhostBattleInfoResponse friendCars */
            friendCars?: (v388.protobuf.IFriendCar[]|null);

            /** LoadGhostBattleInfoResponse defaultOpponent */
            defaultOpponent?: (v388.protobuf.IGhostCar|null);

            /** LoadGhostBattleInfoResponse hasRevenges */
            hasRevenges: boolean;

            /** LoadGhostBattleInfoResponse hasHistory */
            hasHistory: boolean;

            /** LoadGhostBattleInfoResponse stickers */
            stickers?: (v388.protobuf.ITeamSticker[]|null);
        }

        /** Represents a LoadGhostBattleInfoResponse. */
        class LoadGhostBattleInfoResponse implements ILoadGhostBattleInfoResponse {

            /**
             * Constructs a new LoadGhostBattleInfoResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ILoadGhostBattleInfoResponse);

            /** LoadGhostBattleInfoResponse error. */
            public error: v388.protobuf.ErrorCode;

            /** LoadGhostBattleInfoResponse friendCars. */
            public friendCars: v388.protobuf.IFriendCar[];

            /** LoadGhostBattleInfoResponse defaultOpponent. */
            public defaultOpponent?: (v388.protobuf.IGhostCar|null);

            /** LoadGhostBattleInfoResponse hasRevenges. */
            public hasRevenges: boolean;

            /** LoadGhostBattleInfoResponse hasHistory. */
            public hasHistory: boolean;

            /** LoadGhostBattleInfoResponse stickers. */
            public stickers: v388.protobuf.ITeamSticker[];

            /**
             * Creates a new LoadGhostBattleInfoResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadGhostBattleInfoResponse instance
             */
            public static create(properties?: v388.protobuf.ILoadGhostBattleInfoResponse): v388.protobuf.LoadGhostBattleInfoResponse;

            /**
             * Encodes the specified LoadGhostBattleInfoResponse message. Does not implicitly {@link v388.protobuf.LoadGhostBattleInfoResponse.verify|verify} messages.
             * @param message LoadGhostBattleInfoResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ILoadGhostBattleInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadGhostBattleInfoResponse message, length delimited. Does not implicitly {@link v388.protobuf.LoadGhostBattleInfoResponse.verify|verify} messages.
             * @param message LoadGhostBattleInfoResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ILoadGhostBattleInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadGhostBattleInfoResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadGhostBattleInfoResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.LoadGhostBattleInfoResponse;

            /**
             * Decodes a LoadGhostBattleInfoResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadGhostBattleInfoResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.LoadGhostBattleInfoResponse;

            /**
             * Verifies a LoadGhostBattleInfoResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadGhostBattleInfoResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadGhostBattleInfoResponse
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.LoadGhostBattleInfoResponse;

            /**
             * Creates a plain object from a LoadGhostBattleInfoResponse message. Also converts values to other types if specified.
             * @param message LoadGhostBattleInfoResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.LoadGhostBattleInfoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadGhostBattleInfoResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadGhostBattleInfoResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadGhostCompetitionInfoRequest. */
        interface ILoadGhostCompetitionInfoRequest {

            /** LoadGhostCompetitionInfoRequest carId */
            carId: number;

            /** LoadGhostCompetitionInfoRequest competitionId */
            competitionId: number;
        }

        /** Represents a LoadGhostCompetitionInfoRequest. */
        class LoadGhostCompetitionInfoRequest implements ILoadGhostCompetitionInfoRequest {

            /**
             * Constructs a new LoadGhostCompetitionInfoRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ILoadGhostCompetitionInfoRequest);

            /** LoadGhostCompetitionInfoRequest carId. */
            public carId: number;

            /** LoadGhostCompetitionInfoRequest competitionId. */
            public competitionId: number;

            /**
             * Creates a new LoadGhostCompetitionInfoRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadGhostCompetitionInfoRequest instance
             */
            public static create(properties?: v388.protobuf.ILoadGhostCompetitionInfoRequest): v388.protobuf.LoadGhostCompetitionInfoRequest;

            /**
             * Encodes the specified LoadGhostCompetitionInfoRequest message. Does not implicitly {@link v388.protobuf.LoadGhostCompetitionInfoRequest.verify|verify} messages.
             * @param message LoadGhostCompetitionInfoRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ILoadGhostCompetitionInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadGhostCompetitionInfoRequest message, length delimited. Does not implicitly {@link v388.protobuf.LoadGhostCompetitionInfoRequest.verify|verify} messages.
             * @param message LoadGhostCompetitionInfoRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ILoadGhostCompetitionInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadGhostCompetitionInfoRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadGhostCompetitionInfoRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.LoadGhostCompetitionInfoRequest;

            /**
             * Decodes a LoadGhostCompetitionInfoRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadGhostCompetitionInfoRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.LoadGhostCompetitionInfoRequest;

            /**
             * Verifies a LoadGhostCompetitionInfoRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadGhostCompetitionInfoRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadGhostCompetitionInfoRequest
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.LoadGhostCompetitionInfoRequest;

            /**
             * Creates a plain object from a LoadGhostCompetitionInfoRequest message. Also converts values to other types if specified.
             * @param message LoadGhostCompetitionInfoRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.LoadGhostCompetitionInfoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadGhostCompetitionInfoRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadGhostCompetitionInfoRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadGhostCompetitionInfoResponse. */
        interface ILoadGhostCompetitionInfoResponse {

            /** LoadGhostCompetitionInfoResponse error */
            error: v388.protobuf.ErrorCode;

            /** LoadGhostCompetitionInfoResponse periodId */
            periodId?: (number|null);

            /** LoadGhostCompetitionInfoResponse closed */
            closed: boolean;

            /** LoadGhostCompetitionInfoResponse brakingPoint */
            brakingPoint?: (number|null);

            /** LoadGhostCompetitionInfoResponse qualified */
            qualified?: (boolean|null);

            /** LoadGhostCompetitionInfoResponse topResults */
            topResults?: (number[]|null);

            /** LoadGhostCompetitionInfoResponse result */
            result?: (number|null);

            /** LoadGhostCompetitionInfoResponse rank */
            rank?: (number|null);

            /** LoadGhostCompetitionInfoResponse parameters1 */
            parameters1?: (number[]|null);

            /** LoadGhostCompetitionInfoResponse parameters2 */
            parameters2?: (boolean|null);
        }

        /** Represents a LoadGhostCompetitionInfoResponse. */
        class LoadGhostCompetitionInfoResponse implements ILoadGhostCompetitionInfoResponse {

            /**
             * Constructs a new LoadGhostCompetitionInfoResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ILoadGhostCompetitionInfoResponse);

            /** LoadGhostCompetitionInfoResponse error. */
            public error: v388.protobuf.ErrorCode;

            /** LoadGhostCompetitionInfoResponse periodId. */
            public periodId: number;

            /** LoadGhostCompetitionInfoResponse closed. */
            public closed: boolean;

            /** LoadGhostCompetitionInfoResponse brakingPoint. */
            public brakingPoint: number;

            /** LoadGhostCompetitionInfoResponse qualified. */
            public qualified: boolean;

            /** LoadGhostCompetitionInfoResponse topResults. */
            public topResults: number[];

            /** LoadGhostCompetitionInfoResponse result. */
            public result: number;

            /** LoadGhostCompetitionInfoResponse rank. */
            public rank: number;

            /** LoadGhostCompetitionInfoResponse parameters1. */
            public parameters1: number[];

            /** LoadGhostCompetitionInfoResponse parameters2. */
            public parameters2: boolean;

            /**
             * Creates a new LoadGhostCompetitionInfoResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadGhostCompetitionInfoResponse instance
             */
            public static create(properties?: v388.protobuf.ILoadGhostCompetitionInfoResponse): v388.protobuf.LoadGhostCompetitionInfoResponse;

            /**
             * Encodes the specified LoadGhostCompetitionInfoResponse message. Does not implicitly {@link v388.protobuf.LoadGhostCompetitionInfoResponse.verify|verify} messages.
             * @param message LoadGhostCompetitionInfoResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ILoadGhostCompetitionInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadGhostCompetitionInfoResponse message, length delimited. Does not implicitly {@link v388.protobuf.LoadGhostCompetitionInfoResponse.verify|verify} messages.
             * @param message LoadGhostCompetitionInfoResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ILoadGhostCompetitionInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadGhostCompetitionInfoResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadGhostCompetitionInfoResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.LoadGhostCompetitionInfoResponse;

            /**
             * Decodes a LoadGhostCompetitionInfoResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadGhostCompetitionInfoResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.LoadGhostCompetitionInfoResponse;

            /**
             * Verifies a LoadGhostCompetitionInfoResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadGhostCompetitionInfoResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadGhostCompetitionInfoResponse
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.LoadGhostCompetitionInfoResponse;

            /**
             * Creates a plain object from a LoadGhostCompetitionInfoResponse message. Also converts values to other types if specified.
             * @param message LoadGhostCompetitionInfoResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.LoadGhostCompetitionInfoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadGhostCompetitionInfoResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadGhostCompetitionInfoResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadTimeAttackRecordRequest. */
        interface ILoadTimeAttackRecordRequest {

            /** LoadTimeAttackRecordRequest carId */
            carId?: (number|null);

            /** LoadTimeAttackRecordRequest model */
            model: number;

            /** LoadTimeAttackRecordRequest course */
            course: number;
        }

        /** Represents a LoadTimeAttackRecordRequest. */
        class LoadTimeAttackRecordRequest implements ILoadTimeAttackRecordRequest {

            /**
             * Constructs a new LoadTimeAttackRecordRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ILoadTimeAttackRecordRequest);

            /** LoadTimeAttackRecordRequest carId. */
            public carId: number;

            /** LoadTimeAttackRecordRequest model. */
            public model: number;

            /** LoadTimeAttackRecordRequest course. */
            public course: number;

            /**
             * Creates a new LoadTimeAttackRecordRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadTimeAttackRecordRequest instance
             */
            public static create(properties?: v388.protobuf.ILoadTimeAttackRecordRequest): v388.protobuf.LoadTimeAttackRecordRequest;

            /**
             * Encodes the specified LoadTimeAttackRecordRequest message. Does not implicitly {@link v388.protobuf.LoadTimeAttackRecordRequest.verify|verify} messages.
             * @param message LoadTimeAttackRecordRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ILoadTimeAttackRecordRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadTimeAttackRecordRequest message, length delimited. Does not implicitly {@link v388.protobuf.LoadTimeAttackRecordRequest.verify|verify} messages.
             * @param message LoadTimeAttackRecordRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ILoadTimeAttackRecordRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadTimeAttackRecordRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadTimeAttackRecordRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.LoadTimeAttackRecordRequest;

            /**
             * Decodes a LoadTimeAttackRecordRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadTimeAttackRecordRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.LoadTimeAttackRecordRequest;

            /**
             * Verifies a LoadTimeAttackRecordRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadTimeAttackRecordRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadTimeAttackRecordRequest
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.LoadTimeAttackRecordRequest;

            /**
             * Creates a plain object from a LoadTimeAttackRecordRequest message. Also converts values to other types if specified.
             * @param message LoadTimeAttackRecordRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.LoadTimeAttackRecordRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadTimeAttackRecordRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadTimeAttackRecordRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadTimeAttackRecordResponse. */
        interface ILoadTimeAttackRecordResponse {

            /** LoadTimeAttackRecordResponse error */
            error: v388.protobuf.ErrorCode;

            /** LoadTimeAttackRecordResponse wholeRanking */
            wholeRanking?: (number[]|null);

            /** LoadTimeAttackRecordResponse modelRanking */
            modelRanking?: (number[]|null);

            /** LoadTimeAttackRecordResponse personalBestTime */
            personalBestTime?: (number|null);

            /** LoadTimeAttackRecordResponse pbSection_1Time */
            pbSection_1Time?: (number|null);

            /** LoadTimeAttackRecordResponse pbSection_2Time */
            pbSection_2Time?: (number|null);

            /** LoadTimeAttackRecordResponse pbSection_3Time */
            pbSection_3Time?: (number|null);

            /** LoadTimeAttackRecordResponse pbSection_4Time */
            pbSection_4Time?: (number|null);

            /** LoadTimeAttackRecordResponse pbSection_5Time */
            pbSection_5Time?: (number|null);

            /** LoadTimeAttackRecordResponse pbSection_6Time */
            pbSection_6Time?: (number|null);

            /** LoadTimeAttackRecordResponse pbSection_7Time */
            pbSection_7Time?: (number|null);
        }

        /** Represents a LoadTimeAttackRecordResponse. */
        class LoadTimeAttackRecordResponse implements ILoadTimeAttackRecordResponse {

            /**
             * Constructs a new LoadTimeAttackRecordResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ILoadTimeAttackRecordResponse);

            /** LoadTimeAttackRecordResponse error. */
            public error: v388.protobuf.ErrorCode;

            /** LoadTimeAttackRecordResponse wholeRanking. */
            public wholeRanking: number[];

            /** LoadTimeAttackRecordResponse modelRanking. */
            public modelRanking: number[];

            /** LoadTimeAttackRecordResponse personalBestTime. */
            public personalBestTime: number;

            /** LoadTimeAttackRecordResponse pbSection_1Time. */
            public pbSection_1Time: number;

            /** LoadTimeAttackRecordResponse pbSection_2Time. */
            public pbSection_2Time: number;

            /** LoadTimeAttackRecordResponse pbSection_3Time. */
            public pbSection_3Time: number;

            /** LoadTimeAttackRecordResponse pbSection_4Time. */
            public pbSection_4Time: number;

            /** LoadTimeAttackRecordResponse pbSection_5Time. */
            public pbSection_5Time: number;

            /** LoadTimeAttackRecordResponse pbSection_6Time. */
            public pbSection_6Time: number;

            /** LoadTimeAttackRecordResponse pbSection_7Time. */
            public pbSection_7Time: number;

            /**
             * Creates a new LoadTimeAttackRecordResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadTimeAttackRecordResponse instance
             */
            public static create(properties?: v388.protobuf.ILoadTimeAttackRecordResponse): v388.protobuf.LoadTimeAttackRecordResponse;

            /**
             * Encodes the specified LoadTimeAttackRecordResponse message. Does not implicitly {@link v388.protobuf.LoadTimeAttackRecordResponse.verify|verify} messages.
             * @param message LoadTimeAttackRecordResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ILoadTimeAttackRecordResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadTimeAttackRecordResponse message, length delimited. Does not implicitly {@link v388.protobuf.LoadTimeAttackRecordResponse.verify|verify} messages.
             * @param message LoadTimeAttackRecordResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ILoadTimeAttackRecordResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadTimeAttackRecordResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadTimeAttackRecordResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.LoadTimeAttackRecordResponse;

            /**
             * Decodes a LoadTimeAttackRecordResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadTimeAttackRecordResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.LoadTimeAttackRecordResponse;

            /**
             * Verifies a LoadTimeAttackRecordResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadTimeAttackRecordResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadTimeAttackRecordResponse
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.LoadTimeAttackRecordResponse;

            /**
             * Creates a plain object from a LoadTimeAttackRecordResponse message. Also converts values to other types if specified.
             * @param message LoadTimeAttackRecordResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.LoadTimeAttackRecordResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadTimeAttackRecordResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadTimeAttackRecordResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SaveTerminalResultRequest. */
        interface ISaveTerminalResultRequest {

            /** SaveTerminalResultRequest userId */
            userId: number;

            /** SaveTerminalResultRequest timestamp */
            timestamp: number;

            /** SaveTerminalResultRequest carOrder */
            carOrder?: (number[]|null);

            /** SaveTerminalResultRequest teamCarId */
            teamCarId?: (number|null);

            /** SaveTerminalResultRequest tutorials */
            tutorials?: (number|null);

            /** SaveTerminalResultRequest teamNoticesConfirmed */
            teamNoticesConfirmed?: (boolean|null);
        }

        /** Represents a SaveTerminalResultRequest. */
        class SaveTerminalResultRequest implements ISaveTerminalResultRequest {

            /**
             * Constructs a new SaveTerminalResultRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ISaveTerminalResultRequest);

            /** SaveTerminalResultRequest userId. */
            public userId: number;

            /** SaveTerminalResultRequest timestamp. */
            public timestamp: number;

            /** SaveTerminalResultRequest carOrder. */
            public carOrder: number[];

            /** SaveTerminalResultRequest teamCarId. */
            public teamCarId: number;

            /** SaveTerminalResultRequest tutorials. */
            public tutorials: number;

            /** SaveTerminalResultRequest teamNoticesConfirmed. */
            public teamNoticesConfirmed: boolean;

            /**
             * Creates a new SaveTerminalResultRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveTerminalResultRequest instance
             */
            public static create(properties?: v388.protobuf.ISaveTerminalResultRequest): v388.protobuf.SaveTerminalResultRequest;

            /**
             * Encodes the specified SaveTerminalResultRequest message. Does not implicitly {@link v388.protobuf.SaveTerminalResultRequest.verify|verify} messages.
             * @param message SaveTerminalResultRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ISaveTerminalResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveTerminalResultRequest message, length delimited. Does not implicitly {@link v388.protobuf.SaveTerminalResultRequest.verify|verify} messages.
             * @param message SaveTerminalResultRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ISaveTerminalResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveTerminalResultRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveTerminalResultRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.SaveTerminalResultRequest;

            /**
             * Decodes a SaveTerminalResultRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveTerminalResultRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.SaveTerminalResultRequest;

            /**
             * Verifies a SaveTerminalResultRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveTerminalResultRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveTerminalResultRequest
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.SaveTerminalResultRequest;

            /**
             * Creates a plain object from a SaveTerminalResultRequest message. Also converts values to other types if specified.
             * @param message SaveTerminalResultRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.SaveTerminalResultRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveTerminalResultRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SaveTerminalResultRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SaveTerminalResultResponse. */
        interface ISaveTerminalResultResponse {

            /** SaveTerminalResultResponse error */
            error: v388.protobuf.ErrorCode;
        }

        /** Represents a SaveTerminalResultResponse. */
        class SaveTerminalResultResponse implements ISaveTerminalResultResponse {

            /**
             * Constructs a new SaveTerminalResultResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ISaveTerminalResultResponse);

            /** SaveTerminalResultResponse error. */
            public error: v388.protobuf.ErrorCode;

            /**
             * Creates a new SaveTerminalResultResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveTerminalResultResponse instance
             */
            public static create(properties?: v388.protobuf.ISaveTerminalResultResponse): v388.protobuf.SaveTerminalResultResponse;

            /**
             * Encodes the specified SaveTerminalResultResponse message. Does not implicitly {@link v388.protobuf.SaveTerminalResultResponse.verify|verify} messages.
             * @param message SaveTerminalResultResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ISaveTerminalResultResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveTerminalResultResponse message, length delimited. Does not implicitly {@link v388.protobuf.SaveTerminalResultResponse.verify|verify} messages.
             * @param message SaveTerminalResultResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ISaveTerminalResultResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveTerminalResultResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveTerminalResultResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.SaveTerminalResultResponse;

            /**
             * Decodes a SaveTerminalResultResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveTerminalResultResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.SaveTerminalResultResponse;

            /**
             * Verifies a SaveTerminalResultResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveTerminalResultResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveTerminalResultResponse
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.SaveTerminalResultResponse;

            /**
             * Creates a plain object from a SaveTerminalResultResponse message. Also converts values to other types if specified.
             * @param message SaveTerminalResultResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.SaveTerminalResultResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveTerminalResultResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SaveTerminalResultResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PingRequest. */
        interface IPingRequest {

            /** PingRequest ping */
            ping?: (number|null);
        }

        /** Represents a PingRequest. */
        class PingRequest implements IPingRequest {

            /**
             * Constructs a new PingRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IPingRequest);

            /** PingRequest ping. */
            public ping: number;

            /**
             * Creates a new PingRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PingRequest instance
             */
            public static create(properties?: v388.protobuf.IPingRequest): v388.protobuf.PingRequest;

            /**
             * Encodes the specified PingRequest message. Does not implicitly {@link v388.protobuf.PingRequest.verify|verify} messages.
             * @param message PingRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IPingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PingRequest message, length delimited. Does not implicitly {@link v388.protobuf.PingRequest.verify|verify} messages.
             * @param message PingRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IPingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PingRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.PingRequest;

            /**
             * Decodes a PingRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.PingRequest;

            /**
             * Verifies a PingRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PingRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PingRequest
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.PingRequest;

            /**
             * Creates a plain object from a PingRequest message. Also converts values to other types if specified.
             * @param message PingRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.PingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PingRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PingRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PingResponse. */
        interface IPingResponse {

            /** PingResponse error */
            error: v388.protobuf.ErrorCode;

            /** PingResponse pong */
            pong: number;
        }

        /** Represents a PingResponse. */
        class PingResponse implements IPingResponse {

            /**
             * Constructs a new PingResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IPingResponse);

            /** PingResponse error. */
            public error: v388.protobuf.ErrorCode;

            /** PingResponse pong. */
            public pong: number;

            /**
             * Creates a new PingResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PingResponse instance
             */
            public static create(properties?: v388.protobuf.IPingResponse): v388.protobuf.PingResponse;

            /**
             * Encodes the specified PingResponse message. Does not implicitly {@link v388.protobuf.PingResponse.verify|verify} messages.
             * @param message PingResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IPingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PingResponse message, length delimited. Does not implicitly {@link v388.protobuf.PingResponse.verify|verify} messages.
             * @param message PingResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IPingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PingResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PingResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.PingResponse;

            /**
             * Decodes a PingResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PingResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.PingResponse;

            /**
             * Verifies a PingResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PingResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PingResponse
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.PingResponse;

            /**
             * Creates a plain object from a PingResponse message. Also converts values to other types if specified.
             * @param message PingResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.PingResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PingResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PingResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadTeamInformationRequest. */
        interface ILoadTeamInformationRequest {

            /** LoadTeamInformationRequest userId */
            userId: number;
        }

        /** Represents a LoadTeamInformationRequest. */
        class LoadTeamInformationRequest implements ILoadTeamInformationRequest {

            /**
             * Constructs a new LoadTeamInformationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ILoadTeamInformationRequest);

            /** LoadTeamInformationRequest userId. */
            public userId: number;

            /**
             * Creates a new LoadTeamInformationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadTeamInformationRequest instance
             */
            public static create(properties?: v388.protobuf.ILoadTeamInformationRequest): v388.protobuf.LoadTeamInformationRequest;

            /**
             * Encodes the specified LoadTeamInformationRequest message. Does not implicitly {@link v388.protobuf.LoadTeamInformationRequest.verify|verify} messages.
             * @param message LoadTeamInformationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ILoadTeamInformationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadTeamInformationRequest message, length delimited. Does not implicitly {@link v388.protobuf.LoadTeamInformationRequest.verify|verify} messages.
             * @param message LoadTeamInformationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ILoadTeamInformationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadTeamInformationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadTeamInformationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.LoadTeamInformationRequest;

            /**
             * Decodes a LoadTeamInformationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadTeamInformationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.LoadTeamInformationRequest;

            /**
             * Verifies a LoadTeamInformationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadTeamInformationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadTeamInformationRequest
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.LoadTeamInformationRequest;

            /**
             * Creates a plain object from a LoadTeamInformationRequest message. Also converts values to other types if specified.
             * @param message LoadTeamInformationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.LoadTeamInformationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadTeamInformationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadTeamInformationRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadTeamInformationResponse. */
        interface ILoadTeamInformationResponse {

            /** LoadTeamInformationResponse error */
            error: v388.protobuf.ErrorCode;

            /** LoadTeamInformationResponse teamCreatedAt */
            teamCreatedAt?: (number|null);

            /** LoadTeamInformationResponse applying */
            applying?: (boolean|null);

            /** LoadTeamInformationResponse team */
            team?: (v388.protobuf.ITeam|null);

            /** LoadTeamInformationResponse noticeEntries */
            noticeEntries?: (v388.protobuf.LoadTeamInformationResponse.INoticeEntry[]|null);

            /** LoadTeamInformationResponse newsEntries */
            newsEntries?: (v388.protobuf.LoadTeamInformationResponse.INewsEntry[]|null);

            /** LoadTeamInformationResponse applicants */
            applicants?: (v388.protobuf.ITeamApplicant[]|null);

            /** LoadTeamInformationResponse teamCarId */
            teamCarId?: (number|null);
        }

        /** Represents a LoadTeamInformationResponse. */
        class LoadTeamInformationResponse implements ILoadTeamInformationResponse {

            /**
             * Constructs a new LoadTeamInformationResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ILoadTeamInformationResponse);

            /** LoadTeamInformationResponse error. */
            public error: v388.protobuf.ErrorCode;

            /** LoadTeamInformationResponse teamCreatedAt. */
            public teamCreatedAt: number;

            /** LoadTeamInformationResponse applying. */
            public applying: boolean;

            /** LoadTeamInformationResponse team. */
            public team?: (v388.protobuf.ITeam|null);

            /** LoadTeamInformationResponse noticeEntries. */
            public noticeEntries: v388.protobuf.LoadTeamInformationResponse.INoticeEntry[];

            /** LoadTeamInformationResponse newsEntries. */
            public newsEntries: v388.protobuf.LoadTeamInformationResponse.INewsEntry[];

            /** LoadTeamInformationResponse applicants. */
            public applicants: v388.protobuf.ITeamApplicant[];

            /** LoadTeamInformationResponse teamCarId. */
            public teamCarId: number;

            /**
             * Creates a new LoadTeamInformationResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadTeamInformationResponse instance
             */
            public static create(properties?: v388.protobuf.ILoadTeamInformationResponse): v388.protobuf.LoadTeamInformationResponse;

            /**
             * Encodes the specified LoadTeamInformationResponse message. Does not implicitly {@link v388.protobuf.LoadTeamInformationResponse.verify|verify} messages.
             * @param message LoadTeamInformationResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ILoadTeamInformationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadTeamInformationResponse message, length delimited. Does not implicitly {@link v388.protobuf.LoadTeamInformationResponse.verify|verify} messages.
             * @param message LoadTeamInformationResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ILoadTeamInformationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadTeamInformationResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadTeamInformationResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.LoadTeamInformationResponse;

            /**
             * Decodes a LoadTeamInformationResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadTeamInformationResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.LoadTeamInformationResponse;

            /**
             * Verifies a LoadTeamInformationResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadTeamInformationResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadTeamInformationResponse
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.LoadTeamInformationResponse;

            /**
             * Creates a plain object from a LoadTeamInformationResponse message. Also converts values to other types if specified.
             * @param message LoadTeamInformationResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.LoadTeamInformationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadTeamInformationResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadTeamInformationResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace LoadTeamInformationResponse {

            /** Properties of a NoticeEntry. */
            interface INoticeEntry {

                /** NoticeEntry noticeType */
                noticeType: v388.protobuf.TeamNoticeEntry;

                /** NoticeEntry field_1 */
                field_1?: (string|null);

                /** NoticeEntry field_2 */
                field_2?: (number|null);

                /** NoticeEntry field_3 */
                field_3?: (number|null);
            }

            /** Represents a NoticeEntry. */
            class NoticeEntry implements INoticeEntry {

                /**
                 * Constructs a new NoticeEntry.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: v388.protobuf.LoadTeamInformationResponse.INoticeEntry);

                /** NoticeEntry noticeType. */
                public noticeType: v388.protobuf.TeamNoticeEntry;

                /** NoticeEntry field_1. */
                public field_1: string;

                /** NoticeEntry field_2. */
                public field_2: number;

                /** NoticeEntry field_3. */
                public field_3: number;

                /**
                 * Creates a new NoticeEntry instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NoticeEntry instance
                 */
                public static create(properties?: v388.protobuf.LoadTeamInformationResponse.INoticeEntry): v388.protobuf.LoadTeamInformationResponse.NoticeEntry;

                /**
                 * Encodes the specified NoticeEntry message. Does not implicitly {@link v388.protobuf.LoadTeamInformationResponse.NoticeEntry.verify|verify} messages.
                 * @param message NoticeEntry message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: v388.protobuf.LoadTeamInformationResponse.INoticeEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NoticeEntry message, length delimited. Does not implicitly {@link v388.protobuf.LoadTeamInformationResponse.NoticeEntry.verify|verify} messages.
                 * @param message NoticeEntry message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: v388.protobuf.LoadTeamInformationResponse.INoticeEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NoticeEntry message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NoticeEntry
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.LoadTeamInformationResponse.NoticeEntry;

                /**
                 * Decodes a NoticeEntry message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NoticeEntry
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.LoadTeamInformationResponse.NoticeEntry;

                /**
                 * Verifies a NoticeEntry message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NoticeEntry message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NoticeEntry
                 */
                public static fromObject(object: { [k: string]: any }): v388.protobuf.LoadTeamInformationResponse.NoticeEntry;

                /**
                 * Creates a plain object from a NoticeEntry message. Also converts values to other types if specified.
                 * @param message NoticeEntry
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: v388.protobuf.LoadTeamInformationResponse.NoticeEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NoticeEntry to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for NoticeEntry
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a NewsEntry. */
            interface INewsEntry {

                /** NewsEntry newsType */
                newsType: v388.protobuf.TeamNewsEntry;

                /** NewsEntry datetime */
                datetime: number;

                /** NewsEntry field_1 */
                field_1?: (string|null);

                /** NewsEntry field_2 */
                field_2?: (number|null);
            }

            /** Represents a NewsEntry. */
            class NewsEntry implements INewsEntry {

                /**
                 * Constructs a new NewsEntry.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: v388.protobuf.LoadTeamInformationResponse.INewsEntry);

                /** NewsEntry newsType. */
                public newsType: v388.protobuf.TeamNewsEntry;

                /** NewsEntry datetime. */
                public datetime: number;

                /** NewsEntry field_1. */
                public field_1: string;

                /** NewsEntry field_2. */
                public field_2: number;

                /**
                 * Creates a new NewsEntry instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NewsEntry instance
                 */
                public static create(properties?: v388.protobuf.LoadTeamInformationResponse.INewsEntry): v388.protobuf.LoadTeamInformationResponse.NewsEntry;

                /**
                 * Encodes the specified NewsEntry message. Does not implicitly {@link v388.protobuf.LoadTeamInformationResponse.NewsEntry.verify|verify} messages.
                 * @param message NewsEntry message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: v388.protobuf.LoadTeamInformationResponse.INewsEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NewsEntry message, length delimited. Does not implicitly {@link v388.protobuf.LoadTeamInformationResponse.NewsEntry.verify|verify} messages.
                 * @param message NewsEntry message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: v388.protobuf.LoadTeamInformationResponse.INewsEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NewsEntry message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NewsEntry
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.LoadTeamInformationResponse.NewsEntry;

                /**
                 * Decodes a NewsEntry message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NewsEntry
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.LoadTeamInformationResponse.NewsEntry;

                /**
                 * Verifies a NewsEntry message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NewsEntry message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NewsEntry
                 */
                public static fromObject(object: { [k: string]: any }): v388.protobuf.LoadTeamInformationResponse.NewsEntry;

                /**
                 * Creates a plain object from a NewsEntry message. Also converts values to other types if specified.
                 * @param message NewsEntry
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: v388.protobuf.LoadTeamInformationResponse.NewsEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NewsEntry to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for NewsEntry
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a CreateUserRequest. */
        interface ICreateUserRequest {

            /** CreateUserRequest banapassportAmId */
            banapassportAmId?: (number|null);

            /** CreateUserRequest cardChipId */
            cardChipId?: (string|null);

            /** CreateUserRequest accessCode */
            accessCode?: (string|null);

            /** CreateUserRequest cardTypeCode */
            cardTypeCode?: (number|null);

            /** CreateUserRequest cardRegionCode */
            cardRegionCode?: (number|null);

            /** CreateUserRequest device */
            device?: (v388.protobuf.DeviceType|null);

            /** CreateUserRequest timestamp */
            timestamp: number;
        }

        /** Represents a CreateUserRequest. */
        class CreateUserRequest implements ICreateUserRequest {

            /**
             * Constructs a new CreateUserRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ICreateUserRequest);

            /** CreateUserRequest banapassportAmId. */
            public banapassportAmId: number;

            /** CreateUserRequest cardChipId. */
            public cardChipId: string;

            /** CreateUserRequest accessCode. */
            public accessCode: string;

            /** CreateUserRequest cardTypeCode. */
            public cardTypeCode: number;

            /** CreateUserRequest cardRegionCode. */
            public cardRegionCode: number;

            /** CreateUserRequest device. */
            public device: v388.protobuf.DeviceType;

            /** CreateUserRequest timestamp. */
            public timestamp: number;

            /**
             * Creates a new CreateUserRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateUserRequest instance
             */
            public static create(properties?: v388.protobuf.ICreateUserRequest): v388.protobuf.CreateUserRequest;

            /**
             * Encodes the specified CreateUserRequest message. Does not implicitly {@link v388.protobuf.CreateUserRequest.verify|verify} messages.
             * @param message CreateUserRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ICreateUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateUserRequest message, length delimited. Does not implicitly {@link v388.protobuf.CreateUserRequest.verify|verify} messages.
             * @param message CreateUserRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ICreateUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateUserRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateUserRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.CreateUserRequest;

            /**
             * Decodes a CreateUserRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateUserRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.CreateUserRequest;

            /**
             * Verifies a CreateUserRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateUserRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateUserRequest
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.CreateUserRequest;

            /**
             * Creates a plain object from a CreateUserRequest message. Also converts values to other types if specified.
             * @param message CreateUserRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.CreateUserRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateUserRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CreateUserRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CreateUserResponse. */
        interface ICreateUserResponse {

            /** CreateUserResponse error */
            error: v388.protobuf.ErrorCode;

            /** CreateUserResponse accessCode */
            accessCode?: (string|null);

            /** CreateUserResponse banapassportAmId */
            banapassportAmId?: (number|null);

            /** CreateUserResponse personalId */
            personalId?: (number|null);

            /** CreateUserResponse userId */
            userId: number;
        }

        /** Represents a CreateUserResponse. */
        class CreateUserResponse implements ICreateUserResponse {

            /**
             * Constructs a new CreateUserResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ICreateUserResponse);

            /** CreateUserResponse error. */
            public error: v388.protobuf.ErrorCode;

            /** CreateUserResponse accessCode. */
            public accessCode: string;

            /** CreateUserResponse banapassportAmId. */
            public banapassportAmId: number;

            /** CreateUserResponse personalId. */
            public personalId: number;

            /** CreateUserResponse userId. */
            public userId: number;

            /**
             * Creates a new CreateUserResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateUserResponse instance
             */
            public static create(properties?: v388.protobuf.ICreateUserResponse): v388.protobuf.CreateUserResponse;

            /**
             * Encodes the specified CreateUserResponse message. Does not implicitly {@link v388.protobuf.CreateUserResponse.verify|verify} messages.
             * @param message CreateUserResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ICreateUserResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateUserResponse message, length delimited. Does not implicitly {@link v388.protobuf.CreateUserResponse.verify|verify} messages.
             * @param message CreateUserResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ICreateUserResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateUserResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateUserResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.CreateUserResponse;

            /**
             * Decodes a CreateUserResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateUserResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.CreateUserResponse;

            /**
             * Verifies a CreateUserResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateUserResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateUserResponse
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.CreateUserResponse;

            /**
             * Creates a plain object from a CreateUserResponse message. Also converts values to other types if specified.
             * @param message CreateUserResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.CreateUserResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateUserResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CreateUserResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AskAccessCodeRequest. */
        interface IAskAccessCodeRequest {

            /** AskAccessCodeRequest cardChipId */
            cardChipId: string;
        }

        /** Represents an AskAccessCodeRequest. */
        class AskAccessCodeRequest implements IAskAccessCodeRequest {

            /**
             * Constructs a new AskAccessCodeRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IAskAccessCodeRequest);

            /** AskAccessCodeRequest cardChipId. */
            public cardChipId: string;

            /**
             * Creates a new AskAccessCodeRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AskAccessCodeRequest instance
             */
            public static create(properties?: v388.protobuf.IAskAccessCodeRequest): v388.protobuf.AskAccessCodeRequest;

            /**
             * Encodes the specified AskAccessCodeRequest message. Does not implicitly {@link v388.protobuf.AskAccessCodeRequest.verify|verify} messages.
             * @param message AskAccessCodeRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IAskAccessCodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AskAccessCodeRequest message, length delimited. Does not implicitly {@link v388.protobuf.AskAccessCodeRequest.verify|verify} messages.
             * @param message AskAccessCodeRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IAskAccessCodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AskAccessCodeRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AskAccessCodeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.AskAccessCodeRequest;

            /**
             * Decodes an AskAccessCodeRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AskAccessCodeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.AskAccessCodeRequest;

            /**
             * Verifies an AskAccessCodeRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AskAccessCodeRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AskAccessCodeRequest
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.AskAccessCodeRequest;

            /**
             * Creates a plain object from an AskAccessCodeRequest message. Also converts values to other types if specified.
             * @param message AskAccessCodeRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.AskAccessCodeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AskAccessCodeRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AskAccessCodeRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AskAccessCodeResponse. */
        interface IAskAccessCodeResponse {

            /** AskAccessCodeResponse error */
            error: v388.protobuf.ErrorCode;

            /** AskAccessCodeResponse accessCode */
            accessCode: string;
        }

        /** Represents an AskAccessCodeResponse. */
        class AskAccessCodeResponse implements IAskAccessCodeResponse {

            /**
             * Constructs a new AskAccessCodeResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IAskAccessCodeResponse);

            /** AskAccessCodeResponse error. */
            public error: v388.protobuf.ErrorCode;

            /** AskAccessCodeResponse accessCode. */
            public accessCode: string;

            /**
             * Creates a new AskAccessCodeResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AskAccessCodeResponse instance
             */
            public static create(properties?: v388.protobuf.IAskAccessCodeResponse): v388.protobuf.AskAccessCodeResponse;

            /**
             * Encodes the specified AskAccessCodeResponse message. Does not implicitly {@link v388.protobuf.AskAccessCodeResponse.verify|verify} messages.
             * @param message AskAccessCodeResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IAskAccessCodeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AskAccessCodeResponse message, length delimited. Does not implicitly {@link v388.protobuf.AskAccessCodeResponse.verify|verify} messages.
             * @param message AskAccessCodeResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IAskAccessCodeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AskAccessCodeResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AskAccessCodeResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.AskAccessCodeResponse;

            /**
             * Decodes an AskAccessCodeResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AskAccessCodeResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.AskAccessCodeResponse;

            /**
             * Verifies an AskAccessCodeResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AskAccessCodeResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AskAccessCodeResponse
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.AskAccessCodeResponse;

            /**
             * Creates a plain object from an AskAccessCodeResponse message. Also converts values to other types if specified.
             * @param message AskAccessCodeResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.AskAccessCodeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AskAccessCodeResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AskAccessCodeResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PrepareCarSuccessionRequest. */
        interface IPrepareCarSuccessionRequest {

            /** PrepareCarSuccessionRequest userId */
            userId: number;

            /** PrepareCarSuccessionRequest w3pMark */
            w3pMark: number;

            /** PrepareCarSuccessionRequest w3pHasMaxi2NolosePoint */
            w3pHasMaxi2NolosePoint: boolean;

            /** PrepareCarSuccessionRequest w3pId1 */
            w3pId1: number;

            /** PrepareCarSuccessionRequest w3pId2 */
            w3pId2: number;

            /** PrepareCarSuccessionRequest w3pTunePower */
            w3pTunePower: number;

            /** PrepareCarSuccessionRequest w3pTuneHandling */
            w3pTuneHandling: number;

            /** PrepareCarSuccessionRequest w3pDress */
            w3pDress: number;

            /** PrepareCarSuccessionRequest w3pRenewal */
            w3pRenewal: number;

            /** PrepareCarSuccessionRequest w3pClass */
            w3pClass: number;

            /** PrepareCarSuccessionRequest w3pOdoCount */
            w3pOdoCount: number;

            /** PrepareCarSuccessionRequest w3pJoinPlayCount */
            w3pJoinPlayCount: number;

            /** PrepareCarSuccessionRequest w3pJoinStarCount */
            w3pJoinStarCount: number;

            /** PrepareCarSuccessionRequest w3pHasStoryNolosePoint */
            w3pHasStoryNolosePoint: boolean;

            /** PrepareCarSuccessionRequest w3pHasStoryLose */
            w3pHasStoryLose: boolean;

            /** PrepareCarSuccessionRequest w3pTargetPlayCount */
            w3pTargetPlayCount: number;

            /** PrepareCarSuccessionRequest w3pTargetWinCount */
            w3pTargetWinCount: number;

            /** PrepareCarSuccessionRequest w3pStorySuccessiveVictoryCount */
            w3pStorySuccessiveVictoryCount: number;

            /** PrepareCarSuccessionRequest w3pHasStoryNolosePoint2 */
            w3pHasStoryNolosePoint2: boolean;

            /** PrepareCarSuccessionRequest w3pHasStoryClearPoint */
            w3pHasStoryClearPoint: boolean;

            /** PrepareCarSuccessionRequest w3pMaxiCoin */
            w3pMaxiCoin: number;

            /** PrepareCarSuccessionRequest w3pStorySuccessiveVictoryCountMax */
            w3pStorySuccessiveVictoryCountMax: number;

            /** PrepareCarSuccessionRequest w3pStoryClearCount */
            w3pStoryClearCount: number;

            /** PrepareCarSuccessionRequest w3pBinary */
            w3pBinary: Uint8Array;

            /** PrepareCarSuccessionRequest car */
            car: v388.protobuf.ICar;

            /** PrepareCarSuccessionRequest timestamp */
            timestamp: number;
        }

        /** Represents a PrepareCarSuccessionRequest. */
        class PrepareCarSuccessionRequest implements IPrepareCarSuccessionRequest {

            /**
             * Constructs a new PrepareCarSuccessionRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IPrepareCarSuccessionRequest);

            /** PrepareCarSuccessionRequest userId. */
            public userId: number;

            /** PrepareCarSuccessionRequest w3pMark. */
            public w3pMark: number;

            /** PrepareCarSuccessionRequest w3pHasMaxi2NolosePoint. */
            public w3pHasMaxi2NolosePoint: boolean;

            /** PrepareCarSuccessionRequest w3pId1. */
            public w3pId1: number;

            /** PrepareCarSuccessionRequest w3pId2. */
            public w3pId2: number;

            /** PrepareCarSuccessionRequest w3pTunePower. */
            public w3pTunePower: number;

            /** PrepareCarSuccessionRequest w3pTuneHandling. */
            public w3pTuneHandling: number;

            /** PrepareCarSuccessionRequest w3pDress. */
            public w3pDress: number;

            /** PrepareCarSuccessionRequest w3pRenewal. */
            public w3pRenewal: number;

            /** PrepareCarSuccessionRequest w3pClass. */
            public w3pClass: number;

            /** PrepareCarSuccessionRequest w3pOdoCount. */
            public w3pOdoCount: number;

            /** PrepareCarSuccessionRequest w3pJoinPlayCount. */
            public w3pJoinPlayCount: number;

            /** PrepareCarSuccessionRequest w3pJoinStarCount. */
            public w3pJoinStarCount: number;

            /** PrepareCarSuccessionRequest w3pHasStoryNolosePoint. */
            public w3pHasStoryNolosePoint: boolean;

            /** PrepareCarSuccessionRequest w3pHasStoryLose. */
            public w3pHasStoryLose: boolean;

            /** PrepareCarSuccessionRequest w3pTargetPlayCount. */
            public w3pTargetPlayCount: number;

            /** PrepareCarSuccessionRequest w3pTargetWinCount. */
            public w3pTargetWinCount: number;

            /** PrepareCarSuccessionRequest w3pStorySuccessiveVictoryCount. */
            public w3pStorySuccessiveVictoryCount: number;

            /** PrepareCarSuccessionRequest w3pHasStoryNolosePoint2. */
            public w3pHasStoryNolosePoint2: boolean;

            /** PrepareCarSuccessionRequest w3pHasStoryClearPoint. */
            public w3pHasStoryClearPoint: boolean;

            /** PrepareCarSuccessionRequest w3pMaxiCoin. */
            public w3pMaxiCoin: number;

            /** PrepareCarSuccessionRequest w3pStorySuccessiveVictoryCountMax. */
            public w3pStorySuccessiveVictoryCountMax: number;

            /** PrepareCarSuccessionRequest w3pStoryClearCount. */
            public w3pStoryClearCount: number;

            /** PrepareCarSuccessionRequest w3pBinary. */
            public w3pBinary: Uint8Array;

            /** PrepareCarSuccessionRequest car. */
            public car: v388.protobuf.ICar;

            /** PrepareCarSuccessionRequest timestamp. */
            public timestamp: number;

            /**
             * Creates a new PrepareCarSuccessionRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PrepareCarSuccessionRequest instance
             */
            public static create(properties?: v388.protobuf.IPrepareCarSuccessionRequest): v388.protobuf.PrepareCarSuccessionRequest;

            /**
             * Encodes the specified PrepareCarSuccessionRequest message. Does not implicitly {@link v388.protobuf.PrepareCarSuccessionRequest.verify|verify} messages.
             * @param message PrepareCarSuccessionRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IPrepareCarSuccessionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PrepareCarSuccessionRequest message, length delimited. Does not implicitly {@link v388.protobuf.PrepareCarSuccessionRequest.verify|verify} messages.
             * @param message PrepareCarSuccessionRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IPrepareCarSuccessionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PrepareCarSuccessionRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PrepareCarSuccessionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.PrepareCarSuccessionRequest;

            /**
             * Decodes a PrepareCarSuccessionRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PrepareCarSuccessionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.PrepareCarSuccessionRequest;

            /**
             * Verifies a PrepareCarSuccessionRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PrepareCarSuccessionRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PrepareCarSuccessionRequest
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.PrepareCarSuccessionRequest;

            /**
             * Creates a plain object from a PrepareCarSuccessionRequest message. Also converts values to other types if specified.
             * @param message PrepareCarSuccessionRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.PrepareCarSuccessionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PrepareCarSuccessionRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PrepareCarSuccessionRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PrepareCarSuccessionResponse. */
        interface IPrepareCarSuccessionResponse {

            /** PrepareCarSuccessionResponse error */
            error: v388.protobuf.ErrorCode;

            /** PrepareCarSuccessionResponse successionId */
            successionId: number;

            /** PrepareCarSuccessionResponse searchCode */
            searchCode: string;
        }

        /** Represents a PrepareCarSuccessionResponse. */
        class PrepareCarSuccessionResponse implements IPrepareCarSuccessionResponse {

            /**
             * Constructs a new PrepareCarSuccessionResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IPrepareCarSuccessionResponse);

            /** PrepareCarSuccessionResponse error. */
            public error: v388.protobuf.ErrorCode;

            /** PrepareCarSuccessionResponse successionId. */
            public successionId: number;

            /** PrepareCarSuccessionResponse searchCode. */
            public searchCode: string;

            /**
             * Creates a new PrepareCarSuccessionResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PrepareCarSuccessionResponse instance
             */
            public static create(properties?: v388.protobuf.IPrepareCarSuccessionResponse): v388.protobuf.PrepareCarSuccessionResponse;

            /**
             * Encodes the specified PrepareCarSuccessionResponse message. Does not implicitly {@link v388.protobuf.PrepareCarSuccessionResponse.verify|verify} messages.
             * @param message PrepareCarSuccessionResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IPrepareCarSuccessionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PrepareCarSuccessionResponse message, length delimited. Does not implicitly {@link v388.protobuf.PrepareCarSuccessionResponse.verify|verify} messages.
             * @param message PrepareCarSuccessionResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IPrepareCarSuccessionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PrepareCarSuccessionResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PrepareCarSuccessionResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.PrepareCarSuccessionResponse;

            /**
             * Decodes a PrepareCarSuccessionResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PrepareCarSuccessionResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.PrepareCarSuccessionResponse;

            /**
             * Verifies a PrepareCarSuccessionResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PrepareCarSuccessionResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PrepareCarSuccessionResponse
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.PrepareCarSuccessionResponse;

            /**
             * Creates a plain object from a PrepareCarSuccessionResponse message. Also converts values to other types if specified.
             * @param message PrepareCarSuccessionResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.PrepareCarSuccessionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PrepareCarSuccessionResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PrepareCarSuccessionResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SucceedCarRequest. */
        interface ISucceedCarRequest {

            /** SucceedCarRequest successionId */
            successionId: number;
        }

        /** Represents a SucceedCarRequest. */
        class SucceedCarRequest implements ISucceedCarRequest {

            /**
             * Constructs a new SucceedCarRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ISucceedCarRequest);

            /** SucceedCarRequest successionId. */
            public successionId: number;

            /**
             * Creates a new SucceedCarRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SucceedCarRequest instance
             */
            public static create(properties?: v388.protobuf.ISucceedCarRequest): v388.protobuf.SucceedCarRequest;

            /**
             * Encodes the specified SucceedCarRequest message. Does not implicitly {@link v388.protobuf.SucceedCarRequest.verify|verify} messages.
             * @param message SucceedCarRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ISucceedCarRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SucceedCarRequest message, length delimited. Does not implicitly {@link v388.protobuf.SucceedCarRequest.verify|verify} messages.
             * @param message SucceedCarRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ISucceedCarRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SucceedCarRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SucceedCarRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.SucceedCarRequest;

            /**
             * Decodes a SucceedCarRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SucceedCarRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.SucceedCarRequest;

            /**
             * Verifies a SucceedCarRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SucceedCarRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SucceedCarRequest
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.SucceedCarRequest;

            /**
             * Creates a plain object from a SucceedCarRequest message. Also converts values to other types if specified.
             * @param message SucceedCarRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.SucceedCarRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SucceedCarRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SucceedCarRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SucceedCarResponse. */
        interface ISucceedCarResponse {

            /** SucceedCarResponse error */
            error: v388.protobuf.ErrorCode;

            /** SucceedCarResponse carId */
            carId: number;
        }

        /** Represents a SucceedCarResponse. */
        class SucceedCarResponse implements ISucceedCarResponse {

            /**
             * Constructs a new SucceedCarResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ISucceedCarResponse);

            /** SucceedCarResponse error. */
            public error: v388.protobuf.ErrorCode;

            /** SucceedCarResponse carId. */
            public carId: number;

            /**
             * Creates a new SucceedCarResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SucceedCarResponse instance
             */
            public static create(properties?: v388.protobuf.ISucceedCarResponse): v388.protobuf.SucceedCarResponse;

            /**
             * Encodes the specified SucceedCarResponse message. Does not implicitly {@link v388.protobuf.SucceedCarResponse.verify|verify} messages.
             * @param message SucceedCarResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ISucceedCarResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SucceedCarResponse message, length delimited. Does not implicitly {@link v388.protobuf.SucceedCarResponse.verify|verify} messages.
             * @param message SucceedCarResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ISucceedCarResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SucceedCarResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SucceedCarResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.SucceedCarResponse;

            /**
             * Decodes a SucceedCarResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SucceedCarResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.SucceedCarResponse;

            /**
             * Verifies a SucceedCarResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SucceedCarResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SucceedCarResponse
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.SucceedCarResponse;

            /**
             * Creates a plain object from a SucceedCarResponse message. Also converts values to other types if specified.
             * @param message SucceedCarResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.SucceedCarResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SucceedCarResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SucceedCarResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RegisterOpponentGhostRequest. */
        interface IRegisterOpponentGhostRequest {

            /** RegisterOpponentGhostRequest carId */
            carId: number;

            /** RegisterOpponentGhostRequest specialGhostId */
            specialGhostId: number;
        }

        /** Represents a RegisterOpponentGhostRequest. */
        class RegisterOpponentGhostRequest implements IRegisterOpponentGhostRequest {

            /**
             * Constructs a new RegisterOpponentGhostRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IRegisterOpponentGhostRequest);

            /** RegisterOpponentGhostRequest carId. */
            public carId: number;

            /** RegisterOpponentGhostRequest specialGhostId. */
            public specialGhostId: number;

            /**
             * Creates a new RegisterOpponentGhostRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RegisterOpponentGhostRequest instance
             */
            public static create(properties?: v388.protobuf.IRegisterOpponentGhostRequest): v388.protobuf.RegisterOpponentGhostRequest;

            /**
             * Encodes the specified RegisterOpponentGhostRequest message. Does not implicitly {@link v388.protobuf.RegisterOpponentGhostRequest.verify|verify} messages.
             * @param message RegisterOpponentGhostRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IRegisterOpponentGhostRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RegisterOpponentGhostRequest message, length delimited. Does not implicitly {@link v388.protobuf.RegisterOpponentGhostRequest.verify|verify} messages.
             * @param message RegisterOpponentGhostRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IRegisterOpponentGhostRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RegisterOpponentGhostRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RegisterOpponentGhostRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.RegisterOpponentGhostRequest;

            /**
             * Decodes a RegisterOpponentGhostRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RegisterOpponentGhostRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.RegisterOpponentGhostRequest;

            /**
             * Verifies a RegisterOpponentGhostRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RegisterOpponentGhostRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RegisterOpponentGhostRequest
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.RegisterOpponentGhostRequest;

            /**
             * Creates a plain object from a RegisterOpponentGhostRequest message. Also converts values to other types if specified.
             * @param message RegisterOpponentGhostRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.RegisterOpponentGhostRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RegisterOpponentGhostRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RegisterOpponentGhostRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RegisterOpponentGhostResponse. */
        interface IRegisterOpponentGhostResponse {

            /** RegisterOpponentGhostResponse error */
            error: v388.protobuf.ErrorCode;
        }

        /** Represents a RegisterOpponentGhostResponse. */
        class RegisterOpponentGhostResponse implements IRegisterOpponentGhostResponse {

            /**
             * Constructs a new RegisterOpponentGhostResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IRegisterOpponentGhostResponse);

            /** RegisterOpponentGhostResponse error. */
            public error: v388.protobuf.ErrorCode;

            /**
             * Creates a new RegisterOpponentGhostResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RegisterOpponentGhostResponse instance
             */
            public static create(properties?: v388.protobuf.IRegisterOpponentGhostResponse): v388.protobuf.RegisterOpponentGhostResponse;

            /**
             * Encodes the specified RegisterOpponentGhostResponse message. Does not implicitly {@link v388.protobuf.RegisterOpponentGhostResponse.verify|verify} messages.
             * @param message RegisterOpponentGhostResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IRegisterOpponentGhostResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RegisterOpponentGhostResponse message, length delimited. Does not implicitly {@link v388.protobuf.RegisterOpponentGhostResponse.verify|verify} messages.
             * @param message RegisterOpponentGhostResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IRegisterOpponentGhostResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RegisterOpponentGhostResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RegisterOpponentGhostResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.RegisterOpponentGhostResponse;

            /**
             * Decodes a RegisterOpponentGhostResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RegisterOpponentGhostResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.RegisterOpponentGhostResponse;

            /**
             * Verifies a RegisterOpponentGhostResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RegisterOpponentGhostResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RegisterOpponentGhostResponse
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.RegisterOpponentGhostResponse;

            /**
             * Creates a plain object from a RegisterOpponentGhostResponse message. Also converts values to other types if specified.
             * @param message RegisterOpponentGhostResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.RegisterOpponentGhostResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RegisterOpponentGhostResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RegisterOpponentGhostResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CheckTeamNameRequest. */
        interface ICheckTeamNameRequest {

            /** CheckTeamNameRequest teamName */
            teamName: string;
        }

        /** Represents a CheckTeamNameRequest. */
        class CheckTeamNameRequest implements ICheckTeamNameRequest {

            /**
             * Constructs a new CheckTeamNameRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ICheckTeamNameRequest);

            /** CheckTeamNameRequest teamName. */
            public teamName: string;

            /**
             * Creates a new CheckTeamNameRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CheckTeamNameRequest instance
             */
            public static create(properties?: v388.protobuf.ICheckTeamNameRequest): v388.protobuf.CheckTeamNameRequest;

            /**
             * Encodes the specified CheckTeamNameRequest message. Does not implicitly {@link v388.protobuf.CheckTeamNameRequest.verify|verify} messages.
             * @param message CheckTeamNameRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ICheckTeamNameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CheckTeamNameRequest message, length delimited. Does not implicitly {@link v388.protobuf.CheckTeamNameRequest.verify|verify} messages.
             * @param message CheckTeamNameRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ICheckTeamNameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CheckTeamNameRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CheckTeamNameRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.CheckTeamNameRequest;

            /**
             * Decodes a CheckTeamNameRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CheckTeamNameRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.CheckTeamNameRequest;

            /**
             * Verifies a CheckTeamNameRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CheckTeamNameRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CheckTeamNameRequest
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.CheckTeamNameRequest;

            /**
             * Creates a plain object from a CheckTeamNameRequest message. Also converts values to other types if specified.
             * @param message CheckTeamNameRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.CheckTeamNameRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CheckTeamNameRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CheckTeamNameRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CheckTeamNameResponse. */
        interface ICheckTeamNameResponse {

            /** CheckTeamNameResponse error */
            error: v388.protobuf.ErrorCode;
        }

        /** Represents a CheckTeamNameResponse. */
        class CheckTeamNameResponse implements ICheckTeamNameResponse {

            /**
             * Constructs a new CheckTeamNameResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ICheckTeamNameResponse);

            /** CheckTeamNameResponse error. */
            public error: v388.protobuf.ErrorCode;

            /**
             * Creates a new CheckTeamNameResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CheckTeamNameResponse instance
             */
            public static create(properties?: v388.protobuf.ICheckTeamNameResponse): v388.protobuf.CheckTeamNameResponse;

            /**
             * Encodes the specified CheckTeamNameResponse message. Does not implicitly {@link v388.protobuf.CheckTeamNameResponse.verify|verify} messages.
             * @param message CheckTeamNameResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ICheckTeamNameResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CheckTeamNameResponse message, length delimited. Does not implicitly {@link v388.protobuf.CheckTeamNameResponse.verify|verify} messages.
             * @param message CheckTeamNameResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ICheckTeamNameResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CheckTeamNameResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CheckTeamNameResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.CheckTeamNameResponse;

            /**
             * Decodes a CheckTeamNameResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CheckTeamNameResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.CheckTeamNameResponse;

            /**
             * Verifies a CheckTeamNameResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CheckTeamNameResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CheckTeamNameResponse
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.CheckTeamNameResponse;

            /**
             * Creates a plain object from a CheckTeamNameResponse message. Also converts values to other types if specified.
             * @param message CheckTeamNameResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.CheckTeamNameResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CheckTeamNameResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CheckTeamNameResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CreateTeamRequest. */
        interface ICreateTeamRequest {

            /** CreateTeamRequest userId */
            userId: number;

            /** CreateTeamRequest teamName */
            teamName: string;

            /** CreateTeamRequest timestamp */
            timestamp: number;
        }

        /** Represents a CreateTeamRequest. */
        class CreateTeamRequest implements ICreateTeamRequest {

            /**
             * Constructs a new CreateTeamRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ICreateTeamRequest);

            /** CreateTeamRequest userId. */
            public userId: number;

            /** CreateTeamRequest teamName. */
            public teamName: string;

            /** CreateTeamRequest timestamp. */
            public timestamp: number;

            /**
             * Creates a new CreateTeamRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateTeamRequest instance
             */
            public static create(properties?: v388.protobuf.ICreateTeamRequest): v388.protobuf.CreateTeamRequest;

            /**
             * Encodes the specified CreateTeamRequest message. Does not implicitly {@link v388.protobuf.CreateTeamRequest.verify|verify} messages.
             * @param message CreateTeamRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ICreateTeamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateTeamRequest message, length delimited. Does not implicitly {@link v388.protobuf.CreateTeamRequest.verify|verify} messages.
             * @param message CreateTeamRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ICreateTeamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateTeamRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateTeamRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.CreateTeamRequest;

            /**
             * Decodes a CreateTeamRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateTeamRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.CreateTeamRequest;

            /**
             * Verifies a CreateTeamRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateTeamRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateTeamRequest
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.CreateTeamRequest;

            /**
             * Creates a plain object from a CreateTeamRequest message. Also converts values to other types if specified.
             * @param message CreateTeamRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.CreateTeamRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateTeamRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CreateTeamRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CreateTeamResponse. */
        interface ICreateTeamResponse {

            /** CreateTeamResponse error */
            error: v388.protobuf.ErrorCode;
        }

        /** Represents a CreateTeamResponse. */
        class CreateTeamResponse implements ICreateTeamResponse {

            /**
             * Constructs a new CreateTeamResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ICreateTeamResponse);

            /** CreateTeamResponse error. */
            public error: v388.protobuf.ErrorCode;

            /**
             * Creates a new CreateTeamResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateTeamResponse instance
             */
            public static create(properties?: v388.protobuf.ICreateTeamResponse): v388.protobuf.CreateTeamResponse;

            /**
             * Encodes the specified CreateTeamResponse message. Does not implicitly {@link v388.protobuf.CreateTeamResponse.verify|verify} messages.
             * @param message CreateTeamResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ICreateTeamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateTeamResponse message, length delimited. Does not implicitly {@link v388.protobuf.CreateTeamResponse.verify|verify} messages.
             * @param message CreateTeamResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ICreateTeamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateTeamResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateTeamResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.CreateTeamResponse;

            /**
             * Decodes a CreateTeamResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateTeamResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.CreateTeamResponse;

            /**
             * Verifies a CreateTeamResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateTeamResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateTeamResponse
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.CreateTeamResponse;

            /**
             * Creates a plain object from a CreateTeamResponse message. Also converts values to other types if specified.
             * @param message CreateTeamResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.CreateTeamResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateTeamResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CreateTeamResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SearchTeamRequest. */
        interface ISearchTeamRequest {

            /** SearchTeamRequest name */
            name?: (string|null);

            /** SearchTeamRequest placeId */
            placeId?: (string|null);
        }

        /** Represents a SearchTeamRequest. */
        class SearchTeamRequest implements ISearchTeamRequest {

            /**
             * Constructs a new SearchTeamRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ISearchTeamRequest);

            /** SearchTeamRequest name. */
            public name: string;

            /** SearchTeamRequest placeId. */
            public placeId: string;

            /**
             * Creates a new SearchTeamRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SearchTeamRequest instance
             */
            public static create(properties?: v388.protobuf.ISearchTeamRequest): v388.protobuf.SearchTeamRequest;

            /**
             * Encodes the specified SearchTeamRequest message. Does not implicitly {@link v388.protobuf.SearchTeamRequest.verify|verify} messages.
             * @param message SearchTeamRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ISearchTeamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SearchTeamRequest message, length delimited. Does not implicitly {@link v388.protobuf.SearchTeamRequest.verify|verify} messages.
             * @param message SearchTeamRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ISearchTeamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SearchTeamRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SearchTeamRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.SearchTeamRequest;

            /**
             * Decodes a SearchTeamRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SearchTeamRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.SearchTeamRequest;

            /**
             * Verifies a SearchTeamRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SearchTeamRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SearchTeamRequest
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.SearchTeamRequest;

            /**
             * Creates a plain object from a SearchTeamRequest message. Also converts values to other types if specified.
             * @param message SearchTeamRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.SearchTeamRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SearchTeamRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SearchTeamRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SearchTeamResponse. */
        interface ISearchTeamResponse {

            /** SearchTeamResponse error */
            error: v388.protobuf.ErrorCode;

            /** SearchTeamResponse teams */
            teams?: (v388.protobuf.ITeam[]|null);

            /** SearchTeamResponse nameMatchedTeam */
            nameMatchedTeam?: (v388.protobuf.ITeam|null);
        }

        /** Represents a SearchTeamResponse. */
        class SearchTeamResponse implements ISearchTeamResponse {

            /**
             * Constructs a new SearchTeamResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ISearchTeamResponse);

            /** SearchTeamResponse error. */
            public error: v388.protobuf.ErrorCode;

            /** SearchTeamResponse teams. */
            public teams: v388.protobuf.ITeam[];

            /** SearchTeamResponse nameMatchedTeam. */
            public nameMatchedTeam?: (v388.protobuf.ITeam|null);

            /**
             * Creates a new SearchTeamResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SearchTeamResponse instance
             */
            public static create(properties?: v388.protobuf.ISearchTeamResponse): v388.protobuf.SearchTeamResponse;

            /**
             * Encodes the specified SearchTeamResponse message. Does not implicitly {@link v388.protobuf.SearchTeamResponse.verify|verify} messages.
             * @param message SearchTeamResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ISearchTeamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SearchTeamResponse message, length delimited. Does not implicitly {@link v388.protobuf.SearchTeamResponse.verify|verify} messages.
             * @param message SearchTeamResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ISearchTeamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SearchTeamResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SearchTeamResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.SearchTeamResponse;

            /**
             * Decodes a SearchTeamResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SearchTeamResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.SearchTeamResponse;

            /**
             * Verifies a SearchTeamResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SearchTeamResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SearchTeamResponse
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.SearchTeamResponse;

            /**
             * Creates a plain object from a SearchTeamResponse message. Also converts values to other types if specified.
             * @param message SearchTeamResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.SearchTeamResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SearchTeamResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SearchTeamResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a JoinTeamRequest. */
        interface IJoinTeamRequest {

            /** JoinTeamRequest userId */
            userId: number;

            /** JoinTeamRequest teamId */
            teamId: number;
        }

        /** Represents a JoinTeamRequest. */
        class JoinTeamRequest implements IJoinTeamRequest {

            /**
             * Constructs a new JoinTeamRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IJoinTeamRequest);

            /** JoinTeamRequest userId. */
            public userId: number;

            /** JoinTeamRequest teamId. */
            public teamId: number;

            /**
             * Creates a new JoinTeamRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JoinTeamRequest instance
             */
            public static create(properties?: v388.protobuf.IJoinTeamRequest): v388.protobuf.JoinTeamRequest;

            /**
             * Encodes the specified JoinTeamRequest message. Does not implicitly {@link v388.protobuf.JoinTeamRequest.verify|verify} messages.
             * @param message JoinTeamRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IJoinTeamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JoinTeamRequest message, length delimited. Does not implicitly {@link v388.protobuf.JoinTeamRequest.verify|verify} messages.
             * @param message JoinTeamRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IJoinTeamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JoinTeamRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JoinTeamRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.JoinTeamRequest;

            /**
             * Decodes a JoinTeamRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JoinTeamRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.JoinTeamRequest;

            /**
             * Verifies a JoinTeamRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JoinTeamRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JoinTeamRequest
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.JoinTeamRequest;

            /**
             * Creates a plain object from a JoinTeamRequest message. Also converts values to other types if specified.
             * @param message JoinTeamRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.JoinTeamRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JoinTeamRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for JoinTeamRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a JoinTeamResponse. */
        interface IJoinTeamResponse {

            /** JoinTeamResponse error */
            error: v388.protobuf.ErrorCode;
        }

        /** Represents a JoinTeamResponse. */
        class JoinTeamResponse implements IJoinTeamResponse {

            /**
             * Constructs a new JoinTeamResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IJoinTeamResponse);

            /** JoinTeamResponse error. */
            public error: v388.protobuf.ErrorCode;

            /**
             * Creates a new JoinTeamResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JoinTeamResponse instance
             */
            public static create(properties?: v388.protobuf.IJoinTeamResponse): v388.protobuf.JoinTeamResponse;

            /**
             * Encodes the specified JoinTeamResponse message. Does not implicitly {@link v388.protobuf.JoinTeamResponse.verify|verify} messages.
             * @param message JoinTeamResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IJoinTeamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JoinTeamResponse message, length delimited. Does not implicitly {@link v388.protobuf.JoinTeamResponse.verify|verify} messages.
             * @param message JoinTeamResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IJoinTeamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JoinTeamResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JoinTeamResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.JoinTeamResponse;

            /**
             * Decodes a JoinTeamResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JoinTeamResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.JoinTeamResponse;

            /**
             * Verifies a JoinTeamResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JoinTeamResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JoinTeamResponse
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.JoinTeamResponse;

            /**
             * Creates a plain object from a JoinTeamResponse message. Also converts values to other types if specified.
             * @param message JoinTeamResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.JoinTeamResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JoinTeamResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for JoinTeamResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an ApproveTeamApplicantsRequest. */
        interface IApproveTeamApplicantsRequest {

            /** ApproveTeamApplicantsRequest userId */
            userId: number;

            /** ApproveTeamApplicantsRequest approvedUsers */
            approvedUsers?: (number[]|null);

            /** ApproveTeamApplicantsRequest rejectedUsers */
            rejectedUsers?: (number[]|null);
        }

        /** Represents an ApproveTeamApplicantsRequest. */
        class ApproveTeamApplicantsRequest implements IApproveTeamApplicantsRequest {

            /**
             * Constructs a new ApproveTeamApplicantsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IApproveTeamApplicantsRequest);

            /** ApproveTeamApplicantsRequest userId. */
            public userId: number;

            /** ApproveTeamApplicantsRequest approvedUsers. */
            public approvedUsers: number[];

            /** ApproveTeamApplicantsRequest rejectedUsers. */
            public rejectedUsers: number[];

            /**
             * Creates a new ApproveTeamApplicantsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ApproveTeamApplicantsRequest instance
             */
            public static create(properties?: v388.protobuf.IApproveTeamApplicantsRequest): v388.protobuf.ApproveTeamApplicantsRequest;

            /**
             * Encodes the specified ApproveTeamApplicantsRequest message. Does not implicitly {@link v388.protobuf.ApproveTeamApplicantsRequest.verify|verify} messages.
             * @param message ApproveTeamApplicantsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IApproveTeamApplicantsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ApproveTeamApplicantsRequest message, length delimited. Does not implicitly {@link v388.protobuf.ApproveTeamApplicantsRequest.verify|verify} messages.
             * @param message ApproveTeamApplicantsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IApproveTeamApplicantsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ApproveTeamApplicantsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ApproveTeamApplicantsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.ApproveTeamApplicantsRequest;

            /**
             * Decodes an ApproveTeamApplicantsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ApproveTeamApplicantsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.ApproveTeamApplicantsRequest;

            /**
             * Verifies an ApproveTeamApplicantsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ApproveTeamApplicantsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ApproveTeamApplicantsRequest
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.ApproveTeamApplicantsRequest;

            /**
             * Creates a plain object from an ApproveTeamApplicantsRequest message. Also converts values to other types if specified.
             * @param message ApproveTeamApplicantsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.ApproveTeamApplicantsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ApproveTeamApplicantsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ApproveTeamApplicantsRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an ApproveTeamApplicantsResponse. */
        interface IApproveTeamApplicantsResponse {

            /** ApproveTeamApplicantsResponse error */
            error: v388.protobuf.ErrorCode;

            /** ApproveTeamApplicantsResponse numOfMembers */
            numOfMembers: number;

            /** ApproveTeamApplicantsResponse numOfMemberCars */
            numOfMemberCars: number;

            /** ApproveTeamApplicantsResponse numOfApplicants */
            numOfApplicants: number;
        }

        /** Represents an ApproveTeamApplicantsResponse. */
        class ApproveTeamApplicantsResponse implements IApproveTeamApplicantsResponse {

            /**
             * Constructs a new ApproveTeamApplicantsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IApproveTeamApplicantsResponse);

            /** ApproveTeamApplicantsResponse error. */
            public error: v388.protobuf.ErrorCode;

            /** ApproveTeamApplicantsResponse numOfMembers. */
            public numOfMembers: number;

            /** ApproveTeamApplicantsResponse numOfMemberCars. */
            public numOfMemberCars: number;

            /** ApproveTeamApplicantsResponse numOfApplicants. */
            public numOfApplicants: number;

            /**
             * Creates a new ApproveTeamApplicantsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ApproveTeamApplicantsResponse instance
             */
            public static create(properties?: v388.protobuf.IApproveTeamApplicantsResponse): v388.protobuf.ApproveTeamApplicantsResponse;

            /**
             * Encodes the specified ApproveTeamApplicantsResponse message. Does not implicitly {@link v388.protobuf.ApproveTeamApplicantsResponse.verify|verify} messages.
             * @param message ApproveTeamApplicantsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IApproveTeamApplicantsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ApproveTeamApplicantsResponse message, length delimited. Does not implicitly {@link v388.protobuf.ApproveTeamApplicantsResponse.verify|verify} messages.
             * @param message ApproveTeamApplicantsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IApproveTeamApplicantsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ApproveTeamApplicantsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ApproveTeamApplicantsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.ApproveTeamApplicantsResponse;

            /**
             * Decodes an ApproveTeamApplicantsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ApproveTeamApplicantsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.ApproveTeamApplicantsResponse;

            /**
             * Verifies an ApproveTeamApplicantsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ApproveTeamApplicantsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ApproveTeamApplicantsResponse
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.ApproveTeamApplicantsResponse;

            /**
             * Creates a plain object from an ApproveTeamApplicantsResponse message. Also converts values to other types if specified.
             * @param message ApproveTeamApplicantsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.ApproveTeamApplicantsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ApproveTeamApplicantsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ApproveTeamApplicantsResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LeaveTeamRequest. */
        interface ILeaveTeamRequest {

            /** LeaveTeamRequest userId */
            userId: number;
        }

        /** Represents a LeaveTeamRequest. */
        class LeaveTeamRequest implements ILeaveTeamRequest {

            /**
             * Constructs a new LeaveTeamRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ILeaveTeamRequest);

            /** LeaveTeamRequest userId. */
            public userId: number;

            /**
             * Creates a new LeaveTeamRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LeaveTeamRequest instance
             */
            public static create(properties?: v388.protobuf.ILeaveTeamRequest): v388.protobuf.LeaveTeamRequest;

            /**
             * Encodes the specified LeaveTeamRequest message. Does not implicitly {@link v388.protobuf.LeaveTeamRequest.verify|verify} messages.
             * @param message LeaveTeamRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ILeaveTeamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LeaveTeamRequest message, length delimited. Does not implicitly {@link v388.protobuf.LeaveTeamRequest.verify|verify} messages.
             * @param message LeaveTeamRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ILeaveTeamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LeaveTeamRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LeaveTeamRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.LeaveTeamRequest;

            /**
             * Decodes a LeaveTeamRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LeaveTeamRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.LeaveTeamRequest;

            /**
             * Verifies a LeaveTeamRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LeaveTeamRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LeaveTeamRequest
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.LeaveTeamRequest;

            /**
             * Creates a plain object from a LeaveTeamRequest message. Also converts values to other types if specified.
             * @param message LeaveTeamRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.LeaveTeamRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LeaveTeamRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LeaveTeamRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LeaveTeamResponse. */
        interface ILeaveTeamResponse {

            /** LeaveTeamResponse error */
            error: v388.protobuf.ErrorCode;
        }

        /** Represents a LeaveTeamResponse. */
        class LeaveTeamResponse implements ILeaveTeamResponse {

            /**
             * Constructs a new LeaveTeamResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ILeaveTeamResponse);

            /** LeaveTeamResponse error. */
            public error: v388.protobuf.ErrorCode;

            /**
             * Creates a new LeaveTeamResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LeaveTeamResponse instance
             */
            public static create(properties?: v388.protobuf.ILeaveTeamResponse): v388.protobuf.LeaveTeamResponse;

            /**
             * Encodes the specified LeaveTeamResponse message. Does not implicitly {@link v388.protobuf.LeaveTeamResponse.verify|verify} messages.
             * @param message LeaveTeamResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ILeaveTeamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LeaveTeamResponse message, length delimited. Does not implicitly {@link v388.protobuf.LeaveTeamResponse.verify|verify} messages.
             * @param message LeaveTeamResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ILeaveTeamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LeaveTeamResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LeaveTeamResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.LeaveTeamResponse;

            /**
             * Decodes a LeaveTeamResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LeaveTeamResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.LeaveTeamResponse;

            /**
             * Verifies a LeaveTeamResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LeaveTeamResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LeaveTeamResponse
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.LeaveTeamResponse;

            /**
             * Creates a plain object from a LeaveTeamResponse message. Also converts values to other types if specified.
             * @param message LeaveTeamResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.LeaveTeamResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LeaveTeamResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LeaveTeamResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DissolveTeamRequest. */
        interface IDissolveTeamRequest {

            /** DissolveTeamRequest userId */
            userId: number;
        }

        /** Represents a DissolveTeamRequest. */
        class DissolveTeamRequest implements IDissolveTeamRequest {

            /**
             * Constructs a new DissolveTeamRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IDissolveTeamRequest);

            /** DissolveTeamRequest userId. */
            public userId: number;

            /**
             * Creates a new DissolveTeamRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DissolveTeamRequest instance
             */
            public static create(properties?: v388.protobuf.IDissolveTeamRequest): v388.protobuf.DissolveTeamRequest;

            /**
             * Encodes the specified DissolveTeamRequest message. Does not implicitly {@link v388.protobuf.DissolveTeamRequest.verify|verify} messages.
             * @param message DissolveTeamRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IDissolveTeamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DissolveTeamRequest message, length delimited. Does not implicitly {@link v388.protobuf.DissolveTeamRequest.verify|verify} messages.
             * @param message DissolveTeamRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IDissolveTeamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DissolveTeamRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DissolveTeamRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.DissolveTeamRequest;

            /**
             * Decodes a DissolveTeamRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DissolveTeamRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.DissolveTeamRequest;

            /**
             * Verifies a DissolveTeamRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DissolveTeamRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DissolveTeamRequest
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.DissolveTeamRequest;

            /**
             * Creates a plain object from a DissolveTeamRequest message. Also converts values to other types if specified.
             * @param message DissolveTeamRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.DissolveTeamRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DissolveTeamRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DissolveTeamRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DissolveTeamResponse. */
        interface IDissolveTeamResponse {

            /** DissolveTeamResponse error */
            error: v388.protobuf.ErrorCode;
        }

        /** Represents a DissolveTeamResponse. */
        class DissolveTeamResponse implements IDissolveTeamResponse {

            /**
             * Constructs a new DissolveTeamResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IDissolveTeamResponse);

            /** DissolveTeamResponse error. */
            public error: v388.protobuf.ErrorCode;

            /**
             * Creates a new DissolveTeamResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DissolveTeamResponse instance
             */
            public static create(properties?: v388.protobuf.IDissolveTeamResponse): v388.protobuf.DissolveTeamResponse;

            /**
             * Encodes the specified DissolveTeamResponse message. Does not implicitly {@link v388.protobuf.DissolveTeamResponse.verify|verify} messages.
             * @param message DissolveTeamResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IDissolveTeamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DissolveTeamResponse message, length delimited. Does not implicitly {@link v388.protobuf.DissolveTeamResponse.verify|verify} messages.
             * @param message DissolveTeamResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IDissolveTeamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DissolveTeamResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DissolveTeamResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.DissolveTeamResponse;

            /**
             * Decodes a DissolveTeamResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DissolveTeamResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.DissolveTeamResponse;

            /**
             * Verifies a DissolveTeamResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DissolveTeamResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DissolveTeamResponse
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.DissolveTeamResponse;

            /**
             * Creates a plain object from a DissolveTeamResponse message. Also converts values to other types if specified.
             * @param message DissolveTeamResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.DissolveTeamResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DissolveTeamResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DissolveTeamResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadTeamMembersRequest. */
        interface ILoadTeamMembersRequest {

            /** LoadTeamMembersRequest teamId */
            teamId: number;
        }

        /** Represents a LoadTeamMembersRequest. */
        class LoadTeamMembersRequest implements ILoadTeamMembersRequest {

            /**
             * Constructs a new LoadTeamMembersRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ILoadTeamMembersRequest);

            /** LoadTeamMembersRequest teamId. */
            public teamId: number;

            /**
             * Creates a new LoadTeamMembersRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadTeamMembersRequest instance
             */
            public static create(properties?: v388.protobuf.ILoadTeamMembersRequest): v388.protobuf.LoadTeamMembersRequest;

            /**
             * Encodes the specified LoadTeamMembersRequest message. Does not implicitly {@link v388.protobuf.LoadTeamMembersRequest.verify|verify} messages.
             * @param message LoadTeamMembersRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ILoadTeamMembersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadTeamMembersRequest message, length delimited. Does not implicitly {@link v388.protobuf.LoadTeamMembersRequest.verify|verify} messages.
             * @param message LoadTeamMembersRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ILoadTeamMembersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadTeamMembersRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadTeamMembersRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.LoadTeamMembersRequest;

            /**
             * Decodes a LoadTeamMembersRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadTeamMembersRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.LoadTeamMembersRequest;

            /**
             * Verifies a LoadTeamMembersRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadTeamMembersRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadTeamMembersRequest
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.LoadTeamMembersRequest;

            /**
             * Creates a plain object from a LoadTeamMembersRequest message. Also converts values to other types if specified.
             * @param message LoadTeamMembersRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.LoadTeamMembersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadTeamMembersRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadTeamMembersRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadTeamMembersResponse. */
        interface ILoadTeamMembersResponse {

            /** LoadTeamMembersResponse error */
            error: v388.protobuf.ErrorCode;

            /** LoadTeamMembersResponse team */
            team?: (v388.protobuf.ITeam|null);

            /** LoadTeamMembersResponse members */
            members?: (v388.protobuf.ITeamMember[]|null);
        }

        /** Represents a LoadTeamMembersResponse. */
        class LoadTeamMembersResponse implements ILoadTeamMembersResponse {

            /**
             * Constructs a new LoadTeamMembersResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ILoadTeamMembersResponse);

            /** LoadTeamMembersResponse error. */
            public error: v388.protobuf.ErrorCode;

            /** LoadTeamMembersResponse team. */
            public team?: (v388.protobuf.ITeam|null);

            /** LoadTeamMembersResponse members. */
            public members: v388.protobuf.ITeamMember[];

            /**
             * Creates a new LoadTeamMembersResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadTeamMembersResponse instance
             */
            public static create(properties?: v388.protobuf.ILoadTeamMembersResponse): v388.protobuf.LoadTeamMembersResponse;

            /**
             * Encodes the specified LoadTeamMembersResponse message. Does not implicitly {@link v388.protobuf.LoadTeamMembersResponse.verify|verify} messages.
             * @param message LoadTeamMembersResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ILoadTeamMembersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadTeamMembersResponse message, length delimited. Does not implicitly {@link v388.protobuf.LoadTeamMembersResponse.verify|verify} messages.
             * @param message LoadTeamMembersResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ILoadTeamMembersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadTeamMembersResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadTeamMembersResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.LoadTeamMembersResponse;

            /**
             * Decodes a LoadTeamMembersResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadTeamMembersResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.LoadTeamMembersResponse;

            /**
             * Verifies a LoadTeamMembersResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadTeamMembersResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadTeamMembersResponse
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.LoadTeamMembersResponse;

            /**
             * Creates a plain object from a LoadTeamMembersResponse message. Also converts values to other types if specified.
             * @param message LoadTeamMembersResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.LoadTeamMembersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadTeamMembersResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadTeamMembersResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadTeamApplicantsRequest. */
        interface ILoadTeamApplicantsRequest {

            /** LoadTeamApplicantsRequest teamId */
            teamId: number;
        }

        /** Represents a LoadTeamApplicantsRequest. */
        class LoadTeamApplicantsRequest implements ILoadTeamApplicantsRequest {

            /**
             * Constructs a new LoadTeamApplicantsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ILoadTeamApplicantsRequest);

            /** LoadTeamApplicantsRequest teamId. */
            public teamId: number;

            /**
             * Creates a new LoadTeamApplicantsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadTeamApplicantsRequest instance
             */
            public static create(properties?: v388.protobuf.ILoadTeamApplicantsRequest): v388.protobuf.LoadTeamApplicantsRequest;

            /**
             * Encodes the specified LoadTeamApplicantsRequest message. Does not implicitly {@link v388.protobuf.LoadTeamApplicantsRequest.verify|verify} messages.
             * @param message LoadTeamApplicantsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ILoadTeamApplicantsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadTeamApplicantsRequest message, length delimited. Does not implicitly {@link v388.protobuf.LoadTeamApplicantsRequest.verify|verify} messages.
             * @param message LoadTeamApplicantsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ILoadTeamApplicantsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadTeamApplicantsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadTeamApplicantsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.LoadTeamApplicantsRequest;

            /**
             * Decodes a LoadTeamApplicantsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadTeamApplicantsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.LoadTeamApplicantsRequest;

            /**
             * Verifies a LoadTeamApplicantsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadTeamApplicantsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadTeamApplicantsRequest
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.LoadTeamApplicantsRequest;

            /**
             * Creates a plain object from a LoadTeamApplicantsRequest message. Also converts values to other types if specified.
             * @param message LoadTeamApplicantsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.LoadTeamApplicantsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadTeamApplicantsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadTeamApplicantsRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadTeamApplicantsResponse. */
        interface ILoadTeamApplicantsResponse {

            /** LoadTeamApplicantsResponse error */
            error: v388.protobuf.ErrorCode;

            /** LoadTeamApplicantsResponse applicants */
            applicants?: (v388.protobuf.ITeamApplicant[]|null);
        }

        /** Represents a LoadTeamApplicantsResponse. */
        class LoadTeamApplicantsResponse implements ILoadTeamApplicantsResponse {

            /**
             * Constructs a new LoadTeamApplicantsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ILoadTeamApplicantsResponse);

            /** LoadTeamApplicantsResponse error. */
            public error: v388.protobuf.ErrorCode;

            /** LoadTeamApplicantsResponse applicants. */
            public applicants: v388.protobuf.ITeamApplicant[];

            /**
             * Creates a new LoadTeamApplicantsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadTeamApplicantsResponse instance
             */
            public static create(properties?: v388.protobuf.ILoadTeamApplicantsResponse): v388.protobuf.LoadTeamApplicantsResponse;

            /**
             * Encodes the specified LoadTeamApplicantsResponse message. Does not implicitly {@link v388.protobuf.LoadTeamApplicantsResponse.verify|verify} messages.
             * @param message LoadTeamApplicantsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ILoadTeamApplicantsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadTeamApplicantsResponse message, length delimited. Does not implicitly {@link v388.protobuf.LoadTeamApplicantsResponse.verify|verify} messages.
             * @param message LoadTeamApplicantsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ILoadTeamApplicantsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadTeamApplicantsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadTeamApplicantsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.LoadTeamApplicantsResponse;

            /**
             * Decodes a LoadTeamApplicantsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadTeamApplicantsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.LoadTeamApplicantsResponse;

            /**
             * Verifies a LoadTeamApplicantsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadTeamApplicantsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadTeamApplicantsResponse
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.LoadTeamApplicantsResponse;

            /**
             * Creates a plain object from a LoadTeamApplicantsResponse message. Also converts values to other types if specified.
             * @param message LoadTeamApplicantsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.LoadTeamApplicantsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadTeamApplicantsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadTeamApplicantsResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an UpdateTeamStickersRequest. */
        interface IUpdateTeamStickersRequest {

            /** UpdateTeamStickersRequest userId */
            userId: number;

            /** UpdateTeamStickersRequest timestamp */
            timestamp: number;
        }

        /** Represents an UpdateTeamStickersRequest. */
        class UpdateTeamStickersRequest implements IUpdateTeamStickersRequest {

            /**
             * Constructs a new UpdateTeamStickersRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IUpdateTeamStickersRequest);

            /** UpdateTeamStickersRequest userId. */
            public userId: number;

            /** UpdateTeamStickersRequest timestamp. */
            public timestamp: number;

            /**
             * Creates a new UpdateTeamStickersRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateTeamStickersRequest instance
             */
            public static create(properties?: v388.protobuf.IUpdateTeamStickersRequest): v388.protobuf.UpdateTeamStickersRequest;

            /**
             * Encodes the specified UpdateTeamStickersRequest message. Does not implicitly {@link v388.protobuf.UpdateTeamStickersRequest.verify|verify} messages.
             * @param message UpdateTeamStickersRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IUpdateTeamStickersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateTeamStickersRequest message, length delimited. Does not implicitly {@link v388.protobuf.UpdateTeamStickersRequest.verify|verify} messages.
             * @param message UpdateTeamStickersRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IUpdateTeamStickersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateTeamStickersRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdateTeamStickersRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.UpdateTeamStickersRequest;

            /**
             * Decodes an UpdateTeamStickersRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateTeamStickersRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.UpdateTeamStickersRequest;

            /**
             * Verifies an UpdateTeamStickersRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdateTeamStickersRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpdateTeamStickersRequest
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.UpdateTeamStickersRequest;

            /**
             * Creates a plain object from an UpdateTeamStickersRequest message. Also converts values to other types if specified.
             * @param message UpdateTeamStickersRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.UpdateTeamStickersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateTeamStickersRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UpdateTeamStickersRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an UpdateTeamStickersResponse. */
        interface IUpdateTeamStickersResponse {

            /** UpdateTeamStickersResponse error */
            error: v388.protobuf.ErrorCode;

            /** UpdateTeamStickersResponse earnedStickers */
            earnedStickers?: (v388.protobuf.ITeamSticker[]|null);

            /** UpdateTeamStickersResponse teamStickers */
            teamStickers?: (v388.protobuf.ITeamSticker[]|null);

            /** UpdateTeamStickersResponse numOfEarnedStickersBefore */
            numOfEarnedStickersBefore: number;

            /** UpdateTeamStickersResponse numOfEarnedStickersAfter */
            numOfEarnedStickersAfter: number;

            /** UpdateTeamStickersResponse numOfEarnedStickersToday */
            numOfEarnedStickersToday: number;

            /** UpdateTeamStickersResponse notice */
            notice?: (v388.protobuf.UpdateTeamStickersResponse.IPrizeNotice|null);
        }

        /** Represents an UpdateTeamStickersResponse. */
        class UpdateTeamStickersResponse implements IUpdateTeamStickersResponse {

            /**
             * Constructs a new UpdateTeamStickersResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IUpdateTeamStickersResponse);

            /** UpdateTeamStickersResponse error. */
            public error: v388.protobuf.ErrorCode;

            /** UpdateTeamStickersResponse earnedStickers. */
            public earnedStickers: v388.protobuf.ITeamSticker[];

            /** UpdateTeamStickersResponse teamStickers. */
            public teamStickers: v388.protobuf.ITeamSticker[];

            /** UpdateTeamStickersResponse numOfEarnedStickersBefore. */
            public numOfEarnedStickersBefore: number;

            /** UpdateTeamStickersResponse numOfEarnedStickersAfter. */
            public numOfEarnedStickersAfter: number;

            /** UpdateTeamStickersResponse numOfEarnedStickersToday. */
            public numOfEarnedStickersToday: number;

            /** UpdateTeamStickersResponse notice. */
            public notice?: (v388.protobuf.UpdateTeamStickersResponse.IPrizeNotice|null);

            /**
             * Creates a new UpdateTeamStickersResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateTeamStickersResponse instance
             */
            public static create(properties?: v388.protobuf.IUpdateTeamStickersResponse): v388.protobuf.UpdateTeamStickersResponse;

            /**
             * Encodes the specified UpdateTeamStickersResponse message. Does not implicitly {@link v388.protobuf.UpdateTeamStickersResponse.verify|verify} messages.
             * @param message UpdateTeamStickersResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IUpdateTeamStickersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateTeamStickersResponse message, length delimited. Does not implicitly {@link v388.protobuf.UpdateTeamStickersResponse.verify|verify} messages.
             * @param message UpdateTeamStickersResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IUpdateTeamStickersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateTeamStickersResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdateTeamStickersResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.UpdateTeamStickersResponse;

            /**
             * Decodes an UpdateTeamStickersResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateTeamStickersResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.UpdateTeamStickersResponse;

            /**
             * Verifies an UpdateTeamStickersResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdateTeamStickersResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpdateTeamStickersResponse
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.UpdateTeamStickersResponse;

            /**
             * Creates a plain object from an UpdateTeamStickersResponse message. Also converts values to other types if specified.
             * @param message UpdateTeamStickersResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.UpdateTeamStickersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateTeamStickersResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UpdateTeamStickersResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace UpdateTeamStickersResponse {

            /** Properties of a PrizeNotice. */
            interface IPrizeNotice {

                /** PrizeNotice name */
                name: string;

                /** PrizeNotice number */
                number: number;
            }

            /** Represents a PrizeNotice. */
            class PrizeNotice implements IPrizeNotice {

                /**
                 * Constructs a new PrizeNotice.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: v388.protobuf.UpdateTeamStickersResponse.IPrizeNotice);

                /** PrizeNotice name. */
                public name: string;

                /** PrizeNotice number. */
                public number: number;

                /**
                 * Creates a new PrizeNotice instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PrizeNotice instance
                 */
                public static create(properties?: v388.protobuf.UpdateTeamStickersResponse.IPrizeNotice): v388.protobuf.UpdateTeamStickersResponse.PrizeNotice;

                /**
                 * Encodes the specified PrizeNotice message. Does not implicitly {@link v388.protobuf.UpdateTeamStickersResponse.PrizeNotice.verify|verify} messages.
                 * @param message PrizeNotice message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: v388.protobuf.UpdateTeamStickersResponse.IPrizeNotice, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PrizeNotice message, length delimited. Does not implicitly {@link v388.protobuf.UpdateTeamStickersResponse.PrizeNotice.verify|verify} messages.
                 * @param message PrizeNotice message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: v388.protobuf.UpdateTeamStickersResponse.IPrizeNotice, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PrizeNotice message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PrizeNotice
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.UpdateTeamStickersResponse.PrizeNotice;

                /**
                 * Decodes a PrizeNotice message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PrizeNotice
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.UpdateTeamStickersResponse.PrizeNotice;

                /**
                 * Verifies a PrizeNotice message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PrizeNotice message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PrizeNotice
                 */
                public static fromObject(object: { [k: string]: any }): v388.protobuf.UpdateTeamStickersResponse.PrizeNotice;

                /**
                 * Creates a plain object from a PrizeNotice message. Also converts values to other types if specified.
                 * @param message PrizeNotice
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: v388.protobuf.UpdateTeamStickersResponse.PrizeNotice, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PrizeNotice to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PrizeNotice
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an UpdateTeamRequest. */
        interface IUpdateTeamRequest {

            /** UpdateTeamRequest userId */
            userId: number;

            /** UpdateTeamRequest teamStickerFont */
            teamStickerFont?: (number|null);

            /** UpdateTeamRequest closed */
            closed?: (boolean|null);

            /** UpdateTeamRequest timestamp */
            timestamp: number;
        }

        /** Represents an UpdateTeamRequest. */
        class UpdateTeamRequest implements IUpdateTeamRequest {

            /**
             * Constructs a new UpdateTeamRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IUpdateTeamRequest);

            /** UpdateTeamRequest userId. */
            public userId: number;

            /** UpdateTeamRequest teamStickerFont. */
            public teamStickerFont: number;

            /** UpdateTeamRequest closed. */
            public closed: boolean;

            /** UpdateTeamRequest timestamp. */
            public timestamp: number;

            /**
             * Creates a new UpdateTeamRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateTeamRequest instance
             */
            public static create(properties?: v388.protobuf.IUpdateTeamRequest): v388.protobuf.UpdateTeamRequest;

            /**
             * Encodes the specified UpdateTeamRequest message. Does not implicitly {@link v388.protobuf.UpdateTeamRequest.verify|verify} messages.
             * @param message UpdateTeamRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IUpdateTeamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateTeamRequest message, length delimited. Does not implicitly {@link v388.protobuf.UpdateTeamRequest.verify|verify} messages.
             * @param message UpdateTeamRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IUpdateTeamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateTeamRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdateTeamRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.UpdateTeamRequest;

            /**
             * Decodes an UpdateTeamRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateTeamRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.UpdateTeamRequest;

            /**
             * Verifies an UpdateTeamRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdateTeamRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpdateTeamRequest
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.UpdateTeamRequest;

            /**
             * Creates a plain object from an UpdateTeamRequest message. Also converts values to other types if specified.
             * @param message UpdateTeamRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.UpdateTeamRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateTeamRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UpdateTeamRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an UpdateTeamResponse. */
        interface IUpdateTeamResponse {

            /** UpdateTeamResponse error */
            error: v388.protobuf.ErrorCode;
        }

        /** Represents an UpdateTeamResponse. */
        class UpdateTeamResponse implements IUpdateTeamResponse {

            /**
             * Constructs a new UpdateTeamResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IUpdateTeamResponse);

            /** UpdateTeamResponse error. */
            public error: v388.protobuf.ErrorCode;

            /**
             * Creates a new UpdateTeamResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateTeamResponse instance
             */
            public static create(properties?: v388.protobuf.IUpdateTeamResponse): v388.protobuf.UpdateTeamResponse;

            /**
             * Encodes the specified UpdateTeamResponse message. Does not implicitly {@link v388.protobuf.UpdateTeamResponse.verify|verify} messages.
             * @param message UpdateTeamResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IUpdateTeamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateTeamResponse message, length delimited. Does not implicitly {@link v388.protobuf.UpdateTeamResponse.verify|verify} messages.
             * @param message UpdateTeamResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IUpdateTeamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateTeamResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdateTeamResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.UpdateTeamResponse;

            /**
             * Decodes an UpdateTeamResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateTeamResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.UpdateTeamResponse;

            /**
             * Verifies an UpdateTeamResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdateTeamResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpdateTeamResponse
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.UpdateTeamResponse;

            /**
             * Creates a plain object from an UpdateTeamResponse message. Also converts values to other types if specified.
             * @param message UpdateTeamResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.UpdateTeamResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateTeamResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UpdateTeamResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GrantCarRightRequest. */
        interface IGrantCarRightRequest {

            /** GrantCarRightRequest userId */
            userId: number;

            /** GrantCarRightRequest targetUserId */
            targetUserId: number;

            /** GrantCarRightRequest timestamp */
            timestamp: number;
        }

        /** Represents a GrantCarRightRequest. */
        class GrantCarRightRequest implements IGrantCarRightRequest {

            /**
             * Constructs a new GrantCarRightRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IGrantCarRightRequest);

            /** GrantCarRightRequest userId. */
            public userId: number;

            /** GrantCarRightRequest targetUserId. */
            public targetUserId: number;

            /** GrantCarRightRequest timestamp. */
            public timestamp: number;

            /**
             * Creates a new GrantCarRightRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GrantCarRightRequest instance
             */
            public static create(properties?: v388.protobuf.IGrantCarRightRequest): v388.protobuf.GrantCarRightRequest;

            /**
             * Encodes the specified GrantCarRightRequest message. Does not implicitly {@link v388.protobuf.GrantCarRightRequest.verify|verify} messages.
             * @param message GrantCarRightRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IGrantCarRightRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GrantCarRightRequest message, length delimited. Does not implicitly {@link v388.protobuf.GrantCarRightRequest.verify|verify} messages.
             * @param message GrantCarRightRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IGrantCarRightRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GrantCarRightRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GrantCarRightRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.GrantCarRightRequest;

            /**
             * Decodes a GrantCarRightRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GrantCarRightRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.GrantCarRightRequest;

            /**
             * Verifies a GrantCarRightRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GrantCarRightRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GrantCarRightRequest
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.GrantCarRightRequest;

            /**
             * Creates a plain object from a GrantCarRightRequest message. Also converts values to other types if specified.
             * @param message GrantCarRightRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.GrantCarRightRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GrantCarRightRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GrantCarRightRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GrantCarRightResponse. */
        interface IGrantCarRightResponse {

            /** GrantCarRightResponse error */
            error: v388.protobuf.ErrorCode;
        }

        /** Represents a GrantCarRightResponse. */
        class GrantCarRightResponse implements IGrantCarRightResponse {

            /**
             * Constructs a new GrantCarRightResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IGrantCarRightResponse);

            /** GrantCarRightResponse error. */
            public error: v388.protobuf.ErrorCode;

            /**
             * Creates a new GrantCarRightResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GrantCarRightResponse instance
             */
            public static create(properties?: v388.protobuf.IGrantCarRightResponse): v388.protobuf.GrantCarRightResponse;

            /**
             * Encodes the specified GrantCarRightResponse message. Does not implicitly {@link v388.protobuf.GrantCarRightResponse.verify|verify} messages.
             * @param message GrantCarRightResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IGrantCarRightResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GrantCarRightResponse message, length delimited. Does not implicitly {@link v388.protobuf.GrantCarRightResponse.verify|verify} messages.
             * @param message GrantCarRightResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IGrantCarRightResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GrantCarRightResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GrantCarRightResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.GrantCarRightResponse;

            /**
             * Decodes a GrantCarRightResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GrantCarRightResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.GrantCarRightResponse;

            /**
             * Verifies a GrantCarRightResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GrantCarRightResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GrantCarRightResponse
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.GrantCarRightResponse;

            /**
             * Creates a plain object from a GrantCarRightResponse message. Also converts values to other types if specified.
             * @param message GrantCarRightResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.GrantCarRightResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GrantCarRightResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GrantCarRightResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GetTeamCampaignStatusRequest. */
        interface IGetTeamCampaignStatusRequest {

            /** GetTeamCampaignStatusRequest userId */
            userId: number;
        }

        /** Represents a GetTeamCampaignStatusRequest. */
        class GetTeamCampaignStatusRequest implements IGetTeamCampaignStatusRequest {

            /**
             * Constructs a new GetTeamCampaignStatusRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IGetTeamCampaignStatusRequest);

            /** GetTeamCampaignStatusRequest userId. */
            public userId: number;

            /**
             * Creates a new GetTeamCampaignStatusRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetTeamCampaignStatusRequest instance
             */
            public static create(properties?: v388.protobuf.IGetTeamCampaignStatusRequest): v388.protobuf.GetTeamCampaignStatusRequest;

            /**
             * Encodes the specified GetTeamCampaignStatusRequest message. Does not implicitly {@link v388.protobuf.GetTeamCampaignStatusRequest.verify|verify} messages.
             * @param message GetTeamCampaignStatusRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IGetTeamCampaignStatusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetTeamCampaignStatusRequest message, length delimited. Does not implicitly {@link v388.protobuf.GetTeamCampaignStatusRequest.verify|verify} messages.
             * @param message GetTeamCampaignStatusRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IGetTeamCampaignStatusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetTeamCampaignStatusRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetTeamCampaignStatusRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.GetTeamCampaignStatusRequest;

            /**
             * Decodes a GetTeamCampaignStatusRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetTeamCampaignStatusRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.GetTeamCampaignStatusRequest;

            /**
             * Verifies a GetTeamCampaignStatusRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetTeamCampaignStatusRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetTeamCampaignStatusRequest
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.GetTeamCampaignStatusRequest;

            /**
             * Creates a plain object from a GetTeamCampaignStatusRequest message. Also converts values to other types if specified.
             * @param message GetTeamCampaignStatusRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.GetTeamCampaignStatusRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetTeamCampaignStatusRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GetTeamCampaignStatusRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GetTeamCampaignStatusResponse. */
        interface IGetTeamCampaignStatusResponse {

            /** GetTeamCampaignStatusResponse error */
            error: v388.protobuf.ErrorCode;

            /** GetTeamCampaignStatusResponse applied */
            applied: boolean;

            /** GetTeamCampaignStatusResponse teamName */
            teamName?: (string|null);

            /** GetTeamCampaignStatusResponse numOfApplicants */
            numOfApplicants?: (number|null);
        }

        /** Represents a GetTeamCampaignStatusResponse. */
        class GetTeamCampaignStatusResponse implements IGetTeamCampaignStatusResponse {

            /**
             * Constructs a new GetTeamCampaignStatusResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IGetTeamCampaignStatusResponse);

            /** GetTeamCampaignStatusResponse error. */
            public error: v388.protobuf.ErrorCode;

            /** GetTeamCampaignStatusResponse applied. */
            public applied: boolean;

            /** GetTeamCampaignStatusResponse teamName. */
            public teamName: string;

            /** GetTeamCampaignStatusResponse numOfApplicants. */
            public numOfApplicants: number;

            /**
             * Creates a new GetTeamCampaignStatusResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetTeamCampaignStatusResponse instance
             */
            public static create(properties?: v388.protobuf.IGetTeamCampaignStatusResponse): v388.protobuf.GetTeamCampaignStatusResponse;

            /**
             * Encodes the specified GetTeamCampaignStatusResponse message. Does not implicitly {@link v388.protobuf.GetTeamCampaignStatusResponse.verify|verify} messages.
             * @param message GetTeamCampaignStatusResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IGetTeamCampaignStatusResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetTeamCampaignStatusResponse message, length delimited. Does not implicitly {@link v388.protobuf.GetTeamCampaignStatusResponse.verify|verify} messages.
             * @param message GetTeamCampaignStatusResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IGetTeamCampaignStatusResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetTeamCampaignStatusResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetTeamCampaignStatusResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.GetTeamCampaignStatusResponse;

            /**
             * Decodes a GetTeamCampaignStatusResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetTeamCampaignStatusResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.GetTeamCampaignStatusResponse;

            /**
             * Verifies a GetTeamCampaignStatusResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetTeamCampaignStatusResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetTeamCampaignStatusResponse
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.GetTeamCampaignStatusResponse;

            /**
             * Creates a plain object from a GetTeamCampaignStatusResponse message. Also converts values to other types if specified.
             * @param message GetTeamCampaignStatusResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.GetTeamCampaignStatusResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetTeamCampaignStatusResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GetTeamCampaignStatusResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PreApplyTeamCampaignRequest. */
        interface IPreApplyTeamCampaignRequest {

            /** PreApplyTeamCampaignRequest userId */
            userId: number;

            /** PreApplyTeamCampaignRequest teamName */
            teamName: string;
        }

        /** Represents a PreApplyTeamCampaignRequest. */
        class PreApplyTeamCampaignRequest implements IPreApplyTeamCampaignRequest {

            /**
             * Constructs a new PreApplyTeamCampaignRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IPreApplyTeamCampaignRequest);

            /** PreApplyTeamCampaignRequest userId. */
            public userId: number;

            /** PreApplyTeamCampaignRequest teamName. */
            public teamName: string;

            /**
             * Creates a new PreApplyTeamCampaignRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PreApplyTeamCampaignRequest instance
             */
            public static create(properties?: v388.protobuf.IPreApplyTeamCampaignRequest): v388.protobuf.PreApplyTeamCampaignRequest;

            /**
             * Encodes the specified PreApplyTeamCampaignRequest message. Does not implicitly {@link v388.protobuf.PreApplyTeamCampaignRequest.verify|verify} messages.
             * @param message PreApplyTeamCampaignRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IPreApplyTeamCampaignRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PreApplyTeamCampaignRequest message, length delimited. Does not implicitly {@link v388.protobuf.PreApplyTeamCampaignRequest.verify|verify} messages.
             * @param message PreApplyTeamCampaignRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IPreApplyTeamCampaignRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PreApplyTeamCampaignRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PreApplyTeamCampaignRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.PreApplyTeamCampaignRequest;

            /**
             * Decodes a PreApplyTeamCampaignRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PreApplyTeamCampaignRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.PreApplyTeamCampaignRequest;

            /**
             * Verifies a PreApplyTeamCampaignRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PreApplyTeamCampaignRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PreApplyTeamCampaignRequest
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.PreApplyTeamCampaignRequest;

            /**
             * Creates a plain object from a PreApplyTeamCampaignRequest message. Also converts values to other types if specified.
             * @param message PreApplyTeamCampaignRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.PreApplyTeamCampaignRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PreApplyTeamCampaignRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PreApplyTeamCampaignRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PreApplyTeamCampaignResponse. */
        interface IPreApplyTeamCampaignResponse {

            /** PreApplyTeamCampaignResponse error */
            error: v388.protobuf.ErrorCode;

            /** PreApplyTeamCampaignResponse allowed */
            allowed: boolean;

            /** PreApplyTeamCampaignResponse numOfApplicants */
            numOfApplicants: number;
        }

        /** Represents a PreApplyTeamCampaignResponse. */
        class PreApplyTeamCampaignResponse implements IPreApplyTeamCampaignResponse {

            /**
             * Constructs a new PreApplyTeamCampaignResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IPreApplyTeamCampaignResponse);

            /** PreApplyTeamCampaignResponse error. */
            public error: v388.protobuf.ErrorCode;

            /** PreApplyTeamCampaignResponse allowed. */
            public allowed: boolean;

            /** PreApplyTeamCampaignResponse numOfApplicants. */
            public numOfApplicants: number;

            /**
             * Creates a new PreApplyTeamCampaignResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PreApplyTeamCampaignResponse instance
             */
            public static create(properties?: v388.protobuf.IPreApplyTeamCampaignResponse): v388.protobuf.PreApplyTeamCampaignResponse;

            /**
             * Encodes the specified PreApplyTeamCampaignResponse message. Does not implicitly {@link v388.protobuf.PreApplyTeamCampaignResponse.verify|verify} messages.
             * @param message PreApplyTeamCampaignResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IPreApplyTeamCampaignResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PreApplyTeamCampaignResponse message, length delimited. Does not implicitly {@link v388.protobuf.PreApplyTeamCampaignResponse.verify|verify} messages.
             * @param message PreApplyTeamCampaignResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IPreApplyTeamCampaignResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PreApplyTeamCampaignResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PreApplyTeamCampaignResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.PreApplyTeamCampaignResponse;

            /**
             * Decodes a PreApplyTeamCampaignResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PreApplyTeamCampaignResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.PreApplyTeamCampaignResponse;

            /**
             * Verifies a PreApplyTeamCampaignResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PreApplyTeamCampaignResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PreApplyTeamCampaignResponse
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.PreApplyTeamCampaignResponse;

            /**
             * Creates a plain object from a PreApplyTeamCampaignResponse message. Also converts values to other types if specified.
             * @param message PreApplyTeamCampaignResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.PreApplyTeamCampaignResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PreApplyTeamCampaignResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PreApplyTeamCampaignResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an ApplyTeamCampaignRequest. */
        interface IApplyTeamCampaignRequest {

            /** ApplyTeamCampaignRequest userId */
            userId: number;

            /** ApplyTeamCampaignRequest teamName */
            teamName: string;
        }

        /** Represents an ApplyTeamCampaignRequest. */
        class ApplyTeamCampaignRequest implements IApplyTeamCampaignRequest {

            /**
             * Constructs a new ApplyTeamCampaignRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IApplyTeamCampaignRequest);

            /** ApplyTeamCampaignRequest userId. */
            public userId: number;

            /** ApplyTeamCampaignRequest teamName. */
            public teamName: string;

            /**
             * Creates a new ApplyTeamCampaignRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ApplyTeamCampaignRequest instance
             */
            public static create(properties?: v388.protobuf.IApplyTeamCampaignRequest): v388.protobuf.ApplyTeamCampaignRequest;

            /**
             * Encodes the specified ApplyTeamCampaignRequest message. Does not implicitly {@link v388.protobuf.ApplyTeamCampaignRequest.verify|verify} messages.
             * @param message ApplyTeamCampaignRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IApplyTeamCampaignRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ApplyTeamCampaignRequest message, length delimited. Does not implicitly {@link v388.protobuf.ApplyTeamCampaignRequest.verify|verify} messages.
             * @param message ApplyTeamCampaignRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IApplyTeamCampaignRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ApplyTeamCampaignRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ApplyTeamCampaignRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.ApplyTeamCampaignRequest;

            /**
             * Decodes an ApplyTeamCampaignRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ApplyTeamCampaignRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.ApplyTeamCampaignRequest;

            /**
             * Verifies an ApplyTeamCampaignRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ApplyTeamCampaignRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ApplyTeamCampaignRequest
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.ApplyTeamCampaignRequest;

            /**
             * Creates a plain object from an ApplyTeamCampaignRequest message. Also converts values to other types if specified.
             * @param message ApplyTeamCampaignRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.ApplyTeamCampaignRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ApplyTeamCampaignRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ApplyTeamCampaignRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an ApplyTeamCampaignResponse. */
        interface IApplyTeamCampaignResponse {

            /** ApplyTeamCampaignResponse error */
            error: v388.protobuf.ErrorCode;

            /** ApplyTeamCampaignResponse numOfApplicants */
            numOfApplicants: number;
        }

        /** Represents an ApplyTeamCampaignResponse. */
        class ApplyTeamCampaignResponse implements IApplyTeamCampaignResponse {

            /**
             * Constructs a new ApplyTeamCampaignResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IApplyTeamCampaignResponse);

            /** ApplyTeamCampaignResponse error. */
            public error: v388.protobuf.ErrorCode;

            /** ApplyTeamCampaignResponse numOfApplicants. */
            public numOfApplicants: number;

            /**
             * Creates a new ApplyTeamCampaignResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ApplyTeamCampaignResponse instance
             */
            public static create(properties?: v388.protobuf.IApplyTeamCampaignResponse): v388.protobuf.ApplyTeamCampaignResponse;

            /**
             * Encodes the specified ApplyTeamCampaignResponse message. Does not implicitly {@link v388.protobuf.ApplyTeamCampaignResponse.verify|verify} messages.
             * @param message ApplyTeamCampaignResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IApplyTeamCampaignResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ApplyTeamCampaignResponse message, length delimited. Does not implicitly {@link v388.protobuf.ApplyTeamCampaignResponse.verify|verify} messages.
             * @param message ApplyTeamCampaignResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IApplyTeamCampaignResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ApplyTeamCampaignResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ApplyTeamCampaignResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.ApplyTeamCampaignResponse;

            /**
             * Decodes an ApplyTeamCampaignResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ApplyTeamCampaignResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.ApplyTeamCampaignResponse;

            /**
             * Verifies an ApplyTeamCampaignResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ApplyTeamCampaignResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ApplyTeamCampaignResponse
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.ApplyTeamCampaignResponse;

            /**
             * Creates a plain object from an ApplyTeamCampaignResponse message. Also converts values to other types if specified.
             * @param message ApplyTeamCampaignResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.ApplyTeamCampaignResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ApplyTeamCampaignResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ApplyTeamCampaignResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadCarCampaignInfoRequest. */
        interface ILoadCarCampaignInfoRequest {

            /** LoadCarCampaignInfoRequest userId */
            userId: number;
        }

        /** Represents a LoadCarCampaignInfoRequest. */
        class LoadCarCampaignInfoRequest implements ILoadCarCampaignInfoRequest {

            /**
             * Constructs a new LoadCarCampaignInfoRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ILoadCarCampaignInfoRequest);

            /** LoadCarCampaignInfoRequest userId. */
            public userId: number;

            /**
             * Creates a new LoadCarCampaignInfoRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadCarCampaignInfoRequest instance
             */
            public static create(properties?: v388.protobuf.ILoadCarCampaignInfoRequest): v388.protobuf.LoadCarCampaignInfoRequest;

            /**
             * Encodes the specified LoadCarCampaignInfoRequest message. Does not implicitly {@link v388.protobuf.LoadCarCampaignInfoRequest.verify|verify} messages.
             * @param message LoadCarCampaignInfoRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ILoadCarCampaignInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadCarCampaignInfoRequest message, length delimited. Does not implicitly {@link v388.protobuf.LoadCarCampaignInfoRequest.verify|verify} messages.
             * @param message LoadCarCampaignInfoRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ILoadCarCampaignInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadCarCampaignInfoRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadCarCampaignInfoRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.LoadCarCampaignInfoRequest;

            /**
             * Decodes a LoadCarCampaignInfoRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadCarCampaignInfoRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.LoadCarCampaignInfoRequest;

            /**
             * Verifies a LoadCarCampaignInfoRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadCarCampaignInfoRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadCarCampaignInfoRequest
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.LoadCarCampaignInfoRequest;

            /**
             * Creates a plain object from a LoadCarCampaignInfoRequest message. Also converts values to other types if specified.
             * @param message LoadCarCampaignInfoRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.LoadCarCampaignInfoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadCarCampaignInfoRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadCarCampaignInfoRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadCarCampaignInfoResponse. */
        interface ILoadCarCampaignInfoResponse {

            /** LoadCarCampaignInfoResponse error */
            error: v388.protobuf.ErrorCode;

            /** LoadCarCampaignInfoResponse carCampaignUserState */
            carCampaignUserState: v388.protobuf.CarCampaignUserState;

            /** LoadCarCampaignInfoResponse numOfPieces */
            numOfPieces: number;

            /** LoadCarCampaignInfoResponse numOfRemainingLotteries */
            numOfRemainingLotteries: number;

            /** LoadCarCampaignInfoResponse lotteryOpenBits */
            lotteryOpenBits: number;
        }

        /** Represents a LoadCarCampaignInfoResponse. */
        class LoadCarCampaignInfoResponse implements ILoadCarCampaignInfoResponse {

            /**
             * Constructs a new LoadCarCampaignInfoResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ILoadCarCampaignInfoResponse);

            /** LoadCarCampaignInfoResponse error. */
            public error: v388.protobuf.ErrorCode;

            /** LoadCarCampaignInfoResponse carCampaignUserState. */
            public carCampaignUserState: v388.protobuf.CarCampaignUserState;

            /** LoadCarCampaignInfoResponse numOfPieces. */
            public numOfPieces: number;

            /** LoadCarCampaignInfoResponse numOfRemainingLotteries. */
            public numOfRemainingLotteries: number;

            /** LoadCarCampaignInfoResponse lotteryOpenBits. */
            public lotteryOpenBits: number;

            /**
             * Creates a new LoadCarCampaignInfoResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadCarCampaignInfoResponse instance
             */
            public static create(properties?: v388.protobuf.ILoadCarCampaignInfoResponse): v388.protobuf.LoadCarCampaignInfoResponse;

            /**
             * Encodes the specified LoadCarCampaignInfoResponse message. Does not implicitly {@link v388.protobuf.LoadCarCampaignInfoResponse.verify|verify} messages.
             * @param message LoadCarCampaignInfoResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ILoadCarCampaignInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadCarCampaignInfoResponse message, length delimited. Does not implicitly {@link v388.protobuf.LoadCarCampaignInfoResponse.verify|verify} messages.
             * @param message LoadCarCampaignInfoResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ILoadCarCampaignInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadCarCampaignInfoResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadCarCampaignInfoResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.LoadCarCampaignInfoResponse;

            /**
             * Decodes a LoadCarCampaignInfoResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadCarCampaignInfoResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.LoadCarCampaignInfoResponse;

            /**
             * Verifies a LoadCarCampaignInfoResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadCarCampaignInfoResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadCarCampaignInfoResponse
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.LoadCarCampaignInfoResponse;

            /**
             * Creates a plain object from a LoadCarCampaignInfoResponse message. Also converts values to other types if specified.
             * @param message LoadCarCampaignInfoResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.LoadCarCampaignInfoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadCarCampaignInfoResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadCarCampaignInfoResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SaveCarCampaignInfoRequest. */
        interface ISaveCarCampaignInfoRequest {

            /** SaveCarCampaignInfoRequest userId */
            userId: number;

            /** SaveCarCampaignInfoRequest lotteryOpenBits */
            lotteryOpenBits: number;

            /** SaveCarCampaignInfoRequest timestamp */
            timestamp: number;
        }

        /** Represents a SaveCarCampaignInfoRequest. */
        class SaveCarCampaignInfoRequest implements ISaveCarCampaignInfoRequest {

            /**
             * Constructs a new SaveCarCampaignInfoRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ISaveCarCampaignInfoRequest);

            /** SaveCarCampaignInfoRequest userId. */
            public userId: number;

            /** SaveCarCampaignInfoRequest lotteryOpenBits. */
            public lotteryOpenBits: number;

            /** SaveCarCampaignInfoRequest timestamp. */
            public timestamp: number;

            /**
             * Creates a new SaveCarCampaignInfoRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveCarCampaignInfoRequest instance
             */
            public static create(properties?: v388.protobuf.ISaveCarCampaignInfoRequest): v388.protobuf.SaveCarCampaignInfoRequest;

            /**
             * Encodes the specified SaveCarCampaignInfoRequest message. Does not implicitly {@link v388.protobuf.SaveCarCampaignInfoRequest.verify|verify} messages.
             * @param message SaveCarCampaignInfoRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ISaveCarCampaignInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveCarCampaignInfoRequest message, length delimited. Does not implicitly {@link v388.protobuf.SaveCarCampaignInfoRequest.verify|verify} messages.
             * @param message SaveCarCampaignInfoRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ISaveCarCampaignInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveCarCampaignInfoRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveCarCampaignInfoRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.SaveCarCampaignInfoRequest;

            /**
             * Decodes a SaveCarCampaignInfoRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveCarCampaignInfoRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.SaveCarCampaignInfoRequest;

            /**
             * Verifies a SaveCarCampaignInfoRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveCarCampaignInfoRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveCarCampaignInfoRequest
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.SaveCarCampaignInfoRequest;

            /**
             * Creates a plain object from a SaveCarCampaignInfoRequest message. Also converts values to other types if specified.
             * @param message SaveCarCampaignInfoRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.SaveCarCampaignInfoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveCarCampaignInfoRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SaveCarCampaignInfoRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SaveCarCampaignInfoResponse. */
        interface ISaveCarCampaignInfoResponse {

            /** SaveCarCampaignInfoResponse error */
            error: v388.protobuf.ErrorCode;
        }

        /** Represents a SaveCarCampaignInfoResponse. */
        class SaveCarCampaignInfoResponse implements ISaveCarCampaignInfoResponse {

            /**
             * Constructs a new SaveCarCampaignInfoResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ISaveCarCampaignInfoResponse);

            /** SaveCarCampaignInfoResponse error. */
            public error: v388.protobuf.ErrorCode;

            /**
             * Creates a new SaveCarCampaignInfoResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveCarCampaignInfoResponse instance
             */
            public static create(properties?: v388.protobuf.ISaveCarCampaignInfoResponse): v388.protobuf.SaveCarCampaignInfoResponse;

            /**
             * Encodes the specified SaveCarCampaignInfoResponse message. Does not implicitly {@link v388.protobuf.SaveCarCampaignInfoResponse.verify|verify} messages.
             * @param message SaveCarCampaignInfoResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ISaveCarCampaignInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveCarCampaignInfoResponse message, length delimited. Does not implicitly {@link v388.protobuf.SaveCarCampaignInfoResponse.verify|verify} messages.
             * @param message SaveCarCampaignInfoResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ISaveCarCampaignInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveCarCampaignInfoResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveCarCampaignInfoResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.SaveCarCampaignInfoResponse;

            /**
             * Decodes a SaveCarCampaignInfoResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveCarCampaignInfoResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.SaveCarCampaignInfoResponse;

            /**
             * Verifies a SaveCarCampaignInfoResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveCarCampaignInfoResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveCarCampaignInfoResponse
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.SaveCarCampaignInfoResponse;

            /**
             * Creates a plain object from a SaveCarCampaignInfoResponse message. Also converts values to other types if specified.
             * @param message SaveCarCampaignInfoResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.SaveCarCampaignInfoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveCarCampaignInfoResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SaveCarCampaignInfoResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AcceptCarCampaignRequest. */
        interface IAcceptCarCampaignRequest {

            /** AcceptCarCampaignRequest userId */
            userId: number;
        }

        /** Represents an AcceptCarCampaignRequest. */
        class AcceptCarCampaignRequest implements IAcceptCarCampaignRequest {

            /**
             * Constructs a new AcceptCarCampaignRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IAcceptCarCampaignRequest);

            /** AcceptCarCampaignRequest userId. */
            public userId: number;

            /**
             * Creates a new AcceptCarCampaignRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AcceptCarCampaignRequest instance
             */
            public static create(properties?: v388.protobuf.IAcceptCarCampaignRequest): v388.protobuf.AcceptCarCampaignRequest;

            /**
             * Encodes the specified AcceptCarCampaignRequest message. Does not implicitly {@link v388.protobuf.AcceptCarCampaignRequest.verify|verify} messages.
             * @param message AcceptCarCampaignRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IAcceptCarCampaignRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AcceptCarCampaignRequest message, length delimited. Does not implicitly {@link v388.protobuf.AcceptCarCampaignRequest.verify|verify} messages.
             * @param message AcceptCarCampaignRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IAcceptCarCampaignRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AcceptCarCampaignRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AcceptCarCampaignRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.AcceptCarCampaignRequest;

            /**
             * Decodes an AcceptCarCampaignRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AcceptCarCampaignRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.AcceptCarCampaignRequest;

            /**
             * Verifies an AcceptCarCampaignRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AcceptCarCampaignRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AcceptCarCampaignRequest
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.AcceptCarCampaignRequest;

            /**
             * Creates a plain object from an AcceptCarCampaignRequest message. Also converts values to other types if specified.
             * @param message AcceptCarCampaignRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.AcceptCarCampaignRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AcceptCarCampaignRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AcceptCarCampaignRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AcceptCarCampaignResponse. */
        interface IAcceptCarCampaignResponse {

            /** AcceptCarCampaignResponse error */
            error: v388.protobuf.ErrorCode;
        }

        /** Represents an AcceptCarCampaignResponse. */
        class AcceptCarCampaignResponse implements IAcceptCarCampaignResponse {

            /**
             * Constructs a new AcceptCarCampaignResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IAcceptCarCampaignResponse);

            /** AcceptCarCampaignResponse error. */
            public error: v388.protobuf.ErrorCode;

            /**
             * Creates a new AcceptCarCampaignResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AcceptCarCampaignResponse instance
             */
            public static create(properties?: v388.protobuf.IAcceptCarCampaignResponse): v388.protobuf.AcceptCarCampaignResponse;

            /**
             * Encodes the specified AcceptCarCampaignResponse message. Does not implicitly {@link v388.protobuf.AcceptCarCampaignResponse.verify|verify} messages.
             * @param message AcceptCarCampaignResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IAcceptCarCampaignResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AcceptCarCampaignResponse message, length delimited. Does not implicitly {@link v388.protobuf.AcceptCarCampaignResponse.verify|verify} messages.
             * @param message AcceptCarCampaignResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IAcceptCarCampaignResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AcceptCarCampaignResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AcceptCarCampaignResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.AcceptCarCampaignResponse;

            /**
             * Decodes an AcceptCarCampaignResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AcceptCarCampaignResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.AcceptCarCampaignResponse;

            /**
             * Verifies an AcceptCarCampaignResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AcceptCarCampaignResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AcceptCarCampaignResponse
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.AcceptCarCampaignResponse;

            /**
             * Creates a plain object from an AcceptCarCampaignResponse message. Also converts values to other types if specified.
             * @param message AcceptCarCampaignResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.AcceptCarCampaignResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AcceptCarCampaignResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AcceptCarCampaignResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadGhostCompetitionRankingRequest. */
        interface ILoadGhostCompetitionRankingRequest {

            /** LoadGhostCompetitionRankingRequest carId */
            carId: number;

            /** LoadGhostCompetitionRankingRequest competitionId */
            competitionId: number;
        }

        /** Represents a LoadGhostCompetitionRankingRequest. */
        class LoadGhostCompetitionRankingRequest implements ILoadGhostCompetitionRankingRequest {

            /**
             * Constructs a new LoadGhostCompetitionRankingRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ILoadGhostCompetitionRankingRequest);

            /** LoadGhostCompetitionRankingRequest carId. */
            public carId: number;

            /** LoadGhostCompetitionRankingRequest competitionId. */
            public competitionId: number;

            /**
             * Creates a new LoadGhostCompetitionRankingRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadGhostCompetitionRankingRequest instance
             */
            public static create(properties?: v388.protobuf.ILoadGhostCompetitionRankingRequest): v388.protobuf.LoadGhostCompetitionRankingRequest;

            /**
             * Encodes the specified LoadGhostCompetitionRankingRequest message. Does not implicitly {@link v388.protobuf.LoadGhostCompetitionRankingRequest.verify|verify} messages.
             * @param message LoadGhostCompetitionRankingRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ILoadGhostCompetitionRankingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadGhostCompetitionRankingRequest message, length delimited. Does not implicitly {@link v388.protobuf.LoadGhostCompetitionRankingRequest.verify|verify} messages.
             * @param message LoadGhostCompetitionRankingRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ILoadGhostCompetitionRankingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadGhostCompetitionRankingRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadGhostCompetitionRankingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.LoadGhostCompetitionRankingRequest;

            /**
             * Decodes a LoadGhostCompetitionRankingRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadGhostCompetitionRankingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.LoadGhostCompetitionRankingRequest;

            /**
             * Verifies a LoadGhostCompetitionRankingRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadGhostCompetitionRankingRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadGhostCompetitionRankingRequest
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.LoadGhostCompetitionRankingRequest;

            /**
             * Creates a plain object from a LoadGhostCompetitionRankingRequest message. Also converts values to other types if specified.
             * @param message LoadGhostCompetitionRankingRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.LoadGhostCompetitionRankingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadGhostCompetitionRankingRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadGhostCompetitionRankingRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadGhostCompetitionRankingResponse. */
        interface ILoadGhostCompetitionRankingResponse {

            /** LoadGhostCompetitionRankingResponse error */
            error: v388.protobuf.ErrorCode;

            /** LoadGhostCompetitionRankingResponse periodId */
            periodId?: (number|null);

            /** LoadGhostCompetitionRankingResponse numOfParticipants */
            numOfParticipants: number;

            /** LoadGhostCompetitionRankingResponse competitionSchedule */
            competitionSchedule?: (v388.protobuf.IGhostCompetitionSchedule|null);

            /** LoadGhostCompetitionRankingResponse ownRecord */
            ownRecord?: (v388.protobuf.LoadGhostCompetitionRankingResponse.IEntry|null);

            /** LoadGhostCompetitionRankingResponse topRecords */
            topRecords?: (v388.protobuf.LoadGhostCompetitionRankingResponse.IEntry[]|null);
        }

        /** Represents a LoadGhostCompetitionRankingResponse. */
        class LoadGhostCompetitionRankingResponse implements ILoadGhostCompetitionRankingResponse {

            /**
             * Constructs a new LoadGhostCompetitionRankingResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ILoadGhostCompetitionRankingResponse);

            /** LoadGhostCompetitionRankingResponse error. */
            public error: v388.protobuf.ErrorCode;

            /** LoadGhostCompetitionRankingResponse periodId. */
            public periodId: number;

            /** LoadGhostCompetitionRankingResponse numOfParticipants. */
            public numOfParticipants: number;

            /** LoadGhostCompetitionRankingResponse competitionSchedule. */
            public competitionSchedule?: (v388.protobuf.IGhostCompetitionSchedule|null);

            /** LoadGhostCompetitionRankingResponse ownRecord. */
            public ownRecord?: (v388.protobuf.LoadGhostCompetitionRankingResponse.IEntry|null);

            /** LoadGhostCompetitionRankingResponse topRecords. */
            public topRecords: v388.protobuf.LoadGhostCompetitionRankingResponse.IEntry[];

            /**
             * Creates a new LoadGhostCompetitionRankingResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadGhostCompetitionRankingResponse instance
             */
            public static create(properties?: v388.protobuf.ILoadGhostCompetitionRankingResponse): v388.protobuf.LoadGhostCompetitionRankingResponse;

            /**
             * Encodes the specified LoadGhostCompetitionRankingResponse message. Does not implicitly {@link v388.protobuf.LoadGhostCompetitionRankingResponse.verify|verify} messages.
             * @param message LoadGhostCompetitionRankingResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ILoadGhostCompetitionRankingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadGhostCompetitionRankingResponse message, length delimited. Does not implicitly {@link v388.protobuf.LoadGhostCompetitionRankingResponse.verify|verify} messages.
             * @param message LoadGhostCompetitionRankingResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ILoadGhostCompetitionRankingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadGhostCompetitionRankingResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadGhostCompetitionRankingResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.LoadGhostCompetitionRankingResponse;

            /**
             * Decodes a LoadGhostCompetitionRankingResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadGhostCompetitionRankingResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.LoadGhostCompetitionRankingResponse;

            /**
             * Verifies a LoadGhostCompetitionRankingResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadGhostCompetitionRankingResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadGhostCompetitionRankingResponse
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.LoadGhostCompetitionRankingResponse;

            /**
             * Creates a plain object from a LoadGhostCompetitionRankingResponse message. Also converts values to other types if specified.
             * @param message LoadGhostCompetitionRankingResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.LoadGhostCompetitionRankingResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadGhostCompetitionRankingResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadGhostCompetitionRankingResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace LoadGhostCompetitionRankingResponse {

            /** Properties of an Entry. */
            interface IEntry {

                /** Entry rank */
                rank: number;

                /** Entry result */
                result: number;

                /** Entry carId */
                carId: number;

                /** Entry name */
                name: string;

                /** Entry regionId */
                regionId: number;

                /** Entry model */
                model: number;

                /** Entry visualModel */
                visualModel: number;

                /** Entry defaultColor */
                defaultColor: number;

                /** Entry title */
                title: number;

                /** Entry level */
                level: number;

                /** Entry teamName */
                teamName?: (string|null);

                /** Entry playedShopName */
                playedShopName: string;

                /** Entry playedAt */
                playedAt: number;
            }

            /** Represents an Entry. */
            class Entry implements IEntry {

                /**
                 * Constructs a new Entry.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: v388.protobuf.LoadGhostCompetitionRankingResponse.IEntry);

                /** Entry rank. */
                public rank: number;

                /** Entry result. */
                public result: number;

                /** Entry carId. */
                public carId: number;

                /** Entry name. */
                public name: string;

                /** Entry regionId. */
                public regionId: number;

                /** Entry model. */
                public model: number;

                /** Entry visualModel. */
                public visualModel: number;

                /** Entry defaultColor. */
                public defaultColor: number;

                /** Entry title. */
                public title: number;

                /** Entry level. */
                public level: number;

                /** Entry teamName. */
                public teamName: string;

                /** Entry playedShopName. */
                public playedShopName: string;

                /** Entry playedAt. */
                public playedAt: number;

                /**
                 * Creates a new Entry instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Entry instance
                 */
                public static create(properties?: v388.protobuf.LoadGhostCompetitionRankingResponse.IEntry): v388.protobuf.LoadGhostCompetitionRankingResponse.Entry;

                /**
                 * Encodes the specified Entry message. Does not implicitly {@link v388.protobuf.LoadGhostCompetitionRankingResponse.Entry.verify|verify} messages.
                 * @param message Entry message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: v388.protobuf.LoadGhostCompetitionRankingResponse.IEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Entry message, length delimited. Does not implicitly {@link v388.protobuf.LoadGhostCompetitionRankingResponse.Entry.verify|verify} messages.
                 * @param message Entry message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: v388.protobuf.LoadGhostCompetitionRankingResponse.IEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Entry message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Entry
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.LoadGhostCompetitionRankingResponse.Entry;

                /**
                 * Decodes an Entry message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Entry
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.LoadGhostCompetitionRankingResponse.Entry;

                /**
                 * Verifies an Entry message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Entry message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Entry
                 */
                public static fromObject(object: { [k: string]: any }): v388.protobuf.LoadGhostCompetitionRankingResponse.Entry;

                /**
                 * Creates a plain object from an Entry message. Also converts values to other types if specified.
                 * @param message Entry
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: v388.protobuf.LoadGhostCompetitionRankingResponse.Entry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Entry to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Entry
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a SaveFaceRecognitionResultRequest. */
        interface ISaveFaceRecognitionResultRequest {

            /** SaveFaceRecognitionResultRequest userId */
            userId: number;

            /** SaveFaceRecognitionResultRequest timestamp */
            timestamp: number;

            /** SaveFaceRecognitionResultRequest placeId */
            placeId: string;

            /** SaveFaceRecognitionResultRequest pcbSerial */
            pcbSerial: string;

            /** SaveFaceRecognitionResultRequest age */
            age: number;

            /** SaveFaceRecognitionResultRequest ageConfidence */
            ageConfidence: number;

            /** SaveFaceRecognitionResultRequest ageIntegrations */
            ageIntegrations: number;

            /** SaveFaceRecognitionResultRequest gender */
            gender: number;

            /** SaveFaceRecognitionResultRequest genderConfidence */
            genderConfidence: number;

            /** SaveFaceRecognitionResultRequest genderIntegrations */
            genderIntegrations: number;
        }

        /** Represents a SaveFaceRecognitionResultRequest. */
        class SaveFaceRecognitionResultRequest implements ISaveFaceRecognitionResultRequest {

            /**
             * Constructs a new SaveFaceRecognitionResultRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ISaveFaceRecognitionResultRequest);

            /** SaveFaceRecognitionResultRequest userId. */
            public userId: number;

            /** SaveFaceRecognitionResultRequest timestamp. */
            public timestamp: number;

            /** SaveFaceRecognitionResultRequest placeId. */
            public placeId: string;

            /** SaveFaceRecognitionResultRequest pcbSerial. */
            public pcbSerial: string;

            /** SaveFaceRecognitionResultRequest age. */
            public age: number;

            /** SaveFaceRecognitionResultRequest ageConfidence. */
            public ageConfidence: number;

            /** SaveFaceRecognitionResultRequest ageIntegrations. */
            public ageIntegrations: number;

            /** SaveFaceRecognitionResultRequest gender. */
            public gender: number;

            /** SaveFaceRecognitionResultRequest genderConfidence. */
            public genderConfidence: number;

            /** SaveFaceRecognitionResultRequest genderIntegrations. */
            public genderIntegrations: number;

            /**
             * Creates a new SaveFaceRecognitionResultRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveFaceRecognitionResultRequest instance
             */
            public static create(properties?: v388.protobuf.ISaveFaceRecognitionResultRequest): v388.protobuf.SaveFaceRecognitionResultRequest;

            /**
             * Encodes the specified SaveFaceRecognitionResultRequest message. Does not implicitly {@link v388.protobuf.SaveFaceRecognitionResultRequest.verify|verify} messages.
             * @param message SaveFaceRecognitionResultRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ISaveFaceRecognitionResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveFaceRecognitionResultRequest message, length delimited. Does not implicitly {@link v388.protobuf.SaveFaceRecognitionResultRequest.verify|verify} messages.
             * @param message SaveFaceRecognitionResultRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ISaveFaceRecognitionResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveFaceRecognitionResultRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveFaceRecognitionResultRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.SaveFaceRecognitionResultRequest;

            /**
             * Decodes a SaveFaceRecognitionResultRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveFaceRecognitionResultRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.SaveFaceRecognitionResultRequest;

            /**
             * Verifies a SaveFaceRecognitionResultRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveFaceRecognitionResultRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveFaceRecognitionResultRequest
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.SaveFaceRecognitionResultRequest;

            /**
             * Creates a plain object from a SaveFaceRecognitionResultRequest message. Also converts values to other types if specified.
             * @param message SaveFaceRecognitionResultRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.SaveFaceRecognitionResultRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveFaceRecognitionResultRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SaveFaceRecognitionResultRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SaveFaceRecognitionResultResponse. */
        interface ISaveFaceRecognitionResultResponse {

            /** SaveFaceRecognitionResultResponse error */
            error: v388.protobuf.ErrorCode;
        }

        /** Represents a SaveFaceRecognitionResultResponse. */
        class SaveFaceRecognitionResultResponse implements ISaveFaceRecognitionResultResponse {

            /**
             * Constructs a new SaveFaceRecognitionResultResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ISaveFaceRecognitionResultResponse);

            /** SaveFaceRecognitionResultResponse error. */
            public error: v388.protobuf.ErrorCode;

            /**
             * Creates a new SaveFaceRecognitionResultResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveFaceRecognitionResultResponse instance
             */
            public static create(properties?: v388.protobuf.ISaveFaceRecognitionResultResponse): v388.protobuf.SaveFaceRecognitionResultResponse;

            /**
             * Encodes the specified SaveFaceRecognitionResultResponse message. Does not implicitly {@link v388.protobuf.SaveFaceRecognitionResultResponse.verify|verify} messages.
             * @param message SaveFaceRecognitionResultResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ISaveFaceRecognitionResultResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveFaceRecognitionResultResponse message, length delimited. Does not implicitly {@link v388.protobuf.SaveFaceRecognitionResultResponse.verify|verify} messages.
             * @param message SaveFaceRecognitionResultResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ISaveFaceRecognitionResultResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveFaceRecognitionResultResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveFaceRecognitionResultResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.SaveFaceRecognitionResultResponse;

            /**
             * Decodes a SaveFaceRecognitionResultResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveFaceRecognitionResultResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.SaveFaceRecognitionResultResponse;

            /**
             * Verifies a SaveFaceRecognitionResultResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveFaceRecognitionResultResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveFaceRecognitionResultResponse
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.SaveFaceRecognitionResultResponse;

            /**
             * Creates a plain object from a SaveFaceRecognitionResultResponse message. Also converts values to other types if specified.
             * @param message SaveFaceRecognitionResultResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.SaveFaceRecognitionResultResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveFaceRecognitionResultResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SaveFaceRecognitionResultResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Car. */
        interface ICar {

            /** Car carId */
            carId?: (number|null);

            /** Car regionId */
            regionId?: (number|null);

            /** Car name */
            name?: (string|null);

            /** Car searchCode */
            searchCode?: (string|null);

            /** Car manufacturer */
            manufacturer?: (number|null);

            /** Car model */
            model?: (number|null);

            /** Car visualModel */
            visualModel?: (number|null);

            /** Car defaultColor */
            defaultColor?: (number|null);

            /** Car customColor */
            customColor: number;

            /** Car wheel */
            wheel: number;

            /** Car wheelColor */
            wheelColor: number;

            /** Car aero */
            aero: number;

            /** Car bonnet */
            bonnet: number;

            /** Car wing */
            wing: number;

            /** Car mirror */
            mirror: number;

            /** Car sticker */
            sticker: number;

            /** Car stickerColor */
            stickerColor: number;

            /** Car neon */
            neon: number;

            /** Car trunk */
            trunk: number;

            /** Car plate */
            plate: number;

            /** Car plateColor */
            plateColor: number;

            /** Car specialSticker */
            specialSticker: number;

            /** Car specialStickerColor */
            specialStickerColor: number;

            /** Car tunePower */
            tunePower: number;

            /** Car tuneHandling */
            tuneHandling: number;

            /** Car title */
            title: number;

            /** Car level */
            level: number;

            /** Car teamSticker */
            teamSticker?: (boolean|null);

            /** Car teamId */
            teamId?: (number|null);

            /** Car teamName */
            teamName?: (string|null);

            /** Car teamStickerFont */
            teamStickerFont?: (number|null);

            /** Car lastPlayedAt */
            lastPlayedAt?: (number|null);

            /** Car lastPlayedPlace */
            lastPlayedPlace?: (v388.protobuf.IPlace|null);

            /** Car aura */
            aura?: (number|null);

            /** Car ghostLevel */
            ghostLevel?: (number|null);

            /** Car country */
            country?: (string|null);
        }

        /** Represents a Car. */
        class Car implements ICar {

            /**
             * Constructs a new Car.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ICar);

            /** Car carId. */
            public carId: number;

            /** Car regionId. */
            public regionId: number;

            /** Car name. */
            public name: string;

            /** Car searchCode. */
            public searchCode: string;

            /** Car manufacturer. */
            public manufacturer: number;

            /** Car model. */
            public model: number;

            /** Car visualModel. */
            public visualModel: number;

            /** Car defaultColor. */
            public defaultColor: number;

            /** Car customColor. */
            public customColor: number;

            /** Car wheel. */
            public wheel: number;

            /** Car wheelColor. */
            public wheelColor: number;

            /** Car aero. */
            public aero: number;

            /** Car bonnet. */
            public bonnet: number;

            /** Car wing. */
            public wing: number;

            /** Car mirror. */
            public mirror: number;

            /** Car sticker. */
            public sticker: number;

            /** Car stickerColor. */
            public stickerColor: number;

            /** Car neon. */
            public neon: number;

            /** Car trunk. */
            public trunk: number;

            /** Car plate. */
            public plate: number;

            /** Car plateColor. */
            public plateColor: number;

            /** Car specialSticker. */
            public specialSticker: number;

            /** Car specialStickerColor. */
            public specialStickerColor: number;

            /** Car tunePower. */
            public tunePower: number;

            /** Car tuneHandling. */
            public tuneHandling: number;

            /** Car title. */
            public title: number;

            /** Car level. */
            public level: number;

            /** Car teamSticker. */
            public teamSticker: boolean;

            /** Car teamId. */
            public teamId: number;

            /** Car teamName. */
            public teamName: string;

            /** Car teamStickerFont. */
            public teamStickerFont: number;

            /** Car lastPlayedAt. */
            public lastPlayedAt: number;

            /** Car lastPlayedPlace. */
            public lastPlayedPlace?: (v388.protobuf.IPlace|null);

            /** Car aura. */
            public aura: number;

            /** Car ghostLevel. */
            public ghostLevel: number;

            /** Car country. */
            public country: string;

            /**
             * Creates a new Car instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Car instance
             */
            public static create(properties?: v388.protobuf.ICar): v388.protobuf.Car;

            /**
             * Encodes the specified Car message. Does not implicitly {@link v388.protobuf.Car.verify|verify} messages.
             * @param message Car message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ICar, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Car message, length delimited. Does not implicitly {@link v388.protobuf.Car.verify|verify} messages.
             * @param message Car message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ICar, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Car message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Car
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.Car;

            /**
             * Decodes a Car message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Car
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.Car;

            /**
             * Verifies a Car message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Car message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Car
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.Car;

            /**
             * Creates a plain object from a Car message. Also converts values to other types if specified.
             * @param message Car
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.Car, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Car to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Car
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CarSetting. */
        interface ICarSetting {

            /** CarSetting carId */
            carId?: (number|null);

            /** CarSetting view */
            view: boolean;

            /** CarSetting transmission */
            transmission: boolean;

            /** CarSetting retire */
            retire: boolean;

            /** CarSetting meter */
            meter: number;

            /** CarSetting volume */
            volume: number;

            /** CarSetting bgm */
            bgm: number;

            /** CarSetting nameplate */
            nameplate: number;

            /** CarSetting nameplateColor */
            nameplateColor: number;
        }

        /** Represents a CarSetting. */
        class CarSetting implements ICarSetting {

            /**
             * Constructs a new CarSetting.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ICarSetting);

            /** CarSetting carId. */
            public carId: number;

            /** CarSetting view. */
            public view: boolean;

            /** CarSetting transmission. */
            public transmission: boolean;

            /** CarSetting retire. */
            public retire: boolean;

            /** CarSetting meter. */
            public meter: number;

            /** CarSetting volume. */
            public volume: number;

            /** CarSetting bgm. */
            public bgm: number;

            /** CarSetting nameplate. */
            public nameplate: number;

            /** CarSetting nameplateColor. */
            public nameplateColor: number;

            /**
             * Creates a new CarSetting instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CarSetting instance
             */
            public static create(properties?: v388.protobuf.ICarSetting): v388.protobuf.CarSetting;

            /**
             * Encodes the specified CarSetting message. Does not implicitly {@link v388.protobuf.CarSetting.verify|verify} messages.
             * @param message CarSetting message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ICarSetting, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CarSetting message, length delimited. Does not implicitly {@link v388.protobuf.CarSetting.verify|verify} messages.
             * @param message CarSetting message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ICarSetting, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CarSetting message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CarSetting
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.CarSetting;

            /**
             * Decodes a CarSetting message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CarSetting
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.CarSetting;

            /**
             * Verifies a CarSetting message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CarSetting message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CarSetting
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.CarSetting;

            /**
             * Creates a plain object from a CarSetting message. Also converts values to other types if specified.
             * @param message CarSetting
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.CarSetting, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CarSetting to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CarSetting
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FriendCar. */
        interface IFriendCar {

            /** FriendCar car */
            car: v388.protobuf.ICar;

            /** FriendCar friendshipLevel */
            friendshipLevel: number;

            /** FriendCar revengeLevel */
            revengeLevel: number;

            /** FriendCar nonhuman */
            nonhuman: boolean;
        }

        /** Represents a FriendCar. */
        class FriendCar implements IFriendCar {

            /**
             * Constructs a new FriendCar.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IFriendCar);

            /** FriendCar car. */
            public car: v388.protobuf.ICar;

            /** FriendCar friendshipLevel. */
            public friendshipLevel: number;

            /** FriendCar revengeLevel. */
            public revengeLevel: number;

            /** FriendCar nonhuman. */
            public nonhuman: boolean;

            /**
             * Creates a new FriendCar instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FriendCar instance
             */
            public static create(properties?: v388.protobuf.IFriendCar): v388.protobuf.FriendCar;

            /**
             * Encodes the specified FriendCar message. Does not implicitly {@link v388.protobuf.FriendCar.verify|verify} messages.
             * @param message FriendCar message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IFriendCar, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FriendCar message, length delimited. Does not implicitly {@link v388.protobuf.FriendCar.verify|verify} messages.
             * @param message FriendCar message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IFriendCar, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FriendCar message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FriendCar
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.FriendCar;

            /**
             * Decodes a FriendCar message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FriendCar
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.FriendCar;

            /**
             * Verifies a FriendCar message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FriendCar message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FriendCar
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.FriendCar;

            /**
             * Creates a plain object from a FriendCar message. Also converts values to other types if specified.
             * @param message FriendCar
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.FriendCar, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FriendCar to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FriendCar
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GhostCar. */
        interface IGhostCar {

            /** GhostCar car */
            car: v388.protobuf.ICar;

            /** GhostCar area */
            area?: (number|null);

            /** GhostCar ramp */
            ramp?: (number|null);

            /** GhostCar revengeLevel */
            revengeLevel?: (number|null);

            /** GhostCar nonhuman */
            nonhuman?: (boolean|null);

            /** GhostCar ghostLevel */
            ghostLevel?: (number|null);
        }

        /** Represents a GhostCar. */
        class GhostCar implements IGhostCar {

            /**
             * Constructs a new GhostCar.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IGhostCar);

            /** GhostCar car. */
            public car: v388.protobuf.ICar;

            /** GhostCar area. */
            public area: number;

            /** GhostCar ramp. */
            public ramp: number;

            /** GhostCar revengeLevel. */
            public revengeLevel: number;

            /** GhostCar nonhuman. */
            public nonhuman: boolean;

            /** GhostCar ghostLevel. */
            public ghostLevel: number;

            /**
             * Creates a new GhostCar instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GhostCar instance
             */
            public static create(properties?: v388.protobuf.IGhostCar): v388.protobuf.GhostCar;

            /**
             * Encodes the specified GhostCar message. Does not implicitly {@link v388.protobuf.GhostCar.verify|verify} messages.
             * @param message GhostCar message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IGhostCar, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GhostCar message, length delimited. Does not implicitly {@link v388.protobuf.GhostCar.verify|verify} messages.
             * @param message GhostCar message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IGhostCar, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GhostCar message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GhostCar
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.GhostCar;

            /**
             * Decodes a GhostCar message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GhostCar
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.GhostCar;

            /**
             * Verifies a GhostCar message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GhostCar message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GhostCar
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.GhostCar;

            /**
             * Creates a plain object from a GhostCar message. Also converts values to other types if specified.
             * @param message GhostCar
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.GhostCar, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GhostCar to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GhostCar
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GhostTrail. */
        interface IGhostTrail {

            /** GhostTrail carId */
            carId: number;

            /** GhostTrail area */
            area: number;

            /** GhostTrail ramp */
            ramp: number;

            /** GhostTrail playedAt */
            playedAt: number;

            /** GhostTrail playedPlace */
            playedPlace?: (v388.protobuf.IPlace|null);

            /** GhostTrail trail */
            trail: Uint8Array;
        }

        /** Represents a GhostTrail. */
        class GhostTrail implements IGhostTrail {

            /**
             * Constructs a new GhostTrail.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IGhostTrail);

            /** GhostTrail carId. */
            public carId: number;

            /** GhostTrail area. */
            public area: number;

            /** GhostTrail ramp. */
            public ramp: number;

            /** GhostTrail playedAt. */
            public playedAt: number;

            /** GhostTrail playedPlace. */
            public playedPlace?: (v388.protobuf.IPlace|null);

            /** GhostTrail trail. */
            public trail: Uint8Array;

            /**
             * Creates a new GhostTrail instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GhostTrail instance
             */
            public static create(properties?: v388.protobuf.IGhostTrail): v388.protobuf.GhostTrail;

            /**
             * Encodes the specified GhostTrail message. Does not implicitly {@link v388.protobuf.GhostTrail.verify|verify} messages.
             * @param message GhostTrail message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IGhostTrail, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GhostTrail message, length delimited. Does not implicitly {@link v388.protobuf.GhostTrail.verify|verify} messages.
             * @param message GhostTrail message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IGhostTrail, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GhostTrail message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GhostTrail
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.GhostTrail;

            /**
             * Decodes a GhostTrail message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GhostTrail
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.GhostTrail;

            /**
             * Verifies a GhostTrail message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GhostTrail message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GhostTrail
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.GhostTrail;

            /**
             * Creates a plain object from a GhostTrail message. Also converts values to other types if specified.
             * @param message GhostTrail
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.GhostTrail, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GhostTrail to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GhostTrail
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Team. */
        interface ITeam {

            /** Team teamId */
            teamId: number;

            /** Team name */
            name: string;

            /** Team numOfMembers */
            numOfMembers: number;

            /** Team numOfMemberCars */
            numOfMemberCars: number;

            /** Team leaderUserId */
            leaderUserId: number;

            /** Team leaderCarName */
            leaderCarName: string;

            /** Team leaderRegionId */
            leaderRegionId: number;

            /** Team stickerFont */
            stickerFont: number;

            /** Team fullfilled */
            fullfilled: boolean;

            /** Team closed */
            closed: boolean;

            /** Team recruitmentSuspended */
            recruitmentSuspended: boolean;

            /** Team createdAt */
            createdAt: number;

            /** Team homePlace */
            homePlace: v388.protobuf.IPlace;
        }

        /** Represents a Team. */
        class Team implements ITeam {

            /**
             * Constructs a new Team.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ITeam);

            /** Team teamId. */
            public teamId: number;

            /** Team name. */
            public name: string;

            /** Team numOfMembers. */
            public numOfMembers: number;

            /** Team numOfMemberCars. */
            public numOfMemberCars: number;

            /** Team leaderUserId. */
            public leaderUserId: number;

            /** Team leaderCarName. */
            public leaderCarName: string;

            /** Team leaderRegionId. */
            public leaderRegionId: number;

            /** Team stickerFont. */
            public stickerFont: number;

            /** Team fullfilled. */
            public fullfilled: boolean;

            /** Team closed. */
            public closed: boolean;

            /** Team recruitmentSuspended. */
            public recruitmentSuspended: boolean;

            /** Team createdAt. */
            public createdAt: number;

            /** Team homePlace. */
            public homePlace: v388.protobuf.IPlace;

            /**
             * Creates a new Team instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Team instance
             */
            public static create(properties?: v388.protobuf.ITeam): v388.protobuf.Team;

            /**
             * Encodes the specified Team message. Does not implicitly {@link v388.protobuf.Team.verify|verify} messages.
             * @param message Team message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ITeam, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Team message, length delimited. Does not implicitly {@link v388.protobuf.Team.verify|verify} messages.
             * @param message Team message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ITeam, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Team message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Team
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.Team;

            /**
             * Decodes a Team message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Team
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.Team;

            /**
             * Verifies a Team message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Team message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Team
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.Team;

            /**
             * Creates a plain object from a Team message. Also converts values to other types if specified.
             * @param message Team
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.Team, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Team to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Team
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TeamMember. */
        interface ITeamMember {

            /** TeamMember userId */
            userId: number;

            /** TeamMember car */
            car: v388.protobuf.ICar;

            /** TeamMember numOfOwnedCars */
            numOfOwnedCars: number;
        }

        /** Represents a TeamMember. */
        class TeamMember implements ITeamMember {

            /**
             * Constructs a new TeamMember.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ITeamMember);

            /** TeamMember userId. */
            public userId: number;

            /** TeamMember car. */
            public car: v388.protobuf.ICar;

            /** TeamMember numOfOwnedCars. */
            public numOfOwnedCars: number;

            /**
             * Creates a new TeamMember instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TeamMember instance
             */
            public static create(properties?: v388.protobuf.ITeamMember): v388.protobuf.TeamMember;

            /**
             * Encodes the specified TeamMember message. Does not implicitly {@link v388.protobuf.TeamMember.verify|verify} messages.
             * @param message TeamMember message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ITeamMember, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TeamMember message, length delimited. Does not implicitly {@link v388.protobuf.TeamMember.verify|verify} messages.
             * @param message TeamMember message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ITeamMember, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TeamMember message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TeamMember
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.TeamMember;

            /**
             * Decodes a TeamMember message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TeamMember
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.TeamMember;

            /**
             * Verifies a TeamMember message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TeamMember message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TeamMember
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.TeamMember;

            /**
             * Creates a plain object from a TeamMember message. Also converts values to other types if specified.
             * @param message TeamMember
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.TeamMember, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TeamMember to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TeamMember
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TeamApplicant. */
        interface ITeamApplicant {

            /** TeamApplicant userId */
            userId: number;

            /** TeamApplicant car */
            car: v388.protobuf.ICar;

            /** TeamApplicant numOfOwnedCars */
            numOfOwnedCars: number;

            /** TeamApplicant expiresAt */
            expiresAt: number;
        }

        /** Represents a TeamApplicant. */
        class TeamApplicant implements ITeamApplicant {

            /**
             * Constructs a new TeamApplicant.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ITeamApplicant);

            /** TeamApplicant userId. */
            public userId: number;

            /** TeamApplicant car. */
            public car: v388.protobuf.ICar;

            /** TeamApplicant numOfOwnedCars. */
            public numOfOwnedCars: number;

            /** TeamApplicant expiresAt. */
            public expiresAt: number;

            /**
             * Creates a new TeamApplicant instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TeamApplicant instance
             */
            public static create(properties?: v388.protobuf.ITeamApplicant): v388.protobuf.TeamApplicant;

            /**
             * Encodes the specified TeamApplicant message. Does not implicitly {@link v388.protobuf.TeamApplicant.verify|verify} messages.
             * @param message TeamApplicant message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ITeamApplicant, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TeamApplicant message, length delimited. Does not implicitly {@link v388.protobuf.TeamApplicant.verify|verify} messages.
             * @param message TeamApplicant message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ITeamApplicant, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TeamApplicant message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TeamApplicant
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.TeamApplicant;

            /**
             * Decodes a TeamApplicant message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TeamApplicant
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.TeamApplicant;

            /**
             * Verifies a TeamApplicant message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TeamApplicant message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TeamApplicant
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.TeamApplicant;

            /**
             * Creates a plain object from a TeamApplicant message. Also converts values to other types if specified.
             * @param message TeamApplicant
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.TeamApplicant, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TeamApplicant to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TeamApplicant
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TeamSticker. */
        interface ITeamSticker {

            /** TeamSticker teamId */
            teamId?: (number|null);

            /** TeamSticker teamName */
            teamName?: (string|null);

            /** TeamSticker count */
            count: number;
        }

        /** Represents a TeamSticker. */
        class TeamSticker implements ITeamSticker {

            /**
             * Constructs a new TeamSticker.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ITeamSticker);

            /** TeamSticker teamId. */
            public teamId: number;

            /** TeamSticker teamName. */
            public teamName: string;

            /** TeamSticker count. */
            public count: number;

            /**
             * Creates a new TeamSticker instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TeamSticker instance
             */
            public static create(properties?: v388.protobuf.ITeamSticker): v388.protobuf.TeamSticker;

            /**
             * Encodes the specified TeamSticker message. Does not implicitly {@link v388.protobuf.TeamSticker.verify|verify} messages.
             * @param message TeamSticker message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ITeamSticker, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TeamSticker message, length delimited. Does not implicitly {@link v388.protobuf.TeamSticker.verify|verify} messages.
             * @param message TeamSticker message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ITeamSticker, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TeamSticker message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TeamSticker
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.TeamSticker;

            /**
             * Decodes a TeamSticker message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TeamSticker
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.TeamSticker;

            /**
             * Verifies a TeamSticker message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TeamSticker message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TeamSticker
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.TeamSticker;

            /**
             * Creates a plain object from a TeamSticker message. Also converts values to other types if specified.
             * @param message TeamSticker
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.TeamSticker, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TeamSticker to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TeamSticker
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Place. */
        interface IPlace {

            /** Place placeId */
            placeId: string;

            /** Place shopName */
            shopName: string;

            /** Place regionId */
            regionId: number;

            /** Place country */
            country: string;
        }

        /** Represents a Place. */
        class Place implements IPlace {

            /**
             * Constructs a new Place.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IPlace);

            /** Place placeId. */
            public placeId: string;

            /** Place shopName. */
            public shopName: string;

            /** Place regionId. */
            public regionId: number;

            /** Place country. */
            public country: string;

            /**
             * Creates a new Place instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Place instance
             */
            public static create(properties?: v388.protobuf.IPlace): v388.protobuf.Place;

            /**
             * Encodes the specified Place message. Does not implicitly {@link v388.protobuf.Place.verify|verify} messages.
             * @param message Place message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IPlace, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Place message, length delimited. Does not implicitly {@link v388.protobuf.Place.verify|verify} messages.
             * @param message Place message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IPlace, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Place message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Place
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.Place;

            /**
             * Decodes a Place message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Place
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.Place;

            /**
             * Verifies a Place message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Place message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Place
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.Place;

            /**
             * Creates a plain object from a Place message. Also converts values to other types if specified.
             * @param message Place
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.Place, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Place to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Place
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SystemSetting. */
        interface ISystemSetting {

            /** SystemSetting mCoinChute */
            mCoinChute: number;

            /** SystemSetting mBuyCardCost */
            mBuyCardCost: number;

            /** SystemSetting mGameCost */
            mGameCost: number;

            /** SystemSetting mContinueCost */
            mContinueCost: number;

            /** SystemSetting mFullCourseCost */
            mFullCourseCost: number;

            /** SystemSetting mFreePlay */
            mFreePlay: boolean;

            /** SystemSetting mPcbId */
            mPcbId?: (number|null);

            /** SystemSetting mIcCardRw */
            mIcCardRw: boolean;

            /** SystemSetting mIcCardVender */
            mIcCardVender: boolean;

            /** SystemSetting mMgCardRw */
            mMgCardRw?: (boolean|null);

            /** SystemSetting mForceFeedback */
            mForceFeedback?: (boolean|null);

            /** SystemSetting mWinsAndRemains */
            mWinsAndRemains: boolean;

            /** SystemSetting mEventMode */
            mEventMode: number;

            /** SystemSetting mEventModeDist */
            mEventModeDist: boolean;

            /** SystemSetting mCloseType */
            mCloseType: number;

            /** SystemSetting mCloseSun */
            mCloseSun: number;

            /** SystemSetting mCloseMon */
            mCloseMon: number;

            /** SystemSetting mCloseTue */
            mCloseTue: number;

            /** SystemSetting mCloseWed */
            mCloseWed: number;

            /** SystemSetting mCloseThu */
            mCloseThu: number;

            /** SystemSetting mCloseFri */
            mCloseFri: number;

            /** SystemSetting mCloseSat */
            mCloseSat: number;

            /** SystemSetting mCloseDay */
            mCloseDay: number;

            /** SystemSetting mTouchPanel */
            mTouchPanel?: (boolean|null);

            /** SystemSetting mGameVol */
            mGameVol: number;

            /** SystemSetting mAttractVol */
            mAttractVol: number;

            /** SystemSetting mCalibHandleCenter */
            mCalibHandleCenter?: (number|null);

            /** SystemSetting mCalibAccelCenter */
            mCalibAccelCenter?: (number|null);

            /** SystemSetting mCalibBrakeCenter */
            mCalibBrakeCenter?: (number|null);

            /** SystemSetting mCalibTouchLeft */
            mCalibTouchLeft?: (number|null);

            /** SystemSetting mCalibTouchRight */
            mCalibTouchRight?: (number|null);

            /** SystemSetting mCalibTouchTop */
            mCalibTouchTop?: (number|null);

            /** SystemSetting mCalibTouchBottom */
            mCalibTouchBottom?: (number|null);
        }

        /** Represents a SystemSetting. */
        class SystemSetting implements ISystemSetting {

            /**
             * Constructs a new SystemSetting.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ISystemSetting);

            /** SystemSetting mCoinChute. */
            public mCoinChute: number;

            /** SystemSetting mBuyCardCost. */
            public mBuyCardCost: number;

            /** SystemSetting mGameCost. */
            public mGameCost: number;

            /** SystemSetting mContinueCost. */
            public mContinueCost: number;

            /** SystemSetting mFullCourseCost. */
            public mFullCourseCost: number;

            /** SystemSetting mFreePlay. */
            public mFreePlay: boolean;

            /** SystemSetting mPcbId. */
            public mPcbId: number;

            /** SystemSetting mIcCardRw. */
            public mIcCardRw: boolean;

            /** SystemSetting mIcCardVender. */
            public mIcCardVender: boolean;

            /** SystemSetting mMgCardRw. */
            public mMgCardRw: boolean;

            /** SystemSetting mForceFeedback. */
            public mForceFeedback: boolean;

            /** SystemSetting mWinsAndRemains. */
            public mWinsAndRemains: boolean;

            /** SystemSetting mEventMode. */
            public mEventMode: number;

            /** SystemSetting mEventModeDist. */
            public mEventModeDist: boolean;

            /** SystemSetting mCloseType. */
            public mCloseType: number;

            /** SystemSetting mCloseSun. */
            public mCloseSun: number;

            /** SystemSetting mCloseMon. */
            public mCloseMon: number;

            /** SystemSetting mCloseTue. */
            public mCloseTue: number;

            /** SystemSetting mCloseWed. */
            public mCloseWed: number;

            /** SystemSetting mCloseThu. */
            public mCloseThu: number;

            /** SystemSetting mCloseFri. */
            public mCloseFri: number;

            /** SystemSetting mCloseSat. */
            public mCloseSat: number;

            /** SystemSetting mCloseDay. */
            public mCloseDay: number;

            /** SystemSetting mTouchPanel. */
            public mTouchPanel: boolean;

            /** SystemSetting mGameVol. */
            public mGameVol: number;

            /** SystemSetting mAttractVol. */
            public mAttractVol: number;

            /** SystemSetting mCalibHandleCenter. */
            public mCalibHandleCenter: number;

            /** SystemSetting mCalibAccelCenter. */
            public mCalibAccelCenter: number;

            /** SystemSetting mCalibBrakeCenter. */
            public mCalibBrakeCenter: number;

            /** SystemSetting mCalibTouchLeft. */
            public mCalibTouchLeft: number;

            /** SystemSetting mCalibTouchRight. */
            public mCalibTouchRight: number;

            /** SystemSetting mCalibTouchTop. */
            public mCalibTouchTop: number;

            /** SystemSetting mCalibTouchBottom. */
            public mCalibTouchBottom: number;

            /**
             * Creates a new SystemSetting instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SystemSetting instance
             */
            public static create(properties?: v388.protobuf.ISystemSetting): v388.protobuf.SystemSetting;

            /**
             * Encodes the specified SystemSetting message. Does not implicitly {@link v388.protobuf.SystemSetting.verify|verify} messages.
             * @param message SystemSetting message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ISystemSetting, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SystemSetting message, length delimited. Does not implicitly {@link v388.protobuf.SystemSetting.verify|verify} messages.
             * @param message SystemSetting message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ISystemSetting, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SystemSetting message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SystemSetting
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.SystemSetting;

            /**
             * Decodes a SystemSetting message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SystemSetting
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.SystemSetting;

            /**
             * Verifies a SystemSetting message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SystemSetting message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SystemSetting
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.SystemSetting;

            /**
             * Creates a plain object from a SystemSetting message. Also converts values to other types if specified.
             * @param message SystemSetting
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.SystemSetting, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SystemSetting to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SystemSetting
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GhostCompetitionSchedule. */
        interface IGhostCompetitionSchedule {

            /** GhostCompetitionSchedule competitionId */
            competitionId: number;

            /** GhostCompetitionSchedule qualifyingPeriodStartAt */
            qualifyingPeriodStartAt: number;

            /** GhostCompetitionSchedule qualifyingPeriodCloseAt */
            qualifyingPeriodCloseAt: number;

            /** GhostCompetitionSchedule competitionStartAt */
            competitionStartAt: number;

            /** GhostCompetitionSchedule competitionCloseAt */
            competitionCloseAt: number;

            /** GhostCompetitionSchedule competitionEndAt */
            competitionEndAt: number;

            /** GhostCompetitionSchedule lengthOfPeriod */
            lengthOfPeriod: number;

            /** GhostCompetitionSchedule lengthOfInterval */
            lengthOfInterval: number;

            /** GhostCompetitionSchedule area */
            area: number;

            /** GhostCompetitionSchedule minigamePatternId */
            minigamePatternId: number;
        }

        /** Represents a GhostCompetitionSchedule. */
        class GhostCompetitionSchedule implements IGhostCompetitionSchedule {

            /**
             * Constructs a new GhostCompetitionSchedule.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IGhostCompetitionSchedule);

            /** GhostCompetitionSchedule competitionId. */
            public competitionId: number;

            /** GhostCompetitionSchedule qualifyingPeriodStartAt. */
            public qualifyingPeriodStartAt: number;

            /** GhostCompetitionSchedule qualifyingPeriodCloseAt. */
            public qualifyingPeriodCloseAt: number;

            /** GhostCompetitionSchedule competitionStartAt. */
            public competitionStartAt: number;

            /** GhostCompetitionSchedule competitionCloseAt. */
            public competitionCloseAt: number;

            /** GhostCompetitionSchedule competitionEndAt. */
            public competitionEndAt: number;

            /** GhostCompetitionSchedule lengthOfPeriod. */
            public lengthOfPeriod: number;

            /** GhostCompetitionSchedule lengthOfInterval. */
            public lengthOfInterval: number;

            /** GhostCompetitionSchedule area. */
            public area: number;

            /** GhostCompetitionSchedule minigamePatternId. */
            public minigamePatternId: number;

            /**
             * Creates a new GhostCompetitionSchedule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GhostCompetitionSchedule instance
             */
            public static create(properties?: v388.protobuf.IGhostCompetitionSchedule): v388.protobuf.GhostCompetitionSchedule;

            /**
             * Encodes the specified GhostCompetitionSchedule message. Does not implicitly {@link v388.protobuf.GhostCompetitionSchedule.verify|verify} messages.
             * @param message GhostCompetitionSchedule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IGhostCompetitionSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GhostCompetitionSchedule message, length delimited. Does not implicitly {@link v388.protobuf.GhostCompetitionSchedule.verify|verify} messages.
             * @param message GhostCompetitionSchedule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IGhostCompetitionSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GhostCompetitionSchedule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GhostCompetitionSchedule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.GhostCompetitionSchedule;

            /**
             * Decodes a GhostCompetitionSchedule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GhostCompetitionSchedule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.GhostCompetitionSchedule;

            /**
             * Verifies a GhostCompetitionSchedule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GhostCompetitionSchedule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GhostCompetitionSchedule
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.GhostCompetitionSchedule;

            /**
             * Creates a plain object from a GhostCompetitionSchedule message. Also converts values to other types if specified.
             * @param message GhostCompetitionSchedule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.GhostCompetitionSchedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GhostCompetitionSchedule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GhostCompetitionSchedule
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GhostCompetitionParameter. */
        interface IGhostCompetitionParameter {

            /** GhostCompetitionParameter parameters1 */
            parameters1?: (number[]|null);

            /** GhostCompetitionParameter parameters2 */
            parameters2: boolean;
        }

        /** Represents a GhostCompetitionParameter. */
        class GhostCompetitionParameter implements IGhostCompetitionParameter {

            /**
             * Constructs a new GhostCompetitionParameter.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IGhostCompetitionParameter);

            /** GhostCompetitionParameter parameters1. */
            public parameters1: number[];

            /** GhostCompetitionParameter parameters2. */
            public parameters2: boolean;

            /**
             * Creates a new GhostCompetitionParameter instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GhostCompetitionParameter instance
             */
            public static create(properties?: v388.protobuf.IGhostCompetitionParameter): v388.protobuf.GhostCompetitionParameter;

            /**
             * Encodes the specified GhostCompetitionParameter message. Does not implicitly {@link v388.protobuf.GhostCompetitionParameter.verify|verify} messages.
             * @param message GhostCompetitionParameter message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IGhostCompetitionParameter, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GhostCompetitionParameter message, length delimited. Does not implicitly {@link v388.protobuf.GhostCompetitionParameter.verify|verify} messages.
             * @param message GhostCompetitionParameter message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IGhostCompetitionParameter, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GhostCompetitionParameter message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GhostCompetitionParameter
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.GhostCompetitionParameter;

            /**
             * Decodes a GhostCompetitionParameter message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GhostCompetitionParameter
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.GhostCompetitionParameter;

            /**
             * Verifies a GhostCompetitionParameter message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GhostCompetitionParameter message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GhostCompetitionParameter
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.GhostCompetitionParameter;

            /**
             * Creates a plain object from a GhostCompetitionParameter message. Also converts values to other types if specified.
             * @param message GhostCompetitionParameter
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.GhostCompetitionParameter, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GhostCompetitionParameter to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GhostCompetitionParameter
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PlaceList. */
        interface IPlaceList {

            /** PlaceList places */
            places?: (v388.protobuf.IPlace[]|null);
        }

        /** Represents a PlaceList. */
        class PlaceList implements IPlaceList {

            /**
             * Constructs a new PlaceList.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IPlaceList);

            /** PlaceList places. */
            public places: v388.protobuf.IPlace[];

            /**
             * Creates a new PlaceList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PlaceList instance
             */
            public static create(properties?: v388.protobuf.IPlaceList): v388.protobuf.PlaceList;

            /**
             * Encodes the specified PlaceList message. Does not implicitly {@link v388.protobuf.PlaceList.verify|verify} messages.
             * @param message PlaceList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IPlaceList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PlaceList message, length delimited. Does not implicitly {@link v388.protobuf.PlaceList.verify|verify} messages.
             * @param message PlaceList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IPlaceList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PlaceList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PlaceList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.PlaceList;

            /**
             * Decodes a PlaceList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PlaceList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.PlaceList;

            /**
             * Verifies a PlaceList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PlaceList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PlaceList
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.PlaceList;

            /**
             * Creates a plain object from a PlaceList message. Also converts values to other types if specified.
             * @param message PlaceList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.PlaceList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PlaceList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PlaceList
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GhostList. */
        interface IGhostList {

            /** GhostList ghosts */
            ghosts?: (v388.protobuf.IGhostCar[]|null);
        }

        /** Represents a GhostList. */
        class GhostList implements IGhostList {

            /**
             * Constructs a new GhostList.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IGhostList);

            /** GhostList ghosts. */
            public ghosts: v388.protobuf.IGhostCar[];

            /**
             * Creates a new GhostList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GhostList instance
             */
            public static create(properties?: v388.protobuf.IGhostList): v388.protobuf.GhostList;

            /**
             * Encodes the specified GhostList message. Does not implicitly {@link v388.protobuf.GhostList.verify|verify} messages.
             * @param message GhostList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IGhostList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GhostList message, length delimited. Does not implicitly {@link v388.protobuf.GhostList.verify|verify} messages.
             * @param message GhostList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IGhostList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GhostList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GhostList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.GhostList;

            /**
             * Decodes a GhostList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GhostList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.GhostList;

            /**
             * Verifies a GhostList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GhostList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GhostList
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.GhostList;

            /**
             * Creates a plain object from a GhostList message. Also converts values to other types if specified.
             * @param message GhostList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.GhostList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GhostList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GhostList
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CarSummary. */
        interface ICarSummary {

            /** CarSummary hitCount */
            hitCount: number;

            /** CarSummary cars */
            cars?: (v388.protobuf.ICar[]|null);
        }

        /** Represents a CarSummary. */
        class CarSummary implements ICarSummary {

            /**
             * Constructs a new CarSummary.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ICarSummary);

            /** CarSummary hitCount. */
            public hitCount: number;

            /** CarSummary cars. */
            public cars: v388.protobuf.ICar[];

            /**
             * Creates a new CarSummary instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CarSummary instance
             */
            public static create(properties?: v388.protobuf.ICarSummary): v388.protobuf.CarSummary;

            /**
             * Encodes the specified CarSummary message. Does not implicitly {@link v388.protobuf.CarSummary.verify|verify} messages.
             * @param message CarSummary message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ICarSummary, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CarSummary message, length delimited. Does not implicitly {@link v388.protobuf.CarSummary.verify|verify} messages.
             * @param message CarSummary message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ICarSummary, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CarSummary message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CarSummary
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.CarSummary;

            /**
             * Decodes a CarSummary message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CarSummary
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.CarSummary;

            /**
             * Verifies a CarSummary message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CarSummary message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CarSummary
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.CarSummary;

            /**
             * Creates a plain object from a CarSummary message. Also converts values to other types if specified.
             * @param message CarSummary
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.CarSummary, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CarSummary to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CarSummary
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CarSummaryCount. */
        interface ICarSummaryCount {

            /** CarSummaryCount summary */
            summary?: (v388.protobuf.CarSummaryCount.ISearchCount[]|null);
        }

        /** Represents a CarSummaryCount. */
        class CarSummaryCount implements ICarSummaryCount {

            /**
             * Constructs a new CarSummaryCount.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.ICarSummaryCount);

            /** CarSummaryCount summary. */
            public summary: v388.protobuf.CarSummaryCount.ISearchCount[];

            /**
             * Creates a new CarSummaryCount instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CarSummaryCount instance
             */
            public static create(properties?: v388.protobuf.ICarSummaryCount): v388.protobuf.CarSummaryCount;

            /**
             * Encodes the specified CarSummaryCount message. Does not implicitly {@link v388.protobuf.CarSummaryCount.verify|verify} messages.
             * @param message CarSummaryCount message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.ICarSummaryCount, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CarSummaryCount message, length delimited. Does not implicitly {@link v388.protobuf.CarSummaryCount.verify|verify} messages.
             * @param message CarSummaryCount message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.ICarSummaryCount, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CarSummaryCount message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CarSummaryCount
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.CarSummaryCount;

            /**
             * Decodes a CarSummaryCount message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CarSummaryCount
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.CarSummaryCount;

            /**
             * Verifies a CarSummaryCount message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CarSummaryCount message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CarSummaryCount
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.CarSummaryCount;

            /**
             * Creates a plain object from a CarSummaryCount message. Also converts values to other types if specified.
             * @param message CarSummaryCount
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.CarSummaryCount, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CarSummaryCount to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CarSummaryCount
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace CarSummaryCount {

            /** Properties of a SearchCount. */
            interface ISearchCount {

                /** SearchCount regionId */
                regionId: number;

                /** SearchCount ghostLevel */
                ghostLevel: number;

                /** SearchCount manufacturer */
                manufacturer: number;

                /** SearchCount model */
                model: number;

                /** SearchCount hitCount */
                hitCount: number;
            }

            /** Represents a SearchCount. */
            class SearchCount implements ISearchCount {

                /**
                 * Constructs a new SearchCount.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: v388.protobuf.CarSummaryCount.ISearchCount);

                /** SearchCount regionId. */
                public regionId: number;

                /** SearchCount ghostLevel. */
                public ghostLevel: number;

                /** SearchCount manufacturer. */
                public manufacturer: number;

                /** SearchCount model. */
                public model: number;

                /** SearchCount hitCount. */
                public hitCount: number;

                /**
                 * Creates a new SearchCount instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SearchCount instance
                 */
                public static create(properties?: v388.protobuf.CarSummaryCount.ISearchCount): v388.protobuf.CarSummaryCount.SearchCount;

                /**
                 * Encodes the specified SearchCount message. Does not implicitly {@link v388.protobuf.CarSummaryCount.SearchCount.verify|verify} messages.
                 * @param message SearchCount message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: v388.protobuf.CarSummaryCount.ISearchCount, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SearchCount message, length delimited. Does not implicitly {@link v388.protobuf.CarSummaryCount.SearchCount.verify|verify} messages.
                 * @param message SearchCount message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: v388.protobuf.CarSummaryCount.ISearchCount, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SearchCount message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SearchCount
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.CarSummaryCount.SearchCount;

                /**
                 * Decodes a SearchCount message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SearchCount
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.CarSummaryCount.SearchCount;

                /**
                 * Verifies a SearchCount message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SearchCount message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SearchCount
                 */
                public static fromObject(object: { [k: string]: any }): v388.protobuf.CarSummaryCount.SearchCount;

                /**
                 * Creates a plain object from a SearchCount message. Also converts values to other types if specified.
                 * @param message SearchCount
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: v388.protobuf.CarSummaryCount.SearchCount, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SearchCount to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SearchCount
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a GhostSummary. */
        interface IGhostSummary {

            /** GhostSummary ghosts */
            ghosts?: (v388.protobuf.IGhostCar[]|null);
        }

        /** Represents a GhostSummary. */
        class GhostSummary implements IGhostSummary {

            /**
             * Constructs a new GhostSummary.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IGhostSummary);

            /** GhostSummary ghosts. */
            public ghosts: v388.protobuf.IGhostCar[];

            /**
             * Creates a new GhostSummary instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GhostSummary instance
             */
            public static create(properties?: v388.protobuf.IGhostSummary): v388.protobuf.GhostSummary;

            /**
             * Encodes the specified GhostSummary message. Does not implicitly {@link v388.protobuf.GhostSummary.verify|verify} messages.
             * @param message GhostSummary message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IGhostSummary, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GhostSummary message, length delimited. Does not implicitly {@link v388.protobuf.GhostSummary.verify|verify} messages.
             * @param message GhostSummary message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IGhostSummary, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GhostSummary message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GhostSummary
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.GhostSummary;

            /**
             * Decodes a GhostSummary message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GhostSummary
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.GhostSummary;

            /**
             * Verifies a GhostSummary message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GhostSummary message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GhostSummary
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.GhostSummary;

            /**
             * Creates a plain object from a GhostSummary message. Also converts values to other types if specified.
             * @param message GhostSummary
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.GhostSummary, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GhostSummary to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GhostSummary
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FileList. */
        interface IFileList {

            /** FileList files */
            files?: (v388.protobuf.FileList.IFileInfo[]|null);

            /** FileList interval */
            interval?: (number|null);
        }

        /** Represents a FileList. */
        class FileList implements IFileList {

            /**
             * Constructs a new FileList.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IFileList);

            /** FileList files. */
            public files: v388.protobuf.FileList.IFileInfo[];

            /** FileList interval. */
            public interval: number;

            /**
             * Creates a new FileList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileList instance
             */
            public static create(properties?: v388.protobuf.IFileList): v388.protobuf.FileList;

            /**
             * Encodes the specified FileList message. Does not implicitly {@link v388.protobuf.FileList.verify|verify} messages.
             * @param message FileList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IFileList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileList message, length delimited. Does not implicitly {@link v388.protobuf.FileList.verify|verify} messages.
             * @param message FileList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IFileList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.FileList;

            /**
             * Decodes a FileList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.FileList;

            /**
             * Verifies a FileList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileList
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.FileList;

            /**
             * Creates a plain object from a FileList message. Also converts values to other types if specified.
             * @param message FileList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.FileList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileList
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FileList {

            /** Properties of a FileInfo. */
            interface IFileInfo {

                /** FileInfo fileId */
                fileId: number;

                /** FileInfo fileType */
                fileType: v388.protobuf.FileType;

                /** FileInfo fileSize */
                fileSize: number;

                /** FileInfo url */
                url: string;

                /** FileInfo sha1sum */
                sha1sum: Uint8Array;

                /** FileInfo notBefore */
                notBefore: number;

                /** FileInfo notAfter */
                notAfter: number;
            }

            /** Represents a FileInfo. */
            class FileInfo implements IFileInfo {

                /**
                 * Constructs a new FileInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: v388.protobuf.FileList.IFileInfo);

                /** FileInfo fileId. */
                public fileId: number;

                /** FileInfo fileType. */
                public fileType: v388.protobuf.FileType;

                /** FileInfo fileSize. */
                public fileSize: number;

                /** FileInfo url. */
                public url: string;

                /** FileInfo sha1sum. */
                public sha1sum: Uint8Array;

                /** FileInfo notBefore. */
                public notBefore: number;

                /** FileInfo notAfter. */
                public notAfter: number;

                /**
                 * Creates a new FileInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FileInfo instance
                 */
                public static create(properties?: v388.protobuf.FileList.IFileInfo): v388.protobuf.FileList.FileInfo;

                /**
                 * Encodes the specified FileInfo message. Does not implicitly {@link v388.protobuf.FileList.FileInfo.verify|verify} messages.
                 * @param message FileInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: v388.protobuf.FileList.IFileInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FileInfo message, length delimited. Does not implicitly {@link v388.protobuf.FileList.FileInfo.verify|verify} messages.
                 * @param message FileInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: v388.protobuf.FileList.IFileInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FileInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FileInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.FileList.FileInfo;

                /**
                 * Decodes a FileInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FileInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.FileList.FileInfo;

                /**
                 * Verifies a FileInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FileInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FileInfo
                 */
                public static fromObject(object: { [k: string]: any }): v388.protobuf.FileList.FileInfo;

                /**
                 * Creates a plain object from a FileInfo message. Also converts values to other types if specified.
                 * @param message FileInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: v388.protobuf.FileList.FileInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FileInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for FileInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a GhostCompetitionTarget. */
        interface IGhostCompetitionTarget {

            /** GhostCompetitionTarget competitionId */
            competitionId: number;

            /** GhostCompetitionTarget specialGhostId */
            specialGhostId?: (number|null);

            /** GhostCompetitionTarget ghostCar */
            ghostCar: v388.protobuf.IGhostCar;

            /** GhostCompetitionTarget trailId */
            trailId: (number|Long);

            /** GhostCompetitionTarget updatedAt */
            updatedAt: number;

            /** GhostCompetitionTarget competitionSchedule */
            competitionSchedule?: (v388.protobuf.IGhostCompetitionSchedule|null);
        }

        /** Represents a GhostCompetitionTarget. */
        class GhostCompetitionTarget implements IGhostCompetitionTarget {

            /**
             * Constructs a new GhostCompetitionTarget.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IGhostCompetitionTarget);

            /** GhostCompetitionTarget competitionId. */
            public competitionId: number;

            /** GhostCompetitionTarget specialGhostId. */
            public specialGhostId: number;

            /** GhostCompetitionTarget ghostCar. */
            public ghostCar: v388.protobuf.IGhostCar;

            /** GhostCompetitionTarget trailId. */
            public trailId: (number|Long);

            /** GhostCompetitionTarget updatedAt. */
            public updatedAt: number;

            /** GhostCompetitionTarget competitionSchedule. */
            public competitionSchedule?: (v388.protobuf.IGhostCompetitionSchedule|null);

            /**
             * Creates a new GhostCompetitionTarget instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GhostCompetitionTarget instance
             */
            public static create(properties?: v388.protobuf.IGhostCompetitionTarget): v388.protobuf.GhostCompetitionTarget;

            /**
             * Encodes the specified GhostCompetitionTarget message. Does not implicitly {@link v388.protobuf.GhostCompetitionTarget.verify|verify} messages.
             * @param message GhostCompetitionTarget message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IGhostCompetitionTarget, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GhostCompetitionTarget message, length delimited. Does not implicitly {@link v388.protobuf.GhostCompetitionTarget.verify|verify} messages.
             * @param message GhostCompetitionTarget message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IGhostCompetitionTarget, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GhostCompetitionTarget message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GhostCompetitionTarget
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.GhostCompetitionTarget;

            /**
             * Decodes a GhostCompetitionTarget message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GhostCompetitionTarget
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.GhostCompetitionTarget;

            /**
             * Verifies a GhostCompetitionTarget message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GhostCompetitionTarget message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GhostCompetitionTarget
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.GhostCompetitionTarget;

            /**
             * Creates a plain object from a GhostCompetitionTarget message. Also converts values to other types if specified.
             * @param message GhostCompetitionTarget
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.GhostCompetitionTarget, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GhostCompetitionTarget to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GhostCompetitionTarget
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an ActiveTeamList. */
        interface IActiveTeamList {

            /** ActiveTeamList teams */
            teams?: (v388.protobuf.ActiveTeamList.IActiveTeam[]|null);
        }

        /** Represents an ActiveTeamList. */
        class ActiveTeamList implements IActiveTeamList {

            /**
             * Constructs a new ActiveTeamList.
             * @param [properties] Properties to set
             */
            constructor(properties?: v388.protobuf.IActiveTeamList);

            /** ActiveTeamList teams. */
            public teams: v388.protobuf.ActiveTeamList.IActiveTeam[];

            /**
             * Creates a new ActiveTeamList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ActiveTeamList instance
             */
            public static create(properties?: v388.protobuf.IActiveTeamList): v388.protobuf.ActiveTeamList;

            /**
             * Encodes the specified ActiveTeamList message. Does not implicitly {@link v388.protobuf.ActiveTeamList.verify|verify} messages.
             * @param message ActiveTeamList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: v388.protobuf.IActiveTeamList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ActiveTeamList message, length delimited. Does not implicitly {@link v388.protobuf.ActiveTeamList.verify|verify} messages.
             * @param message ActiveTeamList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: v388.protobuf.IActiveTeamList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ActiveTeamList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ActiveTeamList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.ActiveTeamList;

            /**
             * Decodes an ActiveTeamList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ActiveTeamList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.ActiveTeamList;

            /**
             * Verifies an ActiveTeamList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ActiveTeamList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ActiveTeamList
             */
            public static fromObject(object: { [k: string]: any }): v388.protobuf.ActiveTeamList;

            /**
             * Creates a plain object from an ActiveTeamList message. Also converts values to other types if specified.
             * @param message ActiveTeamList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: v388.protobuf.ActiveTeamList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ActiveTeamList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ActiveTeamList
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ActiveTeamList {

            /** Properties of an ActiveTeam. */
            interface IActiveTeam {

                /** ActiveTeam team */
                team: v388.protobuf.ITeam;

                /** ActiveTeam members */
                members?: (v388.protobuf.ITeamMember[]|null);

                /** ActiveTeam numOfStickers */
                numOfStickers: number;

                /** ActiveTeam updatedAt */
                updatedAt: number;
            }

            /** Represents an ActiveTeam. */
            class ActiveTeam implements IActiveTeam {

                /**
                 * Constructs a new ActiveTeam.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: v388.protobuf.ActiveTeamList.IActiveTeam);

                /** ActiveTeam team. */
                public team: v388.protobuf.ITeam;

                /** ActiveTeam members. */
                public members: v388.protobuf.ITeamMember[];

                /** ActiveTeam numOfStickers. */
                public numOfStickers: number;

                /** ActiveTeam updatedAt. */
                public updatedAt: number;

                /**
                 * Creates a new ActiveTeam instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ActiveTeam instance
                 */
                public static create(properties?: v388.protobuf.ActiveTeamList.IActiveTeam): v388.protobuf.ActiveTeamList.ActiveTeam;

                /**
                 * Encodes the specified ActiveTeam message. Does not implicitly {@link v388.protobuf.ActiveTeamList.ActiveTeam.verify|verify} messages.
                 * @param message ActiveTeam message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: v388.protobuf.ActiveTeamList.IActiveTeam, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ActiveTeam message, length delimited. Does not implicitly {@link v388.protobuf.ActiveTeamList.ActiveTeam.verify|verify} messages.
                 * @param message ActiveTeam message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: v388.protobuf.ActiveTeamList.IActiveTeam, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ActiveTeam message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ActiveTeam
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v388.protobuf.ActiveTeamList.ActiveTeam;

                /**
                 * Decodes an ActiveTeam message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ActiveTeam
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v388.protobuf.ActiveTeamList.ActiveTeam;

                /**
                 * Verifies an ActiveTeam message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ActiveTeam message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ActiveTeam
                 */
                public static fromObject(object: { [k: string]: any }): v388.protobuf.ActiveTeamList.ActiveTeam;

                /**
                 * Creates a plain object from an ActiveTeam message. Also converts values to other types if specified.
                 * @param message ActiveTeam
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: v388.protobuf.ActiveTeamList.ActiveTeam, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ActiveTeam to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ActiveTeam
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** ErrorCode enum. */
        enum ErrorCode {
            ERR_SUCCESS = 0,
            ERR_REQUEST = 1,
            ERR_NOT_FOUND = 2,
            ERR_ID_SERVER = 3,
            ERR_ID_BANNED = 4,
            ERR_USER_LOCKED = 5,
            ERR_USER_VERSION = 6,
            ERR_NAME_CONFLICTED = 7,
            ERR_TEAM_LOCKED = 8,
            ERR_FORBIDDEN = 9,
            ERR_TEAM_DISSOLVED = 10,
            ERR_USER_SUCCEEDED = 11
        }

        /** LineType enum. */
        enum LineType {
            L_UNKNOWN = 0,
            L_MOBILE = 1,
            L_ISDN = 2,
            L_BFLETS = 3,
            L_WIRED = 4
        }

        /** TerminalType enum. */
        enum TerminalType {
            T_DRIVE = 0,
            T_TERMINAL = 1
        }

        /** DeviceType enum. */
        enum DeviceType {
            DEVICE_CARD = 0,
            DEVICE_PHONE = 1
        }

        /** TutorialType enum. */
        enum TutorialType {
            TUTORIAL_STORY = 1,
            TUTORIAL_TIME_ATTACK = 2,
            TUTORIAL_GHOST = 4,
            TUTORIAL_GHOST_CHALLENGE = 8,
            TUTORIAL_GHOST_LEVEL = 16,
            TUTORIAL_GHOST_REVENGE = 32,
            TUTORIAL_GHOST_SEARCH = 64,
            TUTORIAL_GHOST_COMPETITION = 128,
            TUTORIAL_HP600_CARD = 256,
            TUTORIAL_TEAM_CAMPAIGN = 512,
            TUTORIAL_COMPETITION_QUALIFIED = 1024,
            TUTORIAL_COMPETITION_TERMINAL = 2048,
            TUTORIAL_COMPETITION_NOTICE = 4096,
            TUTORIAL_COMPETITION_FINISHED = 8192
        }

        /** CarCreationMethod enum. */
        enum CarCreationMethod {
            CAR_NEW = 0,
            CAR_INHERITED = 1,
            CAR_HP600 = 2,
            CAR_PROMOTION = 3,
            CAR_CAMPAIGN = 4
        }

        /** GameMode enum. */
        enum GameMode {
            MODE_STORY = 1,
            MODE_TIME_ATTACK = 2,
            MODE_VS_BATTLE = 3,
            MODE_GHOST_BATTLE = 4,
            MODE_EVENT = 5
        }

        /** GhostSelectionMethod enum. */
        enum GhostSelectionMethod {
            GHOST_CHALLENGE = 1,
            GHOST_SELECT_BY_LEVEL = 2,
            GHOST_SELECT_FROM_REVENGES = 3,
            GHOST_SELECT_FROM_HISTORY = 4,
            GHOST_SEARCH_BY_AREA = 5,
            GHOST_SEARCH_BY_NAME = 6,
            GHOST_SEARCH_BY_CODE = 7,
            GHOST_ACCEPT_CHALLENGER = 8,
            GHOST_APPOINTMENT = 9,
            GHOST_DEFAULT_OPPONENT = 10,
            GHOST_COMPETITION = 11
        }

        /** TeamNewsEntry enum. */
        enum TeamNewsEntry {
            NEWS_STICKER_PRIZE = 1,
            NEWS_JOINED = 2,
            NEWS_LEADER_CHANGED = 3,
            NEWS_STICKER_CHANGED = 4
        }

        /** TeamNoticeEntry enum. */
        enum TeamNoticeEntry {
            NOTICE_TEAM_PRIZE = 1,
            NOTICE_JOINED = 2,
            NOTICE_DISSOLVED = 3,
            NOTICE_LEADER_CHANGED = 4,
            NOTICE_FORCEDLY_DISSOLVED = 5
        }

        /** FileType enum. */
        enum FileType {
            FILE_PROMOTION_ANNOUNCEMENT = 1
        }

        /** CarCampaignUserState enum. */
        enum CarCampaignUserState {
            CAR_CAMPAIGN_NOT_ACCEPTED = 1,
            CAR_CAMPAIGN_ACCEPTED = 2,
            CAR_CAMPAIGN_FINISHED = 3
        }

        /** GhostCompetitionParticipantState enum. */
        enum GhostCompetitionParticipantState {
            COMPETITION_NOT_PARTICIPATED = 1,
            COMPETITION_QUALIFIED = 2,
            COMPETITION_PARTICIPATED = 3,
            COMPETITION_WON = 4
        }
    }
}
