import React from "react";
import { Modal, Row, Button, Text } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";


export default function Popupc(props) {
  const [visible, setVisible] = React.useState(true);
  const navigate = useNavigate();
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  const signin = ()=>{
    navigate("/signin");
  }
  return (
    <div>
      <Button auto color="warning" shadow onPress={handler}>
        Open modal
      </Button>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Welcome to
            <Text b size={18}>
              QUIZER
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text>
            Please login to view {props.title} 
          </Text>
          <Row justify="space-between">
            
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
          <Button auto onPress={signin}>
            Sign in
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
