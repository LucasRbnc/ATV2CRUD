import { Router } from "express";
import userRoutes from "./userRoute";

const routes = Router();

routes.use("/user", userRoutes);

export default routes;