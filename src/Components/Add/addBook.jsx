import React from "react"
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
const Branches = [
    { label: 'IT' },
    { label: 'Civil', },
    { label: 'Mechanical' },
];

const Addbook = () => {
    const navigate = useNavigate();
    const add = [
        {
            item: 'ISBN Number',
            type: 'number',
            min: 5,
            max: 50,
            values: 'ISBN',
        },
        {
            item: 'Name',
            type: 'text',
            min: 5,
            max: 50,
            values: 'name',
        },
        {
            item: 'Author',
            type: 'text',
            max: 50,
            values: 'author',
        },
        {
            item: 'Publication',
            type: 'text',
            min: 5,
            max: 50,
            values: 'publication'
        },
        {
            item: 'Details',
            class: 'Details ',
            min: 5,
            max: 250,
            class2: 'Details-block',
            values: 'details'
        },
        {
            item: 'Qty',
            type: 'number',
            min: 1,
            max: 5,
            values: 'qty',
        },
        {
            item: 'Price',
            type: 'number',
            min: 50,
            max: 200,
            values: 'price',
        },
    ]


    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const number = e.target.ISBN.value;
        const author = e.target.author.value;
        const publication = e.target.publication.value;
        const Branch = e.target.branch.value
        const qty = e.target.qty.value
        const price = e.target.price.value
        const details = e.target.details.value


        axios.post("https://digital-librara-data.onrender.com/books", {
            name,
            number,
            author,
            publication,
            Branch,
            qty,
            price,
            details,
        })
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.log(error)
            })
        navigate('/Dashboard')
        // window.location.reload()
    }
    return (
        <>
            <div className="title">  Add Book </div>
            <div className="navigate-to-dashboard">
                <Link to='/Dashboard'> <i className="fa-solid fa-arrow-left"></i> Dashboard</Link>
            </div>
            <div className="add-book">

                <form onSubmit={handleSubmit} autoComplete="off">

                    {
                        add.map((value) => {
                            return (
                                <TextField
                                    key={Math.random()}
                                    label={value.item}
                                    type={value.type}
                                    variant="standard"
                                    className="form-content"
                                    name={value.values}
                                    required
                                    
                                />
                            )
                        })
                    }
                    <Autocomplete
                        id="country-select-demo"
                        className="form-content"
                        sx={{ width: 300 }}
                        options={Branches}
                        autoHighlight
                        getOptionLabel={(option) => option.label}
                        renderOption={(props, option) => {
                            const { key, ...optionProps } = props;
                            return (
                                <Box
                                    key={key}
                                    component="li"
                                    sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                                    {...optionProps}
                                >

                                    {option.label}
                                </Box>
                            );
                        }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="standard"
                                label="Choose a country"
                                name="branch"
                                slotProps={{
                                    htmlInput: {
                                        ...params.inputProps,
                                        autoComplete: 'new-password', // disable autocomplete and autofill
                                    },
                                }}
                            />
                        )}
                    />
                    <Button variant="contained" type="submit">Contained</Button>
                </form>

            </div>
        </>
    )
}
export default Addbook;
