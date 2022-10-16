import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './../assets/logo.png'
import signin from './../assets/signin.png'
const Home = () => {
    return (
        <div className='container main'>
            <div className='row '>
                <div className='col mainLeft bg-black' style={{ textAlign: "center", paddingTop: 40 }}>
                    <div className='pb-5'>
                        <img src={logo} alt='logo' width={'50%'} />
                    </div>
                    <div>
                        <img src={signin} alt='logo' width={'50%'} />
                    </div>
                </div>
                <div className='col mainRight bg-secondary' >
                    <div className='btn'>
                        <div className='col' >
                            <button> Home</button>
                            <button> View User</button>
                        </div>
                        <div className='col' >
                            <button>
                                <NavLink exact to={'/shipment'} style={{ color: "black" }} > Void Shipment</NavLink></button>
                            <button> Reports</button>
                        </div>
                    </div>
                </div>
            </div>
        </div  >
    )
}

export default Home