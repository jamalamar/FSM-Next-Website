// netlify/functions/submit-form.js
exports.handler = async (event) => {
    const { name, email, subject, message } = JSON.parse(event.body);
  
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  
    const urlencoded = new URLSearchParams();
    urlencoded.append("form-name", "contact");
    urlencoded.append("name", name);
    urlencoded.append("email", email);
    urlencoded.append("subject", subject);
    urlencoded.append("message", message);
  
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };
  
    try {
      await fetch(process.env.URL, requestOptions);
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Form submitted successfully!" }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Failed to submit form." }),
      };
    }
  };