import React,{useContext, useState,useEffect} from "react";
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

export const Edit=(props)=>{
    const {EditUser,users}=useContext(GlobalContext);
    const[selectedUser,setSelectedUser]=useState({
        id:'',
        name:''
    });
    const currentUserId = props.match.params.id;
    const history=useHistory();

    useEffect(()=>{
        const userId=currentUserId;
        const selectedUser=users.find(user=>user.id===userId);
        setSelectedUser(selectedUser);
    },[currentUserId,users])

    

    const onSubmits=(e)=>{
       e.preventDefault();
       EditUser(selectedUser);
        history.push("/");

    }
    const onChange=(e)=>{
       setSelectedUser({...selectedUser,[e.target.name]:e.target.value})
    }
    
 
    
    return(
        
         <Form onSubmit={onSubmits}>
             <FormGroup>
                 <Label>Name:</Label>
                 <Input type="text" onChange={onChange} value={selectedUser.name} name="name" placeholder="Enter Name"></Input>
             </FormGroup>
             <Button type="submit">Edit</Button>
             <Link to="/" className="btn btn-danger ml-2">Home</Link>
         </Form>
           
    )
}

