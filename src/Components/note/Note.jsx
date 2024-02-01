import React, {  useState } from 'react'
import "./note.css"
import NoteCard from './NoteCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from './Update';
import axios from 'axios';
// import { useEffect } from 'react'
  let id= sessionStorage.getItem("id");
const Note = () => {
    const [Inputs, setInputs] = useState({
      title: "",
       body: "",
      });
    const [Array,setArray]= useState([]);
    //  useEffect( ()=>{
    //   const fetch = async() => {
    //     await axios
    //     .get("http://localhost:3001/api/v2/getTasks/${id}")
    //     .then((response)=>{
    //       console.log(response);
    //     });
    //   };
    //   fetch();
    // }, []);

    const show = ()=>{
        document.getElementById("textarea").style.display = "block";
        
    };
    const Change=(e) => {
const {name, value} = e.target;
setInputs({ ...Inputs,[name]:value});
    };
    const submit= async()=>{
        if (Inputs.title ==="" || Inputs ===""){
             toast.error("Title Or Body Can't Be Empty");
        }else{
          if (id){
            await axios.post("http://localhost:3001/api/v2/addTask",{
              title:Inputs.title,
              body:Inputs.body,
               id:id,
              })
            .then((response)=>{
              console.log(response);
            });
            toast.success("Your Task Is Added");
            toast.error("Your Task Is Not Saved ! Please SignUp"); 
          }
          else{
            setArray([...Array,Inputs])
            setInputs({title: "", body: ""})
            toast.success("Your Task Is Added");
            toast.error("Your Task Is Not Saved ! Please SignUp"); 
          }
          
         
          
        }
        
    };
    const del=(id)=>{
        Array.splice(id,"1");
        setArray([...Array]);
    };
    const dis=(value)=>{
        console.log(value);
        document.getElementById("note-update").style.display = value;
    }
  return(
    <>
  <div className="note">

    <ToastContainer/>
    <div className="node-main container d-flex  justify-content-center align-items-center my-4 flex-column">
        <div className="d-flex flex-column node-inputs-div w-50 p-1"> 
        <input
         type="text"
          placeholder="TITLE"
           className="my-2 p-2 node-inputs"
           onClick={show} 
           name="title"
           value={Inputs.title}
           onChange={Change}
           />
        <textarea 
        id="textarea"
        type="text" 
        placeholder="BODY"
         className="p-2 node-inputs"
         name="body"
         value={Inputs.body}
         onChange={Change}
         />
        </div>
        <div className="w-50 d-flex justify-content-end my-3">
        <button className="home-btn px-2 py-1"onClick={submit}>Add</button>
        </div>
        
        
    </div>
   <div className="node-body">
    <div className="container-fluid">
        <div className="row ">
          {Array &&
          Array.map((item,index)=>(
            <div className="col-lg-3 col-10 mx-5 my-2" key={index}>
                <NoteCard
                 title={item.title}
                  body={item.body} 
                  id={index} 
                  delid={del}
                  display={dis}
                  />
                </div>
          ))
          }  
            
       
            </div>
        </div>
       
    </div>
   </div>
   <div className="note-update " id="note-update">
    <div className="container">
    <Update display={dis}/>
    </div>
    
   </div>
</>  
  );
  
};

export default Note;
