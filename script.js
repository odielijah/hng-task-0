document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.getElementById("complete-toggle");
  const title = document.getElementById("todo-title");
  const statusBadge = document.getElementById("status-badge");
  const timeRemainingDisplay = document.getElementById("time-remaining");

  // 1. Completion Toggle Logic
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      title.classList.add("completed-state");
      statusBadge.textContent = "Done";
      statusBadge.className = "badge-done";
    } else {
      title.classList.remove("completed-state");
      statusBadge.textContent = "Pending";
      statusBadge.className = "badge-pending"
    }
  });

  // 2. Time Remaining Logic
  const dueDate = new Date("2026-04-16T23:59:59").getTime();

  function updateTimeRemaining() {
    const now = new Date().getTime();
    const distance = dueDate - now;

    if (distance < 0) {
      const overdueHours = Math.abs(Math.floor(distance / (1000 * 60 * 60)));
      timeRemainingDisplay.textContent =
        overdueHours === 0 ? "Due now!" : `Overdue by ${overdueHours} hours`;
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );

    if (days === 1) {
      timeRemainingDisplay.textContent = "Due tomorrow";
    } else if (days > 1) {
      timeRemainingDisplay.textContent = `Due in ${days} days`;
    } else if (hours > 0) {
      timeRemainingDisplay.textContent = `Due in ${hours} hours`;
    } else {
      timeRemainingDisplay.textContent = "Due now!";
    }
  }
  // Run once on load, then every minute
  updateTimeRemaining();
  setInterval(updateTimeRemaining, 60000);
});
