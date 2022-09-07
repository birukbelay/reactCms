import React, { Component, createRef, ElementType, useRef } from 'react';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Card } from 'primereact/card';
import { TabView, TabPanel } from 'primereact/tabview';
import { InputText } from 'primereact/inputtext';
import { Form, Field } from 'react-final-form';
import { Calendar } from 'primereact/calendar';
import { classNames } from 'primereact/utils';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Dialog } from 'primereact/dialog';
import { FileUpload } from 'primereact/fileupload';


type IProps = {

}
type IState = {
    activeIndex: any;
    totalSize: number;
    displayBasic: boolean;
    formData: {},
    selectedtypes: String,
    selectedvehicle: String,
    selectedstatus: String,
    selectedfuel : String,
    position : String,
    toast: any
    
}
const serviceTypes = [
    { name: 'Storage', code: 'st' },
    { name: 'Value Added Service', code: 'vas' },
   
];
const vehicles = [
    { name: 'Car', code: 'car' },
    { name: 'Van', code: 'van' },
    { name: 'SUV', code: 'suv' },
    { name: 'Truck', code: 'truck' },
    { name: 'Container', code: 'container' },
    { name: 'Bowser', code: 'bowser' },
    { name: 'Bike', code: 'bike' }   
];

const statuses = [
    {name: 'Pending', code: 'pending'},
    {name: 'Confirm', code: 'confirm'},
    {name: 'Cancel', code: 'cancel'},

];

const fuels = [
    {name: 'Petrol', code: 'petrol'},
    {name: 'Diesel', code: 'diesel'},
    {name: 'Gas', code: 'gas'},

]

class CreateInquiry extends Component<IProps, IState> {
    constructor(props: IProps){
        super(props)
        
        // this.showSuccess = this.showSuccess.bind(this);
        
        this.state={
            activeIndex: null,
            totalSize: 0,
            displayBasic: false,
            formData: {},
            selectedtypes: 'Storage',
            selectedvehicle: 'Car',
            selectedstatus: 'Pending',
            selectedfuel: 'diesel',
            position: 'center',
            toast: null

        }
    }
   

    

    openDialog(name :string) {
        let state : any = {
            [`${name}`]: true
        };

        if (this.state.position) {
            state = {
                ...state
            }
        }

        this.setState(state);
    }
    // onUpload() {
        
    //     this.toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
    // }
    validate = (data: any) => {
        let errors:any = {};
    
        if (!data.inquirynumber) {
            errors.inquirynumber = 'Inquiry Number is required.';
        }
    
        if (!data.description) {
            errors.description = 'Description is required.';
        }
    
        if (!data.vinno) {
          errors.vinno = 'VIN number is required.';
        }
        if (!data.servicetype) {
          errors.servicetype = 'Service type is required.';
        }
        if (!data.value) {
          errors.value = 'value is required.';
        }
        if (!data.hoc) {
          errors.hoc = 'HOC is required.';
        }
        if (!data.hscode) {
          errors.hscode = 'HS Code is required.';
        }
        if (!data.vehicletype) {
          errors.vehicletype = 'Vehicle Type is required.';
        }
        if (!data.ldescription) {
          errors.ldescription= 'Description is required.';
        }
        if (!data.make) {
          errors.make = 'Make is required.';
        }
        if (!data.model) {
          errors.model = 'Model is required.';
        }
        if (!data.yom) {
          errors.yom = 'YOM is required.';
        }
        if (!data.fuel) {
          errors.fuel = 'Fuel is required.';
        }
        if (!data.estloading) {
          errors.estloading = 'estloading is required.';
        }
        if (!data.estarrival) {
          errors.estarrival = 'estarrival is required.';
        }
        if (!data.pos) {
          errors.pos = 'POS is required.';
        }
        if (!data.status) {
          errors.status = 'status is required.';
        }
    
        return errors;
      };
      onSubmit = (data: {}, form: any) => {
        this.setState({formData: data})
        form.restart();
      };
      isFormFieldValid = (meta: any) => !!(meta.touched && meta.error);
      getFormErrorMessage= (meta :any) =>{
            return this.isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>;
        };
      onClick(itemIndex: any) {
            let activeIndex = this.state.activeIndex ? [...this.state.activeIndex] : [];
    
            if (activeIndex.length === 0) {
                activeIndex.push(itemIndex);
            }
            else {
                const index = activeIndex.indexOf(itemIndex);
                if (index === -1) {
                    activeIndex.push(itemIndex);
                }
                else {
                    activeIndex.splice(index, 1);
                }
            }
    
            this.setState({ activeIndex });
        }
        onTypeChange = (e: { value: String}) => {
            this.setState({selectedtypes: e.value});
        }
        onVehicleChange = (e: { value: String}) => {
            this.setState({selectedvehicle: e.value});
        }
        onStatusChange = (e: { value: String}) => {
            this.setState({selectedstatus: e.value});
        }
        onFuelChange = (e: { value: String}) => {
            this.setState({selectedfuel: e.value});
        }

    render() {
        return (
            <div>
                <Card style={{maxWidth: '1390px', marginLeft: '30px', marginTop: '50px'}}>
                    
                    <h4 style={{fontFamily: 'serif'}}>  <i className="pi pi-book" aria-hidden="true"/>  INQUIRIES</h4>
                    <span className="p-buttonset" style={{marginLeft: '750px'}}>
                        <Button icon='pi pi-save' className="p-button-primary p-button-sm" label='SAVE'/> 
                        <Button icon='pi pi-check' className="p-button-primary p-button-sm" label='SUBMIT'/> 
                        <Button icon='pi pi-save' className="p-button-primary p-button-sm" label='CONFIRM'/> 
                        <Button icon="pi pi-times" className="p-button-primary p-button-sm" label='CANCEL'/> 
                    </span>
                    <TabView>
                        <TabPanel header="Inquiry Header">
                        <Form onSubmit={this.onSubmit} initialValues={{ inquirynumber: '', inquirydate: null, description: '' }} validate={this.validate} render={({ handleSubmit }) => (
                        <form  className="form"  onSubmit={handleSubmit}>
                                <div className='p-inputgroup'>
                                    <Field  name="inquirynumber" render={({ input, meta }) => (
                                        <div  className="mb-5">
                                            <span className="p-float-label">
                                                <InputText id="inquirynumber" {...input} autoFocus className={classNames({ 'p-invalid': this.isFormFieldValid(meta) })} />
                                                <label htmlFor="inquirynumber" className={classNames({ 'p-error': this.isFormFieldValid(meta) })}>InquiryNumber*</label>
                                            </span>
                                            {this.getFormErrorMessage(meta)}
                                        </div>
                                        
                                    )} />&nbsp;&nbsp;&nbsp;
                                
                                    <Field  name="inquirydate" render={({ input }) => (
                                            <div className="mb-5">
                                                <span className="p-float-label">
                                                    <Calendar id="inquirydate" {...input} dateFormat="dd/mm/yy" mask="99/99/9999" showIcon />
                                                    <label htmlFor="inquirydate">Inquiry Date*</label>
                                                </span>
                                            </div>
                                    )} />&nbsp;
                                </div>
                                <br/>
                                <div className='p-inputgroup'>    
                                    <Field  name="description" render={({ input, meta }) => (
                                        <div className="">
                                            <span className="p-float-label">
                                                <InputTextarea id="description" {...input} autoFocus className={classNames({ 'p-invalid': this.isFormFieldValid(meta) })} rows={3} cols={40} />
                                                <label htmlFor="description" className={classNames({ 'p-error': this.isFormFieldValid(meta) })}>Description*</label>
                                            </span>
                                            {this.getFormErrorMessage(meta)}
                                        </div>
                                    )} />
                                </div>
                                <br/>
                         
                            <Button label="Import Excel" icon="pi pi-external-link" onClick={() => this.openDialog('displayBasic')} /> 
                                {/* <Dialog header="Import Excel" visible={this.state.displayBasic} style={{ width: '50vw' }} footer={this.renderFooter('displayBasic')} onHide={() => this.onHide('displayBasic')}>
                                    <div className="card">
                                    <h5>Import Excel</h5>
                                    <FileUpload name="demo[]" url="https://primefaces.org/primereact/showcase/upload.php" onUpload={this.onUpload} multiple accept="image/*" maxFileSize={1000000}
                                        emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
                                    </div>
                                </Dialog>&nbsp;&nbsp;&nbsp;
                          <Button label="Upload File" icon="pi pi-external-link" onClick={() => this.openDialog('displayBasic')} />
                                <Dialog header="Upload File" visible={this.state.displayBasic} style={{ width: '50vw' }} footer={this.renderFooter('displayBasic')} onHide={() => this.onHide('displayBasic')}>
                                    <div className="card">
                                    <h5>Import File</h5>
                                    <FileUpload name="demo[]" url="https://primefaces.org/primereact/showcase/upload.php" onUpload={this.onUpload} multiple accept="image/*" maxFileSize={1000000}
                                        emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
                                    </div>
                                </Dialog>  */}

                            

                            

                            <span className='p-buttonset'>
                                <Button type="submit" label="Save" className="mt-2" />
                                <Button type="reset" label="Clear" className="mt-2" />
                            </span>
                        </form>
                            )} />
                        
                        </TabPanel>
                        <TabPanel header="Inquiry Line" >
                        
                        <Accordion activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({activeIndex: e.index})}>
                            <AccordionTab  header="VIN:">
                                <Form onSubmit={this.onSubmit} initialValues={{ vinno: '', servicetype: '', value: '', hoc: '', hscode: '', vehicletype: '', ldescription: '', make: '', model: '', yom: '', fuel: '', estloading: '', estarrival: '', pos: '', status: ''}} validate={this.validate} render={({ handleSubmit }) => (
                                    <form  className="form"  onSubmit={handleSubmit}>
                                        <div className='p-inputgroup'>
                                                <Field name="vinno" render={({ input, meta }) => (
                                                    <div  className="mb-5">
                                                        <span className="p-float-label">
                                                            <InputText id="vinno" {...input} autoFocus className={classNames({ 'p-invalid': this.isFormFieldValid(meta) })} />
                                                            <label htmlFor="vinno" className={classNames({ 'p-error': this.isFormFieldValid(meta) })}>VIN No*</label>
                                                        </span>
                                                        {this.getFormErrorMessage(meta)}
                                                    </div>
                                                    
                                                )} />&nbsp;
                                            
                                                <Field  name="servicetype" render={({ input, meta }) => (
                                                        <div className="mb-5">
                                                            <span className="p-float-label">
                                                                <Dropdown value={this.state.selectedtypes} options={serviceTypes} onChange={this.onTypeChange} optionLabel="name" placeholder="Select a Type" />
                                                                <label htmlFor="servicetype">Service Type*</label>
                                                            </span>
                                                            {this.getFormErrorMessage(meta)}
                                                        </div>
                                                )} />&nbsp;
                                                <Field  name="value" render={({ input, meta }) => (
                                                        <div className="mb-5">
                                                            <span className="p-float-label">
                                                                <InputText id="value" {...input} autoFocus className={classNames({ 'p-invalid': this.isFormFieldValid(meta) })} />
                                                                <label htmlFor="value">Value*</label>
                                                            </span>
                                                            {this.getFormErrorMessage(meta)}
                                                        </div>
                                                )} />&nbsp;
                                                <Field  name="hoc" render={({ input, meta }) => (
                                                        <div className="mb-5">
                                                            <span className="p-float-label">
                                                                <InputText id="hoc" {...input} autoFocus className={classNames({ 'p-invalid': this.isFormFieldValid(meta) })} />
                                                                <label htmlFor="hoc">HOC*</label>
                                                            </span>
                                                            {this.getFormErrorMessage(meta)}
                                                        </div>
                                                )} />&nbsp;
                                                <Field  name="hscode" render={({ input, meta }) => (
                                                        <div className="mb-5">
                                                            <span className="p-float-label">
                                                                <InputText id="hscode" {...input} autoFocus className={classNames({ 'p-invalid': this.isFormFieldValid(meta) })} />
                                                                <label htmlFor="hscode">HS Code*</label>
                                                            </span>
                                                            {this.getFormErrorMessage(meta)}
                                                        </div>
                                                )} />&nbsp;
                                                <Field  name="vehicletype" render={({ input, meta }) => (
                                                        <div className="mb-5">
                                                            <span className="p-float-label">
                                                            <Dropdown value={this.state.selectedvehicle} options={vehicles} onChange={this.onVehicleChange} optionLabel="name" placeholder="Select a Vehicle" />
                                                                <label htmlFor="vehicletype">Vehicle Type*</label>
                                                            </span>
                                                            {this.getFormErrorMessage(meta)}
                                                        </div>
                                                )} />&nbsp;
                                                <Field  name="ldescription" render={({ input, meta }) => (
                                                        <div className="mb-5">
                                                            <span className="p-float-label">
                                                                <InputText id="ldescription" {...input} autoFocus className={classNames({ 'p-invalid': this.isFormFieldValid(meta) })} />
                                                                <label htmlFor="ldescription">Description*</label>
                                                            </span>
                                                            {this.getFormErrorMessage(meta)}
                                                        </div>
                                                )} />&nbsp;
                                                
                                            </div><br></br>
                                            <div className='p-inputgroup'>
                                                <Field name="make" render={({ input, meta }) => (
                                                    <div  className="mb-5">
                                                        <span className="p-float-label">
                                                            <InputText id="make" {...input} autoFocus className={classNames({ 'p-invalid': this.isFormFieldValid(meta) })} />
                                                            <label htmlFor="make" className={classNames({ 'p-error': this.isFormFieldValid(meta) })}>Make*</label>
                                                        </span>
                                                        {this.getFormErrorMessage(meta)}
                                                    </div>
                                                    
                                                )} />&nbsp;
                                            
                                                <Field  name="model" render={({ input, meta }) => (
                                                        <div className="mb-5">
                                                            <span className="p-float-label">
                                                                <InputText id="model" {...input} autoFocus className={classNames({ 'p-invalid': this.isFormFieldValid(meta) })} />
                                                                <label htmlFor="model">Model*</label>
                                                            </span>
                                                            {this.getFormErrorMessage(meta)}
                                                        </div>
                                                )} />&nbsp;
                                                <Field  name="yom" render={({ input, meta }) => (
                                                        <div className="mb-5">
                                                            <span className="p-float-label">
                                                                <InputText id="yom" {...input} autoFocus className={classNames({ 'p-invalid': this.isFormFieldValid(meta) })} />
                                                                <label htmlFor="yom">YOM*</label>
                                                            </span>
                                                            {this.getFormErrorMessage(meta)}
                                                        </div>
                                                )} />&nbsp;
                                                
                                                <Field  name="fuel" render={({ input, meta }) => (
                                                        <div className="mb-5">
                                                            <span className="p-float-label">
                                                            <Dropdown value={this.state.selectedfuel} options={fuels} onChange={this.onFuelChange} optionLabel="name"/>
                                                                <label htmlFor="fuel">Fuel*</label>
                                                            </span>
                                                            {this.getFormErrorMessage(meta)}
                                                        </div>
                                                )} />&nbsp;
                                                <Field  name="estloading" render={({ input, meta }) => (
                                                        <div className="mb-5">
                                                            <span className="p-float-label">
                                                                <InputText id="estloading" {...input} autoFocus className={classNames({ 'p-invalid': this.isFormFieldValid(meta) })} />
                                                                <label htmlFor="estloading">EstTime of Loading*</label>
                                                            </span>
                                                            {this.getFormErrorMessage(meta)}
                                                        </div>
                                                )} />&nbsp;
                                                <Field  name="estarrival" render={({ input, meta }) => (
                                                        <div className="mb-5">
                                                            <span className="p-float-label">
                                                                <InputText id="estarrival" {...input} autoFocus className={classNames({ 'p-invalid': this.isFormFieldValid(meta) })} />
                                                                <label htmlFor="estarrival">EstTime of Arrival*</label>
                                                            </span>
                                                            {this.getFormErrorMessage(meta)}
                                                        </div>
                                                )} />&nbsp;
                                                <Field  name="pos" render={({ input, meta }) => (
                                                        <div className="mb-5">
                                                            <span className="p-float-label">
                                                                <InputText id="pos" {...input} autoFocus className={classNames({ 'p-invalid': this.isFormFieldValid(meta) })} />
                                                                <label htmlFor="pos">POS*</label>
                                                            </span>
                                                            {this.getFormErrorMessage(meta)}
                                                        </div>
                                                )} />&nbsp;
                                                <Field  name="status" render={({ input, meta }) => (
                                                        <div className="mb-5">
                                                            <span className="p-float-label">
                                                            <Dropdown value={this.state.selectedstatus} options={statuses} onChange={this.onStatusChange} optionLabel="name"/>
                                                                <label htmlFor="status">Status*</label>
                                                            </span>
                                                            {this.getFormErrorMessage(meta)}
                                                        </div>
                                                )} />&nbsp;
                                                
                                            
                                                    
                                                
                                            </div> 
                                            <span className='p-buttonset'>
                                                    <Button type="submit" label="Save" className="mt-2" />
                                                    <Button type="reset" label="Clear" className="mt-2" />
                                            </span>
                                        

                                    
                                    
                                    </form>
                                )} />
                            </AccordionTab>
                            
                            
                        </Accordion>
                            
                
                        </TabPanel>
                    </TabView>
                </Card> 
            </div>
        );
    }
}

export default CreateInquiry;