import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { upvote } from "../reducers/anecdoteReducer";
import { showNotification } from "../reducers/notificationReducer";

const AnecdoteList = () => {
   const dispatch = useDispatch();
   const anecdotes = useSelector((state) => state.anecdotes);
   const filterTerm = useSelector((state) => state.filter);

   const sortedAndFilteredAnecdote = [...anecdotes]
      .sort((a, b) => b.votes - a.votes)
      .filter((anecdote) =>
         anecdote.content.toLowerCase().includes(filterTerm.toLowerCase())
      );

   const vote = (id) => {
      const upvotedAnecdote = sortedAndFilteredAnecdote.find(
         (anec) => anec.id === id
      );
      dispatch(upvote(id));
      dispatch(
         showNotification(`You upvoted: ${upvotedAnecdote.content}`, 5000)
      );
   };

   return (
      <>
         {sortedAndFilteredAnecdote.map((anecdote) => (
            <div key={anecdote.id}>
               <div>{anecdote.content}</div>
               <div>
                  has {anecdote.votes}
                  <button onClick={() => vote(anecdote.id)}>vote</button>
               </div>
            </div>
         ))}
      </>
   );
};

export default AnecdoteList;
