const RequireSelectiveTreatment = document.querySelector('#RequireSelectiveTreatment');
const SingleRecyclableMaterial = document.querySelector('#SingleRecyclableMaterial');
const DifficultToProcess = document.querySelector('#DifficultToProcess');
const SeparationProcess = document.querySelector('#SeparationProcess');
let components;
const dataUrl = './data/weeeData.json';

window.addEventListener('DOMContentLoaded',async()=>{
    components = await getData();
    console.log('components',components);
    showData();
})


const getData = async()=>{
    try{
        const res = await fetch(dataUrl);
        const data = res.json();
        return data;
    }catch(e){
        console.log(e);
    }
}

const showData = ()=>{
    let temp_data = components.filter((component)=>component.Category === 'Require selective treatment');
    RequireSelectiveTreatment.innerHTML = `
    <span class="component_row">
    <h4 class="component_data_title">Material</h4>
    <h4 class="component_data_title">Recycling Rate</4>
    <h4 class="component_data_title">Recovery Rate</4>
    <h4 class="component_data_title">Disposal Rate</4>
    </span>`;
    
    RequireSelectiveTreatment.innerHTML += temp_data.map((component)=>{
        return (`
            <span class="component_row">
                <h4 class="component_data" id="Component_Data_Category">${component.Material}</h4>
                <h4 class="component_data">${(component.RecyclingRate*100).toFixed(0)}%</h4>
                <h4 class="component_data">${(component.RecoveryRate*100).toFixed(0)}%</h4>
                <h4 class="component_data">${((1-component.RecoveryRate)*100).toFixed(0)}%</h4>
            </span>
        `);
    }).join("");

    temp_data = components.filter((component)=>component.Category === 'Single recyclable material');

    SingleRecyclableMaterial.innerHTML = `
    <span class="component_row">
    <h4 class="component_data_title">Material</h4>
    <h4 class="component_data_title">Recycling Rate</4>
    <h4 class="component_data_title">Recovery Rate</4>
    <h4 class="component_data_title">Disposal Rate</4>
    </span>`;
    
    SingleRecyclableMaterial.innerHTML += temp_data.map((component)=>{
        return (`
            <span class="component_row">
                <h4 class="component_data" id="Component_Data_Category">${component.Material}</h4>
                <h4 class="component_data">${(component.RecyclingRate*100).toFixed(0)}%</h4>
                <h4 class="component_data">${(component.RecoveryRate*100).toFixed(0)}%</h4>
                <h4 class="component_data">${((1-component.RecoveryRate)*100).toFixed(0)}%</h4>
            </span>
        `);
    }).join("");

    temp_data = components.filter((component)=>component.Category === 'Difficult to process');

    DifficultToProcess.innerHTML = `
    <span class="component_row">
    <h4 class="component_data_title">Material</h4>
    <h4 class="component_data_title">Recycling Rate</4>
    <h4 class="component_data_title">Recovery Rate</4>
    <h4 class="component_data_title">Disposal Rate</4>
    </span>`;
    
    DifficultToProcess.innerHTML += temp_data.map((component)=>{
        return (`
            <span class="component_row">
                <h4 class="component_data" id="Component_Data_Category">${component.Material}</h4>
                <h4 class="component_data">${(component.RecyclingRate*100).toFixed(0)}%</h4>
                <h4 class="component_data">${(component.RecoveryRate*100).toFixed(0)}%</h4>
                <h4 class="component_data">${((1-component.RecoveryRate)*100).toFixed(0)}%</h4>
            </span>
        `);
    }).join("");

    temp_data = components.filter((component)=>component.Category === 'Separation process');

    SeparationProcess.innerHTML = `
    <span class="component_row">
    <h4 class="component_data_title">Material</h4>
    <h4 class="component_data_title">Recycling Rate</4>
    <h4 class="component_data_title">Recovery Rate</4>
    <h4 class="component_data_title">Disposal Rate</4>
    </span>`;
    
    SeparationProcess.innerHTML += temp_data.map((component)=>{
        return (`
            <span class="component_row">
                <h4 class="component_data" id="Component_Data_Category">${component.Material}</h4>
                <h4 class="component_data">${(component.RecyclingRate*100).toFixed(0)}%</h4>
                <h4 class="component_data">${(component.RecoveryRate*100).toFixed(0)}%</h4>
                <h4 class="component_data">${((1-component.RecoveryRate)*100).toFixed(0)}%</h4>
            </span>
        `);
    }).join("");
}