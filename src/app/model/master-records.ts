export interface Country {
    name: string;
    alpha3: string;
    alpha2: string;
    status: string;
    internationalDialingCode: number;
    id: number;
}

export interface State {
    name: string;
    code: string;
    status: string;
    id: number;
}

export interface SelectUi {
    name: string;
    value: string;
}
