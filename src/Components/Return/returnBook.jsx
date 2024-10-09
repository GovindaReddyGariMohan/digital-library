import axios from "axios";
import React, {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Returnbook = ({  issuedBook }) => {
    // const navigate = useNavigate();
    const [studentDetails, setStudentdetails] = useState()
    const [notFound, setNotfound] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const book = e.target.Book.value
        const details = issuedBook.filter((value) => {
            return value.name === name && value.bookName === book
        })

        if (details.length === 0) {
            setNotfound('Details not Found')
        } else {
            setNotfound('')
            setStudentdetails(details)
        }

    }
    const handleReturn = (id) => {
        axios.delete('https://digital-librara-data.onrender.com//'  + id)
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.log(error)
            })
        // navigate('/Dashboard')
        // window.location.reload()
    }


    return (
        <div className="return-book">
            <div className="title">Return Book</div>
            <div className="navigate-to-dashboard">
                <Link to='/Dashboard'> <i className="fa-solid fa-arrow-left"></i> Dashboard</Link>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <table>
                        <tr>
                            <td>
                                <label htmlFor="">Enter Student Name</label>
                            </td>
                            <td>
                                <input type="text" name="name" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label >Choose The Book Name</label>
                            </td>
                            <td>
                                <select name="Book" id="book">
                                    {
                                        issuedBook.map((value) => {
                                            return <option value={value.bookName} key={Math.random()}>{value.bookName}</option>
                                        })
                                    }

                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td> </td>
                            <td><button >submit</button></td>
                        </tr>
                    </table>
                </form>
            </div>
            <div>

                {
                    studentDetails?.map((value) => {
                        return (
                            <table>
                                <tr>
                                    <th>Book Details</th>
                                </tr>
                                <tr>
                                    <td>ISBN Number :</td>
                                    <td>{value.isbn}</td>
                                </tr>
                                <tr>
                                    <td>Book Name :</td>
                                    <td>{value.bookName}</td>
                                </tr>
                                <tr>
                                    <td>Author :</td>
                                    <td>{value.author}</td>
                                </tr>
                                <tr>
                                    <td>Name :</td>
                                    <td >{value.name}</td>
                                </tr>
                                <tr>
                                    <td>Issued On :</td>
                                    <td>{value.currDate}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div onClick={handleReturn(value.id)}>Confirm To Return</div>
                                    </td>
                                </tr>
                            </table>
                        )
                    })
                }

            </div>
            <div>{notFound}</div>
        </div>
    )
}
export default Returnbook;