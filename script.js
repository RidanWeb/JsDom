const sections = document.querySelectorAll('section section');

for(const section of sections){

    section.style.border = '5px solid gray';
    section.style.backgroundColor = '#CFE2FF';
    section.style.borderRadius = '8px';
    section.style.marginBottom = '8px';
}

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
