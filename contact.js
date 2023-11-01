var userEmail = document.myForm.userEmail.value;
function isEmail() {

    const regexx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


}

function validator() {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z.0-9-]+)*$/;
    if (document.myForm.fName.value == "") {
        alert(" must fill in first name");
        document.myForm.fName;
        return false;
    }
    if (!/^[a-zA-Z]*$/g.test(document.myForm.fName.value)) {
        alert(" First must be a valid Name please enter actual characters. ");
        document.myForm.fName.focus();
        return false;
    }

    if (document.myForm.lName.value == "") {
        alert(" must fill in last name");
        document.myForm.lName;
        return false;
    }

    if (!/^[a-zA-Z]*$/g.test(document.myForm.lName.value)) {
        alert(" last name must be a valid Name please enter actual characters. ");
        document.myForm.lName.focus();
        return false;
    }
    if (document.myForm.userEmail.value == "") {
        alert(" must fill in email");
        document.myForm.userEmail;
        return false;
    }
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(document.myForm.userEmail.value.trim())) {
        alert(document.myForm.userEmail.value + " your email was valid");
    } else {
        alert(document.myForm.userEmail.value + ' Email is not valid');
    }

    return (true);

}