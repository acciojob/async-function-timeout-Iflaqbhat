
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function handleClick() {
  // Get the input values
  const text = document.getElementById('text').value;
  const delayValue = parseInt(document.getElementById('delay').value, 10);

  if (isNaN(delayValue) || delayValue < 0) {
    alert("Please enter a valid positive number for delay.");
    return;
  }
  const outputDiv = document.getElementById('output');
  outputDiv.textContent = ""; 
  await delay(delayValue);
  outputDiv.textContent = text;
}
document.getElementById('btn').addEventListener('click', handleClick);
