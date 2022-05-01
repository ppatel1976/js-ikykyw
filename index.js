// Import stylesheets
import './style.css';
import { myobject } from './mytestclass/myfirstclass.js';
import { projectid } from './mymodule.js';


const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1> ${projectid}`;
console.log(myobject.name);
