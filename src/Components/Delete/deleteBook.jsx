import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
const Delete = ({ data, setData }) => {

    const rows = [
        { field: 'number', headerName: 'ISBN Number', width: 70 },
        { field: 'name', headerName: 'Book Name', width: 130 },
        { field: 'author', headerName: 'Author', width: 130 },
        {
            field: 'publication',
            headerName: 'Publication',
            width: 90,
        },
        {
            field: 'qty',
            headerName: 'Qty',
            type: 'number',
            width: 90,
        },
        {
            field: 'price',
            headerName: 'Price',
            type: 'number',
            width: 90,
        },
        {
            field: 'Branch',
            headerName: 'Branch',
            width: 90,
        },
        // {
        //     field: '<i className="fa-solid fa-trash"></i>',
        //     headerName: 'Remove',
        //     width: 90,
        // },


    ];


    const paginationModel = { page: 0, pageSize: 5 };
    // const [active, setActive] = useState(false)
    const [remove, setRemove] = useState()

    const handleRemove = () => {

        // axios.delete('https://digital-librara-data.onrender.com/books/' + id)
        //     .then((res) => {
        //         console.log(res)
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })
        // window.location.reload()
    }
    const [active, setActive] = useState(false);
    useEffect(() => {

        if (remove?.length >= 1) {
            setActive(true)
        } else {
            setActive(false)
        }
    })





    // return (
    //     <div className="App">

    //         <button onClick={toggle}>Toggle show</button>
    //     </div>
    // );

    return (
        <>
            <div className="title"> Delete Book</div>
            <div className="Delete-book">
                <div className="navigate-to-dashboard">
                    <Link to='/Dashboard'> <i className="fa-solid fa-arrow-left"></i> Dashboard</Link>

                    <Tooltip title="Delete" className={active ? 'show' : 'hide'}>
                        <IconButton>
                            <DeleteForeverIcon onClick={handleRemove} />
                        </IconButton>
                    </Tooltip>


                </div>

                <Paper sx={{ height: 300, width: '100%' }} >
                    <DataGrid
                        rows={data}
                        columns={rows}
                        initialState={{ pagination: { paginationModel } }}
                        pageSizeOptions={[5, 10]}
                        sx={{ border: 0 }}
                        checkboxSelection
                        onRowSelectionModelChange={(data) => {
                            return (
                                setRemove(data)
                            )
                        }}
                    />

                </Paper>
            </div>
        </>
    )
}
export default Delete;