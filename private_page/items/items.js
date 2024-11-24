import { getData, setData, deleteCollection } from "../../utils/localStorage.controller.js"


const selectItems = document.getElementById('items')
const btnAdd = document.getElementById('btnAdd')
const btnEdit = document.getElementById('btnEdit')
const btnDelete = document.getElementById('btnDelete')


window.addEventListener('load', ()=>{
    const items = getData('itemsData')
    let options = ``

    items.map(e=> {
        options += `<option value="${e.name}">${e.name}</option>`
    })

    selectItems.innerHTML = options
    console.log(items)
})

selectItems.addEventListener('change', ()=>{
    const selectedItem = selectItems.value
    const item = getData('itemsData').find(e => e.name === selectedItem)

    document.getElementById('editName').value = item.name
    document.getElementById('editDesc').value = item.desc

})

btnAddItem.addEventListener('click', ()=>{
    const newName = document.getElementById('newName').value
    const newDesc = document.getElementById('newDesc').value
    const newItem = {name: newName, desc: newDesc}

    const items = getData('itemsData')

    items.push(newItem)
    
    
    setData('itemsData', items)
})

btnEdit.addEventListener('click', ()=>{
    const selectedItem = selectItems.value
    const editedName = document.getElementById('editName').value
    const editedDesc = document.getElementById('editDesc').value
    const items = getData('itemsData')

    const index = items.findIndex(e => e.name == selectedItem)
    items[index] = {name: editedName, desc: editedDesc}
    
    setData('itemsData', items)
})

btnDelete.addEventListener('click', ()=>{
    const selectedItem = selectItems.value
    const items = getData('itemsData')

    const index = items.findIndex(e => e.name == selectedItem)
    items.splice(index,1)
    setData('itemsData', items)
})

