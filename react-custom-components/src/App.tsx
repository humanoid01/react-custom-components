// import { TextField } from './components/TextField/TextField';
import { useState } from 'react';
// import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiOutlineAlert } from 'react-icons/ai';
import { AiFillAlert } from 'react-icons/ai';
import { Checkbox } from './components/Checkbox/Checkbox';

// import { Button } from './components/Button/Button';
function App() {
  // const [text, setText] = useState('');
  // const [text2, setText2] = useState('');
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <Checkbox
        icon={<AiOutlineAlert />}
        checkedIcon={<AiFillAlert />}
        checked={checked}
        onChange={e => setChecked(!checked)}
        color='infoDark'
        style={{ color: 'black' }}
        label='hullo'
      />
      <Checkbox
        checked={checked}
        onChange={() => setChecked(!checked)}
        color='infoDark'
        style={{ color: 'black' }}
        label='hullo'
        size='large'
      />
    </div>
  );
}

export default App;
