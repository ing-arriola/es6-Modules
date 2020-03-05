import {name,credit,showInfo,Student} from './cliente.js'
import {company,credit as creditCompany,bussiness,showInfo as infoCompany} from './empresa.js'
document.getElementById('app').innerHTML=showInfo()

let student1=new Student('Raul','Guillen','UNIExample')

document.getElementById('app').innerHTML+=`<br> ${student1.showData()}`

document.getElementById('app').innerHTML+=`<br> ${infoCompany()}`
