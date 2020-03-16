import store from '../store/store';
import {getHealth} from '../reducers/Machines';

let socket = new WebSocket("ws://localhost:1337");
  
  socket.onmessage = function(event) {
    const { data } = event;
    const msg = JSON.parse(data);
    store.dispatch(getHealth(msg.id,{ health: msg.health }))
  };
  
  socket.onclose = function(event) {
    if (event.wasClean) {
      console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
    } else {
      // e.g. server process killed or network down
      // event.code is usually 1006 in this case
      console.log('[close] Connection died');
    }
  };
  
  socket.onerror = function(error) {
    console.log(`[error] ${error.message}`);
  };