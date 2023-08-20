export default class Response{
    status:number;
    msg:string;
    constructor(msg:string, status:number){
        this.msg = msg;
        this.status = status;
    }
}