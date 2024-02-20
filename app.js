 // Function to update the clock time
 function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12; // Handle midnight

  document.getElementById('clock').textContent = `${hours}:${pad(minutes)}:${pad(seconds)} ${ampm}`;
}

// Function to pad single digit numbers with leading zeros
function pad(value) {
  return value < 10 ? '0' + value : value;
}

// Function to set alarm
function setAlarm() {
  const hour = document.getElementById('hour').value;
  const minute = document.getElementById('minute').value;
  const second = document.getElementById('second').value;
  const ampm = document.getElementById('ampm').value;

  const alarmTime = `${hour}:${pad(minute)}:${pad(second)} ${ampm}`;
  const li = document.createElement('li');
  li.textContent = alarmTime;
  document.getElementById('alarms').appendChild(li);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'delete-btn';
  deleteButton.onclick = function() {
    li.remove();
  };
  li.appendChild(deleteButton);
}

// Function to check alarms
function checkAlarms() {
  const now = new Date();
  const currentTime = now.toLocaleTimeString('en-US', { hour12: true });

  const alarms = document.getElementById('alarms').getElementsByTagName('li');
  for (let i = 0; i < alarms.length; i++) {
    const alarmTime = alarms[i].textContent;
    if (alarmTime === currentTime) {
      alert('Alarm!');
      alarms[i].remove();
    }
  }
}

// Update time every second
setInterval(updateTime, 1000);
// Check for alarms every second
setInterval(checkAlarms, 1000);