import React, { SyntheticEvent } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { TabView, TabPanel } from 'primereact/tabview';
import { Card } from 'primereact/card';
import { ClientService } from './services/ClientService';
import { Client } from './models/ClientModel';
import { Message } from 'primereact/message';

interface ClientProps {
    clientservice: ClientService,
    setClient: (client: Client) => void
}
interface ClientState {
    clientname: string,
    email: string,
    clienttype: string,
    clientservicerate: string,
    clientcode: string,
    telephone: string,
    fax: string,
    web: string,
    vatno: string,
    companyregno: string,
    street: string,
    city: string,
    state: string,
    bank: string,
    branch: string,
    accnumber: string,
    accname: string,
    currency: string,
    status: string,
    contactname: string,
    contactemail: string,
    department: string,
    contactnumber: string,
    createAttempted: boolean,
    createSuccessfull: boolean
}
interface CustomEvent {
    target : HTMLInputElement
}
class ClientCreate extends React.Component<ClientProps, ClientState> {

        state: ClientState = {
            clientname : '',
            email: '',
            clienttype: '',
            clientservicerate: '',
            clientcode: '',
            telephone: '',
            fax: '',
            web: '',
            vatno: '',
            companyregno: '',
            street: '',
            city: '',
            state: '',
            bank: '',
            branch: '',
            accnumber: '',
            accname: '',
            currency: '',
            status: '',
            contactname: '',
            contactemail: '',
            department: '',
            contactnumber: '',
            createAttempted: false,
            createSuccessfull: false
        }
    
        private setClientName( event: CustomEvent){
            this.setState({clientname: event.target.value})
        }
        private setEmail( event: CustomEvent){
            this.setState({email: event.target.value})
        }
        private setClientType( event: CustomEvent){
            this.setState({clienttype: event.target.value})
        }
        private setClientServiceRate( event: CustomEvent){
            this.setState({clientservicerate: event.target.value})
        }
        private setClientCode( event: CustomEvent){
            this.setState({clientcode: event.target.value})
        }
        private setTelephone( event: CustomEvent){
            this.setState({telephone: event.target.value})
        }
        private setFax( event: CustomEvent){
            this.setState({fax: event.target.value})
        }
        private setWeb( event: CustomEvent){
            this.setState({web: event.target.value})
        }
        private setCompanyRegNo( event: CustomEvent){
            this.setState({companyregno: event.target.value})
        }
        private setVatNo( event: CustomEvent){
            this.setState({vatno: event.target.value})
        }
        private setStreet( event: CustomEvent){
            this.setState({street: event.target.value})
        }
        private setCity( event: CustomEvent){
            this.setState({city: event.target.value})
        }
        private setstate( event: CustomEvent){
            this.setState({state: event.target.value})
        }
        private setBank( event: CustomEvent){
            this.setState({state: event.target.value})
        }
        private setBranch( event: CustomEvent){
            this.setState({state: event.target.value})
        }
        private setAccNumber( event: CustomEvent){
            this.setState({state: event.target.value})
        }
        private setAccName( event: CustomEvent){
            this.setState({state: event.target.value})
        }
        private setCurrency( event: CustomEvent){
            this.setState({state: event.target.value})
        }
        private setStatus( event: CustomEvent){
            this.setState({state: event.target.value})
        }
        private setContactName( event: CustomEvent){
            this.setState({state: event.target.value})
        }
        private setContactEmail( event: CustomEvent){
            this.setState({state: event.target.value})
        }
        private setDepartment( event: CustomEvent){
            this.setState({state: event.target.value})
        }
        private setContactNumber( event: CustomEvent){
            this.setState({state: event.target.value})
        }

        private async handleSubmit(event: SyntheticEvent){
            event.preventDefault();
            this.setState({createAttempted: true})
            const result = await this.props.clientservice.createclient(
                this.state.clientname,
                this.state.email,
                

            )
            if(result){
                this.setState({createSuccessfull: true})
                this.props.setClient(result)
            }else{
                this.setState({createSuccessfull: false})
            }
        }
        render() {
            let createMessage: any;

            if (this.state.createAttempted){
                if(this.state.createSuccessfull){
                    createMessage = <Message severity="success" text="Client saved Successfully" />
                }else{
                    createMessage = <Message severity="error" text="Client is not saved" />
                }
            }
            return (
                <div>
                    <Card title='CREATE CLIENT' style={{maxWidth: '1390px', marginLeft: '30px', marginTop: '50px'}}>
                        <TabView>
                            <TabPanel header="Basic">
                                <form onSubmit={e => this.handleSubmit(e)}>
                                    <div className='p-inputgroup'>
                                        <div  className="mb-5">
                                                <span className="p-float-label">
                                                    <InputText id="clientname" value={this.state.clientname} onChange={e=> this.setClientName(e)} autoFocus  />
                                                    <label htmlFor="clientname">Client Name*</label>
                                                </span>
                                        </div>&nbsp;&nbsp;&nbsp;
                                        <div  className="mb-5">
                                                <span className="p-float-label">
                                                    <InputText id="email" value={this.state.email} onChange={e => this.setEmail(e) }/>
                                                    <label htmlFor="email">Email*</label>
                                                </span>
                                        </div>                
                                    </div><br/>
                                    <div className='p-inputgroup'>
                                        <div  className="mb-5">
                                                <span className="p-float-label">
                                                    <InputText id="clienttype" value={this.state.clienttype} onChange={e => this.setClientType(e) } />
                                                    <label htmlFor="clienttype"  >Client Type*</label>
                                                </span>
                                        </div>&nbsp;&nbsp;&nbsp;
                                        <div  className="mb-5">
                                                <span className="p-float-label">
                                                    <InputText id="clientservicerate" value={this.state.clientservicerate} onChange={e => this.setClientServiceRate(e) } />
                                                    <label htmlFor="clientservicerate" >Client Service Rate*</label>
                                                </span>
                                        </div>&nbsp;&nbsp;&nbsp;
                                    </div><br/>
                                    <div className='p-inputgroup'>
                                        <div  className="mb-5">
                                                <span className="p-float-label">
                                                    <InputText id="clientcode" value={this.state.clientcode} onChange={e => this.setClientCode(e) } />
                                                    <label htmlFor="clientcode" >Client Code*</label>
                                                </span>
                                        </div>&nbsp;&nbsp;&nbsp;
                                        <div  className="mb-5">
                                                <span className="p-float-label">
                                                    <InputText id="telephone" value={this.state.telephone} onChange={e => this.setTelephone(e) } />
                                                    <label htmlFor="telephone" >Telephone*</label>
                                                </span>
                                        </div>&nbsp;&nbsp;&nbsp;
                                    </div><br/>
                                    <div className='p-inputgroup'>
                                        <div  className="mb-5">
                                                <span className="p-float-label">
                                                    <InputText id="fax" value={this.state.fax} onChange={e => this.setFax(e) }  />
                                                    <label htmlFor="fax" >Fax*</label>
                                                </span>
                                        </div>&nbsp;&nbsp;&nbsp;
                                        <div  className="mb-5">
                                                <span className="p-float-label">
                                                    <InputText id="=web" value={this.state.web} onChange={e => this.setWeb(e) } />
                                                    <label htmlFor="web" >web*</label>
                                                </span>
                                        </div>
                                        &nbsp;&nbsp;&nbsp;
                                    </div><br/>
                                    <div className='p-inputgroup'>
                                        <div  className="mb-5">
                                                <span className="p-float-label">
                                                    <InputText id="vatno" value={this.state.vatno} onChange={e => this.setVatNo(e) } />
                                                    <label htmlFor="vatno" >Vat No*</label>
                                                </span>
                                        </div>&nbsp;&nbsp;&nbsp;
                                        <div  className="mb-5">
                                                <span className="p-float-label">
                                                    <InputText id="=companyregno" value={this.state.companyregno} onChange={e => this.setCompanyRegNo(e) } />
                                                    <label htmlFor="companyregno" >Company Reg No*</label>
                                                </span>
                                        </div>&nbsp;&nbsp;&nbsp;
                                    </div><br/>
                                    <span className='p-buttonset'>
                                        <Button type="submit" label="Save" className="mt-2" />
                                        <Button type="reset" label="Clear" className="mt-2" />
                                    </span>
                                </form>
                                {createMessage}
                            </TabPanel>
                            <TabPanel header="Address" >
                                    <form  className="form" >
                                        <div className='p-inputgroup'>
                                            <div  className="mb-5">
                                                <span className="p-float-label">
                                                    <InputText className='p-inputtext-lg block' id="street" value={this.state.street} onChange={e => this.setStreet} />
                                                    <label htmlFor="street">Street*</label>
                                                </span>
                                            </div>&nbsp;
                                        </div><br/>
                                        <div className='p-inputgroup'>
                                            <div  className="mb-5">
                                                <span className="p-float-label">
                                                    <InputText id="city" value={this.state.city} onChange={e => this.setCity}  />
                                                    <label htmlFor="city" >City*</label>
                                                </span>
                                            </div>&nbsp;
                                            <div className="mb-5">
                                                <span className="p-float-label">
                                                    <InputText id="state" value={this.state.state} onChange={e => this.setstate}  />
                                                    <label htmlFor="state">State*</label>
                                                </span>
                                            </div>&nbsp;   
                                        </div> <br/>
                                        <span className='p-buttonset'>
                                            <Button type="submit" label="Save" className="mt-2" />
                                            <Button type="reset" label="Clear" className="mt-2" />
                                        </span>
                                </form>
                            </TabPanel>  
                            <TabPanel header="Banking Details" >
                                    <form  className="form">
                                        <div className='p-inputgroup'>
                                            <div  className="mb-5">
                                                <span className="p-float-label">
                                                    <InputText id="bank" value={this.state.bank} onChange={e => this.setBank} />
                                                    <label htmlFor="bank">Bank*</label>
                                                </span>
                                            </div>&nbsp;
                                            <div className="mb-5">
                                                <span className="p-float-label">
                                                    <InputText id="branch" value={this.state.branch} onChange={e => this.setBranch}  />
                                                    <label htmlFor="branch">Branch*</label>
                                                </span>
                                            </div>&nbsp;
                                        </div><br/>
                                        <div className='p-inputgroup'>
                                            <div className="mb-5">
                                                <span className="p-float-label">
                                                    <InputText id="acnumber" value={this.state.accnumber} onChange={e => this.setAccNumber}  />
                                                    <label htmlFor="acnumber">A/C Number*</label>
                                                </span>
                                            </div>&nbsp;
                                            <div className="mb-5">
                                                <span className="p-float-label">
                                                    <InputText id="acname" value={this.state.accname} onChange={e => this.setAccName}  />
                                                    <label htmlFor="acname">Account Name*</label>
                                                </span>
                                            </div>&nbsp;
                                        </div><br/>
                                        <div className='p-inputgroup'>
                                            <div className="mb-5">
                                                <span className="p-float-label">
                                                    <InputText id="currency" value={this.state.currency} onChange={e => this.setCurrency}  />
                                                    <label htmlFor="currency">Currency*</label>
                                                </span>
                                            </div>&nbsp;
                                            <div className="mb-5">
                                                <span className="p-float-label">
                                                    <InputText id="status" value={this.state.status} onChange={e => this.setStatus}  />
                                                    <label htmlFor="status">Status*</label>
                                                </span>
                                            </div>&nbsp;
                                        </div><br/>
                                        <span className='p-buttonset'>
                                            <Button type="submit" label="Save" className="mt-2" />
                                            <Button type="reset" label="Clear" className="mt-2" />
                                        </span>
                                    </form>
                                </TabPanel>
                                <TabPanel header="Contact Window" >
                                    <form  className="form">
                                        <div className='p-inputgroup'>
                                            <div  className="mb-5">
                                                <span className="p-float-label">
                                                    <InputText id="cname" value={this.state.contactname} onChange={e => this.setContactName}  />
                                                    <label htmlFor="cname" >Name*</label>
                                                </span>
                                            </div>&nbsp;
                                            <div className="mb-5">
                                                <span className="p-float-label">
                                                    <InputText id="cemail" value={this.state.contactemail} onChange={e => this.setContactEmail}  />
                                                    <label htmlFor="cemail">Email*</label>
                                                </span>
                                            </div>&nbsp;
                                        </div><br/>
                                        <div className='p-inputgroup'>
                                            <div  className="mb-5">
                                                <span className="p-float-label">
                                                    <InputText id="department" value={this.state.department} onChange={e=> this.setDepartment}/>
                                                    <label htmlFor="department">Department*</label>
                                                </span>
                                            </div>&nbsp;
                                            <div className="mb-5">
                                                <span className="p-float-label">
                                                    <InputText id="contactnumber" value={this.state.contactnumber} onChange={e => this.setContactNumber}   />
                                                    <label htmlFor="contactnumber">Contact Number*</label>
                                                </span>
                                            </div>&nbsp;
                                        </div><br/>
                                        <span className='p-buttonset'>
                                            <Button type="submit" label="Save" className="mt-2" />
                                            <Button type="reset" label="Clear" className="mt-2" />
                                        </span>
                                    </form>
                                </TabPanel>                 
                        </TabView>
                    </Card>
                </div>
            );
        }
}

    export default ClientCreate;