import anecdoteService from "../services/anecdotes";

export const initializeAnecdotes = () => {
   return async (dispatch) => {
      const anecdotes = await anecdoteService.getAll();
      dispatch({
         type: "INIT",
         data: anecdotes,
      });
   };
};

export const upvote = (id) => {
   return async (dispatch) => {
      const updated = await anecdoteService.update(id);
      dispatch({
         type: "VOTE",
         data: updated,
      });
   };
};

export const add = (content) => {
   return async (dispatch) => {
      const newAnecdote = await anecdoteService.createNew(content);
      dispatch({
         type: "ADD",
         data: newAnecdote,
      });
   };
};

const reducer = (state = [], action) => {
   switch (action.type) {
      case "INIT":
         return action.data;

      case "VOTE":
         return state.map((item) =>
            item.id !== action.data.id ? item : action.data
         );

      case "ADD":
         return [...state, action.data];

      default:
         return state;
   }
};

export default reducer;
