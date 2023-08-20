import Response from "../entity/Response";
export interface ResponseOnly{
    response:Response;
}

export interface ResponseWithObject<Object>{
    response:Response;
    object: Object;
}


export interface ResponseWithObjects<Object>{
    response:Response;
    objects: Object[];
}