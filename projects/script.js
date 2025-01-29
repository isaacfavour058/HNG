function updateTime() {
  const utcTimeElement = document.querySelector(
    "[data-testid='currentTimeUTC']"
  );
  const now = new Date();
  const hours = String(now.getUTCHours()).padStart(2, '0');
  const minutes = String(now.getUTCMinutes()).padStart(2, '0');
  const seconds = String(now.getUTCSeconds()).padStart(2, '0');
  utcTimeElement.textContent = `${hours}:${minutes}:${seconds} `;
}

// Update UTC time every second
setInterval(updateTime, 1000);
updateTime();
