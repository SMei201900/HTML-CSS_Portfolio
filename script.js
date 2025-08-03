let darkmode = localStorage.getItem("darkmode"); 
const themeSwitch = document.getElementById("theme-switch")
/*"let" and "const" both creates variables but "let" allows the stored value to be changed later*/

const enableDarkMode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem("darkmode","active")
}

const disableDarkMode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem("darkmode",null)
}

if(darkmode ==="active") enableDarkMode() /*turns on Dark Mode if stored in local browser already*/

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode") 
    /*needs to be in here b/c without it we are only loading the localStorage data once aka when we first enter the website 
        BUT our clicks should be updating this info each time we click the sun-moon icons */
    darkmode !== "active" ? enableDarkMode() : disableDarkMode()
}) 

