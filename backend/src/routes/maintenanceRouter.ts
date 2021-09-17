import express, {Request, Response} from "express";

let router = express.Router();

router.get('/', (req: Request, res: Response) => {
    console.log(req.query);

    const now = new Date();
    const fakeData = [
        {
            id: '571b43f1-1448-44bf-82cf-0030fc3dedcd',
            reportingDate: now,
            car: {
                id: 'a567e899-ea87-492a-919b-62f0123b699e',
                plate: 'AB000EN',
                brand: 'Fiat',
                model: 'Punto 1.2 16v',
                year: 1996
            },
            assigner: {
                id: 'f4dc2c8e-9240-444f-9221-6b9e27320937',
                nickname: 'mariorossi',
                firstname: 'Mario',
                lastname: 'Rossi',
                roles: ['DRIVER']
            },
            assignee: {
                id: 'b48b53a0-f616-479a-976b-33524fba4d55',
                nickname: 'lucabianchi',
                firstname: 'Luca',
                lastname: 'Bianchi',
                roles: ['MAINTAINER', 'ADMIN']
            },
            faultDescription: 'guasto al cambio',
            severity: 'MEDIUM',
            acceptanceDate: now,
            expectedTerminationDate: now,
            progress: 'TODO',
            notes: 'Si è rotto mentre scalava dalla 4 alla 3 marcia'
        },
        {
            id: 'de05f948-99ac-405a-a725-405b103f9ccd',
            reportingDate: now,
            car: {
                id: 'a567e899-ea87-492a-919b-62f0123b699e',
                plate: 'BZ123TP',
                brand: 'Ford',
                model: 'Fiesta 1.4 TDI',
                year: 2002
            },
            assigner: {
                id: '53fb1172-ba4a-42e5-8296-959c6927958f',
                nickname: 'brunoverdi',
                firstname: 'Bruno',
                lastname: 'Verdi',
                roles: ['DRIVER']
            },
            assignee: {
                id: 'b48b53a0-f616-479a-976b-33524fba4d55',
                nickname: 'lucabianchi',
                firstname: 'Luca',
                lastname: 'Bianchi',
                roles: ['MAINTAINER', 'ADMIN']
            },
            faultDescription: 'specchietto destro rotto',
            severity: 'LOW',
            acceptanceDate: now,
            expectedTerminationDate: now,
            progress: 'DOING',
            notes: 'Si è rotto durante una manovra di parcheggio'
        }
    ];

    res.json(fakeData);
});

router.post('/', (req: Request, res: Response) => {
    console.log(req.body)
    res.send();
});

router.patch('/:id/close', (req: Request, res: Response) => {
    console.log(req.params)
    res.send();
});

router.delete('/:id', (req: Request, res: Response) => {
    console.log(req.params)
    res.send();
});

export default router;