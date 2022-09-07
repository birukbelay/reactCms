import React, {Component} from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InquiryService } from '../services/inquiryservice';


interface IProps {
    
}

interface IState {
  inquiries : [], 
  inquiryservice: InquiryService
 
}
class InquiryTable extends Component<IProps, IState> {
    
    constructor(props: IProps) {
        super(props);
    
        this.state = {
            inquiries: [],
            inquiryservice : new InquiryService()
        }
        
      }


    componentDidMount() {
       
        this.state.inquiryservice.getInquiries().then((data: any)=>this.setState({inquiries: data}));
    }
          

    render() {
        return (
            <>
            
            <div className="card" style={{width: '94%', paddingTop: '50px', paddingLeft: '200px', transition: 'margin-left .5s'}}>
            <h3>Inquiries</h3>
            <div className=''>
                <Button  className="p-button p-button-success"  style={{ 'marginLeft': '1100px'}}>Create Inquiry</Button>
            
            </div>
                <DataTable value={this.state.inquiries}  responsiveLayout="scroll">
                    <Column field="inquirynumber" header="inquirynumber"></Column>
                    <Column field="description" header="description"></Column>
                    <Column field="inquirydate" header="inquirydate"></Column>
                </DataTable>
            </div>
            </>
        );
    }
}

export default InquiryTable;