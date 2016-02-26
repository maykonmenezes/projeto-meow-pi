	function validation(){
	
	var senha = document.getElementById("inputPassword");
	var email = document.getElementById("inputEmail");
	
	if (email.value.length < 1 && senha.value.length < 1){
		alert("Os campos email e senha não poder ficar vazios!");
	}
		
}




    function buscar(){
	var busca = document.getElementById("busca");
	
	
	
	if(busca.value.length < 1){
		alert("a busca está vazia!");
	}
}