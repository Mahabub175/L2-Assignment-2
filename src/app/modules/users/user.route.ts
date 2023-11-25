import express  from "express";
import { UserControllers } from "./users.controller";

const router=express.Router();

router.post("/",UserControllers.createUsers)

router.get("/",UserControllers.getAllUsers)

router.get("/:userId",UserControllers.getSingleUser)


export const UserRoutes=router