import axios from "axios";
import React, {useState} from "react";
import {Form, FormGroup, Label, Col, Input, FormText, Button} from 'reactstrap';
import { useNavigate } from "react-router-dom";

const Addbook = () => {
  const nav = useNavigate();
  const [name, setname] = useState();
  const [author, setauthor] = useState();
  const [description, setdescription] = useState();
  const [rating, setrating] = useState(0);
  const [image, setimage] = useState();

  const postBook = () => {
    let data = {
      "name": name,
  "description": description,
  "image": image,
  "rating": rating,
  "author": author
    }
    axios.post('http://localhost:5000/books', data)
    .then(res => {
      alert("book added successfullly!");
      nav('/')
    })
    .catch(err=>alert(err));
  }

  return (
    <div className="add_container">
      <h1 style={{marginBottom:"25px"}}>Add New Book</h1>
      <Form>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>
            Name
          </Label>
          <Col sm={10}>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="enter book name"
              type="email"
              onChange={(e)=>setname(e.target.value)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={2}>
            Author
          </Label>
          <Col sm={10}>
            <Input
              id="examplePassword"
              name="password"
              placeholder="password placeholder"
              type="text"
              onChange={(e)=>setauthor(e.target.value)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleSelect" sm={2}>
            Rating
          </Label>
          <Col sm={10}>
            <Input id="exampleSelect" name="select" type="select" onChange={(e)=>setrating(e.target.value)}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>
            Description
          </Label>
          <Col sm={10}>
            <Input id="exampleText" name="text" type="textarea" onChange={(e)=>setdescription(e.target.value)} />
          </Col>
        </FormGroup>
        
        <FormGroup row>
          <Label for="imageurl" sm={2}>
            Image url
          </Label>
          <Col sm={10}>
            <Input
              id="id_imgurl"
              name="imageurl"
              placeholder="enter  url of image"
              type="text"
              onChange={(e)=>setimage(e.target.value)}
            />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col
            sm={{
              offset: 2,
              size: 10,
            }}
          >
            <Button onClick={()=>postBook()}>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
};

export default Addbook;
