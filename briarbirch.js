(function() {

document.addEventListener( "DOMContentLoaded", function( e ) { 

  var form = document.getElementById("email-form");
      
  async function handleSubmit(event) {
    event.preventDefault();
    if(event.target.querySelector("input").value.trim() == "") return;
    var status = document.getElementById("email-form-status");
    status.className = "";
    status.innerHTML = "";
    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
          'Accept': 'application/json'
      }
    }).then(response => {
      status.innerHTML = "Success! Thanks for your interest.";
      status.className = "success";
      form.reset()
    }).catch(error => {
      status.innerHTML = "Looks like something went wrong. Please try again."
      status.className = "failure";
    });
  }
  form.addEventListener("submit", handleSubmit)

});

})();