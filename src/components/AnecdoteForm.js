import React from "react";
import { useDispatch } from "react-redux";

import { add } from "../reducers/anecdoteReducer";
import {
   showNotification,
   clearNotification,
} from "../reducers/notificationReducer";
import anecdoteService from "../services/anecdotes";

const AnecdoteForm = () => {
   const dispatch = useDispatch();

   const addAnecdote = async (event) => {
      event.preventDefault();
      const anecdote = event.target.anecdote.value;
      event.target.anecdote.value = "";

      const newAnecdote = await anecdoteService.createNew(anecdote);
      dispatch(add(newAnecdote));
      dispatch(showNotification(`Added new acecdote: ${anecdote}`));
      setTimeout(() => {
         dispatch(clearNotification());
      }, 5000);
   };

   return (
      <>
         <h2>create new</h2>
         <form onSubmit={addAnecdote}>
            <div>
               <input name="anecdote" />
            </div>
            <button type="submit">create</button>
         </form>
      </>
   );
};

export default AnecdoteForm;