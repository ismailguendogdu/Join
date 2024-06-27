const BASE_URL = "https://rs-testproject01-default-rtdb.europe-west1.firebasedatabase.app/";

async function includeHTML() {
  let includeElements = document.querySelectorAll("[w3-include-html]");
  for (let i = 0; i < includeElements.length; i++) {
    const element = includeElements[i];
    file = element.getAttribute("w3-include-html"); // "includes/header.html"
    let resp = await fetch(file);
    if (resp.ok) {
      element.innerHTML = await resp.text();
    } else {
      element.innerHTML = "Page not found";
    }
  }
}

let users = [
  { name: "Anton Mayer", email: "anton@gmail.com", password: "123456" },
  { name: "Eva Fischer", email: "fischer@gmail.com", password: "7890" },
  { name: "Anja Schulz", email: "schulz@gmail.com", password: "7890" },
  { name: "David Eisenberg", email: "eisenberg@gmail.com", password: "7890" },
  { name: "Benedikt Ziegler", email: "ziegler@gmail.com", password: "7890" },
  { name: "Lisa Becker", email: "becker@gmail.com", password: "7890" },
  { name: "Julia Wolf", email: "wolf@gmail.com", password: "7890" },
  { name: "Christian Gross", email: "gross@gmail.com", password: "7890" },
  { name: "Anna Weber", email: "weber@gmail.com", password: "7890" },
  { name: "Stefan Hoffmann", email: "hoffmann@gmail.com", password: "7890" },
];

let colors = [
  "#FF7A00",
  "#FF5EB3",
  "#6E52FF",
  "#FF745E",
  "#00BEE8",
  "#9327FF",
  "#1FD7C1",
  "#FFA35E",
  "#FC71FF",
  "#FFC701",
  "#0038FF",
  "#FF4646",
  "#FFBB2B",
  "#462f8a",
];

let contacts = [
  {
    name: "Anton Mayer",
    email: "anton@gmail.com",
    initials: "AM",
    badgecolor: colors[0],
    phone: 4911134311,
  },
  {
    name: "Anja Schulz",
    email: "schulz@gmail.com",
    initials: "AS",
    badgecolor: colors[1],
    phone: 49123451111,
  },
  {
    name: "Eva Fischer",
    email: "fischer@gmail.com",
    initials: "EF",
    badgecolor: colors[2],
    phone: 49111119999,
  },
  {
    name: "David Eisenberg",
    email: "eisenberg@gmail.com",
    initials: "DE",
    badgecolor: colors[3],
    phone: 49555111111,
  },
  {
    name: "Benedikt Ziegler",
    email: "ziegler@gmail.com",
    initials: "BZ",
    badgecolor: colors[4],
    phone: 4914441111111,
  },
  {
    name: "Lisa Becker",
    email: "becker@gmail.com",
    initials: "LB",
    badgecolor: colors[5],
    phone: 491766789012,
  },
  {
    name: "Julia Wolf",
    email: "wolf@gmail.com",
    initials: "JW",
    badgecolor: colors[6],
    phone: 491777890123,
  },
  {
    name: "Christian Gross",
    email: "gross@gmail.com",
    initials: "CG",
    badgecolor: colors[7],
    phone: 491788901234,
  },
  {
    name: "Anna Weber",
    email: "weber@gmail.com",
    initials: "AW",
    badgecolor: colors[8],
    phone: 491799012345,
  },
  {
    name: "Stefan Hoffmann",
    email: "hoffmann@gmail.com",
    initials: "SH",
    badgecolor: colors[9],
    phone: 491700123456,
  },
];

let categories = [
  {
    name: "Management",
    color: colors[0],
  },
  {
    name: "Marketing",
    color: colors[1],
  },
  {
    name: "Technical task",
    color: colors[2],
  },
  { 
    name: "Budget", 
    color: colors[3], 
  },
  { name: "Userstory", color: colors[3] },
];

let tasks = [
  {
    title: "First test title",
    timestamp: 1717999440032,
    assigned: [contacts[0], contacts[1]],
    description: "This will be a description",
    dueDate: "2024-06-12",
    prio: "medium",
    category: categories[0],
    subtasks: {
      subtaskList: [{ name: "Project structure", completed: false }],
      completed: 0,
    },
    status: "toDos",
  },
  {
    title: "Progressing Task",
    timestamp: 1717999440023,
    assigned: [contacts[3]],
    description: "Anna did not describe her task",
    dueDate: "2024-06-13",
    prio: "high",
    category: categories[1],
    subtasks: {
      subtaskList: [
        { name: "Coffeebreak", completed: true },
        { name: "Coffeebreak", completed: false },
      ],
      completed: 1,
    },
    status: "inProgress",
  },
  {
    title: "Await Feedback Task",
    timestamp: 1717999440040,
    assigned: [contacts[3], contacts[2]],
    description: "No description needed",
    dueDate: "2024-06-15",
    prio: "low",
    category: categories[2],
    subtasks: {
      subtaskList: [{ name: "Project structure", completed: false }],
      completed: 0,
    },
    status: "awaitFeedback",
  },
  {
    title: "Done Task",
    timestamp: 1717999440100,
    assigned: [contacts[0]],
    description: "Create a kanban board",
    dueDate: "2024-06-15",
    prio: "low",
    category: categories[3],
    subtasks: {
      subtaskList: [
        { name: "Start project", completed: true },
        { name: "Scrum", completed: true },
      ],
      completed: 2,
    },
    status: "done",
  },
];

/** Writes a given value into the value of an html-input-element
 * @param {string} value - value to write into the input element
 * @param {string} inputId - ID of the html-input-element/container
 */
function setValueToInput(value, inputId) {
  let container = document.getElementById(inputId);
  container.value = value;
}

function getValueFromInput(inputId) {
  let container = document.getElementById(inputId);
  return container.value;
}

function parseTextInput(string) {
  return string.trim();
}

function loadTasks() {
  let tasksAsString = localStorage.getItem("tasks");
  if (tasksAsString) {
    tasks = JSON.parse(tasksAsString);
  }
}

// async function deleteData(path = "") {
//   let response = await fetch(BASE_URL + path + ".json", {
//     method: "DELETE",
//   });
//   console.log("post", response);
//   let responseJson = await response.json();
//   console.log(responseJson);
// }

async function putData(path = "", data = {}) {
  let response = await fetch(BASE_URL + path + ".json", {
    method: "PUT",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
}

async function loadData(path = "") {
  let response = await fetch(BASE_URL + path + ".json");
  let responseJson = await response.json();
  // console.log(responseJson);
  return responseJson;
}

async function saveTasksToAPI() {
  let tasksAsText = JSON.stringify(tasks);
  uploadStatus = await putData("/joinTasks", (data = { "tasks": tasksAsText }));
  if (uploadStatus.ok) {
    console.log("task was saved to firebase");
  }
}

async function saveUsersToAPI() {
  let usersAsText = JSON.stringify(users);
  uploadStatus = await putData("/joinUsers", (data = { "users": usersAsText }));
  if (uploadStatus.ok) {
    console.log("user array saved to firebase");
  }
}

async function saveContactsToAPI() {
  let contactsAsText = JSON.stringify(contacts);
  uploadStatus = await putData("/joinContacts", (data = { "contacts": contactsAsText }));
  if (uploadStatus.ok) {
    console.log("contacts array saved to firebase");
  }
}

async function loadTasksFromAPI() {
  let tasksRaw = await loadData("joinTasks");
  let tasksAsString = tasksRaw.tasks;
  if (tasksAsString) {
    tasks = JSON.parse(tasksAsString);
  }
  // console.log("downloaded tasks", tasks);
}

async function loadUsersFromAPI() {
  let usersRaw = await loadData("joinUsers");
  let arrayAsString = usersRaw.users;
  if (arrayAsString) {
    users = JSON.parse(arrayAsString);
  }
  // console.log("downloaded users", users);
}

async function loadContactsFromAPI() {
  let contactsRaw = await loadData("joinContacts");
  let arrayAsString = contactsRaw.contacts;
  if (arrayAsString) {
    contacts = JSON.parse(arrayAsString);
  }
  // console.log("downloaded contacts", contacts);
}

function loadContacts() {
  let savedContacts = JSON.parse(localStorage.getItem("contacts"));
  if (savedContacts) {
    contacts = savedContacts;
  }
}

function saveContactsToLocalStorage() {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

function toggleUserMenu() {
  popup = document.getElementById("header-popup-curtain");
  popup.classList.toggle("d-none");
}

function logoutUser() {
  console.log("logging out");
  sessionStorage.clear();
}

function renderUserlogo() {
  let userLogo = document.getElementById("userLogo");
  let currentUser = sessionStorage.getItem("contact");
  currentUser = JSON.parse(currentUser);
  userLogo.innerHTML = "G";
  if (currentUser) {
    if (currentUser.initials) {
      userLogo.innerHTML = currentUser.initials;
    }
  }
}

function checkUserLoginStatus() {
  let userAsText = sessionStorage.getItem("contact");
  if (userAsText) {
    return true;
  } else {
    return false;
  }
}