// check_only_letters : checks if the value of a specified input contains only letters. If not, returns false, else, returns true. (input's id is a parameter)
function check_only_letters(id) {
    let text = document.getElementById(id).value.split("") ;
    for (let i = 0 ; i < text.length ; i++) {
        if (!((text[i] >= "a" && text[i] <= "z") || (text[i] >= "A" && text[i] <= "Z"))) {
            return false ;
        }
    }
    return true ;
}

// check_spaces : checks if the value of a specified input contains spaces. If not, returns false, else, returns true. (input's id is a parameter)
function check_spaces(id) {
    let text = document.getElementById(id).value.split("") ;
    for (let i = 0 ; i < text.length ; i++) {
        if (text[i] === " ") {
            return false ;
        }
    }
    return true ;
}

// check_form : checks if the value of a specified input contains only letters, or spaces if only_letters=false. Alerts the user if the value isn't as asked.
function check_form(id, only_letters=true) {
    let alarm_text = ""
    if (only_letters) {
        if (!check_only_letters(id)) {
            alarm_text += "Erreur : Votre chaine de caractères ne doit contenir que des lettres. " ;
        }
    }
    else {
        if (!check_spaces(id)) {
            alarm_text += "Erreur : Votre chaine de caractères ne doit pas contenir d'espaces. ";
        }
    }
    if (alarm_text !== "") {
        window.alert(alarm_text)
    }
}

// UwU : sets the bgcolor of the page to pink if the input's value is 'UwU'
function UwU(id) {
    if (document.getElementById(id).value === "UwU") {
        document.body.style.backgroundColor = "pink" ;
    }
}