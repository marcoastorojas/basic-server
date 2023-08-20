import Controller from "../../ControllerInterface";

export default interface ControllerFactory{
    create():Controller
}