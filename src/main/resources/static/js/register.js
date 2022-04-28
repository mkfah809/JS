var usernameTextbox = document.querySelector('#username')

var eyeIcons = document.querySelectorAll('.fa-eye')

eyeIcons.forEach((eyeIcon) => {
	eyeIcon.addEventListener('click', () => {
		console.log(eyeIcon)
		if (eyeIcon.classList.contains('fa-eye')) {
			eyeIcon.classList.replace('fa-eye', 'fa-eye-slash')


			if (eyeIcon.getAttribute('id') === 'passwordEyeIcon') {
				document.querySelector("#password").type = 'text'
			} else {
				document.querySelector("#confirmPassword").type = 'text'
			}

		} else {
			eyeIcon.classList.replace('fa-eye-slash', 'fa-eye')
			if (eyeIcon.getAttribute('id') === 'passwordEyeIcon') {
				document.querySelector('#password').type = 'password'
			} else {
				document.querySelector('#confirmPassword').type = 'password'
			}
		}


	})
})



usernameTextbox.addEventListener('blur', () => {
	var user = {
		'username': usernameTextbox.value,
	}
	fetch('/users/exists', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(user)
	})
		.then((response) => response.json())
		.then((data) => {
			if (data === true) { // aro7 ashof el endpoint b-return eh!!! boolean ? TAYEEBB
				console.log("username already exists")
				usernameTextbox.focus()
				usernameTextbox.select()
				showErrorAnimation().then((message) => {
					console.log("we are now in the callback function")
					console.log(message)
					usernameTextbox.style.backgroundColor = 'rgb(255,255,255)'

				})
				//				showErrorAnimation(() => {
				//					//animation is completed at this point
				//					console.log("we are now in the callback function")
				//					usernameTextbox.style.backgroundColor = 'rgb(255,255,255)'
				//				})
			}
		})
})

//function showErrorAnimation(callback) {
//	//perform the error animation code
//	console.log("We're in the showErrorAnimation function")
//	var i = 0
//
//	var animationInterval = setInterval(() => {
//		i++
//		usernameTextbox.style.backgroundColor = `rgb(${i},0,0)`
//		if (i === 255) {
//			clearInterval(animationInterval);
//			console.log("DONE EXECUTING ")
//			callback()
//		}
//	},0)
//}

function showErrorAnimation() {
	return new Promise((resolve, reject) => {
		console.log("We're in the showErrorAnimation function")
		var i = 0

		var animationInterval = setInterval(() => {
			i++
			usernameTextbox.style.backgroundColor = `rgb(${i},0,0)`
			if (i === 255) {
				clearInterval(animationInterval);
				resolve("DONE EXECUTING ")
			}
		}, 1)
	})
}