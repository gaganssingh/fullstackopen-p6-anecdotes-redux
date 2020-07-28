import React from "react";
import { connect } from "react-redux";

import { upvote } from "../reducers/anecdoteReducer";
import { showNotification } from "../reducers/notificationReducer";

const AnecdoteList = (props) => {
   const sortedAndFilteredAnecdote = [...props.anecdotes]
      .sort((a, b) => b.votes - a.votes)
      .filter((anecdote) =>
         anecdote.content.toLowerCase().includes(props.filterTerm.toLowerCase())
      );

   const vote = (id) => {
      const upvotedAnecdote = sortedAndFilteredAnecdote.find(
         (anec) => anec.id === id
      );
      props.upvote(id);
      props.showNotification(`You upvoted: ${upvotedAnecdote.content}`, 5000);
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

const mapStateToProps = (state) => {
   return {
      anecdotes: state.anecdotes,
      filterTerm: state.filter,
   };
};

const mapDispatchToProps = {
   upvote,
   showNotification,
};

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);
