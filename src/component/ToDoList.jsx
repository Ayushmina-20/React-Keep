import React, { useState } from "react"; 
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import ListCom from "./ListCom";
const ToDoList = () => {
const [item, setltem] = useState();
const [newitem, setNewltem] = useState([]);
const itemEvent = (e) =>  {
    

setltem(e.target.value);
};
const listOfltems = () =>{
    setNewltem((prevValue) => { 
    return [...prevValue, item];
});
    setltem("") ;
    
};
return(
    <>
<div className="main_div">
<div className="center_div">
<br /> 
<hl> ToDo List </hl>
<br /> 
<input type="text"value={item}placeholder="Add an Items"onChange={itemEvent}/>
<Button className="newBtn"  onClick={listOfltems}>
<AddIcon/>
</Button>
<br/>
<ol>
{newitem.map((val,index)=>{
    return <ListCom key={index} text={val}/>;
})}
</ol>
<br/>

</div>
</div>
    </>
);

};
export default ToDoList;
