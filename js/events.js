//define functions here
function getIt(){
  $('p').on('click',function(){
    alert("Hey!")
  })
  return;
}

function frameIt(){
  $('img').on('load', function(){
    this.className = 'tasty'
  })
  return;
}

$(document).ready(function(){

// call functions here

});
