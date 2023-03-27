import LinkedList from "./LinkedList.js"

//LinkedList
const list = new LinkedList()

const nodesContainer = document.querySelector('.ll-wrapper')

const insert_first_form = document.querySelector('.insert-first')
const insert_last_form = document.querySelector('.insert-last')
const insert_at_form = document.querySelector('.insert-pos')
const delete_first_form = document.querySelector('.delete-first')
const delete_last_form = document.querySelector('.delete-last')
const delete_pos_form = document.querySelector('.delete-pos')


insert_first_form.addEventListener('submit',insertFirst)
insert_last_form.addEventListener('submit',insertLast)
insert_at_form.addEventListener('submit',insertAtPos)
delete_first_form.addEventListener('submit',deleteFirst)
delete_last_form.addEventListener('submit',deleteLast)
delete_pos_form.addEventListener('submit',deleteAtPos)


function insertFirst(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const value = formData.get("value")
    list.insertFirst(value)
    
    updateDom({position:0,value:value,type:'INSERT'})
    e.target.reset()
}

function insertLast(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const value = formData.get("value")
    list.insertLast(value)

    updateDom({position:-1,value:value,type:'INSERT'})
    e.target.reset()
}
function insertAtPos(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const value = formData.get("value")
    const position = formData.get('position')

    list.insertatN(value,position)

    updateDom({position:position,value:value,type:'INSERT'})
    e.target.reset()
}
function createNode(value) {

    const node = document.createElement('div')
    const nodeData = document.createElement('div')
    
    const p = document.createElement('p')
    p.innerText = value
    nodeData.appendChild(p) 
    nodeData.classList.add('data')
    nodeData.classList.add('fadein')
    const link = document.createElement('div')
    link.classList.add('link')
    link.classList.add('slidein')
    const arrow = document.createElement('p')
    arrow.innerHTML = '&#129042;'
    link.appendChild(arrow)
    link.classList.add('link')
    
    node.classList.add('node')
    node.append(nodeData,link)
    return node

}
function deleteFirst(e) {
    e.preventDefault()
    list.deleteFirst()
    updateDom({position: 0,value:-1,type:'DELETE'})
    

}
function deleteLast(e) {
    e.preventDefault()
    list.deleteLast()
    updateDom({position:-1,value:-1,type:'DELETE'})
}
function deleteAtPos(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const position = formData.get('position')
    list.deleteatN(position)
    updateDom({position:position,value:-1,type:'DELETE'})
    e.target.reset()
}


function updateDom(action) {

    const {position,value,type} = action
    const nodes = document.querySelectorAll('.node')
    const container  = document.querySelector('.ll-wrapper')
    if(type == 'INSERT') {
        const node = createNode(value)
        
    
        if(nodes.length == 0) {
            container.appendChild(node)
        } else {
    
            if(position == -1) {
                container.appendChild(node)
                
            } else if(position == 0){
               container.prepend(node)
            } else {
                container.insertBefore(node,nodes[position])
            }
           
        }
    } else if( type == 'DELETE') {
        let node = null
        if(position == 0) {

           node =  nodes[0]
        } else if(position == -1) {
            
            node = nodes[nodes.length - 1 ]
        } else {
            node = nodes[position]
        }
        node.classList.add('remove')
        setTimeout(() => {
            node.remove()
        },500)
    } 
    
}

