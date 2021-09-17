import express, {Express, Request, Response} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import maintenanceRouter from "./routes/maintenanceRouter";

const app: Express = express();
const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.get('/health', (req: Request, res: Response) => {
    res.send("Ready!");
});

app.use('/api/maintenance', maintenanceRouter);

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});