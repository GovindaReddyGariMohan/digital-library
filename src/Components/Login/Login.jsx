import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    const [userDetails, setUserdetails] = useState([])
    const [active, setActive] = useState(true)
    const [isLoggedIn, setLoggedIn] = useState(false);
    const handleRegister = () => {
        setActive(active ? false : true)
    }
    // useEffect(() => {
    //   const details= localStorage?.getItem("loginDetails")
    //   console.log(details)
    // })


    useEffect(() => {
        axios.get('https://digital-librara-data.onrender.com/UserDetails')
            .then((response) => {
                setUserdetails(response.data);
            });
    }, [])
    useEffect(() => {
        const user1 = localStorage.getItem("userName");
        const user2 = localStorage.getItem("userPassword");
        if (user1?.length > 1 && user2?.length > 1) {
            setLoggedIn(true)
        }
    }, [])

    useEffect(() => {
        if (isLoggedIn === true) {
            navigate('/Dashboard')
        }
    }, [isLoggedIn, navigate])


    const handleLogin = (e) => {
        e.preventDefault();
        const userName = e.target.Uname.value
        const userPassword = e.target.Upassword.value
        const userId = userDetails.filter((value) => {
            return value.userName === userName && value.userPassword === userPassword
        })
        if (userId.length === 1) {
            navigate('/Dashboard')
            localStorage.setItem('userName', userName)
            localStorage.setItem('userPassword', userPassword)
        } else {
            console.log('user not exit')
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const userName = e.target.Uname.value;
        const mail = e.target.mail.value;
        const userPassword = e.target.password.value;
        let data = {
            userName: userName,
            mail: mail,
            userPassword: userPassword
        }

        try {
            const response = fetch('https://digital-librara-data.onrender.com/UserDetails', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            let json = await response.json();
            console.log('Success', JSON.stringify(json))
        } catch (error) {
            console.error('Mistake', error)
        }
        localStorage.setItem('userName', userName)
        localStorage.setItem('userPassword', userPassword)
        navigate('/Dashboard')

    }

    const registerItems = [
        {
            item: 'Username',
            type: 'text',
            name: 'Uname'
        },
        {
            item: 'Mail',
            type: 'mail',
            name: 'mail'
        },
        {
            item: 'Password',
            type: 'password',
            name: 'password'
        },
        {
            type: 'submit',
            button: 'submit'

        },
        {
            type: 'button',
            button: 'Login',
            click: handleRegister
        }
    ]
    const items = [
        {
            item: 'Username',
            type: 'text',
            name: 'Uname'
        },
        {
            item: 'Password',
            type: 'password',
            name: 'Upassword'
        },
        {
            type: 'submit',

        },
        {
            type: 'button',
            value: 'register',
            click: handleRegister
        }
    ]



    return (

        <>
            <div className="Login-register">
                <div className="login-title">Digital Library</div>
                <div className={active ? 'login-form' : 'deactive'}>
                    <form onSubmit={handleLogin}>
                        <table>
                            {
                                items.map((value) => {
                                    return (
                                        <tr key={Math.random()} className="login-items">
                                            <td>
                                                <label htmlFor={value.item}>{value.item}</label>
                                            </td>
                                            <td>
                                                <input type={value.type} value={value.value} onClick={value.click} id={value.item} name={value.name} />
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </table>
                    </form>

                </div>
                <div className={active ? ' deactive ' : 'register-form'}>
                    <form onSubmit={handleSubmit}>
                        <table>
                            {
                                registerItems.map((value, id) => {
                                    return (
                                        <tr key={Math.random()} className="register-items">
                                            <td>
                                                <label htmlFor={`${value.item}-${id}`}>{value.item}</label>
                                            </td>
                                            <td>
                                                <input type={value.type} value={value.button} onClick={value.click} id={`${value.item}-${id}`} name={value.name} required />
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </table>
                    </form>

                </div>
            </div>
        </>

    )




}
export default Login;