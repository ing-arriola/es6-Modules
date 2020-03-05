import {Student} from './cliente.js'
export let company='moodle'
export let companyOwner='Comunity'
export let credit=500000
export let bussiness='E-Learning'
//Exporting a function
export function showInfo(){
    return `Yesterday, the company ${company} has ${credit} of available credit to projects of ${bussiness}`
}

export class Fullcompany extends Student{
    constructor(company,companyOwner,credit,bussiness){
        super(credit)
        this.company=company
        this.companyOwner=companyOwner
        this.bussiness=bussiness
    }
    showData(){
        return `The owner of the company ${this.company} is  ${this.companyOwner} and they are dedicated to ${this.bussiness}`
    }
}