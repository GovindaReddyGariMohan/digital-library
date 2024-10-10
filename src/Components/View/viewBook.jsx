import React from "react";
import { Link } from "react-router-dom";
const Viewbook = ({ data }) => {
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
            heading: 'Details'
        }
    ]
    
    return (
       <>
        <div className="title">View Book</div>
        <div className="view-book">
            <div className="navigate-to-dashboard">
                <Link to='/Dashboard'> <i className="fa-solid fa-arrow-left"></i> Dashboard</Link>
            </div>
            <div className="view-book-content">
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
                                    <td>{value.details}</td>
                                </tr>

                            )
                        })
                    }
                </table>
            </div>
        </div>
       </>
    )
}

export default Viewbook;