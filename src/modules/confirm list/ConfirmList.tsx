import React, {Component} from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';


type InquiryType = {
    inquirynumber: String,
    description : String,
    inquirydate : Date
}
interface IProps {
    
}

interface IState {
  inquiries : Array<InquiryType>, 
 
}



class ConfirmList extends Component<IProps, IState> {
    
    constructor(props: IProps) {
        super(props);
    
        this.state = {
          inquiries: [{inquirynumber: '',
            description : '',
            inquirydate : new Date("2016-01-04 10:34:23")}],
            
        }
        
      }


    // componentDidMount() {
       
    //     this.state.inquiryservice.getInquiries().then((data: any)=>this.setState({inquiries: data}));
    // }
          

    render() {
        return (
            <>
            
            <div className="card" style={{maxWidth: '1300px', paddingTop: '50px', paddingLeft: '200px'}}>
            <h3>Confirm List</h3>
            <div className=''>
                
            
            </div>
                <DataTable   responsiveLayout="scroll">
                    <Column field="inquirynumber" header="Inquirynumber"></Column>
                    <Column field="inquirydate" header="Inquirydate"></Column>
                    <Column field="description" header="Description"></Column>
                    <Column field="confirmdate" header="Confirmdate"></Column>
                </DataTable>
            </div>
            </>
        );
    }
}

export default ConfirmList;