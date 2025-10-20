
let userMessage;
let userStatus;
let userRole = "employee";

switch (userRole) {
    case "employee":
        userStatus = "employé"
        userMessage = `vous etes ${userStatus} et vous etes autorisé à acceder aux services dietetiques`;
        break;
    case "member":
        userStatus = "membre"
        userMessage = `vous etes ${userStatus} et vous etes autorisé à acceder aux services dietetiques et à une interaction individuelle avec un diététicien.`
        break;
    case "subscriber":
        userStatus = "abonné";
        userMessage = `Vous etes ${userStatus} et vous etes autorisé à avoir un accès partiel pour faciliter uniquement les "Services diététiques".`;
        break;
    case "noMember":
        userStatus = "pas membre";
        userMessage = `Vous n'etes ${userStatus} mais devenez le , cliquez ici !`
        break;
    default:
        userStatus = "invité"
        userMessage = "Vous n'etes pas autorisé"
}

console.log(userMessage);
const span = document.querySelector("h1 span")
const p = document.querySelector("p")
span.textContent = userStatus;
p.textContent = userMessage;
console.log(span);