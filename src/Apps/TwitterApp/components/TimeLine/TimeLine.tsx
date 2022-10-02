import { css } from '@emotion/react';
import { collection, CollectionReference, onSnapshot, orderBy, query } from '@firebase/firestore';
import { db } from 'Apps/TwitterApp/firebase';
import { TwitterTheme } from 'Apps/TwitterApp/theme/theme';
import React, { useEffect, useState } from 'react';
import FlipMove from 'react-flip-move';
import { Post, PostType } from './Post';
import { TweetBox } from './TweetBox';

export const TimeLine = () => {
  const [posts, setPosts] = useState<Array<PostType>>([]);

  useEffect(() => {
    const postData = collection(db, 'posts') as CollectionReference<PostType>;
    const q = query(postData, orderBy('timestamp', 'desc'));
    // void getDocs(q).then((querySnapshot) => {
    //   setPosts(querySnapshot.docs.map((doc) => doc.data()));
    // });

    // リアルタイムでデータを取得
    onSnapshot(q, (querySnapshot) => {
      setPosts(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div css={STimeLine}>
      {/* Header */}
      <div css={STimeLineHeader}>
        <h2>ホーム</h2>
      </div>
      {/* TweetBox */}
      <TweetBox />

      {/* Post */}
      {/* eslint-disable @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            userName={post.userName}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
};

const STimeLine = css`
  flex: 0.45;
  border-right: 1px solid ${TwitterTheme.twitterBackGround};
  overflow-y: scroll;

  // Chrome・Safari・Microsoft Edge
  ::-webkit-scrollbar {
    display: none;
  }
  // Firefox
  scrollbar-width: none;
`;

const STimeLineHeader = css`
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 100;
  border: 1px solid ${TwitterTheme.twitterBackGround};
  padding: 0.3125em 1.25em;

  > h2 {
    font-size: 1.25rem;
    font-weight: 800;
  }
`;
