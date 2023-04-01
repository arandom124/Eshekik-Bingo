// esta parte muestra el listado de usurios compartida con Datatable.js
//tambien llama la bd
export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  
  {
    field: "displayName",
    headerName: "Nombres",
    width: 230,
  },

  {
    field: "phone",
    headerName: "# Serie",
    width: 150,
  },

  {
    field: "address",
    headerName: "Vereda",
    width: 100,
  },
  {
    field: "country",
    headerName: "Estado",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];