var submitBtn = document.querySelector("#submitBtn")
var users = new Array() // or var users = []
var username = document.querySelector("#username")
var password = document.querySelector("#password")


submitBtn.addEventListener('click', () => {
	if (username.value == '' || password.value == '') {
		alert('Please enter a valid username or a password')
	} else {
		alert('Inputs looks good!')
		var user = {
			"username": username.value,
			"password": password.value,
		}
		users.push(user)
		console.log(users)
	}
})

username.addEventListener('blur', () => {
	console.log("we have a blur event")

	var user = {
		"username": username.value,
		"password": password.value
	}

	fetch(`http://localhost:8080/users/exists`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(user)
	})
		.then((response) => response.json())
		.then((data) => {
			console.log(data)
		})

})