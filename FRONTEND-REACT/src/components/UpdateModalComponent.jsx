import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function UpdateModalComponent() {

   const[isShow,invokemodal]=useState(false);

   const initmodal=()=>{
    invokemodal(!isShow);
   }

  return (
  <> <Button variant="success" onClick={initmodal}>Edit</Button>

  <Modal show={isShow}>
       <Modal.Header closeButton onClick={initmodal}>
        <Modal.Title>Update Post</Modal.Title>
       </Modal.Header>

       <Modal.Body>
          This is my react bootstrap modal!
       </Modal.Body>

       <Modal.Footer>
         
         <Button variant="danger" onClick={initmodal}>Close</Button>
         <Button variant="dark" onClick={initmodal}>Update</Button>

       </Modal.Footer>

  </Modal>
  </>);
}

export default UpdateModalComponent;
