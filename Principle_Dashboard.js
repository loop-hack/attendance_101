
document.addEventListener('DOMContentLoaded', function () {
  // Example dynamic content
  const latecomers = ['Student pintu kumar', 'Student vikash kumar', 'Student ankit anurag', 'Student rishikesh sarma ', 'Student braj kumar'];
  const latecomersList = document.getElementById('latecomers');
  latecomers.forEach(student => {
      const listItem = document.createElement('li');
      listItem.textContent = student;
      latecomersList.appendChild(listItem);
  });

  // Mock function for downloading reports
  document.getElementById('download-report').addEventListener('click', function () {
      alert('Downloading reports...');
  });

  // Manual override functionality
  document.getElementById('manual-override').addEventListener('click', function () {
      alert('Opening manual override...');
  });

  // School notification button
  document.getElementById('send-notification').addEventListener('click', function () {
      alert('Sending notifications...');
  });
});
