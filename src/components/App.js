import React from 'react';
import Post from './Post';


export default class App extends React.Component {
  render() {
    return (
      <>
        <h1>Hello World</h1>
        <Post title="Post-01" />
        <Post title="Post-02" />
        <Post title="Post-03" />
      </>
    );
  }
}