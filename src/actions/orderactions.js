import { authaxios } from "./../utils/axios";

export const placeOrder = (orderData) => async (dispatch) => {
  try {
    dispatch({ type: "PLACE_ORDER_PENDING" });
    const { data } = await authaxios.post("/order/new", orderData);
    dispatch({ type: "PLACE_ORDER_FULFILLED", payload: data.success });
  } catch (err) {
    console.log(err.message);
    dispatch({ type: "PLACE_ORDER_REJECTED", payload: err.response.data.error });
  }
}

export const getUserOrder = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_USER_ORDER_PENDING" });
    const { data } = await authaxios.get("/my-orders");
    dispatch({ type: "GET_USER_ORDER_FULFILLED", payload: data.orders });

  } catch (err) {
    console.log(err.message);
    dispatch({ type: "GET_USER_ORDER_REJECTED", payload: err.response.data.message });

  }
}