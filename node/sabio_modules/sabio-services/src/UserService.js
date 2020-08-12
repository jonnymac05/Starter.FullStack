const authenticationService = require("./AuthenticationService");
const { logger } = require("./common");

const _logger = logger.extend("user");

class UserService {
  logIn(res, userRequest) {
    _logger("login called");

    return new Promise(resolve => {
      authenticationService.authenticate(res, userRequest);
      resolve();
    });
  }

  logOut(res, userRequest) {
    return new Promise(resolve => {
      authenticationService.logOut(res);
      resolve();
    });
  }

  getCurrentUser(req) {
    return new Promise(resolve => {
      const currentUser = authenticationService.getCurrentUser(req);
      resolve(currentUser);
    });
  }
}

const userService = new UserService();

module.exports = userService;
