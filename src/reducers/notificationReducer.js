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

export const showNotification = (message, timer = 5000) => {
   return (dispatch) => {
      dispatch({
         type: "SHOW",
         data: message,
      });
      setTimeout(() => {
         dispatch({ type: "REMOVE" });
      }, timer);
   };
};

// export const clearNotification = () => {
//    return {
//       type: "REMOVE",
//    };
// };

export default notificationReducer;
