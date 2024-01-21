const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  try {
    const { username } = req.body; // Adjust this based on your form fields

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
      /* Your nodemailer configuration here */
    });

    // Email content
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: 'destination-email@gmail.com', // Replace with your destination email
      subject: 'New Form Submission',
      text: `New submission from ${username}`, // Adjust based on your form fields
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
