import express, {Express, Request, Response} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import maintenanceRouter from "./routes/maintenanceRouter";
import { connect } from 'mongoose';

const app: Express = express();
const port = 8000;
const mongoUrl = 'mongodb://localhost:27017/workshop';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.get('/health', (req: Request, res: Response) => {
    res.send("Ready!");
});

app.use('/api/maintenance', maintenanceRouter);

app.listen(port, async () => {
    await connect(mongoUrl);
    console.log(`server running on port ${port}`);
});