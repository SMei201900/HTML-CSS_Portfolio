let darkmode = localStorage.getItem("darkmode"); 
const themeSwitch = document.getElementById("theme-switch")
/*"let" and "const" both creates variables but "let" allows the stored value to be changed later*/

themeSwitch.addEventListener("click", () => {
    darkmode !== "active" ? enableDarkMode() : disableDarkMode()
}) 

