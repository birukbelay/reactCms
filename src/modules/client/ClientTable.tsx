
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {Button} from 'primereact/button';
import { Link } from 'react-router-dom';

function ClientTable() {
    // const [clients, setClients] = useState([]);
    // const clientService = new ClientService();

    // useEffect(() => {
    //     clientService.getClients().then(data => setClients(data));
    // }, []); 

    return (
        <div>
            <div className="card" title='Clients' style={{width: '94%', paddingTop: '50px', paddingLeft: '200px', transition: 'margin-left .5s'}}>
            <h3>Clients</h3>
            <div className=''>
                <Button  className="p-button p-button-success"  style={{ 'marginLeft': '1100px'}} ><Link to='/createclient'>Create Client</Link></Button>
            
            </div>
                <DataTable  responsiveLayout="scroll">
                    <Column field="id" header="ID"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="code" header="Code"></Column>
                    <Column field="type" header="Type"></Column>
                    <Column field="email" header="Email"></Column>
                    <Column field="regno" header="Registration Number"></Column>
                    <Column field="version" header="Version"></Column>
                    <Column field="date" header="Date"></Column>

                </DataTable>
            </div>
        </div>
    );
}
export default ClientTable;