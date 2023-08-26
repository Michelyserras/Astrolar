    function confirmarDados(event){
        var  cliente = {
            nome: "",
            email:"",
            aniversario:"",
            celular:"",
            mensagem:""
        };
        cliente.nome=document.getElementById("nome").value;
        cliente.email=document.getElementById("email").value;
        cliente.aniversario=document.getElementById("dtnascimento").value
        let data = new Date(cliente.aniversario);
        let dataFormatada = data.toLocaleDateString('pt-BR', {timeZone:'UTC'});
        cliente.celular=document.getElementById("cel").value;
        cliente.mensagem=document.getElementById("msg").value;

        window.alert("Confirme os seus dados logo abaixo:");

                  
        document.getElementById("nomeCad").innerHTML=cliente.nome;
        document.getElementById("emailCad").innerHTML=cliente.email;
        document.getElementById("dtCad").innerHTML=dataFormatada;
        document.getElementById("celCad").innerHTML=cliente.celular;
        document.getElementById("msgCad").innerHTML=cliente.mensagem;
        document.getElementById=("frmCadastro").reset;

        
          

            
            var section2=document.querySelector(event.target.getAttribute('href'));
            section2.classList.remove("hidden");  // Remove a classe "hidden" para mostrar a próxima seção
        
            section2.scrollIntoView({ behavior:'smooth' });  // Rola automaticamente para a próxima seção suavemente
      }
      
    
    

 
    
    
