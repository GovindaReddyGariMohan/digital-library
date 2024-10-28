import React, { useState } from "react";
import Charts from "./Chart1";
import AphexChart from "./Chart2";
import { Link, useNavigate } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Dashboard = ({ issuedBook, data }) => {
    const navigate = useNavigate();
    const [active, setActive] = useState(false)
    const handleNavbar = () => {
        setActive(active ? false : true)
    }
    const removeHandler = () => {
        setActive(false)
    }
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
            heading: 'ISBN Number',
        },
        {
            heading: 'Book Name',
            align: 'right'
        },
        {
            heading: 'Author',
            align: 'right'
        },
        {
            heading: 'Roll No.',
            align: 'right'
        },
        {
            heading: 'Name',
            align: 'right'
        },
        {
            heading: 'Issued On',
            align: 'right'
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
            <div className="profile-logout-status">
                <div className="nav-bar" onClick={handleNavbar}><i className="fa-solid fa-bars"></i></div>
                <div onClick={logout} className="profile-logout"><i className="fa-solid fa-right-from-bracket"></i> logout</div>
            </div>
            <div className="Dashboard-body">
                <div className={active ? "book-status " : "active-item book-status"}>
                    <i className="fa-solid fa-xmark x-mark" onClick={removeHandler}></i>
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
                    <div >
                        <h3>Issued Book Summary</h3>
                        <div >
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            {
                                                tableHeading.map((value) => {
                                                    return (
                                                        <TableCell align={value.align} key={Math.random()}>{value.heading}</TableCell>
                                                    )
                                                })
                                            }
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {issuedBook.map((row) => (
                                            <TableRow
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {row.isbn}
                                                </TableCell>
                                                <TableCell align="right">{row.bookName}</TableCell>
                                                <TableCell align="right">{row.author}</TableCell>
                                                <TableCell align="right">{row.id}</TableCell>
                                                <TableCell align="right">{row.name}</TableCell>
                                                <TableCell align="right">{row.currDate}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;