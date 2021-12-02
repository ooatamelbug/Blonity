// import user entities
import User from "../entities/user";

class UserServices {
  /**
   * this function for register new user
   * @param body
   * @returns {  statusCode: 201 | 500, response: data of user }
   */
  static async registerUser(dataBody: any) {
    let statusCode = 200;
    let response = {};
    try {
        let {} = dataBody;
    } catch (error) {}
    return { statusCode, response };
  }
}

export default UserServices;
