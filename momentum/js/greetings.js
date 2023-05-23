const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

// 발생한 event의 정보를 parameter에 저장
function onLoginSubmit(event) {
	// preventDefault : browser의 기본 동작을 막아줌
	event.preventDefault();
	// form과 h1 모두 hidden class 가짐
	loginForm.classList.add(HIDDEN_CLASSNAME);
	const username = loginInput.value;
	localStorage.setItem(USERNAME_KEY, username)
	paintGreetings(username)
}

function paintGreetings(username) {
	// single quote 아니고 back tick
	greeting.innerText = `Hello ${username}`
	// h1에서 hidden class 삭제
	greeting.classList.remove(HIDDEN_CLASSNAME)
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if (savedUsername === null) {
	// show the form
	loginForm.classList.remove(HIDDEN_CLASSNAME)
	loginForm.addEventListener("submit", onLoginSubmit)
} else {
	// show the greetings
	paintGreetings(savedUsername)
}