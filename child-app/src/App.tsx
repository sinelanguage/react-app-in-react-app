import React, { useRef } from 'react';
import { observer } from "mobx-react-lite";
import { broadcastChannelDefaults } from './constants';
import ChildAppStore from './store';
import './App.css';

const {child, channel} = broadcastChannelDefaults;
const store = new ChildAppStore();

function App() {
  const broadcastChannel = new BroadcastChannel(channel.name)
  const ldpChannelRef = useRef(broadcastChannel);
  const ldpChannel = ldpChannelRef.current;

  const post = () => {
    ldpChannel.postMessage(child.pub[0].message);
  };
  
  ldpChannel.onmessage = (event) => {
    const randomNum = ' Random generated number: ' + Math.floor(Math.random() * 256);
    console.log(child.sub[0].message + randomNum, event);
    handleUpdateMessage(child.sub[0].message + randomNum)
  };

  const handleUpdateMessage = (message: string = 'listening to handle state update') => {
    store.updateMessage(message);
  };

  return (
    <div>
      <header>
        <h1>Child App React v18 + Typescript + MobX</h1>
        <p>This app is sandboxed inside an iFrame, parent app has no context or concept that its hosting another React application.  Both apps are able to observe state passed through the browsers' broadcast channel API.  BroacastChannel API is a context available across windows in tabs in the browser as long as apps have same origin.</p>
      </header>
      <section>
        <p>
          Child App's MobX store state:{' '}
          {store.message}
        </p>
        <button
          onClick={post}
        >
          Post message to BroadcastChannel
        </button>
      </section>
    </div>
  );
}

export default observer(App);
