import { ClientTableData } from "../models/ClientModel";

export class ClientDataService{
    
    public async getClientData() : Promise <ClientTableData[]>{
        const result: ClientTableData[] = []
        result.push({
            id: '1',
            name: 'Lanka PVT LTD',
            code: 'B/REG/101',
            type: 'Contract',
            email: 'lanka@gmail.com',
            registrationnumber: '567234',
            version: 'default',
            createddate: new Date(2018, 6, 5, 10, 33, 30)
        });
        result.push({
            id: '2',
            name: 'Lanka PVT LTD',
            code: 'B/REG/101',
            type: 'Contract',
            email: 'lanka@gmail.com',
            registrationnumber: '567234',
            version: 'default',
            createddate: new Date(2018, 6, 5, 10, 33, 30)
        });
        result.push({
            id: '3',
            name: 'Lanka PVT LTD',
            code: 'B/REG/101',
            type: 'Contract',
            email: 'lanka@gmail.com',
            registrationnumber: '567234',
            version: 'default',
            createddate: new Date(2018, 6, 5, 10, 33, 30)
        });
        return result;
    }
    
}