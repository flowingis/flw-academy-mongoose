import axios from "axios";
import {User} from "../Models/User";
import Config from "../Config/Config";

const { BASE_URL } = Config;

const GetAllUsers = () => {
    return axios
        .get<User[]>(`${BASE_URL}/api/user`)
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
}

export {
    GetAllUsers
}