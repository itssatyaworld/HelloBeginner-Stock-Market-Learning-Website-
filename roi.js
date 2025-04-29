document.addEventListener('DOMContentLoaded', () => {
    const roiForm = document.getElementById('roiForm');
    const resultDiv = document.getElementById('result');
    const finalAmountSpan = document.getElementById('finalAmount');
    const profitSpan = document.getElementById('profit');
    const roiPercentageSpan = document.getElementById('roiPercentage');
  
    roiForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      // Get input values
      const principal = parseFloat(document.getElementById('initialInvestment').value);
      const annualReturn = parseFloat(document.getElementById('annualReturn').value) / 100; // Convert to decimal
      const years = parseInt(document.getElementById('years').value);
      const interestType = document.getElementById('interestType').value;
  
      let finalAmount = 0;
  
      // Calculation based on interest type
      if (interestType === "compound") {
        finalAmount = principal * Math.pow((1 + annualReturn), years);
      } else if (interestType === "simple") {
        finalAmount = principal * (1 + (annualReturn * years));
      }
  
      const profit = finalAmount - principal;
      const roi = (profit / principal) * 100;
  
      // Update UI
      finalAmountSpan.textContent = finalAmount.toFixed(2);
      profitSpan.textContent = profit.toFixed(2);
      roiPercentageSpan.textContent = roi.toFixed(2);
  
      resultDiv.style.display = 'block';
    });
  });
  