import { TextField } from './components/TextField/TextField';
import { useState } from 'react';
function App() {
  const [text, setText] = useState('');
  const style = { height: '100px', padding: '10px' };
  return (
    <div style={style}>
      <TextField
        value={text}
        onChange={e => setText(e.target.value)}
        variant='filled'
        size='medium'
      />
      <TextField
        value={text}
        onChange={e => setText(e.target.value)}
        size='medium'
      />
      <TextField
        value={text}
        onChange={e => setText(e.target.value)}
        variant='outlined'
        size='medium'
      />
    </div>
  );
}

export default App;
