import {model, Schema} from 'mongoose';

interface MaintenanceDocument {
    reportingDate: Date,
    carId: Schema.Types.ObjectId,
    assignerId: Schema.Types.ObjectId,
    assigneeId: Schema.Types.ObjectId,
    faultDescription: string
    severity: string,
    acceptanceDate: Date,
    expectedTerminationDate: Date,
    progress: string,
    notes: string
}

const maintenanceSchema = new Schema<MaintenanceDocument>({
    reportingDate: { type: Date, required: true },
    carId: { type: Schema.Types.ObjectId, required: true },
    assignerId: { type: Schema.Types.ObjectId, required: true },
    assigneeId: { type: Schema.Types.ObjectId, required: true },
    faultDescription: { type: String, required: true },
    severity: { type: String, required: true },
    acceptanceDate: Date,
    expectedTerminationDate: Date,
    progress: { type: String, required: true },
    notes: String
});

const MaintenanceMongooseModel = model<MaintenanceDocument>('maintenance', maintenanceSchema);

export default MaintenanceMongooseModel;