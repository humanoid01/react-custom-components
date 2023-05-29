import { TextField } from './components/TextField/TextField';
import { useState } from 'react';
function App() {
  const [text, setText] = useState('');

  return (
    <>
      <TextField value={text} onChange={e => setText(e.target.value)} />
    </>
  );
}

export default App;
