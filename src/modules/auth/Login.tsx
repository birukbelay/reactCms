import React, { Component, SyntheticEvent, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { loginSuccess, login } from './auth.reducer';
import { connect, useDispatch } from 'react-redux';
import store, { useTypedDispatch } from '../../app/store';
import { Card } from 'primereact/card';
import { Password } from 'primereact/password';


interface LoginProps {
    // authservice: AuthService,
    // setClient: (client: User) => void
}
interface LoginState {
    username: string,
    password: string,
    createAttempted: boolean,
    createSuccessfull: boolean
    
}
interface CustomEvent {
    target : HTMLInputElement
}
const Login =()=>{

    const dispatch = useTypedDispatch();
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    // state: LoginState = {
    //     username : '',
    //     password: '',
    //     createAttempted: false,
    //     createSuccessfull: false
    // }
    

    const handleSubmit=(event: SyntheticEvent)=>{
        event.preventDefault();
        console.log("-------> about to dispatch::", username, password )

        try {
            console.log("trying")

            dispatch(login({
                    username,
                    password,
                    ip_address:"112.137.173.105"
                    // createSuccessfull: this.state.createSuccessfull
                }, true)
            )
        }catch (e:any){
            console.log("iiiiiiiiiii",e.message)
        }
        console.log("-------> i have dispatched")
    }


        return (
            <Card title='Sign in' style={{'marginTop': '5rem','width':'40%', 'marginLeft': 'auto', 'marginRight': 'auto', 'textAlign': 'left'}}>
                <h5 style={{'fontSize' : '0.8rem'}}>Enter your given username and password</h5>
                 <form onSubmit={e => handleSubmit(e)}>
                                    <div>
                                        <div  className="mb-5" >
                                            <label htmlFor="username" >Username</label><br></br><br></br>
                                            <InputText id="username" className="p-inputtext-lg block"  value={username} onChange={e=> setUserName(e.target.value)} autoFocus />
                                        </div><br></br>
                                        <div  className="mb-5" >
                                            <label htmlFor="password">Password</label><br></br><br></br>
                                            <Password id="password" className="p-inputtext-lg block"  name="password" value={password} onChange={e => setPassword(e.target.value) } autoFocus />
                                        </div>                
                                    </div><br/>
                                    <Button type="submit" className="p-button-raised p-button-sm" style={{'width': '10rem'}} label="Login"  />
                                    
                 </form>
            </Card>
        );

}






const mapDispatchToProps = (dispatch: any) => {
    return {
        loginSuccess: () => dispatch(loginSuccess({payload: 1}))
    }
};
export default connect(null, mapDispatchToProps)(Login)

