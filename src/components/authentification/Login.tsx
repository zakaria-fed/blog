import React, {useState} from 'react'
import Input from "@material-ui/core/Input"
import {Button} from '@material-ui/core'

import "./Login.css"

const Login: React.FC < any > = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className="login">
            <div>
                <h6 className="logo">Logo</h6>
                <h6 className="login__sentence">Log In</h6>
            </div>

            <form className="form">
                <Input placeholder="Your Email"
                    value={email}
                    onChange={
                        (e) : any => setEmail(e.target.value)
                    }/>

                <Input placeholder="Password"
                    value={password}
                    onChange={
                        (e) : any => setPassword(e.target.value)
                    }/>

                <div className="ques__button">
                    <p>Don't you have an account yet ?</p>
                    <Button className="login__button">Log In</Button>
                </div>
            </form>
        </div>
    )
}

export default Login
