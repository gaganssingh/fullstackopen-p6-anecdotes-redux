const initialState = "";

const notificationReducer = (state = initialState, action) => {
   switch (action.type) {
      case "SHOW":
         return action.text;
      case "REMOVE":
         return initialState;
      default:
         return state;
   }
};

export const showNotification = (text) => {
   return {
      type: "SHOW",
      text,
   };
};

export const clearNotification = () => {
   return {
      type: "REMOVE",
   };
};

export default notificationReducer;
