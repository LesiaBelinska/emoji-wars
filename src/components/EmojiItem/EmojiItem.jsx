import React from "react";
import s from "./EmojiItem.module.css";

const EmojiItem = ({ emoji, votes }) => {
    return (
        <div className={ s.item }>
            <span className={ s.img }>{ emoji }</span>
            <span className={ s.votes }>{ votes }</span>
        </div>
    )
}

export default EmojiItem;