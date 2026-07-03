import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  console.log('API Handler called');
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed.' });
  }

  const {
    querytype,
    firstName,
    lastName,
    phone,
    company,
    jobTitle,
    email,
    employeesRange,
    feedback,
    usage,
  } = req.body;

  console.log('Received data:', req.body);

  const messageBody = `
    Query Type: ${querytype}
    Name: ${firstName} ${lastName}
    Email: ${email}
    Phone: ${phone}
    Company: ${company}
    Job Title: ${jobTitle}
    Employees Range: ${employeesRange}
    Feedback: ${feedback}
    Usage: ${usage}
  `;

  const msg = {
    to: 'your-email@example.com', // Change to your recipient
    from: 'your-email@example.com', // Change to your verified sender
    subject: 'Contact Form Message',
    text: messageBody,
  };

  try {
    await sendgrid.send(msg);
    console.log('Email sent successfully');
    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to send email.' });
  }
}
