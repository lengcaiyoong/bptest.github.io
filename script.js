fetch('textdetails.txt')
  .then(response => response.text())
  .then(data => {
    const dataArray = data.split('\n').map(row => row.split(', '));
    const table = document.createElement('table');
    for (let i = 0; i < dataArray.length; i++) {
      const row = table.insertRow();
      for (let j = 0; j < 3; j++) {
        const cell = row.insertCell();
        cell.innerText = dataArray[i][j];
      }
    }
    document.body.appendChild(table);
  });
