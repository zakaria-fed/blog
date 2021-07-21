import React, {useState} from 'react'
import Input from "@material-ui/core/Input"
import {Button} from '@material-ui/core'

import "./Signup.css"

const Signup: React.FC < any > = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className="signup">
            <div>
                <h6 className="logo">Logo</h6>
                <h6 className="signup__sentence">Sign Up</h6>
            </div>

            <form className="form">
                <Input placeholder="Your Name"
                    value={name}
                    onChange={
                        (e) : any => setName(e.target.value)
                    }/>
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
                    <p>Have you already an account ?</p>
                    <Button className="signup__button">Sign Up</Button>
                </div>
            </form>
        </div>
    )
}

export default Signup
