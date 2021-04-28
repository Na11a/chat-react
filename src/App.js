import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div id="chat">
       <Header />
        <div id="messages">
          <div class="message">
              <img src="" alt="" />
              <div class="info">
                  <div class="authorName">Max Sy</div>
                  <div class="body">Welcome</div>
                  <div class="time">16:00</div>
              </div>
          </div>
          <div class="message">
              <img src="" alt="" />
              <div class="info">
                  <div class="authorName">Ivan</div>
                  <div class="body">Hi!</div>
                  <div class="time">16:05</div>
              </div>
          </div>
        </div>
        <form id="message-form" autocomplete="off">
            <input type="text" name="message" />
            <button type="submit">
                Send
            </button>
        </form>
      </div>
    );
  }
}

export default App;
