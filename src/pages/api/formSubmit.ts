import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const {
      formType,
      firstName,
      lastName,
      companyName,
      email,
      phone,
      message,
      stateRegion,
      percentPrevailingWageEmployees,
      percentPrevailingWageWork,
      contractType,
    } = req.body
    // eslint-disable-next-line @typescript-eslint/no-implicit-any-catch

    try {
      // Create a Nodemailer transporter using SendGrid SMTP details
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })

      let emailSubject = ''
      let emailContent = ''

      if (formType === 'Send us a message') {
        emailSubject = 'Form Submission: Send us a message'
        emailContent = `
          <table>
          <tr><th colspan="2">Contact Details</th></tr>
            <tr>
              <td>First Name:</td>
              <td>${firstName}</td>
            </tr>
            <tr>
              <td>Last Name:</td>
              <td>${lastName}</td>
            </tr>
            <tr>
              <td>Company Name:</td>
              <td>${companyName}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>${email}</td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>${phone}</td>
            </tr>
            <tr>
              <td>Message:</td>
              <td>${message}</td>
            </tr>
          </table>`
      } else if (formType === 'A DEMO') {
        emailSubject = 'Form Submission: Book a Demo'
        emailContent = `
          <table>
          <tr><th colspan="2">Book A Demo</th></tr>
            <tr>
              <td>First Name:</td>
              <td>${firstName}</td>
            </tr>
            <tr>
              <td>Last Name:</td>
              <td>${lastName}</td>
            </tr>
            <tr>
              <td>Company Name:</td>
              <td>${companyName}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>${email}</td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>${phone}</td>
            </tr>
            <tr>
              <td>State/Region:</td>
              <td>${stateRegion}</td>
            </tr>
            <tr>
              <td># of Prevailing Wage Employees:</td>
              <td>${percentPrevailingWageEmployees}</td>
            </tr>
            <tr>
              <td>% of Prevailing Wage/ Gov’T Contract Work:</td>
              <td>${percentPrevailingWageWork}</td>
            </tr>
            <tr>
              <td>Our Contracts are:</td>
              <td>${contractType}</td>
            </tr>
          </table>`
      } else {
        // Handle unknown formType
        throw new Error('Unknown formType')
      }

      // Send email
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const info = await transporter.sendMail({
        from: process.env.SMTP_FROM, // Change to your SendGrid sender email
        to: process.env.SMTP_TO, // Change to your desired email address
        subject: emailSubject,
        html: emailContent,
      })

      // Handle success
      res.status(200).json({ status: 'success' })
    } catch (error: unknown) {
      // Handle error
      res.status(500).json({ status: 'error', message: 'Error sending email' })
    }
  } else {
    // Method Not Allowed
    res.status(405).end()
  }
}
