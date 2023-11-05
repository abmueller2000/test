function toggleMenu() {
    var navigation = document.querySelector('.navigation');
    navigation.classList.toggle('active');
    
    var content = document.querySelector('.main-content');
    if (navigation.classList.contains('active')) {
        content.style.marginLeft = '200px';
    } else {
        content.style.marginLeft = '0';
    }
}

function loadContent(containerId, contentFile) {
    fetch(contentFile)
        .then(response => response.text())
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
        })
        .catch(error => console.error('Error loading content:', error));
}

// Optional: Initialize with default content
document.addEventListener('DOMContentLoaded', function() {
    loadContent('content-container', 'home-content.html');
});
  // Sample data for providers
  const providersData = [
  { name: 'John Doe', type: 'PhD', riskScore: 4.5, outOfScopeProbability: 3.0, outlierScore: 2.5, totalPaid: 10000, daysOver8Hours: 5 },
  { name: 'Jane Smith', type: 'PsyD', riskScore: 3.8, outOfScopeProbability: 2.7, outlierScore: 3.1, totalPaid: 8500, daysOver8Hours: 2 },
  { name: 'Emily Jones', type: 'LPC', riskScore: 4.2, outOfScopeProbability: 3.6, outlierScore: 4.0, totalPaid: 12000, daysOver8Hours: 7 },
  { name: 'Michael Brown', type: 'LCSW', riskScore: 2.9, outOfScopeProbability: 3.2, outlierScore: 2.8, totalPaid: 7600, daysOver8Hours: 3 },
  { name: 'Jessica Garcia', type: 'MSW', riskScore: 3.5, outOfScopeProbability: 4.1, outlierScore: 3.9, totalPaid: 9400, daysOver8Hours: 4 },
  { name: 'William Davis', type: 'MFT', riskScore: 2.3, outOfScopeProbability: 2.0, outlierScore: 2.6, totalPaid: 6700, daysOver8Hours: 1 },
  { name: 'Elizabeth Miller', type: 'EdD', riskScore: 4.7, outOfScopeProbability: 4.3, outlierScore: 4.5, totalPaid: 15000, daysOver8Hours: 8 },
  { name: 'David Wilson', type: 'MD', riskScore: 3.3, outOfScopeProbability: 3.7, outlierScore: 3.4, totalPaid: 8900, daysOver8Hours: 6 },
  { name: 'Sophia Anderson', type: 'PhD', riskScore: 2.8, outOfScopeProbability: 2.5, outlierScore: 3.0, totalPaid: 7200, daysOver8Hours: 2 },
  { name: 'James Thomas', type: 'PsyD', riskScore: 3.0, outOfScopeProbability: 3.1, outlierScore: 3.2, totalPaid: 11000, daysOver8Hours: 5 },
  { name: 'Olivia Martinez', type: 'LPC', riskScore: 3.2, outOfScopeProbability: 2.8, outlierScore: 3.5, totalPaid: 9800, daysOver8Hours: 4 },
  { name: 'William Johnson', type: 'LCSW', riskScore: 4.0, outOfScopeProbability: 3.9, outlierScore: 3.8, totalPaid: 10500, daysOver8Hours: 6 },
  { name: 'Ava Lee', type: 'MSW', riskScore: 2.6, outOfScopeProbability: 2.4, outlierScore: 2.7, totalPaid: 7300, daysOver8Hours: 3 },
  { name: 'Matthew Harris', type: 'MFT', riskScore: 3.7, outOfScopeProbability: 3.3, outlierScore: 3.6, totalPaid: 9600, daysOver8Hours: 5 },
  { name: 'Isabella Clark', type: 'EdD', riskScore: 4.1, outOfScopeProbability: 4.0, outlierScore: 4.2, totalPaid: 11400, daysOver8Hours: 7 },
  { name: 'Ethan Lewis', type: 'MD', riskScore: 2.5, outOfScopeProbability: 2.1, outlierScore: 2.9, totalPaid: 6900, daysOver8Hours: 2 },
  { name: 'Charlotte Robinson', type: 'PhD', riskScore: 3.4, outOfScopeProbability: 3.5, outlierScore: 3.3, totalPaid: 10200, daysOver8Hours: 4 },
  { name: 'Daniel Walker', type: 'PsyD', riskScore: 2.7, outOfScopeProbability: 2.9, outlierScore: 2.8, totalPaid: 7500, daysOver8Hours: 3 },
  { name: 'Mia Hall', type: 'LPC', riskScore: 3.9, outOfScopeProbability: 3.4, outlierScore: 3.7, totalPaid: 9900, daysOver8Hours: 5 },
  { name: 'Jackson Allen', type: 'LCSW', riskScore: 4.3, outOfScopeProbability: 4.2, outlierScore: 4.4, totalPaid: 12300, daysOver8Hours: 8 }
];

  // Function to calculate the average score and determine risk level
  function calculateRiskLevel(riskScore, outOfScopeProbability, outlierScore) {
    const average = (riskScore + outOfScopeProbability + outlierScore) / 3;
    if (average >= 4) return 'very-high-risk';
    if (average >= 3) return 'high-risk';
    if (average >= 2) return 'moderate-risk';
    if (average >= 1) return 'low-risk';
    return 'very-low-risk';
  }

  // Function to populate the table with provider data
  function populateTable() {
    const tableBody = document.getElementById('providersTable').getElementsByTagName('tbody')[0];
    providersData.forEach(provider => {
      const riskLevelClass = calculateRiskLevel(provider.riskScore, provider.outOfScopeProbability, provider.outlierScore);
      const row = tableBody.insertRow();
      row.className = riskLevelClass; // Apply the color-coded class
      row.innerHTML = `
        <td>${provider.name}</td>
        <td>${provider.type}</td>
        <td>${provider.riskScore} (${(provider.riskScore / 5 * 100).toFixed(1)}%)</td>
        <td>${provider.outOfScopeProbability} (${(provider.outOfScopeProbability / 5 * 100).toFixed(1)}%)</td>
        <td>${provider.outlierScore} (${(provider.outlierScore / 5 * 100).toFixed(1)}%)</td>
        <td>$${provider.totalPaid.toLocaleString()}</td>
        <td>${provider.daysOver8Hours}</td>
        <td>${riskLevelClass.replace(/-/g, ' ').toUpperCase()}</td>
      `;
    });
  }

  // Call the function to populate the table on page load
  window.onload = populateTable;

  // Function to sort the table
  function sortTable(columnIndex) {
    const table = document.getElementById('providersTable');
    let rows, switching, i, x, y, shouldSwitch;
    switching = true;
    // Make a loop that will continue until no switching has been done
    while (switching) {
      // Start by saying: no switching is done
      switching = false;
      rows = table.rows;
      // Loop through all table rows (except the first, which contains table headers)
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching
        shouldSwitch = false;
        // Get the two elements you want to compare, one from current row and one from the next
        x = rows[i].getElementsByTagName("TD")[columnIndex];
        y = rows[i + 1].getElementsByTagName("TD")[columnIndex];
        // Check if the two rows should switch place, based on the direction, asc or desc
        if (columnIndex >= 2 && columnIndex <= 6) { // For numeric columns
          if (parseFloat(x.textContent) > parseFloat(y.textContent)) {
            shouldSwitch = true;
            break;
          }
        } else { // For text columns
          if (x.textContent.toLowerCase() > y.textContent.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        // If a switch has been marked, make the switch and mark that a switch has been done
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }
