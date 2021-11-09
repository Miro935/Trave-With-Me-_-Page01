/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

function myFunction() {
    var x = document.getElementsByClassName("open-nav");
    if (x.className === "main-nav") {
        x.className += " responsive";
    } else {
        x.className = "main-nav";
    }
}