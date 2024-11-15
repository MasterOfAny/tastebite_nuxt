import nodemailer from 'nodemailer';
import { newsletterTemplate } from '@/email-templates/template';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { email } = body;

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    const mailOptions = {
        from: 'TasteBite',
        to: email,
        subject: 'This is newsletter',
        html: newsletterTemplate,
    };

    const sendMailPromise = transporter.sendMail(mailOptions);

    const timeoutPromise = new Promise((resolve) => {
        setTimeout(() => {
            resolve({ message: 'Email sent (timeout)' });
        }, 2000);
    });

    try {
        const result = await Promise.race([sendMailPromise, timeoutPromise]);
        return result;
    } catch (error) {
        return { error: 'Failed to send email' };
    }
});
