import React from "react";

import s from "./EmojiList.module.css";

import EmojiItem from "../EmojiItem/EmojiItem.jsx";

const EmojiList = ({ emoji, bestEmojiIds, onClick }) => {
  return (
    <div className={s.list}>
      {emoji.map((emjItem) => (
        <EmojiItem
          key={emjItem.id}
          emoji={emjItem.emoji}
          votes={emjItem.votes}
          onClick={() => onClick(emjItem.id)}
          hidden={bestEmojiIds.length > 0 && !bestEmojiIds.includes(emjItem.id)}
        />
      ))}
    </div>
  );
};

export default EmojiList;
