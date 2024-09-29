import { Router } from 'express';
import { getAllBeepers, createBeeper, getBeeperById, deleteBeeper } from '../controller/beeper.controller';

const router = Router();

// נתיב לקבלת כל הביפרים
router.get('/beepers', getAllBeepers);

// נתיב ליצירת ביפר חדש
router.post('/beepers', createBeeper);

// נתיב לקבלת פרטי ביפר לפי מזהה
router.get('/beepers/:id', getBeeperById);

// נתיב למחיקת ביפר
router.delete('/beeper/:id', deleteBeeper)

export default router;
