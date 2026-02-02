let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let emailUser = document.getElementById("email")
let phoneUser = document.getElementById("phoneNumber");
let idNum = document.getElementById("rollNumber")
let img = document.getElementById("imageUpload")[0];
let course = document.getElementById("course")

function formData(e) {
    e.preventDefault();
    // console.log(firstName.value);
    // console.log(lastName.value);
    // console.log(emailUser.value);
    // console.log(phoneUser.value);
    // console.log(course.value);

    if (firstName.value.trim() === "" || lastName.value.trim() === "" || emailUser.value.trim() === "" || phoneUser.value.trim() === "" || idNum.value.trim() === "" || course.value.trim() === "") {
        alert("Please fill all the fields");
        return
    }
    let obj = {
        name: firstName.value + " " + lastName.value,
        email: emailUser.value,
        phone: phoneUser.value,
        id: idNum.value,
        cou: course.value,
        // img: img.value
        // img: URL.createObjectURL(document.getElementById("imageUpload").files[0])
    }
    if (obj.img === "undefined") {
        alert("Please upload an image")
    }
    let container = document.getElementById("main-of-card")
    document.getElementById("first").innerHTML = obj.name;
    document.getElementById("emailName").innerHTML = obj.email;
    document.getElementById("roll").innerHTML = obj.id;
    document.getElementById("num").innerHTML = obj.phone;
    document.getElementById("skill").innerHTML = obj.cou;
    // document.getElementById("imageShow").src = obj.img;
    container.style.display = "block";
    document.getElementById("card").style.display = "none"
}

function anotherCard() {
    document.getElementById("card").style.display = "block";
    document.getElementById("main-of-card").style.display = "none"
}