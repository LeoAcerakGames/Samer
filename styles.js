function register() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }
    
    // Simulating user registration (in a real system, you would send this data to a server)
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    
    alert("Registration successful!");
    window.location.href = "home.html";
}