const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

addBtn.addEventListener('click', () => {
  onAdd();
});

/* 
  1. 사용자가 입력한 텍스트 받아오기
  2. 받아온 텍스트 이용해 새로운 아이템 만들기 (텍스트 + 삭제 버튼)
  3. items 컨테이너 안에 새로 만든 아이템 추가
  4. 새로 추가된 아이템으로 스크롤링
  5. input 초기화
*/
function onAdd(){
  const text = input.value;
  if(text === ''){
    input.focus();
    return;
  }

  const item = createItem(text);

  items.appendChild(item);

  item.scrollIntoView({block:'center'})

  input.value = '';
  input.focus();
}

function createItem(text){
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');

  const item = document.createElement('div');
  item.setAttribute('class', 'item');
  
  const name = document.createElement('span');
  name.setAttribute('class', 'item__name');
  name.innerText = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'item__delete');
  deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>'
  deleteBtn.addEventListener('click', () => { 
    items.removeChild(itemRow);
  })

  const itemDivider = document.createElement('div');
  itemDivider.setAttribute('class', 'item__line');

  item.appendChild(name);
  item.appendChild(deleteBtn);

  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);
  return itemRow;
}

input.addEventListener('keypress', event => {
  if(event.key === "Enter"){
    onAdd();
  }
})