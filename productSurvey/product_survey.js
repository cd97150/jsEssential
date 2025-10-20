const submitButton = document.getElementById('submitBtn');
const submitComments  = document.getElementById('submitComments');


function submitFeedback() {
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;
    document.getElementById('userInfo').style.display = 'block';
    document.getElementById('userExp').style.display = 'block';
    console.log(submitButton, username, age, email, job, designation, productType, feedback);
    alert('Thank you for your valuable feedback')
}

submitButton.onclick = submitFeedback;

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
});


function submitCts(){
    const comments = document.getElementById('userExperience').value;
    console.log(comments);
    alert("votre message a bien ete pris en compte. Merci d'avoir laissé votre avis")
}

submitComments.onclick = submitCts;