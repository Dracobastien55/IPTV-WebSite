var mail = document.getElementById("mailBtn");
var prenom = document.getElementById("name");
var tel = document.getElementById("phone");
var form = document.getElementById("Form");

mail.addEventListener("click", ()=> {
    link = form.getAttribute("action");
    link += "&body=Nom : " + prenom.value + " \n Téléphone : " + tel.value
    form.setAttribute("action",link);
});