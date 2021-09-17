import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Maintenance} from "../Models/Maintenance";
import React, {MouseEvent, useState} from "react";
import {CloseMaintenance, DeleteMaintenance} from "../Api/MaintenanceApi";
import Notification, {NotificationProps} from "./Notification";

type MaintenanceProps = {
    maintenance: Maintenance
}

const MaintenanceListItem = ({ maintenance }: MaintenanceProps) => {
    const [notification, setNotification] = useState<NotificationProps>(Object.assign({}, { show: false }) as NotificationProps);

    const handleClose = (id: string) => (event: MouseEvent<HTMLButtonElement>) => {
        CloseMaintenance(id)
            .then(() => setNotification({
                header: "Maintenance Closed",
                message: "Maintenance was closed successfully",
                show: true,
                onClose: () => setNotification({...notification, show: false})
            }))
            .catch(err => {
                setNotification({
                    header: "Error",
                    message: "Server Error!",
                    show: false,
                    onClose: () => setNotification({...notification, show: false})
                })
                console.error(err.message);
            });
    }

    const handleDelete = (id: string) => (event: MouseEvent<HTMLButtonElement>) => {
        DeleteMaintenance(id)
            .then(() => setNotification({
                header: "Maintenance Deleted",
                message: "Maintenance was deleted successfully",
                show: true,
                onClose: () => setNotification({...notification, show: false})
            }))
            .catch(err => {
                setNotification({
                    header: "Error",
                    message: "Server Error!",
                    show: false,
                    onClose: () => setNotification({...notification, show: false})
                })
                console.error(err.message)
            });
    }

    return (
        <div>
            <Notification
                header={notification.header}
                message={notification.message}
                show={notification.show}
                onClose={notification.onClose}
            />
            <Card key={maintenance.id} className={"mb-2"}>
                <Card.Title>
                    <Container>
                        <Row>
                            <Col>{maintenance.car.brand} {maintenance.car.model} ({maintenance.car.year}) - <strong>{maintenance.car.plate}</strong></Col>
                        </Row>
                    </Container>
                </Card.Title>
                <Card.Body>
                    <Container>
                        <Row>
                            <Col>Reporting Date: <strong>{maintenance.reportingDate}</strong></Col>
                            <Col>Severity: <strong>{maintenance.severity}</strong></Col>
                        </Row>
                        <Row>
                            <Col>Fault Description: <strong>{maintenance.faultDescription}</strong></Col>
                        </Row>
                        <Row>
                            <Col>Acceptance Date: <strong>{maintenance.acceptanceDate}</strong></Col>
                            <Col>Progress: <strong>{maintenance.progress}</strong></Col>
                        </Row>
                        <Row>
                            <Col>Assigner: <strong>{maintenance.assigner.nickname}</strong> ({maintenance.assigner.firstname} {maintenance.assigner.lastname})</Col>
                            <Col>Assignee: <strong>{maintenance.assignee.nickname}</strong> ({maintenance.assignee.firstname} {maintenance.assignee.lastname})</Col>
                        </Row>
                        <Row>
                            <Col>Expected Termination Date: <strong>{maintenance.expectedTerminationDate}</strong></Col>
                        </Row>
                        <Row>
                            <Col>Notes: {maintenance.notes}</Col>
                        </Row>
                    </Container>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary" onClick={handleClose(maintenance.id)}>Close</Button>
                    <span>  </span>
                    <Button variant="danger" onClick={handleDelete(maintenance.id)}>Delete</Button>
                </Card.Footer>
            </Card>
        </div>
    );
}

export default MaintenanceListItem;