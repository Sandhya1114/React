// CommentsList.js
import React, { useEffect, useState } from 'react';
import UseFatch from '../UseFatch';

const CommentsList = () => {
  const {data:comments,loading,error}=UseFatch('https://jsonplaceholder.typicode.com/comments')

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Comments List</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.name}</strong>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsList;