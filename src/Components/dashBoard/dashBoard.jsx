import React from "react";
import Charts from "./Chart1";
import AphexChart from "./Chart2";
import { Link, useNavigate } from "react-router-dom";
// import ApexCharts from "./pie.js";

const Dashboard = ({ issuedBook, data }) => {
    const navigate = useNavigate();
    const bookItems = [

        {
            item: 'Add Book',
            icon: 'fa-solid fa-plus',
            link: '/Add'
        },
        {
            item: 'Delete Book',
            icon: 'fa-solid fa-xmark',
            link: '/Delete'
        },
        {
            item: 'View Books',
            icon: 'fa-solid fa-file',
            link: '/Viewbook'
        },
        {
            item: 'Add Student',
            icon: 'fa-solid fa-user',
            link: '/Students'
        },
        {
            item: 'Issue Book',
            icon: 'fa-solid fa-building-circle-check',
            link: '/Issuebook'
        },
        {
            item: 'Return Book',
            icon: 'fa-solid fa-rotate-left',
            link: '/Returnbook'
        },
        {
            item: 'Report',
            icon: 'fa-solid fa-table-cells'
        }
    ]
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
            heading: 'Roll No.'
        },
        {
            heading: 'Name'
        },
        {
            heading: 'Issued On'
        },


    ]

    const logout = () => {
        localStorage.removeItem('userName')
        localStorage.removeItem('userPassword')
        navigate('/')

    }



    return (
        <div className="Dashboard">
            <div className="title">Dashboard </div>
            <div onClick={logout} className="profile-logout"><i className="fa-solid fa-right-from-bracket"></i> logout</div>
            <div className="Dashboard-body">
                <div className="book-status">
                    <table >
                        {
                            bookItems.map((value) => {
                                return (
                                    <Link to={value.link} key={Math.random()}>
                                        <tr key={Math.random()} className="book-status-item">
                                            <td>
                                                <i className={value.icon}></i>
                                            </td>
                                            <td>{value.item}</td>
                                        </tr>
                                    </Link>
                                )
                            })
                        }
                    </table>
                </div>
                <div className="Dashboard-charts">
                    <div className="charts">
                        <div>
                            <div className="flow-chart">No. Of Books</div>
                            <Charts />
                        </div>
                        <div className="pie-chart">
                            <div className="flow-chart">No. Of Books</div>
                            <AphexChart />
                        </div>
                    </div>
                    <div className="issued-books">
                        <h3>Issued Book Summary</h3>
                        <div className="issued-books-table">
                            <table>
                                <tr>
                                    {
                                        tableHeading.map((value) => {
                                            return <th key={Math.random()}>{value.heading}</th>
                                        })
                                    }
                                </tr>
                                {
                                    issuedBook.map((value) => {
                                        return (
                                            <tr key={Math.random()}>
                                                <td>{value.isbn}</td>
                                                <td>{value.bookName}</td>
                                                <td>{value.author}</td>
                                                <td>{value.id}</td>
                                                <td>{value.name}</td>
                                                <td>{value.currDate}</td>
                                            </tr>
                                        )
                                    })
                                }

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;