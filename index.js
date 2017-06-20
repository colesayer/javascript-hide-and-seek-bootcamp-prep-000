function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}

function deepestChild(){
var grand = document.getElementById('grand-node').querySelectorAll('div');
for (var i = 0; i < grand.length; i++) {
var deeper = grand[i].querySelector('div');
if (deeper === null) {
  var deepest = grand[i-1].querySelector('div');
}

}
return deepest;
}
