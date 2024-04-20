import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import postService from "../services/postService";

function UpdateModalComponent(props) {
  const [isShow, invokemodal] = useState(false);

  const initmodal = () => {
    invokemodal(!isShow);
  };

  const [title, setTitle] = useState(props.title);
  const [date, setDate] = useState(props.date);
  const [id, setId] = useState(props.id);
  const [selectedFile, setSelectedFile] = useState("");

  const handleSubmit=async(event)=>{
    event.preventDefault();

    const formData=new FormData();

    formData.append('title',title);
    formData.append('id',id);
    formData.append('date',date);

    if(selectedFile!='' && selectedFile.length!=0){
      formData.append('image',selectedFile);
    }

    const response=await postService.update(formData);
    if(response.data.success==true){
       alert(response.data.msg);
    }else{
       alert(response.data.msg);
    }

    initmodal();
  }

  return (
    <>
      <Button variant="success" onClick={initmodal}>
        Edit
      </Button>
      <Modal show={isShow}>
        <Modal.Header closeButton onClick={initmodal}>
          <Modal.Title>Update Post</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
           <input type="text" name="title"
            placeholder="Enter place title"
            value={title}
            onChange={event=>setTitle(event.target.value)}
            required/>
            <br /><br />

            <input type="date" name="date"
            value={date}
            onChange={event=>setDate(event.target.value)}
            required/>
            <br /><br />

            <input type="file" name="file"
            onChange={event=>setSelectedFile(event.target.files[0])}/>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="danger" onClick={initmodal}>
              Close
            </Button>
            <Button type="submit" variant="dark">
              Update
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default UpdateModalComponent;
