function sendSMS() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const formattedMessage =
  "Name: " + name + "\n" +
  "Phone: " + phone + "\n\n" +
  "Message:\n" +
  message;


    const encodedMessage = encodeURIComponent(formattedMessage);
    const targetNumber = "+14698555868";
    const smsLink = `sms:${targetNumber}?body=${encodedMessage}`;

    window.location.href = smsLink;
}
