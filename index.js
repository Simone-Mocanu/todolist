var inputText, todo, body;
window.onload = (event) => {
    // console.log("page is fully loaded");
    inputText = document.getElementById("inputText");
    body = document.getElementById("body");
};
// toastr
function addTodo()
{
    todo = inputText.value;
    
    if(todo.length == 0) {
        console.log("ahh");
        return;
    }

    const todosDiv = document.createElement("div");
    todosDiv.classList.add(...['m-4','bg-zinc-800', 'p-6', 'text-gre-600', 'rounded-xl', 'max-w-sm', 'flex', 'items-center', 'mx-auto']);

    //<label class="text-xl font-medium text-white">Todo</label>

    const text = document.createElement("label");
    text.innerHTML = todo;

    text.classList.add(...['text-xl', 'font-medium', 'text-white']);
    todosDiv.appendChild(text);
    body.appendChild(todosDiv);
}