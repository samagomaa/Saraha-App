import nodemailer from 'nodemailer'
import jwt from 'jsonwebtoken'
import { emailTemplate } from './emailTemplate.js';

export const sendEmail = async (email) => {

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "samagomaa111@gmail.com",
            pass: "eyydyivoqiuckuki",
        },
    });
    let token = jwt.sign({ email: email }, process.env.JWT_KEY)
    const info = await transporter.sendMail({
        from: '"Sama Goma" <samagomaa111@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "Saraha Message", // Subject line
        html: emailTemplate(token), // html body
    });

    console.log("Message sent: %s", info.messageId);

}