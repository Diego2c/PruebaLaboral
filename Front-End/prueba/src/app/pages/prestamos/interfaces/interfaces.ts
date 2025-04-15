export interface Prestamo {
  id_prestamo: number;
  dpi: string;
  nombre: string;
  monto: number;
  cuotas: number;
  recha_registro: string; // ISO string (puedes convertir a Date si lo prefieres)
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
