window.onload = function(){
  document.getElementById('openModalJK').addEventListener('click', function() {
    document.getElementById('modalJK').style.display = 'block';
  });
  
  document.getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('modalJK').style.display = 'none';
  });
}
  