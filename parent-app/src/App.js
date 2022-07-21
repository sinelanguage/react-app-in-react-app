import './App.css';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateInitText } from './parentAppInitSlice';
import { broadcastChannelDefaults } from './constants';

const {parent, channel} = broadcastChannelDefaults

function App() {
  const broadCastChannel = new BroadcastChannel(channel.name);
  const ldpChannelRef = useRef(broadCastChannel);
  const ldpChannel = ldpChannelRef.current;
  const dispatch = useDispatch();

  const post = () => {
    ldpChannel.postMessage(parent.pub[0].message);
  };
  
  ldpChannel.onmessage = (event) => {
    const randomNum = ' Random generated number: ' + Math.floor(Math.random() * 256);
    dispatch(updateInitText(parent.sub[0].message + randomNum));
    console.log(parent.sub[0].message + randomNum, event);
  };

  const message = useSelector(state => state.parentApp.message);

  return (
    <div>
      <header>
        <h1>Parent React v16 + Redux App</h1>
      </header>
      <section>
        <p>
          Data from Redux state: {message}
        </p>
        <button
          onClick={post}
        >
          Post message to BroadcastChannel
        </button>
      </section>
      <section>
        <iframe width="100%" height="100%" className='child' src="/child.html" title='me'></iframe>
      </section>
    </div>
  );
}

export default App;
