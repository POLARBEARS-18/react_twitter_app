import { css } from '@emotion/react';
import Search from '@mui/icons-material/Search';
import { TwitterTheme } from 'Apps/TwitterApp/theme/theme';
import React from 'react';
import { TwitterShareButton, TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';

export const Widgets = () => (
  <div css={SWidget}>
    <div css={SWidgetInput}>
      <Search css={SWidgetSearch} />
      <input type="text" placeholder="キーワード検索" />
    </div>

    <div css={SWidgetContainer}>
      <h2>いまどうしてる？</h2>
      <TwitterTweetEmbed tweetId="1575372540783960064" />
      <TwitterTimelineEmbed sourceType="profile" screenName="stylishnoob" options={{ height: 400 }} />
      <TwitterShareButton url="https://twitter.com/Camel3156" options={{ text: 'しろくま', via: 'Camel3156' }} />
    </div>
  </div>
);

const SWidget = css`
  flex: 0.35;
  overflow-y: scroll;
`;

const SWidgetInput = css`
  display: flex;
  align-items: center;
  background-color: ${TwitterTheme.twitterBackGround};
  padding: 0.625em;
  border-radius: 1.25em;
  margin-top: 0.625em;
  margin-left: 1.25em;

  > input {
    border: none;
    background-color: ${TwitterTheme.twitterBackGround};
  }
`;

const SWidgetSearch = css`
  color: gray;
`;

const SWidgetContainer = css`
  margin-top: 0.9375em;
  margin-left: 1.25em;
  padding: 1.25em;
  padding-top: 0.3125em;
  background-color: #f5f8fa;
  border-radius: 1.25em;

  > h2 {
    font-size: 1.125rem;
    font-weight: 800;
  }
`;
