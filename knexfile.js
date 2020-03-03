module.exports = {
  development: {
    client: 'sqlite3',
    connection: { filename: './data/auth.db3' },

    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds'
    },
  },
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/test.db3',
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    }
  },
  staging: {
    client: 'sqlite3',
    connection: {
      filename: './data/staging.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }
};
