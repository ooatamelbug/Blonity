export interface ResponseDataInterface {
    data?: [any];
    message?: string;
    errors?: [any];
    url?: string;
    time?:  string;
}

export interface ReturnDataInterface {
    statusCode: number;
    response: ResponseDataInterface
}