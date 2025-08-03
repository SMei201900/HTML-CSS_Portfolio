let darkmode = localStorage.getItem("darkmode"); 
const themeSwitch = document.getElementById("theme-switch")
/*"let" and "const" both creates variables but "let" allows the stored value to be changed later*/

themeSwitch.addEventListener("click", () => {
    darkmode !== "active" ? enableDarkMode() : disableDarkMode()
}) 

/* "add.EventListerner" tells the button to listn for clicks to then perform a specific action 
    the "clicks" can be "click," "mouseover," "keydown" for example

, () => { something something something } means "execute this code"
    () means NO argument is taken /this function requires no arguments 
    => is just an arrow 
    { something something something } is the body of the function, insert something in here for things to happen
       
!== means DOES NOT EQUAL

the "?" is shorthand for "if else statement"
    meaning we are saying 
        IF darkmode DOES NOT equal to "active"
        then run enableDarkMode
        ELSE run disableDarkMode 
This means it is the same as writing: 
    if (darkmode !== "active") {
        enableDarkMode()
    } else {
        disableDarkMode()
    }


the ":" is related to true/false 
    if darkmode DOES NOT equal active is TRUE, we enableDarkMode 
    if darkmode DOES equal active aka darkmode !== "active" is now FALSE, we disableDarkMode

*/
