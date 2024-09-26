import { Router } from 'express';
import { getAllBeepers, createBeeper, getBeeperById, updateBeeperStatus, deleteBeeper, getBeepersByStatus } from '../controller/beeper.controller';

const router = Router();

// נתיב לקבלת כל הביפרים
router.get('/api/beepers', getAllBeepers);

// נתיב ליצירת ביפר חדש
router.post('/api/beepers', createBeeper);

// נתיב לקבלת פרטי ביפר לפי מזהה
router.get('/api/beepers/:id', getBeeperById);

export default router;
