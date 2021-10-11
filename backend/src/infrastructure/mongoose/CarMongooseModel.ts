import {model, Schema} from 'mongoose';

interface CarDocument {
    plate: string,
    brand: string,
    model: string,
    year: number
}

const carSchema = new Schema<CarDocument>({
    plate: { type: String, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true }
});

const CarMongooseModel = model<CarDocument>('car', carSchema);

export default CarMongooseModel;