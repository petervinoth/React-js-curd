import React,{createContext,useReducer} from "react";
import AppReducer from "./AppReducer";


//initial state
const initialState={
    users:[
        
    ]
};

//create context
export const GlobalContext=createContext(initialState);


export const GlobalProvider=({children})=>{
    console.log(children);
    const [state,dispatch]=useReducer(AppReducer,initialState);

    //action
    const removeUser=(id)=>{
        dispatch({
            type: 'REMOVE_USER',
            payload: id
          })
    }

    const AddUser=(user)=>{
        dispatch({
            type: 'ADD_USER',
            payload:user
            
        })
    }

    const EditUser=(user)=>{
        dispatch({
            type:'EDIT_USER',
            payload:user
        })
    }


    return(
        <GlobalContext.Provider value={{
        users:state.users,
        AddUser,
        EditUser,
        removeUser
        }}>
            {children}
            </GlobalContext.Provider>
    )
}