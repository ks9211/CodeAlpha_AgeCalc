function calculateAge() {
    var dob = document.getElementById('dob').value;
    var dobDate = new Date(dob);
    var today = new Date();

    if (dobDate > today) {
        document.getElementById('result').innerText = "Your age cannot be in the future!";
        return;
    }

    var age = today.getFullYear() - dobDate.getFullYear();
    var monthDiff = today.getMonth() - dobDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
        age--;
    }
    document.getElementById('result').innerText = "Your age is " + age;
}
