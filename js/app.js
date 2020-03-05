import {name,credit,showInfo,Student} from './cliente.js'
import {company,credit as creditCompany,bussiness,showInfo as infoCompany,Fullcompany} from './empresa.js'
document.getElementById('app').innerHTML=showInfo()

let student1=new Student('Raul','Guillen','UNIExample')

document.getElementById('app').innerHTML+=`<br> ${student1.showData()}`

document.getElementById('app').innerHTML+=`<br> ${infoCompany()}`

let newCompany=new Fullcompany('MOODLE','Comunity of users',4000000,'development for education')

document.getElementById('app').innerHTML+=`<br> ${newCompany.showData()}`
