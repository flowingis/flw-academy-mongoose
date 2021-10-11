import express, {Express, Request, Response} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { connect } from 'mongoose';
import maintenanceRouter from "./routes/maintenanceRouter";
import carRouter from "./routes/carRouter";
import userRouter from "./routes/userRouter";

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
app.use('/api/user', userRouter);
app.use('/api/car', carRouter);

app.listen(port, async () => {
    await connect(mongoUrl);
    console.log(`server running on port ${port}`);
});