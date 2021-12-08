interface emailParams {
    sender: string;
    to: string;
    msg: string
}

interface returnSendEmail {
    status: number;
    message: string
}

const sendEmail = ( params : emailParams): returnSendEmail => {
    if(params) {
        console.log('s');
    }
    return { status: 200, message: 'ok' };
}


export default { send: sendEmail };