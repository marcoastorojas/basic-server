import UserService from "../../../../features/userManagement/application/userService";
import UserController from "../../../../features/userManagement/infrastructure/controllers/UserController";
import UserRepository from "../../../../features/userManagement/infrastructure/repository/UserRepository";
import Controller from "../../ControllerInterface";
import ControllerFactory from "./ControllerFactory";

export default class UserControllerFactory implements ControllerFactory{
    create(): Controller {
        const userRepository = new UserRepository();
        const userService = new UserService(userRepository);
        return new UserController(userService)
    }
}