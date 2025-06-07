import{ useState, useEffect } from 'react';
import useDebounce from './useDebounce';

export default function Debounce() {
  const [text, setText] = useState('');
  const debouncedText = useDebounce(text, 1000); // 1-second delay

  useEffect(() => {
    console.log('Debounced Value:', debouncedText);
  }, [debouncedText]);

  return (
    <div>
      <h2>Type here:</h2>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Start typing..."
      />
      <p>Actual Text: {text}</p>
      <p>Debounced Text: {debouncedText}</p>
    </div>
  );
}
