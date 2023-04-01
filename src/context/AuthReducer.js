const AuthReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN": {
        return {
          currentUser: action.payload,
        };
      }
      case "LOGOUT": {
        return {
          currentUser: null,
        };
      }
      default:
        return state;
    }
  };
  
  export default AuthReducer;
  /*Este código define un reducer para manejar el estado de autenticación de la aplicación en React. Tiene dos casos: "LOGIN" y "LOGOUT", que establecen el estado del usuario actual. Cuando se dispara el caso "LOGIN", el usuario actual se establece en el valor de action.payload, que debe ser el objeto de usuario de Firebase que devuelve el método de inicio de sesión. Cuando se dispara el caso "LOGOUT", el usuario actual se establece en null, lo que indica que no hay ningún usuario conectado en ese momento */