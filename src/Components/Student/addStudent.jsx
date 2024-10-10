import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Students = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        var data = new FormData();
        const name = e.target.name.value;
        const mail = e.target.mail.value;
        const branch = e.target.branch.value;
        const payload = {
            name: name,
            mail: mail,
            branch: branch
        };
        data.append("books", JSON.stringify(payload));
        axios('https://digital-librara-data.onrender.com/students', {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(function (response) {
                return response.json()
            }).then(function (body) {
                console.log(body);
            });
            navigate('/Dashboard')
    }
    return (
        <>
            <div className="title"> Add Student</div>
            <div className="Add-Student">
                <div className="navigate-to-dashboard">
                    <Link to='/Dashboard'> <i className="fa-solid fa-arrow-left"></i> Dashboard</Link>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="student-details">
                        <div>
                            <input type="text" placeholder="Enter Your Name" name="name" required />
                        </div>
                        <div>
                            <input type="mail" placeholder="enter your mail address" name="mail" required />
                        </div>
                        <div>
                            <select name="branch" id="branch">
                                <option value="select">Select Your Branch</option>
                                <option value="Civil">Civil</option>
                                <option value="IT">IT</option>
                                <option value="Mechanical">Mechanical</option>
                            </select>
                        </div>
                        <div>
                            <input type="submit" />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Students;