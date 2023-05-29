import { TextField } from './components/TextField/TextField';
import { useState } from 'react';
function App() {
  const [text, setText] = useState('');
  const style = { backgroundColor: 'red', height: '100px', padding: '10px' };
  return (
    <div>
      <TextField
        value={text}
        onChange={e => setText(e.target.value)}
        variant='filled'
      />
      <TextField value={text} onChange={e => setText(e.target.value)} />
      <TextField
        value={text}
        onChange={e => setText(e.target.value)}
        variant='outlined'
      />
    </div>
  );
}

export default App;
