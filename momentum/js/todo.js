const toDoForm = document.getElementById("todo-form")
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list")

const TODOS_KEY = "todos"

let toDos = []

function saveToDos() {
	// JSON.stringify : object나 array등을 string으로 변환
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteToDo(event) {
	const li = event.target.parentElement
	li.remove();
	toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id))
	saveToDos()
}

function paintToDo(newTodoObj) {
	const li = document.createElement("li")
	const span = document.createElement("span")
	const button = document.createElement("button")
	
	li.id = newTodoObj.id
	span.innerText = newTodoObj.text
	button.innerText = "X"
	button.addEventListener("click", deleteToDo)

	li.appendChild(span)
	li.appendChild(button)
	toDoList.appendChild(li)
}

function handleToDoSubmit(event) {
	event.preventDefault();
	const newTodo = toDoInput.value
	toDoInput.value = ""
	const newTodoObj = {
		text: newTodo,
		id: Date.now()
	}
	toDos.push(newTodoObj)
	paintToDo(newTodoObj)
	saveToDos()
}

toDoForm.addEventListener("submit", handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY)
if (savedToDos !== null) {
	// string을 javaScript에서 사용가능한 object로 변환
	const parsedToDos = JSON.parse(savedToDos)
	toDos = parsedToDos
	//인자를 하나씩 넘겨줌
	parsedToDos.forEach(paintToDo);
}


