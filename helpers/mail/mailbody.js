export const mailBody = (data) => {
    console.log("🚀 ~ mailBody ~ data:", data)
    // Generate the field HTML dynamically based on the keys in the data object
    const fieldHtml = Object.keys(data)
      .filter(key => data[key])  // Only include fields that have a value
      .map(key => {
        // Capitalize the first letter of the key to use as the label
        const label = key.charAt(0).toUpperCase() + key.slice(1);
        return `<p><span class="label">${label}:</span> <span class="value">${data[key]}</span></p>`;
      })
      .join("");  // Join all fields together into a single HTML string
  
    return `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Email Template</title>
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
                  line-height: 1.5;
              }
              .label {
                  font-weight: bold;
                  color: #333;
                  font-size: 14px;
              }
              .value {
                  margin-left: 10px;
              }
          </style>
      </head>
      <body>
      
      <div class="container">
          <h2>Form Submission Details</h2>
          ${fieldHtml}
      </div>
      
      </body>
      </html>
    `;
  };