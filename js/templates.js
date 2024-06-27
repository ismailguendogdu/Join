function generateEmptyMessageHTML(emptyMessage) {
    return /*html*/ `<div class="noProgess">${emptyMessage}</div>`;
  }
  
  function generatePossibleToMoveHTML(status) {
    return /*html*/ `<div class="possbleToMove d-none" id="possbleToMove${status}"></div>`;
  }

  function generateTodoHTML(element, index) {
    return /*html*/ `
      <div draggable='true' ondragstart='startDragging(${element.timestamp}, ${index})' class="card" id="card${index}" onclick="boardPopup(${
      element.timestamp
    })">
      <div class="categoryAndDropDown">
        <div class="cardCategory" id="cardCategory${index}">${element.category.name}</div>
        <div id="dropdownMenu" class="dropdownMenu dropdown-container">
          <span onclick="toggleDropdown(event, ${element.timestamp}, ${index})">...</span>
            <div class="dropdown-menu" id="dropdownMenu${index}">
              <a href="" onclick="mobileSetStatusTo(${element.timestamp}, 'toDos', event)" id="dropdowntoDos${index}">To do</a>
              <a href="" onclick="mobileSetStatusTo(${element.timestamp}, 'inProgress', event)" id="dropdowninProgress${index}">in Progress</a>
              <a href="" onclick="mobileSetStatusTo(${element.timestamp}, 'awaitFeedback', event)" id="dropdownawaitFeedback${index}">Await feedback</a>
              <a href="" onclick="mobileSetStatusTo(${element.timestamp}, 'done', event)" id="dropdowndone${index}">Done</a>
          </div>
        </div>
      </div>
        <div class="cardHeadline">${element.title}</div>
        <div class="cardDescription" id="cardDescription${index}"></div>
        <div class="cardSubtasks" id="cardSubtasks${index}">
          <div class="subtasksBar">
            <div class="subtasksBarProgress" id="subtasksBarProgress${index}"></div>
        </div > 
          <span id="subtasksCompleted">${element.subtasks.completed}/${element.subtasks.subtaskList.length}</span>Subtasks
        </div>
          <div class="cardWorkers"><div id="contactNames${index}"></div><img src=${prios[element.prio]} alt=""></div>
      </div>
     `;
  }

  function boardPopupHTML() {
    return /*html*/ `
   <div class="popupCategory" id="popupCategory"> 
     <span id="categoryColor">${popupElement.category.name}</span>
     <img src="../img/close.svg" alt="" onclick="closePopup()">
   </div>
   <div class="popupHeadline">${popupElement.title}</div>
   <div class="popupDescription">${popupElement.description}</div>
   <div class="popupDate"><span>Due date:</span> ${popupElement.dueDate} </div>
   <div class="popupPriority"><span>Priority:</span> ${popupElement.prio} <img src="${prios[popupElement.prio]}" alt=""></div>
   <div class="popupAssigned">
     <div>Assigned To:</div>
     <div class="popupPerson" id="popupPerson">
      </div>
     </div>
   <div class="popupSubtask" id="popupSubtask"> 
     <span>Subtasks</span>
     <div class="popupSingleSubtask" id="popupSingleSubtask"></div>
     </div>
   <div class="popupDeleteAndEdit">
    <div onmouseover="hoverDelete()" onmouseout="leaveDelete()">
      <img id="deleteBlack" src="../img/delete_black.svg" alt="">
      <img id="deleteBlue" src="../img/delete_blue.svg" alt="" class="d-none" onclick="deleteTask(${popupElement.timestamp})">
    </div>
  <div class="line"></div>
    <div onmouseover="hoverEdit()" onmouseout="leaveEdit()">
      <img id="editBlack" src="../img/edit_black.svg" alt="">
      <img id="editBlue" src="../img/edit_blue.svg" alt="" class="d-none" onclick="editPopupTask(${popupElement.timestamp})">
    </div>
   </div>
  `;
  }


  function generatePersonHTML(assigned, index) {
    return /*html*/ `
      <div class="PopupInitialsandContacts">
        <span class="initalsCircle" id="initalsCircleColorPopup${index}">${assigned.initials}</span>
        <span>${assigned.name}</span>
      </div>
    `;
  }