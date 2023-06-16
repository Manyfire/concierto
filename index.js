window.onload= inicio ;

function inicio() {
  document.getElementById('botonSubmit').onclick= accion ;
}

function accion(){
  const ticket= document.getElementById('ticketOui').value ;
  const usuarioName= document.getElementById('usuarioName').value ;
  const age= document.getElementById('age').value ;
  const reponces= document.querySelector('.reponces');

  if(ticket !== "oui" && ticket !== "Oui"){
      reponces.innerHTML= `Lo sentimos muchos <b>${usuarioName}!</b>. Pero necesitas un billet para continuar con la reservacion! y Tener una edad mayor a 21 anos`;
     
  }
  else {
    reponces.innerHTML= `Bonjour, Continue a remplir tous les information. Merci`;
    if(usuarioName !== "" && age >= 21){
      reponces.innerHTML=`Felicitation <b>${usuarioName}</b>. <br>Vous avez obtenu le billet pour aller au concert de <strong> Metallica </strong>`
    }
    else if(usuarioName !== "" && age < 21){
      reponces.innerHTML=`<b>${usuarioName}</b>. Boludo! tu no tienes edad para ir al concierto!`
    }
    
  };
    
    
}
