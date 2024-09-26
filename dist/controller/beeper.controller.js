"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBeeperById = exports.createBeeper = exports.getAllBeepers = void 0;
const jsonfile_1 = __importDefault(require("jsonfile"));
const file = 'beepers.json';
// export async function postBeeperById(req: Request, res: Response): Promise<void> {
//     const id: string = await getBeeperByIdFromDb(req.body)
//     res.status(201).json(id)
//     return
// }
// פונקציה לקבלת כל הביפרים
const getAllBeepers = (req, res) => {
    jsonfile_1.default.readFile(file, (err, obj) => {
        if (!err) {
            res.status(500).send(err);
        }
        else {
            res.send(obj);
        }
    });
};
exports.getAllBeepers = getAllBeepers;
// פונקציה ליצירת ביפר חדש
const createBeeper = (req, res) => {
    const newBeeper = {
        name: req.body.name,
        status: 'manufactured',
        created_at: new Date(),
        latitude: req.body.latitude,
        longitude: req.body.longitude
    };
    // שומר את הביפר החדש בתוך מערך של גייסון 
    jsonfile_1.default.readFile(file, (err, obj) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            obj.push(newBeeper);
            jsonfile_1.default.writeFile(file, obj, (err) => {
                if (!err) {
                    res.status(500).send(err);
                }
                else {
                    res.status(201).send(newBeeper);
                }
            });
        }
    });
};
exports.createBeeper = createBeeper;
// פונקציה לקבלת פרטי ביפר לפי id
const getBeeperById = (req, res) => {
    const beeperId = parseInt(req.params.id);
    jsonfile_1.default.readFile(file, (err, obj) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            const beeper = obj.find(b => b.id === beeperId);
            if (beeper) {
                res.send(beeper);
            }
            else {
                res.status(404).send('Beeper not found');
            }
        }
    });
};
exports.getBeeperById = getBeeperById;
