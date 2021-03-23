
document.getElementById("task-form")
.addEventListener("submit", saveAndPrintTaskItem);


function saveAndPrintTaskItem(e) {
    e.preventDefault();

    const taskInput = document.getElementById("new-task-item")
    const text = taskInput.value; 

    if (text === "") {
        alert("I need orders!");
        return; 
    }

    const taskContainer = document.getElementById("list-tasks");
    const li = document.createElement("li");
    const deleteButton = createDeleteButton(li); 
    const taskText = createTaskText(text); 

    li.appendChild(deleteButton);
    li.appendChild(taskText);
    taskContainer.appendChild(li);
    taskInput.value = '';
}

function createDeleteButton(task) { 
    const deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("X"));
    deleteButton.classList.add("delete-button");

    deleteButton.addEventListener("click", () => { 
        task.remove(); 
    })

    return deleteButton; 
}



function createTaskText(text) { 
    const textParagraph = document.createElement('p'); 
    textParagraph.textContent = text; 
    textParagraph.addEventListener('click', () => { 
        textParagraph.classList.toggle("task-complete");
    })
    return textParagraph; 
}
