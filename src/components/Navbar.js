import { Button, Navbar, Modal,ModalHeader,ModalBody,ModalTitle } from "react-bootstrap"
import logo from '../components/immagini/logo.png';
import { useState } from "react";


function NavbarComponent() {
const [show , setShow] = useState(false);
const handleClose = () => setShow (false);;
const handleShow = () => setShow (true);;

  return (
<>
    <Navbar style={{ backgroundColor: "black" }} expand="sm" >
      <img style={{ height: "110px", width: "110px" }} className="logo" src={logo} alt="..." />
      <Navbar.Toggle />
      <a style={{ marginLeft: "30px", color: "white" }} className="nav-link" aria-current="page" href="home">Home</a>
      <a style={{ marginLeft: "30px", color: "white" }} className="nav-link" aria-current="page" href="info">Contatti</a>

     <Button style={{ marginLeft: "30px" }} onClick={handleShow} >Carrello 0 </Button>
      <Navbar.Collapse  className="justify-content-end">
      <form style={{ marginRight: "40px" }} className="d-flex">
          <input className="form-control me-2" type="Cerca prodotti" placeholder="Cerca prodotti" aria-label="Cerca prodotti" />
          <button className="btn btn-outline-success" type="submit">Cerca</button>
        </form>

      </Navbar.Collapse>
     </Navbar>

     <Modal show={show}  onHide={handleClose}>
      <ModalHeader closeButton>
<ModalTitle>Shopping cart</ModalTitle>
</ModalHeader>
<ModalBody>
  <h1>questa è una</h1>
</ModalBody>


     </Modal>

     </>





  )
}

export default NavbarComponent;


















