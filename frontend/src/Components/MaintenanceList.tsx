import {Container} from "react-bootstrap";
import {MouseEvent, useEffect, useState} from "react";
import {GetAllMaintenances} from "../Api/MaintenanceApi";
import {Maintenance} from "../Models/Maintenance";
import MaintenanceListItem from "./MaintenanceListItem";
import MaintenanceFilter, {MaintenanceQueryData} from "./MaintenanceFilter";

const MaintenanceList = () => {
    const [maintenanceList, setMaintenanceList] = useState<Maintenance[]>([])

    useEffect(() => {
        GetAllMaintenances()
            .then(data => setMaintenanceList(data))
            .catch(err => console.error(err.message));
    }, [])

    const handleFilter = (queryData: MaintenanceQueryData) => (event: MouseEvent<HTMLButtonElement>) => {
        GetAllMaintenances(queryData)
            .then(data => setMaintenanceList(data))
            .catch(err => console.error(err.message));
    }

    return (
        <Container>
            <MaintenanceFilter onApplyFilter={handleFilter} />
            {maintenanceList.map(maintenance =>
                <MaintenanceListItem key={maintenance.id} maintenance={maintenance}/>
            )}
        </Container>
    );
}

export default MaintenanceList;