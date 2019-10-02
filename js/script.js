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
        let x = document.createElement('button')
        x.setAttribute('type', "button")
        x.innerHTML = 'x';
        x.classList.add("xStyle")
        x.addEventListener('click', function () {
            if (tarefaInputada.classList.contains('checked')) {
                tarefaInputada.classList.remove('checked')
            } else {
                tarefaInputada.classList.add('checked')
            }
        })
        tarefaInputada.textContent = tarefa;
        tarefaInputada.appendChild(x)
        listaDeTarefas.appendChild(tarefaInputada);
        tarefaInputada.classList.add('tarefa');
        console.log(tarefaInputada)
        form.reset()

        const btnMarcarTodos = document.getElementById('btnMarcarTodos')
        btnMarcarTodos.addEventListener('click', function(){
        tarefaInputada.classList.add('checked') 

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

// DRAG AN DROP
