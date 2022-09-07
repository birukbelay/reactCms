import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Divider } from 'primereact/divider';
import { InputTextarea } from 'primereact/inputtextarea';

interface QuatationProps{
    
}
interface QuatationState{

}
class Quatation extends React.Component<QuatationProps, QuatationState>{
    render() {
        return (
           <Card>
                 <div className='row' style={{'display': 'flex'}}>
                        <div className='col' style={{'width': '10rem'}}>
                            <h2>Invoice</h2> 
                        </div>
                       <div className='col' style={{'marginLeft': '55.5rem'}}>
                            <label htmlFor="invoice">Invoice &nbsp;&nbsp;&nbsp;<InputText id="invoice"  /></label>  
                       </div>                        
                </div><br></br>
                <div className='row' style={{'display': 'flex'}}>
                        <div className='col' style={{'width': '10rem'}}>
                            <Dropdown  placeholder="Please select a company" />  
                        </div>
                       <div className='col' style={{'marginLeft': '55rem'}}>
                            <label htmlFor="date">Date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Calendar id="basic"  /></label>
                       </div>                        
                </div><br></br>
                <div style={{'marginLeft': '54.5rem'}}>
                    <label htmlFor="Due date">Due Date &nbsp;&nbsp;&nbsp; <Calendar id="basic"  /></label>
                </div><br></br>
              

                <Divider/>
                <div className='row' style={{'display': 'flex'}}>
                        <div className='col' style={{'width': '10rem'}}>
                            <label>Invoice To</label> 
                            <InputTextarea   rows={4} cols={40} />
                        </div>
                       <div className='col' style={{'marginLeft': '50rem'}}>
                            <label >Vessel Data :</label><br></br>
                            <InputTextarea   rows={4} cols={40} />
                            
                       </div>                        
                </div><br></br>
                <Divider/>
                
           </Card>
        );
    }
}

export default Quatation;
