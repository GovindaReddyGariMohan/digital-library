import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
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

    const handleSubmit = async (e) => {
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
            item: 'User Name',
            type: 'text',
            name: 'Uname'
        },
        {
            item: 'Password',
            type: 'password',
            name: 'Upassword'
        },
        // {
        //     type: 'submit',
        // },
        // {
        //     type: 'button',
        //     value: 'register',
        //     click: handleRegister
        // }
    ]



    return (

        <>
            <div className="Login-register">
                <div className="login-title">Digital Library</div>
                <div className={active ? 'login-form' : 'deactive'}>
                    <form autoComplete="off" onSubmit={handleLogin}>
                        <TextField
                            label="Email"
                            required
                            variant="standard"
                            color="secondary"
                            type="email"
                            sx={{ mb: 3 }}
                            fullWidth
                            name="Uname"
                        />
                        <TextField
                            label="Password"
                            required
                            variant="standard"
                            color="secondary"
                            type="password"
                            fullWidth
                            sx={{ mb: 3 }}
                            name="Upassword"
                        />
                        <Button variant="outlined" color="secondary" type="submit">Login</Button>
                        <Button variant="text" onClick={handleRegister}>Register</Button>
                    </form>
                </div>
                <div className={active ? ' deactive ' : 'register-form'}>
                    <form onSubmit={handleSubmit} autoComplete="off">

                        <TextField
                            label="User Name"
                            required
                            variant="standard"
                            color="secondary"
                            type="text"
                            sx={{ mb: 3 }}
                            fullWidth
                            name="Uname"
                        />
                        <TextField
                            label="Email"
                            required
                            variant="standard"
                            color="secondary"
                            type="email"
                            sx={{ mb: 3 }}
                            fullWidth
                            name="mail"
                        />
                        <TextField
                            label="Password"
                            required
                            variant="standard"
                            color="secondary"
                            type="password"
                            fullWidth
                            sx={{ mb: 3 }}
                            name="password"
                        />
                        <Button variant="outlined" color="secondary" type="submit">Rigister</Button>
                        <Button variant="text" onClick={handleRegister}>Login</Button>

                    </form>
                </div>
            </div>
        </>

    )
}
export default Login;