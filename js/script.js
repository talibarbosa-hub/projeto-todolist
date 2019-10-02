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
        let x = document.createElement('button')
        x.setAttribute('type', "button")
        x.innerHTML = 'x';
        x.classList.add("xStyle")
        x.addEventListener('click', function () {
            if (tarefaContent.classList.contains('checked')) {
                tarefaContent.classList.remove('checked')
            } else {
                tarefaContent.classList.add('checked')
            }
        })
        tarefaContent.textContent = tarefa;
        tarefaInputada.appendChild(tarefaContent)
        tarefaInputada.appendChild(x)
        listaDeTarefas.appendChild(tarefaInputada);
        tarefaInputada.classList.add('tarefa');
        console.log(tarefaInputada)
        form.reset()

        const btnMarcarTodos = document.getElementById('btnMarcarTodos')
        btnMarcarTodos.addEventListener('click', function(){
        tarefaContent.classList.add('checked') 

    })
        
        // DRAG AN DROP

        tarefaInputada.setAttribute('draggable','true')
        listaDeTarefas.setAttribute('draggable','true')
        tarefaContent.setAttribute('draggable','true')
        x.setAttribute('draggable','true')
        // tarefaInputada.setAttribute('ondragover', 'allowDrop(event)')
        // ul id listadetarefas
        //li class tarefa

        //DRAGSTART
        let element
        listaDeTarefas.addEventListener('dragstart',function(e){
            console.log('drag start')
        element = e.target.closest('.tarefa')
        })

        //DRAGOVER
        listaDeTarefas.addEventListener('dragover', function(e){
            e.preventDefault()
            console.log('drag over')
            let position = e.target.closest('.tarefa')
            this.insertBefore(element, position)
        })
        //DRAGEND
        listaDeTarefas.addEventListener('dragend',function(e){
            element =null
        
        })





      




        

    }
// Button Mark all as done   
    

})


// Button Clear List

const btnLimparLista = document.getElementById('btnLimparLista')
btnLimparLista.addEventListener('click', function(){
document.getElementById('listaDeTarefas').innerHTML = ""
    
})



// BOTÃO LIMPAR TAREFAS FEITAS OPICIONAL

// let tarefasRealizadas = Array.from(document.getElementsByClassName('checked'))
//     tarefasRealizadas.forEach(function() {

//     })


   