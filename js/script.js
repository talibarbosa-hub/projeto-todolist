//   Button ADD
const submit = document.getElementById('btnAdd')

// Lista de Tarefas
const listaDeTarefas = document.getElementById('listaDeTarefas')

// Formulário
const form = document.getElementById('form')
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const input = document.getElementById('input');

    let tarefa = input.value;
    if (tarefa.trim() === "") {
        alert("Por favor insira uma tarefa")
        // erro.textContent = "Insira uma tarefa";

    } else {
        let tarefaInputada = document.createElement('li')
        let tarefaContent = document.createElement('span')
        let optionContent = document.createElement('span')
        let check = document.createElement('button')
        // let editar = document.createElement('button')
        let select =document.getElementById('select')
        let opcoes = select.value

        // check button
        check.setAttribute('type', "button")
        check.innerHTML = '&#10004';
        check.classList.add("checkStyle")
        check.addEventListener('click', function () {
            if (tarefaContent.classList.contains('checked')) {
                tarefaContent.classList.remove('checked')
            } else {
                tarefaContent.classList.add('checked')
            }
        })

        
        optionContent.textContent = opcoes
        tarefaContent.textContent = tarefa
        tarefaInputada.appendChild(optionContent)
        tarefaInputada.appendChild(tarefaContent)
        tarefaInputada.appendChild(check)
        listaDeTarefas.appendChild(tarefaInputada);
        tarefaInputada.classList.add('tarefa');
        


        // // SWITCH CASE PARA PRIORITY
        // switch (opcoes = true) {
        //     case 'high':
        //         optionContent.classList.add('.high')
        //     break;
        
        //     default:
        //         break;
        // }




        

        // Buttton Clear done

        const btnLimparFeitos = document.getElementById('btnLimparFeitos')
        btnLimparFeitos.addEventListener('click', function (){
            if(tarefaContent.classList.contains('checked')){
                tarefaInputada.remove()
            }
        
            form.reset()
        })

        // DRAG AN DROP
        tarefaInputada.setAttribute('draggable', 'true')
        listaDeTarefas.setAttribute('draggable', 'true')
        tarefaContent.setAttribute('draggable', 'true')
        check.setAttribute('draggable', 'true')
    }



    //DRAGSTART
    let element
    listaDeTarefas.addEventListener('dragstart', function (e) {
        console.log('drag start')
        element = e.target.closest('.tarefa')
    })

    //DRAGOVER
    listaDeTarefas.addEventListener('dragover', function (e) {
        e.preventDefault()
        console.log('drag over')
        let position = e.target.closest('.tarefa')
        this.insertBefore(element, position)
    })
    //DRAGEND
    listaDeTarefas.addEventListener('dragend', function (e) {
        element = null
    })
})
// Button Clear List

const btnLimparLista = document.getElementById('btnLimparLista')
btnLimparLista.addEventListener('click', function () {
    document.getElementById('listaDeTarefas').innerHTML = ""

})

//Button Mark All Done


const btnMarcarTodos = document.getElementById('btnMarcarTodos')
btnMarcarTodos.addEventListener('click', function () {
    listaDeTarefas.childNodes.forEach((tarefa) => {
        tarefa.childNodes[0].classList.add('checked')
    })

})

// const btnLimparFeitos = document.getElementById('btnLimparFeitos')
//        btnLimparFeitos.addEventListener('click', function (){
//            listaDeTarefas.childNodes.forEach((tarefa)=>{
//                console.log(tarefa)
//                if( tarefa.childNodes[0].classList.contains('checked')){
//                     tarefa.remove()
//                 }
//             })
//         })  

//EDITAR TAREFA bottun



//ADICIONAR ETIQUETA A TAREFA

