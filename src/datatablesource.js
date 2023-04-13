// esta parte muestra el listado de usurios compartida con Datatable.js
//tambien llama la bd
export const userColumns = [
  { field: "id", headerName: "ID", width: 10 },
  
  {
    field: "displayName",
    headerName: "Nombres",
    width: 230,
  },

  {
    field: "phone",
    headerName: "Serie Numero",
    width: 150,
  },

  {
    field: "address",
    headerName: "Vereda",
    width: 200,
  },
  {
    field: "country",
    headerName: "Estado",
    width: 150,
  },
  {
    field: "username",
    headerName: "Responsables",
    width: 200,
  },
  
];