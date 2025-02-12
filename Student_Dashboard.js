function searchAttendance() {
    let startDate = document.getElementById("start-date").value;
    let endDate = document.getElementById("end-date").value;
    if (startDate && endDate) {
        alert(`Searching attendance from ${startDate} to ${endDate}`);
    } else {
        alert("Please select both start and end dates.");
    }
}
