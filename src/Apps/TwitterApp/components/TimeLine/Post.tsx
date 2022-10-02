import { Avatar, css } from '@mui/material';
import React, { FC, ForwardedRef, forwardRef } from 'react';
import { ChatBubbleOutline, FavoriteBorder, PublishOutlined, Repeat, VerifiedUser } from '@mui/icons-material';
import { TwitterTheme } from 'Apps/TwitterApp/theme/theme';

export type PostType = {
  displayName: string;
  userName: string;
  text: string;
  avatar: string;
  image: string;
};

export const Post: FC<PostType> = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  const { displayName, userName, text, avatar, image } = props;

  return (
    <div ref={ref} css={SPost}>
      <div css={SAvatar}>
        <Avatar src={avatar} />
      </div>
      <div css={SPostBody}>
        <div>
          <div css={SHeaderText}>
            <h3>
              {displayName}
              <span css={SHeaderSpecial}>
                <VerifiedUser css={SPostBadge} />@{userName}
              </span>
            </h3>
          </div>
          <div css={SPostHeaderDesc}>
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt="" />
        <div css={SPostFooter}>
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <PublishOutlined fontSize="small" />
        </div>
      </div>
    </div>
  );
});

const SPost = css`
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid ${TwitterTheme.twitterBackGround};
`;

const SAvatar = css`
  padding: 0.9375em;
`;

const SPostBody = css`
  flex: 1;

  > img {
    border-radius: 1.25em;
    width: 100%;
  }
`;

const SHeaderText = css`
  > h3 {
    font-size: 0.9375rem;
    margin-bottom: 0.3125em;
  }
`;

const SHeaderSpecial = css`
  font-weight: 600;
  font-size: 0.75rem;
  color: gray;
`;

const SPostBadge = css`
  font-size: 0.875rem;
  color: ${TwitterTheme.twitterColor};
`;

const SPostHeaderDesc = css`
  margin-bottom: 0.625em;
  font-size: 0.9375rem;

  > p {
    margin: 0;
    padding: 0;
  }
`;

const SPostFooter = css`
  display: flex;
  justify-content: space-between;
  margin-top: 0.625em;
`;
