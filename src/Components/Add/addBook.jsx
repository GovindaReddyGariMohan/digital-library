import React from "react"
import axios from 'axios';
import { useNavigate,Link } from "react-router-dom"

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
            values:'details'
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
        {
            item: 'Branch',
            name: 'branch',
            select: [
                {
                    item: 'select'
                },
                {
                    item: 'IT'
                },
                {
                    item: 'Civil'
                },
                {
                    item: 'Mechanical'
                }
            ]
        },
        {
            type: 'submit'
        }
    ]


    const handleSubmit = (e) => {
        e.preventDefault();
        const name=e.target.name.value;
        const number=e.target.ISBN.value;
        const author=e.target.author.value;
        const publication=e.target.publication.value;
        const Branch = e.target.branch.value
        const qty=e.target.qty.value
        const price=e.target.price.value
        const details=e.target.details.value
        
       
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
            navigate('digital-library/Dashboard')
            // window.location.reload()
    }
    return (
        <div className="add-book">
            <div className="title">  Add Book </div>
            <div className="navigate-to-dashboard">
               <Link to='digital-library/Dashboard'> <i className="fa-solid fa-arrow-left"></i> Dashboard</Link>
            </div>
            <form onSubmit={handleSubmit}>
                <table >
                    {
                        add.map((value) => {
                            return (
                                <tr key={Math.random()}>
                                    <td>
                                        <label htmlFor={value.values}>{value.item}</label>
                                    </td>
                                    <td className={value.item === 'Branch' ? 'deactive' : `${`'active' `}`}>
                                        <input
                                            type={value.type}
                                            className={value.class}
                                            min={value.type === 'number' ? value.min : 0}
                                            max={value.type === 'number' ? value.max : 0}
                                            minLength={value.type === 'text' ? value.min : ''}
                                            maxLength={value.type === 'text' ? value.max : ''}
                                            id={value.values}
                                            name={value.values}
                                            
                                        />
                                    </td>
                                    <td className={value.item === 'Branch' ? 'active' : 'deactive'}>
                                        <select name={value.name} id={value.name} >
                                            {
                                                value.select?.map((select) => {
                                                    return (
                                                        <option value={select.item} key={Math.random()}>{select.item}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </td>
                                  
                                </tr>

                            )
                        })
                    }
                </table>
            </form>
        </div>
    )
}
export default Addbook;