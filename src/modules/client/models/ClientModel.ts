export interface Client{
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
    acnumber: string,
    accname: string,
    currency: string,
    status: string
}
export interface ClientTableData{
    id: string,
    name: string,
    code: string,
    type: string,
    email: string,
    registrationnumber: string,
    version: string,
    createddate: Date
}