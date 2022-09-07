import React, { Component } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { PanelMenu } from 'primereact/panelmenu';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {  CSSTransition } from "react-transition-group";

type IState = {
    visibleLeft: boolean,
    items: any,
    icons: any
};
class SideBar extends Component {
    state : IState= {
         visibleLeft: false,
         items: 
            [
                {
                    label: 'Dashboard',
                    icon: 'pi pi-fw pi-compass',
                    
                    
                },
                {
                    label: 'Jobs',
                    icon: 'pi pi-fw pi-clone',
                    
                },
                {
                    label: 'Inquiries',
                    icon: 'pi pi-fw pi-comment',
                   
                },
                {
                    label: 'Clients',
                    icon: 'pi pi-fw pi-user-plus',
                    
                }
            ] ,
            icons:   [
                {
                   
                    icon: 'pi pi-fw pi-compass',
                    
                    
                },
                {
                   
                    icon: 'pi pi-fw pi-clone',
                    
                },
                {
                    
                    icon: 'pi pi-fw pi-comment',
                   
                },
                {
                    
                    icon: 'pi pi-fw pi-user-plus',
                    
                }
            ]    
    };
    render() {
        return (
            <div >
                       
               
              
                    

                

               <CSSTransition in={this.state.visibleLeft} timeout={200} classNames="my-node">
                <div>
                    <Sidebar visible={this.state.visibleLeft} onHide={() => this.setState({ visibleLeft: false })}>
                    <PanelMenu model={this.state.items} style={{ width: '22rem' }}/>

                    </Sidebar>
                </div>
                </CSSTransition>
                <div >
               
                    <Button icon="pi pi-align-left" className='sidebar-btn' style={{'backgroundColor': 'var(--indigo-900)', 'border': 'none'}} onClick={() => this.setState({ visibleLeft: true})}  />
                       
                </div>
            </div>
        );
    }
}

export default SideBar;