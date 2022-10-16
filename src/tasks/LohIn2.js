import React, { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import logo from './../assets/logo.png'
import signin from './../assets/signin.png'
const LohIn2 = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const LogIn = () => {
        if (userName == "" || password == "") {
            alert("Both fields are required")
        }
        else if (userName == "admin@proship.com" && password == "123456") {
            navigate("/home")
        }
        else {
            alert("UnAuthorized Email or Password")
        }
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 bg-black leftMain2'>
                    <div>
                        <img src={logo} height={150} />
                    </div>
                    <div className='pt-5'>
                        <img src={signin} />
                    </div>
                </div>
                <div className='col-md-6 bg-secondary rightMain2'>
                    <div className='allContent'>
                        <h1>LogIn</h1>
                        <div style={{ marginTop: 30 }}>
                            <input className='inputStyle' type={'text'} placeholder="Enter your Email" onChange={(e) => setUserName(e.target.value)} value={userName} />
                        </div>
                        <div style={{ marginTop: 30 }}>
                            <input className='inputStyle' type={'password'} placeholder="Enter your Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                        </div>
                        <div style={{ marginTop: 30 }}>
                            <input type={'checkbox'} width={50} />
                            <label style={{ fontSize: 20, marginLeft: 10 }}>Remember Me</label>
                        </div>
                        <div style={{ marginTop: 30 }}>

                            <button style={{ width: "150px", fontSize: 20 }} onClick={LogIn} >
                                LogIn
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LohIn2