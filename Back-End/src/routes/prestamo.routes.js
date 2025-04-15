import { Router } from "express";
import { getPrestamos,getPrestamo,createPrestamo } from "../controllers/prestamo.routes.js";

const router = Router();

router.get('/prestamos', getPrestamos);
router.get('/prestamos/:id', getPrestamo);
router.post('/createPrestamo',createPrestamo)

export default router;