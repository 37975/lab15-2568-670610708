import { Router, type Request, type Response } from "express";
import { success } from "zod";
const router = Router();

router.get("/",(req: Request, res: Response) => {
    return res.json({
        success: true,
        message: "Student Information",
        data: {
            studentId: "670610708",
            firstName: "Teejutha",
            lastName: "Konsombat",
            program: "CPE",
            section: "001",
        }
    });
});

export default router;
