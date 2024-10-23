const boom = require("@hapi/boom");
const { ROLE } = require("../enums/role");

function checkAdminRole(req, res, next) {
  const role = req.role;
  if (role === ROLE.ADMIN) {
    next();
  } else {
    next(boom.unauthorized());
  }
}

function checkRoles(...roles) {
  return (req, res, next) => {
    const role = req.user.role;
    if (roles.includes(role)) {
      next();
    } else {
      next(boom.unauthorized());
    }
  };
}

module.exports = { checkAdminRole, checkRoles };
