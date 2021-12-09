import nodemailer from "nodemailer";

interface emailParams {
  sender: string;
  to: string;
  subject: string;
  msg: string;
}

interface returnSendEmail {
  status: number;
  message: string;
}

const functionGetAt = (param: string): boolean => {
  const emailTemplate = <[string] | null>param.match(/.@+.+\.+(?:com|net)/gi);
  if (emailTemplate != null) {
    return true;
  } else {
    return false;
  }
};

const sendEmail = async (params: emailParams) => {
  const { to, sender, msg, subject } = params;
  if (sender != "" || to != "" || msg != "" || subject != "") {
    const getStatusSender = functionGetAt(sender);
    const getStatusTo = functionGetAt(to);

    if (getStatusSender && getStatusTo) {
      let transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "d75c45d2566a71",
          pass: "63be2b1684b39c",
        },
      });
      let data = await transport.sendMail({
        sender: `Admin<${sender}>`,
        to: to,
        subject: `${subject}`,
        html: `${msg}`,
      });
      if (data.messageId) {
        return { status: 200, message: `ok send to ${to}` };
      }else {
        return { status: 400, message: "error" };
      }
    } else {
      return { status: 400, message: "error" };
    }
  } else {
    return { status: 400, message: "error" };
  }
};

export default { send: sendEmail };
