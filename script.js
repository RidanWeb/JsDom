////Adding Style Using JS DOM============

// const sections = document.querySelectorAll('section section');

// for(const section of sections){

//     section.style.border = '5px solid gray';
//     section.style.backgroundColor = '#CFE2FF';
//     section.style.borderRadius = '8px';
//     section.style.marginBottom = '8px';
// }

////Adding Style Using JS DOM============

const getASection = document.getElementById('countrySec');

getASection.classList.remove('font-lg');
getASection.classList.add('text-center');



//==================JavaScript HTML DOM Navigation========================

//option 01
//document.getElementById('pContent').innerHTML = document.getElementById('h6Content').innerHTML;

//option 02
//document.getElementById('pContent').innerHTML = document.getElementById('h6Content').firstChild.nodeValue;

//option 03
document.getElementById('pContent').innerHTML = document.getElementById('h6Content').childNodes[0].nodeValue;

//============Node Name Value and Type=================

document.getElementById('nN').innerHTML = document.getElementById('NVT').nodeName;
document.getElementById('nT').innerHTML = document.getElementById('NVT').nodeType;


//===============================DOM Node========================================

const newLi = document.createElement('li');

//type 01===============================
newLi.innerHTML = 'New li in List';

const placeList = document.getElementById('DomNode');
placeList.appendChild(newLi)
//type 01===============================

//type 02===============================
const textNode = document.createTextNode('Another li in List');
newLi.appendChild(textNode);
placeList.appendChild(newLi)
//type 02===============================



//Add a new section to  the main section
const mainSection = document.getElementById('mainSection'); //Select Section ID

const secInMainSec = document.createElement('section'); //Create a new section 

const h5InMainSec = document.createElement('h5'); // Create a new heading 
h5InMainSec.innerHTML = 'Add This Section Using JS DOM';

secInMainSec.appendChild(h5InMainSec);// added heading in section
mainSection.appendChild(secInMainSec);// Added this section in main section


h5InMainSec.classList.add('mb-4'); //Add a Class In heading which is created using js

//Create a List item using js

const ulInSec = document.createElement('ul');

const liInSec = document.createElement('li');
liInSec.innerHTML = 'Item 01';
ulInSec.appendChild(liInSec);

const liInSec2 = document.createElement('li');
liInSec2.innerHTML = 'Item 02';
ulInSec.appendChild(liInSec2);

const liInSec3 = document.createElement('li');
liInSec3.innerHTML = 'Item 03';
ulInSec.appendChild(liInSec3);

const liInSec4 = document.createElement('li');
liInSec4.innerHTML = 'Item 04';
ulInSec.appendChild(liInSec4);


secInMainSec.appendChild(ulInSec);



////Adding Style Using JS DOM============

const sections = document.querySelectorAll('section section');

for(const section of sections){

    section.style.border = '5px solid gray';
    section.style.backgroundColor = '#CFE2FF';
    section.style.borderRadius = '8px';
    section.style.marginBottom = '8px';
}

////Adding Style Using JS DOM============