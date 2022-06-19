import React from "react";
import Nav from 'react-bootstrap/Nav'
import { Container } from "@mui/system";
import DashboardIcon from '@mui/icons-material/Dashboard';
import Navbar from 'react-bootstrap/Navbar'
import PersonIcon from '@mui/icons-material/Person';
// import { Button} from "@mui/material";
// import Form from 'react-bootstrap/Form';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
function AdminPanel(){
  return(
    <div>
    <div>
    <Navbar bg="primary" expand="lg">
      <Container fluid>
        <Navbar.Brand ><AdminPanelSettingsIcon/> Admin Panel</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
        <Navbar.Collapse id="navbarScroll">
          <Nav
            // className="me-auto my-2 my-lg-0"
            // style={{ maxHeight: '100px' }}
            // navbarScroll
          >
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  <div>
    <Nav defaultActiveKey="/home"  varient="pills" className="flex-column">
     <Nav.Link eventKey="#dashboard"><DashboardIcon/> Dashboard</Nav.Link>
      <Nav.Link  eventKey="#student"><PersonIcon/> Student</Nav.Link>
      <Nav.Link href="/stud">Option</Nav.Link>
    </Nav>
    </div>
</div>
  )
}
export default AdminPanel;