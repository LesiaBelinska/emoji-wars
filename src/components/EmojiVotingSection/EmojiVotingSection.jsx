import React, { Component } from 'react';

import EmojiList from '../EmogiList/EmojiList.jsx';
import PrimaryButton from '../Buttons/PrimaryButton/PrimaryButton.jsx';
import s from './EmojiVotingSection.module.css';

class EmojiVotingSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emoji: [],
      showBest: false,
    };
  }

  componentDidMount() {
    const storedEmoji = localStorage.getItem('emoji');
    if (storedEmoji) {
      this.setState({ emoji: JSON.parse(storedEmoji) });
    } else {
      this.setState({
        emoji: [
          { id: 1, emoji: '😀', votes: 0 },
          { id: 2, emoji: '😜', votes: 0 },
          { id: 3, emoji: '😍', votes: 0 },
          { id: 4, emoji: '🤩', votes: 0 },
          { id: 5, emoji: '😎', votes: 0 },
        ],
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.emoji !== this.state.emoji) {
      localStorage.setItem('emoji', JSON.stringify(this.state.emoji));
    }
  }

  onClickVoteHandler = id => {
    this.setState(prevState => ({
      emoji: prevState.emoji.map(item =>
        item.id === id ? { ...item, votes: item.votes + 1 } : item
      ),
    }));
  };

  getBestEmojiIds = () => {
    const maxVotes = Math.max(...this.state.emoji.map(item => item.votes));
    return this.state.emoji
      .filter(item => item.votes === maxVotes)
      .map(item => item.id);
  };

  toggleShowBest = () => {
    this.setState(prevState => ({
      showBest: !prevState.showBest,
    }));
  };

  render() {
    const bestEmojiIds = this.state.showBest ? this.getBestEmojiIds() : [];

    return (
      <div className={s.section}>
        <h1 className={s.title}>Choose the best emoji!</h1>
        <EmojiList
          emoji={this.state.emoji}
          onClick={this.onClickVoteHandler}
          bestEmojiIds={bestEmojiIds}
        />
        <PrimaryButton
          buttonText={
            this.state.showBest ? 'Show all emoji' : 'Show the best emoji'
          }
          onClick={this.toggleShowBest}
        />
      </div>
    );
  }
}

export default EmojiVotingSection;
