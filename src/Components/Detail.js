import React from "react";

import {Modal,Button} from 'react-bootstrap';


function Detail(props) {
 
 
 /* return (
    <div className="Detail">
      <p>{props.first_name}</p>
      <p>{props.last_name}</p>
      <p>{props.last_updated_date}</p>
    </div>
    
  )
*/
  
  
    return (
      <>
        <Modal show={props.show} onHide={props.handleClose} animation={true}>
          <Modal.Header closeButton>
            <Modal.Title>Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>{`Firstname : ${props.row.first_name}`}</Modal.Body>
          <Modal.Body>{`Lastname :  ${props.row.last_name}`}</Modal.Body>
          <Modal.Body>{`Created At  : ${props.row.created_at}`}</Modal.Body>
          <Modal.Body>{`Credit : ${props.row.credit_indicator}`}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }


export default Detail;
