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

