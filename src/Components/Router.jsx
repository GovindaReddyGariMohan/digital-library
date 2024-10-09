import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Dashboard from "./dashBoard/dashBoard";
import Addbook from "./Add/addBook";
import Delete from "./Delete/deleteBook";
import Viewbook from "./View/viewBook";
import Issuebook from "./Issue/issueBook";
import Returnbook from "./Return/returnBook";
import Students from "./Student/addStudent";

const Routerid = ({ data, setData, students, issuedBook, setIssuedbook }) => {
   
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="digital-library/" element={<Login />} />
                    <Route path="Dashboard" element={<Dashboard issuedBook={issuedBook} data={data} />} />
                    <Route path="Add" element={<Addbook data={data} />} />
                    <Route path="Delete" element={<Delete data={data} setData={setData} />} />
                    <Route path="Viewbook" element={<Viewbook data={data} />} />
                    <Route path="Issuebook" element={<Issuebook data={data} students={students} setData={setData} />} />
                    <Route path="Returnbook" element={<Returnbook data={data} issuedBook={issuedBook} setIssuedbook={setIssuedbook} />} />
                    <Route path="Students" element={<Students />} />
                  
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routerid;