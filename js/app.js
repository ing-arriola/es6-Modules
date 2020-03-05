import {name,credit,showInfo,Student} from './cliente.js'
document.getElementById('app').innerHTML=showInfo()

let student1=new Student('Raul','Guillen','UNIExample')

document.getElementById('app').innerHTML+=`<br> ${student1.showData()}`