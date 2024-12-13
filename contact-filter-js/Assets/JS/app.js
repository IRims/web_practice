const contacts = [
  { 
    id: "1", 
    name: "Ayesha", 
    email: "ayesha254@gmail.com", 
    position: "Full Stack Developer",
    image: "./Assets/Images/girl.png" 
  },
  { 
    id: "2", 
    name: "Noor", 
    email: "Noor34@gmail.com", 
    position: "Frontend Developer",
    image: "./Assets/Images/girl1.jpeg" 
  },
  { 
    id: "3", 
    name: "Abbas", 
    email: "abbas56@gmail.com", 
    position: "UI/UX Designer",
    image: "./Assets/Images/boy.jpg"   },
  { 
    id: "4", 
    name: "Rimsha", 
    email: "irmsha@gmail.com", 
    position: "Backend Developer",
    image: "./Assets/Images/girl2.jpeg" 
  },
  { 
    id: "5", 
    name: "Adil", 
    email: "adi93@gmail.com", 
    position: "Frontend Developer",
    image: "./Assets/Images/boy.jpg" 
  },
  { 
    id: "6", 
    name: "Laiba", 
    email: "laiba32qw@gmail.com", 
    position: "UI/UX Designer",
    image: "./Assets/Images/girl.png" 
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const contactList = document.getElementById("contactList");

  function displayContacts(contacts) {
    contactList.innerHTML = `
      <div class="table-header">
        <div class="table-cell">Name</div>
        <div class="table-cell">Position</div>
        <div class="table-cell">Email</div>
      </div>
    `;
    for (const c of contacts) {
      const contactDiv = document.createElement("div");
      contactDiv.className = "table-row";
      contactDiv.innerHTML = `
        <div class="table-cell">
          <img src="${c.image}" alt="${c.name} Image">
          <span>${c.name}</span>
        </div>
        <div class="table-cell">
          <span class="badge ${c.position.toLowerCase().replace(/\//g, "-").replace(/ /g, "-")}">${c.position}</span>
        </div>
        <div class="table-cell">${c.email}</div>
      `;
      contactList.appendChild(contactDiv);
    }
  }

  function filterContacts() {
    const filterInput = document.querySelector('input[name="filter"]').value.toLowerCase();
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterInput)
    );
    displayContacts(filteredContacts);
  }

  displayContacts(contacts);

  document.getElementById("filter-button").addEventListener("click", filterContacts);
});
