import { Request, Response } from 'express';
import jsonfile from 'jsonfile';
import { Beeper } from '../model/beeper.model';

const file = 'beepers.json';

// export async function postBeeperById(req: Request, res: Response): Promise<void> {
//     const id: string = await getBeeperByIdFromDb(req.body)
//     res.status(201).json(id)
//     return
// }

// פונקציה לקבלת כל הביפרים
export const getAllBeepers = (req: Request, res: Response) => {
    jsonfile.readFile(file, (err, obj: Beeper[]) => {
        if (!err) {
            res.status(500).send(err)
        } else {
            res.send(obj);
        }
    });
};

// פונקציה ליצירת ביפר חדש
export const createBeeper = (req: Request, res: Response) => {
    const newBeeper: Beeper = {
        name: req.body.name,
        status: 'manufactured',
        created_at: new Date(),
        latitude: req.body.latitude,
        longitude: req.body.longitude
    };

    // שומר את הביפר החדש בתוך מערך של גייסון 
    jsonfile.readFile(file, (err, obj: Beeper[]) => {
        if (err) {
            res.status(500).send(err);
        } else {
            obj.push(newBeeper);
            jsonfile.writeFile(file, obj, (err) => {
                if (!err) {
                    res.status(500).send(err);
                } else {
                    res.status(201).send(newBeeper);
                }
            });
        }
    });
};

// פונקציה לקבלת פרטי ביפר לפי id
export const getBeeperById = (req: Request, res: Response) => {
    const beeperId = parseInt(req.params.id);

    jsonfile.readFile(file, (err, obj: Beeper[]) => {
        if (err) {
            res.status(500).send(err);
        } else {
            const beeper = obj.find(b => b.id === beeperId);
            if (beeper) {
                res.send(beeper);
            } else {
                res.status(404).send('Beeper not found');
            }
        }
    });
};

// פונקציה למחיקה של ביפר
export const deleteBeeper = (req: Request, res: Response) => {
    const beeperId = parseInt(req.params.id);

    jsonfile.readFile(file, (err, obj: Beeper[]) => {
        if (err) {
            res.status(500).send(err);
        } else {
            const index = obj.findIndex(b => b.id === beeperId);
            if (index !== -1) {
                obj.splice(index, 1);
                jsonfile.writeFile(file, obj, (err) => {
                    if (err) {
                        res.status(500).send(err);
                    } else {
                        res.status(204).send();
                    }
                });
            } else {
                res.status(404).send('Beeper not found');
            }
        }
    });
};