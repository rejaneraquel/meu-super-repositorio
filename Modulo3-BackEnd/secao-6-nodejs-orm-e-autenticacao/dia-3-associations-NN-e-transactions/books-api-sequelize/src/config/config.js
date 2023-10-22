const config = {
  // Usuário de acesso ao BD; NÃO É USER
  username: process.env.MYSQL_USER,

  // Senha de acesso
  password: process.env.MYSQL_PASSWORD,

  // Servidor que estamos conectados (no caso de local 127.0.0.1 - localhost)
  host: process.env.MYSQL_HOST,

  // Informa qual biblioteca utiliza para se conectar ao bd
  dialect: 'mysql',
  define: {
    //snake case
    underscored: true, //set global underscored option
    timestamps: false, // tirar tempo na criação de linha/tabela
  }
};

module.exports = {
  development: {
    ...config,
    database: process.env.MYSQL_DATABASE_DEVELOPMENT
  },
  test: {
    ...config,
    database: process.env.MYSQL_DATABASE_TEST
  },
  production: {
    ...config,
    database: process.env.MYSQL_DATABASE_PRODUCTION
  },
};
