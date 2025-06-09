// App.js
import React from 'react';
import UsersList from './Component/UsersList';
import PostsList from './Component/PostsList';
import CommentsList from './Component/CommentsList';

const App = () => {
  return (
    <div>
      <UsersList />
      <PostsList />
      <CommentsList />
    </div>
  );
};

export default App;