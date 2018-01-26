module.exports = (req, res, next) => {
    if (req.user.storage < 1 ) {
        return res.status(403).send({ error: 'Not enough storage space!' });
    }

    next();
};