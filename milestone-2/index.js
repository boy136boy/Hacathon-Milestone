var form = document.getElementById('resumeForm');
var resumepage = document.getElementById('resumepage');
var resumephoto = document.getElementById('resumephoto');
var resumename = document.getElementById('resumename');
var resumeemail = document.getElementById('resumeemail');
var resumephone = document.getElementById('resumephone');
var resumeeducation = document.getElementById('resumeeducation');
var resumeworkExperience = document.getElementById('resumeworkExperience');
var resumeskills = document.getElementById('resumeskills');
var editbutton = document.getElementById('editbutton');
var backbutton = document.getElementById('backbutton');
var sharelinkbutton = document.getElementById('sharelinkbutton');
var download = document.getElementById('download-pdf');
form.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var name1 = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('Education').value;
    var workExperience = document.getElementById('workExperience').value;
    var skills = document.getElementById('Skills').value;
    var photoinput = (_a = document.getElementById('photo').files) === null || _a === void 0 ? void 0 : _a[0];
    // Set values to resume page
    resumename.textContent = name1;
    resumeemail.textContent = email;
    resumephone.textContent = phone;
    resumeeducation.textContent = education;
    resumeworkExperience.textContent = workExperience;
    resumeskills.textContent = skills;
    // Set the uploaded photo if available
    if (photoinput) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            resumephoto.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL(photoinput);
    }
    // Show the resume page
    form.style.display = 'none';
    resumepage.classList.remove('hidden');
});
backbutton.addEventListener("click", function () {
    resumepage.classList.add('hidden');
    form.reset();
    form.style.display = 'block'; // Show the form again
});
editbutton.addEventListener("click", function () {
    form.style.display = 'block'; // Show the form again
    resumepage.classList.add('hidden');
});
sharelinkbutton.addEventListener("click", function () {
    alert('Share functionality not implemented yet.');
});
download.addEventListener("click", function () {
    alert('Download functionality not implemented yet.');
});
