import s from './EmojiItem.module.css';

const EmojiItem = ({ emoji, votes, onClick, hidden }) => {
  return (
    <div onClick={onClick} className={` ${s.item} ${hidden ? s.hidden : ''}`}>
      <span className={s.emoji}>{emoji}</span>
      <span className={s.votes}>votes: {votes}</span>
    </div>
  );
};

export default EmojiItem;
