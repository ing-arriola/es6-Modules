export let name='jaime'
export let credit=500
//Exporting a function
export function showInfo(){
    return `Yesterday, the user ${name} has ${credit} of available credit`
}
//Exporting a class
export class Student{
    constructor(name,surname,institution){
        this.name=name
        this.surname=surname
        this.institution=institution
    }
    showData(){
        return `${this.name} ${this.surname} studies at ${this.institution}`
    }
}