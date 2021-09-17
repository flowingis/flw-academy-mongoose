import {Container, Nav, Navbar} from "react-bootstrap";

const Navigation = () => {
    return(
        <div>
            <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src="/mongoose-logo.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                        {'  '}
                        Workshop Mongoose
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link href="/">Elenco manutenzioni</Nav.Link>
                            <Nav.Link href="/create-maintenance">Crea manutenzione</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navigation;