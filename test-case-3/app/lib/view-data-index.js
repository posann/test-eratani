// view-index.js
exports.ViewDataIndex = (mostSpendCountry, mostUsedCreditCard) => {
  const country = mostSpendCountry.mostSpendCountry;
  const countryCount = mostSpendCountry.maxCount;
  const creditType = mostUsedCreditCard.mostUsedCardType;
  const creditCount = mostUsedCreditCard.maxCount;
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Data Summary</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 20px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
          }
          th, td {
            padding: 10px;
            text-align: left;
            border: 1px solid #ddd;
          }
          th {
            background-color: #f4f4f4;
          }
        </style>
      </head>
      <body>
        <h2>Data Summary</h2>
        <h4>Most Spend Country</h4>
        <table>
          <tr>
            <th>Country</th>
            <th>Total Spend</th>
          </tr>
          <tr>
            <td>${country}</td>
            <td>${countryCount}</td>
          </tr>
        </table>
        <h4>Most Used Credit Card</h4>
        <table>
          <tr>
            <th>Credit Card Type</th>
            <th>Usage Count</th>
          </tr>
          <tr>
            <td>${creditType}</td>
            <td>${creditCount}</td>
          </tr>
        </table>
      </body>
    </html>
  `;

  return html;
};
