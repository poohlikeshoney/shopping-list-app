const input = document.querySelector('input'),
      addBtn = document.querySelector('button'),
      ul = document.querySelector('ul');

addBtn.addEventListener('click', addItem);
ul.addEventListener('click', deleteOrCheck);

// 1. input value값 받아와서 addList()에 넘겨주기
function addItem(e){
  if(input.value != null){
    addList(input.value);
    input.value = "";
    input.focus();
  }
}
// 2. <li>태그 생성 후 input value값 넣어주기, 삭제버튼 & 체크버튼 생성 후 <ul>태그 안에 li이 넣어주기
function addList(value){
  const li = document.createElement('li');
  const trashIcon = document.createElement('span');
  trashIcon.innerHTML = '<i class="delete fas fa-trash-alt"></i></span>';
  ul.appendChild(li);
  li.appendChild(trashIcon);
  li.innerText = value;
  // li.innerHTML =
  //   `<span class="text">${value}</span>
  //   <input type="checkbox" />
  //   <span><i class="delete fas fa-trash-alt"></i></span>`;
}

// 3. 삭제버튼 누르면 할일
function deleteItem(e){
  const remove = e.target.parentNode; //클릭한 x버튼의 부모 li
  const removeParent = remove.parentNode; //ul
  removeParent.removeChild(remove);
}

// 4. 체크박스 누르면 할일
function checkToDo(e){
  const checked = e.target.parentNode;
  const delBtn = checked.children[2];
  if(e.target.checked){
    checked.style.color = "#ddd";
    delBtn.style.color = "#000"
  }else {
    checked.style.color = "#000";
  }
}

function deleteOrCheck(e){
  if(e.target.className == 'delete')  
    deleteItem(e); 
  else {
    checkToDo(e); 
  }
}