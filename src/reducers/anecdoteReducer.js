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
   return {
      type: "VOTE",
      data: { id },
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
         const id = action.data.id;
         const itemToUpvote = state.find((item) => item.id === id);
         const upvotedItem = {
            ...itemToUpvote,
            votes: itemToUpvote.votes + 1,
         };

         return state.map((item) => (item.id !== id ? item : upvotedItem));

      case "ADD":
         return [...state, action.data];

      default:
         return state;
   }
};

export default reducer;
