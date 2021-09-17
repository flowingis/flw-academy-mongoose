import {Button, Card, Col, Form, Row} from "react-bootstrap";
import React, {ChangeEvent, MouseEvent, useState} from "react";

type MaintenanceFilterProps = {
    onApplyFilter: (queryData: MaintenanceQueryData) => (event: MouseEvent<HTMLButtonElement>) => void
}

export type MaintenanceQueryData = {
    reportingDateFrom: string | undefined,
    reportingDateTo: string | undefined,
};

const MaintenanceFilter = (props: MaintenanceFilterProps) => {
    const [queryData, setQueryData] = useState<MaintenanceQueryData>({} as MaintenanceQueryData)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setQueryData({...queryData, [event.target.id]: event.target.value});
    }

    return (
        <Card className={"mb-4"}>
            <Card.Title>Filters</Card.Title>
            <Card.Body>
                <Form>
                    <Row className="g-2">
                        <Col>
                            <Form.Group controlId={"reportingDateFrom"}>
                                <Form.Label>Reporting date - From</Form.Label>
                                <Form.Control type="date" placeholder="Enter reporting date - from" value={queryData.reportingDateFrom || ""} onChange={handleChange}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId={"reportingDateTo"}>
                                <Form.Label>To</Form.Label>
                                <Form.Control type="date" placeholder="Enter reporting date - to" value={queryData.reportingDateTo || ""} onChange={handleChange}/>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
            <Card.Footer>
                <Button variant="primary" onClick={props.onApplyFilter(queryData)}>Apply</Button>
            </Card.Footer>
        </Card>
    );
}

export default MaintenanceFilter;