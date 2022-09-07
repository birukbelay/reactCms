import React, { Component } from 'react';

interface ClientComponentProps {
    id: string,
    name: string,
    code: string,
    type: string,
    email: string,
    registrationnumber: string,
    version: string,
    createddate: Date
}

export class Client extends Component<ClientComponentProps> {
    render() {
        return (
            
                
                <tr>
                    <td className="id">{this.props.id}</td>
                    <td className="name">{this.props.name}</td>
                    <td className="code">{this.props.code}</td>
                    <td className="type">{this.props.type}</td>
                    <td className="email">{this.props.email}</td>
                    <td className="registrationnumber">{this.props.registrationnumber}</td>
                    <td className="version">{this.props.version}</td>
                    <td className="date">{(this.props.createddate).getDay()}</td>
                </tr>
            
        );
    }
}

