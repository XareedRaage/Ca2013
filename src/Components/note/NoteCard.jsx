import React from 'react'
import "./note.css"
import { MdDelete } from "react-icons/md"; 
import { GrDocumentUpdate } from "react-icons/gr";

const NoteCard = ({title,body,id,delid, display }) => {
    return (
        <div className="p-3 node-card">
            <div>
                <h3>{title}</h3>
                <p className="note-card-p">{body.split("",77)}...</p>
            </div>
            <div className="d-flex justify-content-around " >
            <div className="d-flex justify-content-center align-items-center card-icon-head px-2 py-1"
             onClick={()=>{
                display("block");
            }}>
                <GrDocumentUpdate className="card-icons" />Update
            </div>
           <div className="d-flex justify-content-around ">
            <div className="d-flex justify-content-center align-items-center card-icon-head px-2 py-1 text-danger"
             onClick={()=>{
                delid(id);
                }}>
            <MdDelete className= "card-icons del"  />{" "}
            Delete
            </div>
            </div> 
            </div>
        </div> 
    );
};

export default NoteCard;
