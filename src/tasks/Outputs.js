import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Outputs = () => {

    const { state } = useLocation();

    return (
        <div className='container' >
            <div style={{ marginBottom: "50px" }} >

                <h1>Outputs</h1>
            </div>



            <div>
                <table style={{ width: '80%', margin: "auto" }}>
                    <thead >
                        <tr>
                            <th style={{ border: '1px solid black' }}>PICK_LIST_NUMBER</th>
                            <th style={{ border: '1px solid black' }}>Clint_Order_Number</th>
                            <th style={{ border: '1px solid black' }} >CONTROL_ID</th>
                            <th style={{ border: '1px solid black' }}>Package_Count</th>
                            <th style={{ border: '1px solid black' }}>Service</th>
                            <th style={{ border: '1px solid black' }}>Master_Track</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state?.map((e, i) => {
                            return (
                                <tr key={e.id}>
                                    <td style={{ border: '1px solid black' }}>{`${e.pick_number}`}</td>
                                    <td style={{ border: '1px solid black' }}>{`${e.control_id}`}</td>
                                    <td style={{ border: '1px solid black' }}>{`${e.order_no}`}</td>
                                    <td style={{ border: '1px solid black' }}>{`${e.pkg_count}`}</td>
                                    <td style={{ border: '1px solid black' }}>{`${e.service}`}</td>
                                    <td style={{ border: '1px solid black' }}>{`${e.master_track}`}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            <div style={{ marginTop: "100px", textAlign: "center" }} >
                <button style={{ backgroundColor: "grey", width: "100px" }} >
                    <NavLink exact to='/shipment' style={{ color: "black" }} > Back</NavLink> </button>
            </div>
        </div >
    )
}

export default Outputs