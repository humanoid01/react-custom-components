import { TextField } from './components/TextField/TextField';
import { useState } from 'react';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillAlert } from 'react-icons/ai';

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
        color='success'
        startIcon={<AiFillEyeInvisible />}
        endIcon={<AiFillAlert />}
      />
      <TextField
        value={text}
        onChange={e => setText(e.target.value)}
        size='medium'
        label='Great label'
        helperText={'Please provide something'}
        startIcon={<AiFillEyeInvisible />}
        endIcon={<AiFillAlert />}
        placeholder='type something'
        color='info'
      />
      <TextField
        value={text}
        onChange={e => setText(e.target.value)}
        variant='outlined'
        size='medium'
        label='Cool label'
        color='warning'
        helperText={'Please provide something'}
        startIcon={<AiFillEyeInvisible />}
        endIcon={<AiFillAlert />}
      />
    </div>
  );
}

export default App;
