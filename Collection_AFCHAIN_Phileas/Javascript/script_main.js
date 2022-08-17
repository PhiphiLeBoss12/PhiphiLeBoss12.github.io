/******************/
/* Main functions */
/******************/

// page_load : to be called at the loading of the page. It sets the style of the page (alternate : true/false)
function page_load() {
    // If 'alt_style-disabled' is defined, set the page's style as what it has been set previously. This only works if the website is hosted somewhere (even locally).
    if (typeof(window.sessionStorage.getItem('alt_style_disabled')) === typeof('true')) {
        document.styleSheets[1].disabled = string_to_bool(window.sessionStorage.getItem('alt_style_disabled')) ;
        document.styleSheets[0].disabled = !string_to_bool(window.sessionStorage.getItem('alt_style_disabled')) ;
    }
    // If 'alt_style_disabled' isn't defined, set it on true
    else{
        window.sessionStorage.setItem('alt_style_disabled', 'true') ;
    }
}

// string_to_bool : converts a string to a boolean. If the string != true, returns false.
function string_to_bool(str) {
    return str === 'true' ;
}

// change_style : Sets the style of the page to either the normal or alternate style
function change_style() {
    // Setting on the session storage a variable. It states if the alternate style must be enabled
    window.sessionStorage.setItem('alt_style_disabled', (!string_to_bool(window.sessionStorage.getItem('alt_style_disabled'))).toString()) ;
    // Changing the page's style according to the variable
    document.styleSheets[1].disabled = string_to_bool(window.sessionStorage.getItem('alt_style_disabled')) ;
    document.styleSheets[0].disabled = !string_to_bool(window.sessionStorage.getItem('alt_style_disabled')) ;
}

// get_date : sets the browser's date to the loading date of the site
function get_date() {
    window.date_begin = new Date() ;
}

// edit_mail : sends a mail to the creator of the page with a customized object
function edit_mail() {
    // initializing the subject, and editing it according to the browser's language
    let subject ;
    if (navigator.language === "fr-FR") {
        subject = window.date_begin.getDay() + "-" + window.date_begin.getMonth() + "-" + window.date_begin.getFullYear() + " : " + window.date_begin.getHours() + "h" + window.date_begin.getMinutes() ;
    }
    else{
        subject = window.date_begin.getMonth() + "-" + window.date_begin.getDay() + "-" + window.date_begin.getFullYear() + " : " + window.date_begin.getHours() + "h" + window.date_begin.getMinutes() ;
    }
    // editing the element int the xhtml doc whose id = "mail" (adding a new subject)
    document.getElementById("mail").href = "mailto:phileas.afchain.boucher@etu.univ-poitiers.fr?subject=" + subject ;
}



/*********************/
/* Sitemap functions */
/*********************/

// rotate_arrows : this function defines a rotation for all the page's arrows (images with class 'arrow')
function rotate_arrows() {
    let arrows = document.getElementsByClassName("arrow") ;
    for (let i = 0 ; i < arrows.length ; i++) {
        arrows[i].style.rotate = "90deg" ;
    }
}

// delete_last_characters : returns the string str without its nb last characters
function delete_last_characters(str, nb) {
    return str.slice(0, str.length - nb) ;
}

// rotate : animation that allows to rotate an object (obj).
function rotate(obj, deg) {
    // Rotates the arrow 10 times.
    let i = 0 ;
    let interval = (setInterval(() => {
        // Adding deg/10 degrees to the rotation. The operations on strings are here to remove/add 'deg' in the end of the value.
        obj.rotate = (parseInt(delete_last_characters(obj.rotate, 3)) + deg / 10).toString() + "deg" ;
        i++ ;
        // Stop the loop if it has been repeated 10 times.
        if (i === 10) clearInterval(interval) ;
    })) ;
}

// hide_folder : hides the html elements whose id = folder_id. Starts a rotation of the arrow contained in the object calling the function.
function hide_folder(folder_id, obj) {
    let folder = document.getElementById(folder_id) ;
    if (folder.style.display === "none") {
        folder.style.display = "block" ;
        rotate(obj.getElementsByClassName("arrow")[0].style, 90) ;
    }
    else {
        folder.style.display = "none" ;
        rotate(obj.getElementsByClassName("arrow")[0].style, -90) ;
    }
}