import React from "react";
import EmojiVotingSection from "../../components/EmojiVotingSection/EmojiVotingSection.jsx";
import s from "./EmojiVotingPage.module.css";

const EmojiVotingPage = () => {
    return (
      <div className={s.wrapper}>
        <EmojiVotingSection />
      </div>
    );
}

export default EmojiVotingPage;