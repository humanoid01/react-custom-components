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
        label='Great label'
        helperText={'Please provide something'}
      />
      <TextField
        value={text}
        onChange={e => setText(e.target.value)}
        size='medium'
        label='Great label'
        helperText={'Please provide something'}
      />
      <TextField
        value={text}
        onChange={e => setText(e.target.value)}
        variant='outlined'
        size='medium'
        label='Cool label'
        helperText={'Please provide something'}
      />
    </div>
  );
}

export default App;
