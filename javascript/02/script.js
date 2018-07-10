// var textArr = document.querySelectorAll('.text');

window.addEventListener('click', function () {
  // textArr.forEach(function (text) {
  //   text.innerText = 'Hello world';
  //   text.style.color = '#ff0000'; // margin-top = marginTop
  //   text.style.marginTop = '100px';
  // });

  var newSpan = document.createElement('span');
  newSpan.innerHTML = '<b>Bold</b> normal';
  document.body.appendChild(newSpan);
});
