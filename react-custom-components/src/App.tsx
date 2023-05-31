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
      <Button />
      <Button endIcon={<AiFillAlert />} startIcon={<AiFillEyeInvisible />} />
      <Button />
    </div>
  );
}

export default App;
