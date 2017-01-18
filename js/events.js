//define functions here
function getIt(){
  $('p').on("click", function(){
    alert("Hey!");
  });
}

function frameIt () {
  $('img').on("load", function() {
    this.className = 'tasty'
  })
}

function pressIt () {
  $(document).on('keydown', function(key) {
    if (key.which == 71){
      alert('Yo boy!!! You pressed g!');
    }
  })
}

function submitIt () {
  $('form').on("submit", function() {
    alert("Your form is going to be submitted now.")
    })
}

$(document).ready(function(){
  getIt()
  frameIt()
  submitIt()
  pressIt()
});
