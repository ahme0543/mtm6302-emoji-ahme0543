const container = document.getElementById('container');
    const box = container.getElementsByClassName('box');

    function Row() {
      container.style.flexDirection = 'row';
      for (var i = 0; i < box.length; i++) {
        box[i].style.width = '50%';
        box[i].style.height = '200px';
      }
    }
    function Column() {
      container.style.flexDirection = 'column';
      for (var i = 0; i < box.length; i++) {
        box[i].style.width = '100%';
        box[i].style.height = '300px';
      }
    }