function errorMessage(p) {
    Swal.fire({
        icon: "error",
        title: `${p}`,
        text: "Something went wrong!",
        // footer: '<a href="#">Why do I have this issue?</a>'
    });

}



function cardGenerater(e) {
    e.preventDefault()
    let naam = document.getElementById("name").value
    let fatherName = document.getElementById("fname").value
    let licen = document.getElementById("nic/c").value
    let number = document.getElementById("num").value
    let course = document.getElementById("opt").value
    if (naam == "" || fatherName == "" || licen == "" || number == "") {
        errorMessage("Fill all Field")
        return;
    }
    let objCard = {
        name: naam,
        FatherName: fatherName,
        nic: licen,
        phone: number,
        courses: course
    }
    let card = `
    <div class="student-card">
    <h2 class="head">Student Card</h2>
            <p>Name: ${objCard.name}</p>
            <p>Father name: ${objCard.FatherName}</p>
            <p>NIC/C: ${objCard.nic}</p>
            <p>Number: ${objCard.phone}</p>
            <p>Course: ${objCard.courses}</p>
            </div>`
    document.getElementById("cont").innerHTML = card;
    document.getElementById("parent").style = "display:none;"

}