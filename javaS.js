// Define a variable to store the list of items
let items = [];

// Get references to the form and list elements
const form = document.querySelector('form');
const list = document.querySelector('#list');

// Define a function to add a new item to the list
function addItem(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the text of the new item
  const newItem = document.querySelector('#new-item').value;

  // Add the new item to the list and reset the input field
  if (newItem !== '') {
    items.push(newItem);
    document.querySelector('#new-item').value = '';
    displayItems();
  }
}

// Define a function to display the list of items
function displayItems() {
  // Clear the list element
  list.innerHTML = '';

  // Add each item to the list element as a new list item
  items.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });
}

// Call the displayItems function to initially display the list
displayItems();
