import React,{useContext, useState} from "react";
import {Link,useHistory} from "react-router-dom";
import {GlobalContext, GlobalProvider} from "../context/GlobalState";
import { v4 as uuid } from "uuid";


import  {
    Form,
    FormGroup,
    Label,
    Button,
    Input
} from 'reactstrap';

export const Add=()=>{
    const {AddUser}=useContext(GlobalContext);
    const history=useHistory();
    const[name,setName]=useState('');

    const onSubmits=(e)=>{
        e.preventDefault();
    const newusr={
     id:uuid(),
     name
     };
      AddUser(newusr);

        history.push("/");

    }
    const onChange=(e)=>{
        setName(e.target.value);
       // console.log(e.target.value);
    }
 
    return(
       
         <Form onSubmit={onSubmits}>
             <FormGroup>
                 <Label>Name:</Label>
                 <Input type="text" value={name} onChange={onChange}  placeholder="Enter Name"></Input>
             </FormGroup>
             <Button type="submit">submit</Button>
             <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
         </Form>
            
    )
}
