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

maintenanceSchema.index({ reportingDate: 1 });

const MaintenanceMongooseModel = model<MaintenanceDocument>('maintenance', maintenanceSchema);

maintenanceSchema.methods.FindWithAggregation = async (params) => {
    return MaintenanceMongooseModel
        .aggregate<MaintenanceDocument>([
            {
                $match: params,
            }, {
                '$lookup': {
                    'from': 'cars',
                    'localField': 'carId',
                    'foreignField': '_id',
                    'as': 'tmpCar'
                }
            }, {
                '$lookup': {
                    'from': 'users',
                    'localField': 'assigneeId',
                    'foreignField': '_id',
                    'as': 'tmpAssignee'
                }
            }, {
                '$lookup': {
                    'from': 'users',
                    'localField': 'assignerId',
                    'foreignField': '_id',
                    'as': 'tmpAssigner'
                }
            }, {
                '$addFields': {
                    'car': {
                        '$arrayElemAt': [
                            '$tmpCar', 0
                        ]
                    },
                    'assignee': {
                        '$arrayElemAt': [
                            '$tmpAssignee', 0
                        ]
                    },
                    'assigner': {
                        '$arrayElemAt': [
                            '$tmpAssigner', 0
                        ]
                    }
                }
            }, {
                '$addFields': {
                    'id': '$_id',
                    'car.id': '$car._id',
                    'assignee.id': '$assignee._id',
                    'assigner.id': '$assigner._id'
                }
            }, {
                '$unset': [
                    'tmpCar', 'tmpAssignee', 'tmpAssigner', 'carId', 'assignerId', 'assigneeId', '__v', '_id', 'car._id', 'assignee._id', 'assigner._id'
                ]
            }
        ])
        .sort({ reportingDate: 1 });
}

export default MaintenanceMongooseModel;