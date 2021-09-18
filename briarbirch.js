(function() {

document.addEventListener( "DOMContentLoaded", function( e ) { 

  var form = document.getElementById("email-form");
      
  async function handleSubmit(event) {
    event.preventDefault();
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
      status.innerHTML = "Thanks for your submission!";
      status.className = "success";
      form.reset()
    }).catch(error => {
      status.innerHTML = "Oops! There was a problem submitting your form"
      status.className = "failure";
    });
  }
  form.addEventListener("submit", handleSubmit)

});

})();