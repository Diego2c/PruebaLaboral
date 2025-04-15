import sql from 'mssql';

const sqlConfig = {
    user: 'sa',
    password: 'NuevaContraseña@123',
    database: 'prueba',
    server: 'localhost',
    options: {
      encrypt: false, 
      trustServerCertificate: false 
    }
  }

export const getConnection = async () => {
    try {
        const pool = await sql.connect(sqlConfig);
        console.log('Connected to the database successfully!');
        return pool;
    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw error;
    }
}

export { sql }