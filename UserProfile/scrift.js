const userForm = document.querySelector("form");
const userInputs = document.querySelectorAll("input");
const userContainer = document.querySelector("#usercontainer");

// Function to create and return element

function makeElement(tag, value) {
    const el = document.createElement(tag);
    el.textContent = value;
    return el;
}

//Function to clear all input fields
function clearInputs() {
    userInputs.forEach((input) => {
        if (input.type !== "submit") {
            input.value = "";
        }
    });
}

// Function to create user card
function createUserCard() {
    const userCard = document.createElement("div");
    userCard.classList.add("card");

    const userProfile = document.createElement("div");
    userProfile.classList.add("profile");

    const userImage = document.createElement("img");
    userImage.setAttribute("src", userInputs[0].value);
    userProfile.appendChild(userImage);
    userCard.appendChild(userProfile);

    const userName = makeElement("username", userInputs[1].value);
    const userRole = makeElement("userrole", userInputs[2].value);
    const userEmail = makeElement("useremail", userInputs[3].value);
    const userPassword = makeElement("userpassword", userInputs[4].value);
    const userAbout = makeElement("userabout", userInputs[5].value);

    userCard.appendChild(userName);
    userCard.appendChild(userRole);
    userCard.appendChild(userEmail);
    userCard.appendChild(userPassword);
    userCard.appendChild(userAbout);

    userContainer.appendChild(userCard);
}

userForm.addEventListener("submit", function (e) {
    e.preventDefault();
    createUserCard(); // using function
    clearInputs();    // using function
});

