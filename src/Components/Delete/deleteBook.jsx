import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const Delete = ({ data,setData }) => {
    const tableHeading = [
        {
            heading: 'ISBN Number'
        },
        {
            heading: 'Book Name'
        },
        {
            heading: 'Author'
        },
        {
            heading: 'Publication'
        },
        {
            heading: 'Qty.'
        },
        {
            heading: 'Price'
        },
        {
            heading: 'Branch'
        },
        {
            heading: 'remove'
        }
    ]
    
    const handleRemove = (id) => {
       
        axios.delete('https://digital-librara-data.onrender.com/books/'+id)
        .then((res)=>{
            console.log(res)
        })
        .catch((error)=>{
            console.log(error)
        })
        window.location.reload()
    }
    return (
        <div className="Delete-book">
            <div className="title"> Delete Book</div>
            <div className="navigate-to-dashboard">
                <Link to='digital-library/Dashboard'> <i className="fa-solid fa-arrow-left"></i> Dashboard</Link>
            </div>
            <div className="delete-book-content">
                <table>
                    <tr>
                        {
                            tableHeading.map((value) => {
                                return <th key={Math.random()}>{value.heading}</th>
                            })
                        }
                    </tr>
                    {
                        data.map((value) => {
                            return (
                                <tr key={Math.random()}>
                                    <td>{value.number}</td>
                                    <td>{value.name}</td>
                                    <td>{value.author}</td>
                                    <td>{value.publication}</td>
                                    <td>{value.qty}</td>
                                    <td>{value.price}</td>
                                    <td>{value.Branch}</td>
                                    <td onClick={() => handleRemove(value.id)}><i className="fa-solid fa-trash"></i></td>
                                </tr>

                            )
                        })
                    }
                </table>
            </div>
        </div>
    )
}
export default Delete;