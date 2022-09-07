import React, { Suspense } from "react";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from "../modules/auth/Login";
import DashBoard from "../layouts/components/sidebar/DashBoard";
import { ProtectedWrapper, AuthWrapper } from "../util/auth_route";
import CreateInquiry from "../modules/inquiries/components/createInquiry";
import InquiryTable from "../modules/inquiries/Base component/inquiryTable";
import Quatation from "../modules/Quatation/Quatation";
import CreateConfirmInquiry from "../modules/confirm list/components/CreateConfirmInquiry";
import ClientTable from "../modules/client/ClientTable";
import RoutePaths from "../util/routes";


function App() {

    return (
        <Router>
            <Suspense fallback={<div>Loading ...</div>}>
                <Routes>
                    {/*  Dash Board Route*/}
                    {/*<Route path="/" element={<DashBoard/>}/>*/}
                    <Route path={RoutePaths.dashboard} element={<ProtectedWrapper/>}>
                        <Route path={RoutePaths.dashboard} element={<DashBoard/>}>
                            <Route index element={<InquiryTable />} />
                            <Route path={RoutePaths.CreateInquiry} element={<CreateInquiry/>} />
                            <Route path={RoutePaths.InquiryTable} element={<InquiryTable/>} />
                            <Route path={RoutePaths.Quatation} element={<Quatation/>} />
                            <Route path={RoutePaths.ConfirmInquiry} element={<CreateConfirmInquiry/>} />
                            <Route path={RoutePaths.ClientTable} element={<ClientTable/>} />
                        </Route>
                    </Route>
                    {/*    Login Route*/}
                    <Route path="/login" element={<AuthWrapper/>}>
                        <Route path={"/login"} element={<Login/>}/>
                    </Route>


                </Routes>
            </Suspense>
        </Router>
        // <div>
        //
        //   {isLogged ? <Login/> : <DashBoard/>}
        //
        //
        //   <AppRouter/>
        // </div>

    )


}

export default App