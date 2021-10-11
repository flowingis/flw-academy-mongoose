import axios from "axios";
import dateFormat from "dateformat";
import {Maintenance} from "../Models/Maintenance";
import {MaintenanceQueryData} from "../Components/MaintenanceFilter";
import Config from "../Config/Config";

const { BASE_URL } = Config;

export type MaintenanceDTO = {
    carId: string,
    assignerId: string,
    assigneeId: string,
    faultDescription: string
    severity: string,
    acceptanceDate: string,
    expectedTerminationDate: string,
    progress: string,
    notes: string
}

const serialize = (obj: any) => {
    const str = [];
    for (const p in obj)
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    return str.join("&");
}

const PrepareForInsert = (): MaintenanceDTO => {
    const now = new Date();
    const formattedDate = dateFormat(now, "yyyy-mm-dd");
    return {
        carId: "",
        assigneeId: "",
        assignerId: "",
        faultDescription: "",
        severity: "MEDIUM",
        acceptanceDate: formattedDate,
        expectedTerminationDate: formattedDate,
        progress: "TODO",
        notes: ""
    };
}

const GetAllMaintenances = (queryData?: MaintenanceQueryData) => {
    let queryString = serialize(queryData);
    if (queryString.length > 0) {
        queryString = '?' + queryString;
    }
    return axios
        .get<Maintenance[]>(`${BASE_URL}/api/maintenance${queryString}`)
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
}

const InsertMaintenance = (dto: MaintenanceDTO) =>
    axios
        .post<MaintenanceDTO, void>(`${BASE_URL}/api/maintenance`, dto)
        .then(response => response)
        .catch(error => {
            throw error;
        });

const CloseMaintenance = (maintenanceId: string) =>
    axios
        .patch<string, void>(`${BASE_URL}/api/maintenance/${maintenanceId}/close`)
        .then(response => response)
        .catch(error => {
            throw error;
        });

const DeleteMaintenance = (maintenanceId: string) =>
    axios
        .delete<string, void>(`${BASE_URL}/api/maintenance/${maintenanceId}`)
        .then(response => response)
        .catch(error => {
            throw error;
        });

export {
    GetAllMaintenances,
    InsertMaintenance,
    PrepareForInsert,
    CloseMaintenance,
    DeleteMaintenance
}