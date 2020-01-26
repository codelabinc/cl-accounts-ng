export interface App {
    name: string;
    code: string;
    description ?: string;
    dateCreated: string;
    webHook: WebHook;
    events: EventNotification[];
    roles: Role[];
    permissions: Permission[];
    appPermissions: Permission[];
}

export interface AppStatistics {
    totalActiveAccounts: number;
    totalActiveUsers: number;
}

export interface EventNotification {
    type: string;
    status: string;
    payload?: string;
    id: number;
    selected: boolean;
}

export interface WebHook {
    testUrl: string;
    liveUrl: string;
    events: string[];
}

export interface Role {
    name: string;
    id: number;
    app: App;
}

export interface PermissionFactory {
    name: string,
    role: string;
}

export interface Permission {
    name: string;
    id: number;
    role: Role;
}