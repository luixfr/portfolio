window.addEventListener("load", pageFunctions);

async function pageFunctions() {
  //const loader = document.getElementById("loader");
  const home = document.getElementById("home");

  const data = await getProjectsData();

  if (data) {
    loader.parentElement.removeChild(loader);
    home.classList.add("displayed");
  }
  ///Mobile functions
  const hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", openCloseMenu);
  const page = document.querySelectorAll(".page");
  for (let i = 0; i < page.length; i++) {
    page[i].addEventListener("click", displayPage);
  }
  document
    .querySelector(".portfolio")
    .addEventListener("click", fillPortfolio(data));
}

async function getProjectsData() {
  const endpoint = "data.json";
  const blob = await fetch(endpoint);
  const data = await blob.json();

  return data;
}

function fillPortfolio(projects) {
  ///Fill portfolio
  const portfolio = document.getElementById("portfolio");
  if (portfolio.childElementCount) return;
  ///Get portfolio data
  for (let i = 0; i < projects.length; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    box.setAttribute("id", `box${i + 1}`);
    box.style.backgroundImage = `url(${projects[i].image})`;

    let location = document.createElement("a");
    location.setAttribute("href", projects[i].location);
    location.setAttribute("target", "_blank");

    let title = document.createElement("h2");
    title.classList.add("title");
    title.innerText = `${projects[i].name}`;

    let description = document.createElement("p");
    description.classList.add("plainText");
    description.innerText = `${projects[i].description}`;

    location.appendChild(title);
    location.appendChild(description);
    box.appendChild(location);
    portfolio.appendChild(box);
  }
}

function openCloseMenu() {
  document.querySelector(".hamburger").classList.toggle("change");
  ///Display Menu
  let navBar = document.getElementById("navigation");
  navBar.classList.toggle("active");
  document.getElementById("menu").classList.toggle("active");
  //Menu Item
}

function displayPage() {
  //remove current displayed page
  let displayed = document.querySelector(".displayed");
  displayed.classList.remove("displayed");
  // Display the selected page
  displayed = document.getElementById(`${this.classList[1]}`);
  displayed.classList.add("displayed");
  //Highlight menu item
  let selected = document.querySelector(".selected");
  selected.classList.remove("selected");
  this.classList.add("selected");
  ///Hide Menu
  openCloseMenu();
}
