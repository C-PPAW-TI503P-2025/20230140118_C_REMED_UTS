const checkRole = (role) => {
  return (req, res, next) => {
    const userRole = req.headers['x-user-role'];

    if (!userRole) {
      return res.status(401).json({
        message: 'x-user-role header is required'
      });
    }

    if (userRole !== role) {
      return res.status(403).json({
        message: 'Access denied'
      });
    }

    next();
  };
};

module.exports = checkRole;
