--CREATE DATABASE prueba
use prueba
CREATE TABLE Prestamo (
	id_prestamo int IDENTITY(1,1) PRIMARY KEY,
	dpi varchar(50),
	nombre varchar(255),
	monto Decimal(12,2),
	cuotas int ,
	recha_registro DATE ,
)

