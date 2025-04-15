import  { getConnection,sql } from '../database/conection.js';

//Get all prestamos
export const getPrestamos = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('SELECT * FROM Prestamo');
        res.json(result.recordset);
    }catch (error) {
        console.error('Error fetching prestamos:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

//Get prestamo by id
export const getPrestamo = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', sql.Int, req.params.id)
            .query('SELECT * FROM Prestamo WHERE id_prestamo = @id');
        res.json(result.recordset);
    }catch (error) {
        console.error('Error fetching prestamos:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

//Create prestamo
export const createPrestamo = async (req, res) => {
  
    const {dpi,nombre,monto,cuotas,recha_registro  } = req.body;

    // if( !dpi || nombre || monto || cuotas || recha_registro){
    //     return res.status(400).json({ msj: 'Campos obligatorios' });
    // }

    try{
        const pool = await getConnection();
        const result = await pool
        .request()
        .input( "dpi", sql.VarChar, dpi)
        .input( "nombre",sql.VarChar, nombre)
        .input( "monto",sql.Decimal(12,2), monto)
        .input( "cuotas",sql.Int, cuotas)
        .input( "recha_registro",sql.Date, recha_registro)
        .query(
            'INSERT INTO Prestamo(dpi,nombre,monto,cuotas,recha_registro) VALUES (@dpi,@nombre,@monto,@cuotas,@recha_registro) SELECT SCOPE_IDENTITY() AS id'
        )

        res.json(result.recordset);

    }catch (error) {
        console.error('Error fetching createPrestamo:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
    
}
