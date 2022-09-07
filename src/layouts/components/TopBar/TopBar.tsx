import React, { Component } from 'react';
import './TopBar.css';
import { Dropdown } from 'primereact/dropdown';
import { Avatar } from 'primereact/avatar';
import { useSelector } from "react-redux";


const TopBar =()=> {
    const state = useSelector(state => state)

    // @ts-ignore
    const user=state.auth.user.user
        return (
            <div className='main-container' >
                <div className='main'>
                    <div  style={{display:"flex", justifyContent:"space-between"}} className='header'>
                        
                        <label className='title'>CMS</label>
                        <Dropdown className='dashboard-dropdown' placeholder="Options" />
                        <div style={{color:"white",backgroundColor:"white", padding:"1em"}}><Avatar  label={user.fullname}  shape="square"/></div>
                    </div>

                </div>



                {/* <div className='dashboard-container'>
                    <div>
                        <h4>Dashboard</h4>
                    </div>
                    <div className='jobs-main-container'>
                        <div className='jobs-container'>
                            <div>hi</div>
                            <div>hui</div>
                            <div>bui</div>
                            <div>doi</div>
                        </div>
                    </div>
                </div> */}
            </div>
        );

}

export default TopBar;