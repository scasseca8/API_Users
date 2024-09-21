import { Router } from "express";
import { getUsers, createUsers, deleteUser } from "./controllers/UserController.js";



const routes = Router();


routes.get("/users", getUsers)
routes.post ("/users", createUsers)
routes.delete("/users/:id", deleteUser)


export default routes

