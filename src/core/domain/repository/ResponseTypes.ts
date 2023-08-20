import Response from "../entity/Response";
interface BaseResponse <T>{
    response:Response;
    data:T
}

export interface SingleObjectResponse<T> extends BaseResponse<T>{
}


export interface ObjectListResponse<T> extends BaseResponse<T[]>{
}