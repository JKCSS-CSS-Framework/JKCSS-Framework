
  const jkmodebtn = document.querySelector('#jkbtnPopup');
  const jkmodal = document.querySelector('#modalJK');
  const closeModel = document.querySelector('#closeModel');

  jkmodebtn.addEventListener('click', ModelJKOpen);
  closeModel.addEventListener('click', ModeljkClosebtn);
  window.addEventListener('click', OutsideJKModel);

  function ModelJKOpen(){
    jkmodal.style.display = 'block';
  }

  function ModeljkClosebtn(){
    jkmodal.style.display = 'none';
  }
