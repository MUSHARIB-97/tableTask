import React from 'react'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Outputs from './Outputs'
const Tables = () => {

    const navigate = useNavigate();

    const [row, setRow] = useState([
        {
            id: 1,
            heading: "PICK_LIST_NUMBER",
            pick_number: 1905607,
            control_id: "Matman",
            order_no: "Cheif Sandwich Eater",
            pkg_count: 1,
            service: "FedEx Ground",
            master_track: "561334372033a",
            isChecked: false
        }, {
            id: 2,
            heading: "CONTROL_ID",
            pick_number: 1905608,
            control_id: "Matman",
            order_no: "Cheif Sandwich Eater",
            pkg_count: 1,
            service: "FedEx Ground",
            master_track: "561334372033b",
            isChecked: false
        }, {
            id: 3,
            heading: "Clint_Order_Number",
            pick_number: 1905609,
            control_id: "Matman",
            order_no: "Cheif Sandwich Eater",
            pkg_count: 1,
            service: "FedEx Ground",
            master_track: "561334372033c",
            isChecked: false
        }, {
            id: 4,
            heading: "Package_Count",
            pick_number: 1905610,
            control_id: "Matman",
            order_no: "Cheif Sandwich Eater",
            pkg_count: 1,
            service: "FedEx Ground",
            master_track: "561334372033d",
            isChecked: false
        },
        {
            id: 5,
            heading: "Service",
            pick_number: 1905611,
            control_id: "Matman",
            order_no: "Cheif Sandwich Eater",
            pkg_count: 1,
            service: "FedEx Ground",
            master_track: "561334372033e",
            isChecked: false
        }, {
            id: 6,
            heading: "Master_Track",
            pick_number: 1905612,
            control_id: "Matman",
            order_no: "Cheif Sandwich Eater",
            pkg_count: 1,
            service: "FedEx Ground",
            master_track: "561334372033e",
            isChecked: false
        }
    ])

    const [tableTwo, setTableTwo] = useState([]);

    const _handleChecked = (curEle) => {

        setRow(row.map(e => e.id === curEle.id ? { ...e, isChecked: !e.isChecked } : e));

        if (tableTwo.find(item => item.id === curEle.id)) {
            setTableTwo(tableTwo.filter(item => item.id !== curEle.id))
        } else {
            setTableTwo([...tableTwo, curEle])
        }
    }

    return (
        <div>
            <h1>Interview Task</h1>
            <div>
                <table style={{ width: '80%', margin: "auto" }}>
                    <thead >
                        <tr >
                            <th></th>
                            <th style={{ border: '1px solid black' }}>PICK_LIST_NUMBER</th>
                            <th style={{ border: '1px solid black' }}>Clint_Order_Number</th>
                            <th style={{ border: '1px solid black' }} >CONTROL_ID</th>
                            <th style={{ border: '1px solid black' }}>Package_Count</th>
                            <th style={{ border: '1px solid black' }}>Service</th>
                            <th style={{ border: '1px solid black' }}>Master_Track</th>
                        </tr>
                    </thead>
                    <tbody>
                        {row.map((e, i) => {
                            return (
                                <tr key={e.id}>
                                    <td>
                                        <input type="checkbox" checked={e.isChecked} value={e.isChecked} onChange={() => _handleChecked(e)} />
                                    </td>
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

            {/* table 2 */}
            <div>
                <table style={{ width: '80%', margin: "auto", marginTop: 50 }}>
                    <thead>
                        <tr >
                            <th style={{ border: '1px solid black' }}>PICK_LIST_NUMBER</th>
                            <th style={{ border: '1px solid black' }}>Clint_Order_Number</th>
                            <th style={{ border: '1px solid black' }} >CONTROL_ID</th>
                            <th style={{ border: '1px solid black' }}>Package_Count</th>
                            <th style={{ border: '1px solid black' }}>Service</th>
                            <th style={{ border: '1px solid black' }}>Master_Track</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableTwo.map((e, i) => {
                            return (
                                <tr key={i}>
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
            {/* <NavLink exact to='outputs'>Save</NavLink>  */}
            <button onClick={() => navigate('/outputs', { state: tableTwo })}>Save</button>
        </div>
    )
}

export default Tables