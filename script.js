let fields = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ];
  
  let currentPlayer = 'circle'; // Startspieler
  
  function init() {
    render();
  }
  
  function render() {
    const contentDiv = document.getElementById('content');
    let tableHTML = '<table>';
    for (let i = 0; i < 3; i++) {
      tableHTML += '<tr>';
      for (let j = 0; j < 3; j++) {
        const index = i * 3 + j;
        // Setze den HTML-Code für jede Zelle basierend auf dem Wert im Feld
        tableHTML += `<td onclick="handleCellClick(${index})">${getFieldDisplayValue(fields[index])}</td>`;
      }
      tableHTML += '</tr>';
    }
    tableHTML += '</table>';
    contentDiv.innerHTML = tableHTML;
  }
  
  function getFieldDisplayValue(value) {
    // Mappe die Feldwerte auf die entsprechenden Anzeigen für die Tabelle
    if (value === 'circle') {
      return generateAnimatedCircleSVG();
    } else if (value === 'cross') {
      return generateAnimatedCrossSVG();
    } else {
      return ''; // Leerer String für null oder andere ungültige Werte
    }
  }
  
  function handleCellClick(index) {
    fields[index] = currentPlayer;
    const cell = document.getElementsByTagName('td')[index];
    cell.innerHTML = getFieldDisplayValue(currentPlayer);
    cell.onclick = null; // Entferne die onclick-Funktion, um weitere Klicks zu verhindern
  
    currentPlayer = togglePlayer(currentPlayer); // Wechsle zum anderen Spieler
  
    // Optional: Hier kannst du weitere Logik für das Spiel hinzufügen, z.B. Überprüfung auf Gewinner, Unentschieden usw.
  }
  
  function togglePlayer(player) {
    return player === 'circle' ? 'cross' : 'circle';
  }
  
  // Rufe die render-Funktion auf, um die Tabelle zu aktualisieren
  render();
  

  function generateAnimatedCircleSVG() {
    const svgCode = `
      <svg width="70" height="70" xmlns="http://www.w3.org/2000/svg">
        <circle cx="35" cy="35" r="30" fill="none" stroke="#00b0ef" stroke-width="5" stroke-dasharray="0 188">
          <animate attributeName="stroke-dasharray" values="0 188; 188 0" dur="0.205s" begin="0s" fill="freeze" />
        </circle>
      </svg>
    `;
  
    return svgCode;
  }

  function generateAnimatedCrossSVG() {
  const svgCode = `
    <svg width="70" height="70" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="10" x2="60" y2="60" stroke="#ffc000" stroke-width="5" stroke-dasharray="0 74">
        <animate attributeName="stroke-dasharray" values="0 74; 74 0" dur="0.225s" begin="0s" fill="freeze" />
      </line>
      <line x1="60" y1="10" x2="10" y2="60" stroke="#ffc000" stroke-width="5" stroke-dasharray="0 74">
        <animate attributeName="stroke-dasharray" values="0 74; 74 0" dur="0.225s" begin="0s" fill="freeze" />
      </line>
    </svg>
  `;

  return svgCode;
} 