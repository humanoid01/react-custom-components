// import { TextField } from './components/TextField/TextField';
// import { useState } from 'react';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillAlert } from 'react-icons/ai';
import { Button } from './components/Button/Button';

function App() {
  // const [text, setText] = useState('');
  // const [text2, setText2] = useState('');
  const style = { height: '100px', padding: '10px' };
  return (
    <div style={style}>
      <Button variant='contained' color='primaryDark' />
      <Button
        endIcon={<AiFillAlert />}
        startIcon={<AiFillEyeInvisible />}
        variant='outlined'
        color='red'
      />
      <Button variant='text' color='primary' />
    </div>
  );
}

export default App;
