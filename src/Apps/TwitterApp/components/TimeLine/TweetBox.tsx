import { addDoc, collection, serverTimestamp } from '@firebase/firestore';
import { Avatar, Button, css } from '@mui/material';
import { db } from 'Apps/TwitterApp/firebase';
import { TwitterTheme } from 'Apps/TwitterApp/theme/theme';
import React, { useState } from 'react';

export const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    void addDoc(collection(db, 'posts'), {
      displayName: 'パンダさん',
      userName: 'panda_pan',
      text: tweetMessage,
      avatar: 'http://shincode.info/wp-content/uploads/2021/12/icon.png',
      image: tweetImage,
      timestamp: serverTimestamp(),
    });

    setTweetMessage('');
    setTweetImage('');
  };

  return (
    <div css={STweetBox}>
      <form action="">
        <div css={STweetBoxInput}>
          <Avatar />
          <input
            type="text"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.currentTarget.value)}
            placeholder="いまどうしている？"
          />
        </div>
        <input
          type="text"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.currentTarget.value)}
          placeholder="画像のURLを入力してください"
          css={STweetBoxImageInput}
        />
        <Button type="submit" onClick={(e) => sendTweet(e)} variant="contained" css={STweetBoxButton}>
          ツイートする
        </Button>
      </form>
    </div>
  );
};

const STweetBox = css`
  padding-bottom: 0.625em;
  border-bottom: 8px solid ${TwitterTheme.twitterBackGround};
  padding-right: 0.625rem;

  > form {
    display: flex;
    flex-direction: column;
  }
`;

const STweetBoxInput = css`
  padding: 1.25em;
  display: flex;

  > input {
    flex: 1;
    font-size: 1.25rem;
    margin-left: 1.25em;
    border: none;
  }
`;

const STweetBoxImageInput = css`
  border: none;
  padding: 1.25rem;
`;

const STweetBoxButton = css`
  background-color: ${TwitterTheme.twitterColor} !important;
  color: white !important;
  font-weight: 900;
  width: 9.125em;
  height: 2.5rem;
  border-radius: 1.875em;
  margin-top: 1.25rem;
  margin-left: auto;
`;
