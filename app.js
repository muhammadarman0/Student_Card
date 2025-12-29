
function errorMessage(p) {
    Swal.fire({
        icon: "error",
        title: `${p}`,
        text: "Something went wrong!",
        // footer: '<a href="#">Why do I have this issue?</a>'
    });

}



function generateCard(e) {

    e.preventDefault()
    let stdname = document.getElementById("name").value;
    let fname = document.getElementById("fname").value
    let email = document.getElementById("email").value;
    // let roll = document.getElementById("rollNum").value
    let cou = document.getElementById("course").value;


    if (stdname == "" || fname == "" || email == "" || cou == "") {
        errorMessage("Please fill all field")
        return;
    }

    let objCard = {
        name: stdname,
        FatherName: fname,
        emailUser: email,
        // rollNumber: roll,
        courses: cou,
    }

    let card = `<div class="student-card">
    <h3>Student Card</h3>
    <p><b>Student Name:</b> ${objCard.name}</p>
    <p><b>Father Name:</b> ${objCard.FatherName}</p>
    <p><b>Email:</b> ${objCard.emailUser}</p>
    <p><b>Roll Number:</b> 31212</p>
    <p><b>Course:</b> ${objCard.courses}</p>
    </div>`

    document.getElementById("cardContainer").innerHTML = card;

    document.getElementById("parent").style = `display: none;`
    console.log(objCard);

}