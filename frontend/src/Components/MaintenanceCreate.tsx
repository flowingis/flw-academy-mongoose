import {Button, Container, Form} from "react-bootstrap";
import {InsertMaintenance, MaintenanceDTO, PrepareForInsert} from "../Api/MaintenanceApi";
import React, {ChangeEvent, FormEvent, useState} from "react";
import {CARS, USERS} from "../Data/FakeData";
import Notification, {NotificationProps} from "./Notification";

const MaintenanceCreate = () => {
    const [data, setData] = useState<MaintenanceDTO>(PrepareForInsert())
    const [notification, setNotification] = useState<NotificationProps>(Object.assign({}, { show: false }) as NotificationProps);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        InsertMaintenance(data)
            .then(() => setNotification({
                header: "Maintenance Created",
                message: "Maintenance was created successfully",
                show: true,
                onClose: () => setNotification({...notification, show: false})
            }))
            .catch(err => setNotification({
                header: "Error",
                message: err.response.data,
                show: true,
                onClose: () => setNotification({...notification, show: false})
            }));
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setData({...data, [event.target.id]: event.target.value});
    }

    return(
      <Container>
          <Notification
              header={notification.header}
              message={notification.message}
              show={notification.show}
              onClose={notification.onClose}
          />
          <Form onSubmit={handleSubmit}>
              <Form.Group controlId="carId">
                  <Form.Label>Car</Form.Label>
                  <Form.Control as="select" placeholder="Select car" value={data.carId} onChange={handleChange}>
                      <option key={"empty-value"} value={""}>{"--SELECT CAR--"}</option>
                      {CARS.map(car => <option key={car.id} value={car.id}>{car.name}</option>)}
                  </Form.Control>
              </Form.Group>
              <Form.Group controlId="assignerId">
                  <Form.Label>Assigner</Form.Label>
                  <Form.Control as="select" placeholder="Select assigner" value={data.assignerId} onChange={handleChange}>
                      <option key={"empty-value"} value={""}>{"--SELECT ASSIGNER--"}</option>
                      {USERS.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
                  </Form.Control>
              </Form.Group>
              <Form.Group controlId="severity">
                  <Form.Label>Severity</Form.Label>
                  <Form.Control as="select" placeholder="Select severity" value={data.severity} onChange={handleChange}>
                      <option key={"LOW"} value={"LOW"}>LOW</option>
                      <option key={"MEDIUM"} value={"MEDIUM"}>MEDIUM</option>
                      <option key={"HIGH"} value={"HIGH"}>HIGH</option>
                  </Form.Control>
              </Form.Group>
              <Form.Group controlId="faultDescription">
                  <Form.Label>Fault Description</Form.Label>
                  <Form.Control type="text" placeholder="Enter fault description" value={data.faultDescription} onChange={handleChange}/>
              </Form.Group>
              <Form.Group controlId="acceptanceDate">
                  <Form.Label>Acceptance date</Form.Label>
                  <Form.Control type="date" placeholder="Enter acceptance date" value={data.acceptanceDate} onChange={handleChange}/>
              </Form.Group>
              <Form.Group controlId="progress">
                  <Form.Label>Progress</Form.Label>
                  <Form.Control as="select" placeholder="Select progress" value={data.progress} onChange={handleChange}>
                      <option key={"TODO"} value={"TODO"}>TODO</option>
                      <option key={"DOING"} value={"DOING"}>DOING</option>
                      <option key={"DONE"} value={"DONE"}>DONE</option>
                  </Form.Control>
              </Form.Group>
              <Form.Group controlId="assigneeId">
                  <Form.Label>Assignee</Form.Label>
                  <Form.Control as="select" placeholder="Select assignee" value={data.assigneeId} onChange={handleChange}>
                      <option key={"empty-value"} value={""}>{"--SELECT ASSIGNEE--"}</option>
                      {USERS
                          .filter(user => user.roles.includes("maintainer"))
                          .map(user => <option key={user.id} value={user.id}>{user.name}</option>)
                      }
                  </Form.Control>
              </Form.Group>
              <Form.Group controlId="expectedTerminationDate">
                  <Form.Label>Expected Termination Date</Form.Label>
                  <Form.Control type="date" placeholder="Enter expected termination date" value={data.expectedTerminationDate} onChange={handleChange}/>
              </Form.Group>
              <Form.Group controlId="notes">
                  <Form.Label>Notes</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Enter notes" value={data.notes} onChange={handleChange}/>
              </Form.Group>
              <Button className="mt-2" variant="primary" type="submit">
                  Conferma
              </Button>
          </Form>
      </Container>
    );
}

export default MaintenanceCreate;