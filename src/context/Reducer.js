//TYPES

const LISTAME_PRODUCTOS = "LISTAME_PRODUCTOS";
const AGREGAR_CARRITO = "AGREGAR_CARRITO";
const ELIMINAR_CARRITO = "ELIMINAR_CARRITO";

export default function Reducer(state, action) {
  const { payload, type } = action;
  switch (type) {
    case LISTAME_PRODUCTOS:
      return { ...state, productos: payload };
    case AGREGAR_CARRITO:
      return {
        ...state,
        carrito: [
          ...state.carrito,
          state.productos.filter((item) => item.id === parseInt(payload)),
        ],
      };
    case ELIMINAR_CARRITO:
      return {
        ...state,
        carrito: state.carrito.filter((items) => items[0].id !== payload),
      };
    default:
  }
}
