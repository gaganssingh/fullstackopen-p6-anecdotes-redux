import React from "react";
import { connect } from "react-redux";

import { add } from "../reducers/anecdoteReducer";
import { showNotification } from "../reducers/notificationReducer";

const AnecdoteForm = (props) => {
   const addAnecdote = async (event) => {
      event.preventDefault();
      const anecdote = event.target.anecdote.value;
      event.target.anecdote.value = "";

      props.add(anecdote);
      props.showNotification(`Added new acecdote: ${anecdote}`, 5000);
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

const mapDispatchToProps = {
   add,
   showNotification,
};

export default connect(null, mapDispatchToProps)(AnecdoteForm);
