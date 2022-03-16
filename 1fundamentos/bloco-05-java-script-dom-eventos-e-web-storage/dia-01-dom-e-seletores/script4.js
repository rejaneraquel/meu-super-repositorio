document.querySelector("#header-container").style.backgroundColor = "rgb(0, 176, 105)";
document.getElementsByClassName("emergency-tasks")[0].style.backgroundColor = "rgb(255, 159, 132)";
document.getElementsByClassName("no-emergency-tasks")[0].style.backgroundColor = "rgb(249, 219, 94)";
const emergencyTasksHeaders = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyTasksHeaders.length; index += 1) {
  emergencyTasksHeaders[index].style.backgroundColor = 'rgb(165, 0, 243)';
}
const noEmergencyTasksHeaders = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyTasksHeaders.length; index += 1) {
  noEmergencyTasksHeaders[index].style.backgroundColor = 'rgb(35, 37, 37)';
}

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'rgb(0, 53, 51)';