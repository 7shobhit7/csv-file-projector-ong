document.getElementById('csvFileInput').addEventListener('change', handleFileSelect, false);

function handleFileSelect(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    const csv = event.target.result;
    const data = parseCSV(csv);
    displayCSV(data);
  };

  reader.readAsText(file);
}

function parseCSV(csv) {
  const rows = csv.split(/\r?\n/);
  const data = [];
  for (let row of rows) {
    const columns = row.split(',');
    data.push(columns);
  }
  return data;
}

function displayCSV(data) {
  const table = document.getElementById('csvTable');
  table.innerHTML = '';

  for (let row of data) {
    const newRow = table.insertRow();
    for (let cell of row) {
      const newCell = newRow.insertCell();
      const newText = document.createTextNode(cell);
      newCell.appendChild(newText);
    }
  }
}
