import { useState, useEffect } from 'react';

import EmojiList from '../EmogiList/EmojiList.jsx';
import PrimaryButton from '../Buttons/PrimaryButton/PrimaryButton.jsx';
import s from './EmojiVotingSection.module.css';

const EmojiVotingSection = () => {

  const initialEmoji = () => {
    const storedEmoji = localStorage.getItem('emoji');

    return storedEmoji ? JSON.parse(storedEmoji) : [
    { id: 1, emoji: '😀', votes: 0 },
    { id: 2, emoji: '😜', votes: 0 },
    { id: 3, emoji: '😍', votes: 0 },
    { id: 4, emoji: '🤩', votes: 0 },
    { id: 5, emoji: '😎', votes: 0 },
  ]
  }

  const [emoji, setEmoji] = useState(initialEmoji);
  const [showBest, setShowBest] = useState(false);

  useEffect(() => {
    localStorage.setItem('emoji', JSON.stringify(emoji));
  }, [emoji]);

  const onClickVoteHandler = id => {
    setEmoji(
      emoji.map(item =>
        item.id === id ? { ...item, votes: item.votes + 1 } : item
      )
    );
  };

  const getBestEmojiIds = () => {
    const maxVotes = Math.max(...emoji.map(item => item.votes));
    return emoji.filter(item => item.votes === maxVotes).map(item => item.id);
  };

  const toggleShowBest = () => {
    setShowBest(!showBest);
  };

  const bestEmojiIds = showBest ? getBestEmojiIds() : [];

  return (
    <div className={s.section}>
      <h1 className={s.title}>Choose the best emoji!</h1>
      <EmojiList
        emoji={emoji}
        onClick={onClickVoteHandler}
        bestEmojiIds={bestEmojiIds}
      />
      <PrimaryButton
        buttonText={showBest ? 'Show all emoji' : 'Show the best emoji'}
        onClick={toggleShowBest}
      />
    </div>
  );
};

export default EmojiVotingSection;
