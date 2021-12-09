import email from "../../utils/email";

describe("test send email", () => {
  it("it return error when every param is Empty", async () => {
    const param = {
      sender: "",
      to: "",
      msg: "",
      subject: ""
    };
    const  spyEmail = jest.spyOn(email, 'send');
    const send = email.send(param);

    expect(spyEmail).toHaveBeenCalled();
    expect(send).resolves.toHaveProperty('message', 'error');
    expect(send).resolves.toHaveProperty('status', 400);
  });

  it("it return ERROR sender formate", async () => {
    const param = {
      sender: "sender",
      to: "to",
      msg: "thanks",
      subject: "email"
    };
    const  spyEmail = jest.spyOn(email, 'send');
    const send = email.send(param);

    expect(spyEmail).toHaveBeenCalled();
    expect(send).resolves.toHaveProperty('message', 'error');
    expect(send).resolves.toHaveProperty('status', 400);
  });

  it("it return ERROR to formate", async () => {
    const param = {
      sender: "sender@gmail.com",
      to: "to",
      msg: "thanks",
      subject: "email"
    };
    const  spyEmail = jest.spyOn(email, 'send');
    const send = email.send(param);

    expect(spyEmail).toHaveBeenCalled();
    expect(send).resolves.toHaveProperty('message', 'error');
    expect(send).resolves.toHaveProperty('status', 400);
  });

  it("it return ok", async () => {
    const param = {
      sender: "admin@blonity.com",
      to: "‪mohqweeaed@gmail.com",
      msg: "thanks",
      subject: "email"
    };
    const  spyEmail = jest.spyOn(email, 'send');
    const send = email.send(param);

    expect(spyEmail).toHaveBeenCalled();
    expect(send).resolves.toHaveProperty('message', `ok send to ${param.to}`);
    expect(send).resolves.toHaveProperty('status', 200);
  });

});
