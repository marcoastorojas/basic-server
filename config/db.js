const { Sequelize } = require('sequelize');

const db = new Sequelize(`postgres://cqrdzdtl:Hr6Ik8yKfLdkqtQh1j43H78zvmvluyNv@babar.db.elephantsql.com/cqrdzdtl`, {
    logging: false,
    native: false,
    define: {
        timestamps: false
    }
});
const connectPostgres = new Promise((resolve, reject) => {
    db.sync({ force: false })
        .then(resolve)
        .catch(reject)
})
module.exports = {
    db,
    connectPostgres
}