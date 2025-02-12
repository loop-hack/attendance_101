document.addEventListener("DOMContentLoaded", function () {
  const updateButtons = document.querySelectorAll(".update-btn");
  updateButtons.forEach(button => {
      button.addEventListener("click", function () {
          const row = this.closest("tr");
          const statusCell = row.querySelector(".status");
          if (statusCell.innerText === "Present") {
              statusCell.innerText = "Absent";
              statusCell.style.color = "red";
          } else {
              statusCell.innerText = "Present";
              statusCell.style.color = "green";
          }
      });
  });
});
