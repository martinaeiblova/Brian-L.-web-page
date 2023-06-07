const main_heading = document.querySelector(".main_heading");
const main_page = document.querySelector(".main_page");
const brian_page = document.querySelector(".brian_page");
const fotky_page = document.querySelector(".fotky_page");
const videa_page = document.querySelector(".videa_page");
const program_page = document.querySelector(".program_page");
const kontakt_page = document.querySelector(".kontakt_page");

const button_main_name = document.querySelector(".button_main_name");
const button_brian = document.querySelector(".button_brian");
const button_fotky = document.querySelector(".button_fotky");
const button_videa = document.querySelector(".button_videa");
const button_program = document.querySelector(".button_program");
const button_kontakt = document.querySelector(".button_kontakt");

const contentOfPage = document.querySelectorAll(".content");

function removeEveryContentOnPage() {
    for (const con of contentOfPage) {
        con.classList.add("hidden");
    }
}

function displayBrianPage() {
    removeEveryContentOnPage();

    brian_page.classList.remove("hidden");
}

function displayFotkyPage() {
    removeEveryContentOnPage();

    fotky_page.classList.remove("hidden");
}

function displayVideaPage() {
    removeEveryContentOnPage();

    videa_page.classList.remove("hidden");
}

function displayProgramPage() {
    removeEveryContentOnPage();

    program_page.classList.remove("hidden");
}

function displayKontaktPage() {
    removeEveryContentOnPage();

    kontakt_page.classList.remove("hidden");
}

function displayMainPage() {
    removeEveryContentOnPage();

    main_page.classList.remove("hidden");
}

button_brian.addEventListener("click", displayBrianPage);

button_fotky.addEventListener("click", displayFotkyPage);

button_videa.addEventListener("click", displayVideaPage);

button_program.addEventListener("click", displayProgramPage);

button_kontakt.addEventListener("click", displayKontaktPage);

button_main_name.addEventListener("click", displayMainPage);
