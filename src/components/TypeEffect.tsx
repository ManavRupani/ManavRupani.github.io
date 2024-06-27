import React, { useEffect, useState } from 'react';

interface TypingEffectProps {
  texts: string[];
}

const TypingEffect: React.FC<TypingEffectProps> = ({ texts }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [sentenceIndex, setSentenceIndex] = useState(0);

  useEffect(() => {
    if (index < texts[sentenceIndex].length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(displayedText + texts[sentenceIndex][index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeoutId);
    } else {
      const nextSentenceIndex = (sentenceIndex + 1) % texts.length;
      setTimeout(() => {
        setDisplayedText('');
        setIndex(0);
        setSentenceIndex(nextSentenceIndex);
      }, 2000); // Delay before showing the next sentence
    }
  }, [index, texts, sentenceIndex, displayedText]);

  return <span className='typing-effect whitespace-nowrap text-ellipsis '>{displayedText}</span>;
};

export default TypingEffect;
