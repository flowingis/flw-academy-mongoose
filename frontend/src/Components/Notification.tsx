import { Toast } from "react-bootstrap";

export type NotificationProps = {
    header: string,
    message: string,
    show: boolean,
    onClose: () => void
}

const Notification = (props: NotificationProps) => {
    return (
        <Toast
            className={"p-3 mb-3"}
            style={{backgroundColor: '#FABB7D',}}
            show={props.show}
            onClose={props.onClose}
            animation={false}
        >
            <Toast.Header>
                <strong className="me-auto">{props.header}</strong>
            </Toast.Header>
            <Toast.Body>{props.message}</Toast.Body>
        </Toast>
    )
}

export default Notification;