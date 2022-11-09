document.getElementById("submit").onclick = function(){
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;

	var message = "" + name + ", thank you for your details. We will be in touch via " + email + " shortly.";


	window.alert(message);
}