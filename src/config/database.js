//Exportar o módulo
module.exports = {
    dialect: 'postgres',
    host: '161.35.125.187',
    username: 'postgres',
    password: 'root',
    database: 'default-ane',
    define: {
        timestamps: true,
        underscored:  true,
        underscoredAll: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    },
};