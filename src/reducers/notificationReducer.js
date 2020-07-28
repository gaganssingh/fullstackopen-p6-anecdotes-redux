const initialState = "";

const notificationReducer = (state = initialState, action) => {
   switch (action.type) {
      case "SHOW":
         return action.data;
      case "REMOVE":
         return initialState;
      default:
         return state;
   }
};

let timerId;
export const showNotification = (message, timer = 5000) => {
   return (dispatch) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
         dispatch({ type: "REMOVE" });
      }, timer);
      dispatch({
         type: "SHOW",
         data: message,
      });
   };
};

export default notificationReducer;
