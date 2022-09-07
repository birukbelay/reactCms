import {Client} from "..//models/ClientModel"

export class ClientService{
    public async createclient(clientname: string,
        email: string,
   ): Promise<Client | undefined>{
        if(clientname === 'user' && email === '1234'){
            return{
                clientname: clientname,
                email: email,
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
                acnumber: '',
                accname: '',
                currency: '',
                status: ''
            }
        }else{
            return undefined
        }
    }
}
// clienttype: string,
// clientservicerate: string,
// clientcode: string,
// telephone: string,
// fax: string,
// web: string,
// vatno: string,
// companyregno: string,
// street: string,
// city: string,
// state: string,
// bank: string,
// branch: string,
// acnumber: string,
// accname: string,
// currency: string,
// status: string