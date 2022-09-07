
export class InquiryService  {

   

    getInquiries() {
        return fetch('../helpers/inquiries.json').then(res => res.json()).then(d => d.data);
    }

    
}
     