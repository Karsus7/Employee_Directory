// Most of the code for this file was derived from:
// 18-React\01-Activities\16-Stu_FriendRefactor\Solved\src\components\FriendCard\index.js
import React from "react";
import "./style.css";

function EmployeeCard(props){
    return (
// The section below provides the code for the pictures within the employee cards
        <div className = "card">
            <div className= "img-container">
                <img alt ={props.name} src={props.picture}/>
            </div>
{/* The below list provides the lines of content contained in the employee cards */}
            <div className ="content">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                    <li>
                        <strong>Username:</strong>{props.username}
                    </li>
                    <li>
                        <strong>Occupation:</strong> {props.occupation}
                    </li>
                    <li>
                        <strong>ID:</strong>{props.id}
                    </li>
                    <li>
                        <strong>Office Number:</strong>{props.location}
                    </li>
                    <li>
                        <strong>Phone Number:</strong>{props.phone}
                    </li>
                    <li>
                        <strong>Email:</strong>{props.email}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default EmployeeCard;