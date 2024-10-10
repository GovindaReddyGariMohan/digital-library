import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Issuebook = ({ data, students, setData }) => {
    const navigate = useNavigate();
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
            heading: 'Price'
        },
        {
            heading: 'Branch'
        },
        {
            heading: 'Name'
        },

    ]
    const [id, setId] = useState()
    const [isbn, setIsbn] = useState()
    const [author, setAuthor] = useState()
    const [bookName, setBookname] = useState()

    const handleId = (value) => {
        setId(value?.id)
        setBookname(value?.name)
        setAuthor(value?.author)
        setIsbn(value?.number)
    }




    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const currDate = new Date().toLocaleDateString();

        students.forEach(async (product) => {
            if (product.name === name) {
                const payload = {
                    name: name,
                    currDate: currDate,
                    id: id,
                    isbn: isbn,
                    bookName: bookName,
                    author: author
                };
                var authOptions = {
                    method: 'post',
                    url: 'https://digital-librara-data.onrender.com/IssueBook',
                    data: JSON.stringify(payload),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    json: true
                };
                axios(authOptions)
                .then((response) => {
                    console.log(response);
                    })
                .catch((error) => {
                   alert(error)
                  })
                // axios({
                //     method: 'post',
                //     url: 'https://digital-librara-data.onrender.com/IssueBook',
                //     data: payload, // you are sending body instead
                //     headers: {
                //         // 'Authorization': `bearer ${token}`,
                //         'Content-Type': 'application/json'
                //     },
                // })
                // navigate('/Dashboard')

                
            } else {
                console.log('student not exit')
            }
        })

    }
    return (
        <>
            <div className="title"> Issue Book</div>
            <div className="Issuebook">
                <div className="navigate-to-dashboard">
                    <Link to='/Dashboard'> <i className="fa-solid fa-arrow-left"></i> Dashboard</Link>
                </div>

                <div className="issue-book-content">
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

                                    <tr key={Math.random()} >
                                        <td>{value.number}</td>
                                        <td>{value.name}</td>
                                        <td>{value.author}</td>
                                        <td >{value.price}</td>
                                        <td>{value.Branch}</td>
                                        <td>
                                            <form onSubmit={handleSubmit}>
                                                <input type="text" name="name" required />
                                                <input type="submit" onClick={() => handleId(value)} />
                                            </form>

                                        </td>
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

export default Issuebook;