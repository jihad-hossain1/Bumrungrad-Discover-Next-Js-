export const mailBody = (data) => {
    // Generate the field HTML dynamically based on the keys in the data object
    const fieldHtml = Object.keys(data)
        .filter((key) => data[key]) // Only include fields that have a value
        .map((key) => {
            // Capitalize the first letter of the key to use as the label
            const label = key.charAt(0).toUpperCase() + key.slice(1);
            return `<p><span class="label">${label}:</span> <span class="value">${data[key]}</span></p>`;
        })
        .join(""); // Join all fields together into a single HTML string

    return `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${data.subject || "Submitted Form"}</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f4f4f4;
                  margin: 0;
                  padding: 20px;
              }
              .container {
                  max-width: 100%;
                  margin: 0;
                  background-color: #fff;
                  padding: 20px;
                  border-radius: 8px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }
              h2 {
                  color: #333;
              }
              p {
                  font-size: 14px;
                  color: #555;
                  line-height: 0.5;
              }
              .label {
                  font-weight: bold;
                  color: #333;
                  font-size: 12px;
              }
              .value {
                  margin-left: 10px;
              }
          </style>
      </head>
      <body>
      
      <div class="container">
          <h2>${data.subject || "Submitted Form"}</h2>
          ${fieldHtml}
      </div>
      
      </body>
      </html>
    `;
};

export const comapanyMailBody = (data, mail_title) => {
    // Generate the table rows dynamically based on the keys in the data object
    const rowsHtml = Object.keys(data)
        .filter((key) => data[key]) // Only include fields that have a value
        .map((key) => {
            // Capitalize the first letter of the key to use as the label
            const label = key.charAt(0).toUpperCase() + key.slice(1);
            return `<tr><td class="label">${label}:</td><td class="value">${data[key]}</td></tr>`;
        })
        .join(""); // Join all rows together into a single HTML string

    return `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${mail_title || "Submitted Form"}</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f4f4f4;
                  margin: 0;
                  padding: 20px;
              }
              .container {
                  max-width: 100%;
                  margin: 0;
                  background-color: #fff;
                  padding: 20px;
                  border-radius: 8px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }
              h2 {
                  color: #333;
              }
              table {
                  width: 100%;
                  border-collapse: collapse;
                  margin-top: 10px;
              }
              table, th, td {
                  border: 1px solid #ddd;
                  padding: 8px;
              }
              th, td {
                  text-align: left;
              }
              .label {
                  font-weight: bold;
                  color: #333;
                  font-size: 12px;
              }
              .value {
                  margin-left: 10px;
                  color: #555;
                  font-size: 12px;
              }
              .company-info, .footer {
                  margin-top: 20px;
                  padding: 10px;
                  background-color: #f9f9f9;
                  border-radius: 8px;
              }
              .footer p {
                  font-size: 12px;
                  color: #777;
                  margin: 0;
              }
          </style>
      </head>
      <body>
      
      <!-- Company Information Section -->
      <div class="company-info">
          <p><strong>Company Name:</strong> Bumrungrad International Hospital</p>
          <p><strong>Phone:</strong> (+880) 1847284864</p>
          <p><strong>Email:</strong> discover.bumrungrad@gmail.com</p>
      </div>

      <!-- Main Content Section -->
      <div class="container">
          <h2>${mail_title || "Submitted Form"}</h2>
          <table>
              ${rowsHtml}
          </table>
      </div>

      <!-- Footer Section -->
      <div class="footer">
          <p>If you have any questions or need further assistance, please don't hesitate to contact us at discover.bumrungrad@gmail.com.</p>
          <p>Thank you for choosing Bumrungrad International Hospital!</p>
          <div class="company-info">
            <h4>Dhanmondi Office</h4>
            <p>Rupayan Prime Tower</p>
            <p>10th Floor (Lift-9)</p>
            <p>House:02,Road: 07, Green Road</p>
            <p>Dhanmondi, Dhaka-1205</p>
            <p>+8801847284860</p>
            <p>+8801324-418100</p>
        </div>
      </div>

      </body>
      </html>
    `;
};
