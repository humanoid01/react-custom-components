import { TextField } from './components/TextField/TextField';
import { useState } from 'react';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillAlert } from 'react-icons/ai';

function App() {
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
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
        color='#333'
        startIcon={<AiFillEyeInvisible />}
        endIcon={<AiFillAlert />}
      />
      <TextField
        value={text2}
        onChange={e => setText2(e.target.value)}
        size='medium'
        label='Great label'
        helperText={'Please provide something'}
        startIcon={<AiFillEyeInvisible />}
        endIcon={<AiFillAlert />}
        placeholder='type something'
        color='red'
      />
      <TextField
        value={text}
        onChange={e => setText(e.target.value)}
        variant='outlined'
        size='medium'
        label='Cool label'
        color='success'
        helperText={'Please provide something'}
        startIcon={<AiFillEyeInvisible />}
        endIcon={<AiFillAlert />}
        counter={20}
      />
    </div>
  );
}

export default App;
