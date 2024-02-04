function loginUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if ((username === "john.doe" || username === "jane.doe") && password === "password") {
        localStorage.setItem('currentUser', username);
        window.location.href = 'homepage.html'; // Redirect to services page
        return false; // Prevent default form submission
    } else {
        alert('Invalid username or password');
        return false; // Prevent default form submission
    }
}
