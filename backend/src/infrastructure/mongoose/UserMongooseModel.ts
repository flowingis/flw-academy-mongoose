import {model, Schema} from 'mongoose';

interface UserDocument {
    nickname: string,
    firstname: string,
    lastname: string,
    roles: string[]
}

const userSchema = new Schema<UserDocument>({
    nickname: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    roles: [{ type: String }]
});

const UserMongooseModel = model<UserDocument>('user', userSchema);

export default UserMongooseModel;