import { Router } from "express";
import controller from "../controllers/userController"

const routes = Router();

routes.post("/create", controller.userCreate);


export default routes;