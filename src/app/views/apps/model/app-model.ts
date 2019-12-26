export interface App {
    name: string;
    code: string;
    description ?: string;
    dateCreated: string;
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