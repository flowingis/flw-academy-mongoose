import axios from "axios";
import {Car} from "../Models/Car";
import Config from "../Config/Config";

const { BASE_URL } = Config;

const GetAllCars = () => {
    return axios
        .get<Car[]>(`${BASE_URL}/api/car`)
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
}

export {
    GetAllCars
}