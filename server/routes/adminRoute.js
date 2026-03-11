import express from "express";
import {
  createAdmin,
  getAdmins,
  getAdminById,
  updateAdmin,
  deleteAdmin,
  loginAdmin,
} from "../controller/adminController.js";

const adminRouter = express.Router();

adminRouter.post("/admin", createAdmin);
adminRouter.get("/admins", getAdmins);
adminRouter.get("/admin/:id", getAdminById);
adminRouter.put("/update/admin/:id", updateAdmin);
adminRouter.delete("/delete/admin/:id", deleteAdmin);
adminRouter.post("/login", loginAdmin);

export default adminRouter;
