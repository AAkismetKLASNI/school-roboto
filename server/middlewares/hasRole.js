module.exports = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(res.user.role)) {
      res.send({ error: 'Недостаточно прав' });

      return;
    }

    next();
  };
};
