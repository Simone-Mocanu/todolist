var inputText, todo, body; 
var todos = [];
var storedTodos;
window.onload = (event) => {
    // console.log("page is fully loaded");

    body = document.getElementById("body");
    storedTodos = JSON.parse(localStorage.getItem("todos"));
    if(storedTodos.length != 0)
    {
        for(var i = 0; i < storedTodos.length; i++)
        {
            todos.push(storedTodos[i]);
            addDiv(storedTodos[i]);
        }
    }

    // console.log(storedTodos);
    console.log(todos);
    inputText = document.getElementById("inputText");
    inputText.setAttribute('autocomplete', 'off');
};

function addDiv(todoText)
{
    const todosDiv = document.createElement("div");
    todosDiv.classList.add(...['m-4','bg-zinc-800', 'px-2', 'py-1', 'text-gray-600', 'rounded-xl', 'max-w-sm', 'flex', 'items-center', 'mx-auto']);

    //<label class="text-xl font-medium text-white">Todo</label>

    const text = document.createElement("label");
    text.innerHTML = todoText;
    text.classList.add(...['text-white']);

    todosDiv.appendChild(text);
    body.appendChild(todosDiv);

}

function addTodo()
{
    todo = inputText.value;
    if(todo.length == 0) {
        //toastr
        return;
    }

    todos.push(todo);

    console.log(todos);

    localStorage.setItem("todos", JSON.stringify(todos));
    addDiv(todo);
}