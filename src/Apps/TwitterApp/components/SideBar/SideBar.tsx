import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button, css } from '@mui/material';
import { TwitterTheme } from 'Apps/TwitterApp/theme/theme';
import { SideBarOption } from './SideBarOption';

export const SideBar = () => (
  <div css={SSideBar}>
    {/* ツイッターアイコン */}
    <TwitterIcon css={STwitterIcon} />
    {/* SidebarOption */}
    <SideBarOption text="ホーム" Icon={HomeIcon} active />
    <SideBarOption text="話題を検索" Icon={SearchIcon} />
    <SideBarOption text="通知" Icon={NotificationsNoneIcon} />
    <SideBarOption text="メッセージ" Icon={MailOutlineIcon} />
    <SideBarOption text="ブックマーク" Icon={BookmarkBorderIcon} />
    <SideBarOption text="リスト" Icon={ListAltIcon} />
    <SideBarOption text="プロフィール" Icon={PermIdentityIcon} />
    <SideBarOption text="もっとみる" Icon={MoreHorizIcon} />
    {/* ツイートボタン */}
    <Button variant="contained" fullWidth css={SSideBarTweetButton}>
      ツイートする
    </Button>
  </div>
);

const SSideBar = css`
  border-right: 1px solid ${TwitterTheme.twitterBackGround};
  flex: 0.2;
  min-width: 15.625em;
  margin-top: 1.25em;
  padding-left: 1.25em;
  padding-right: 1.25em;
`;

const STwitterIcon = css`
  color: ${TwitterTheme.twitterColor};
  font-size: 1.875rem;
  margin-left: 1.25em;
  margin-bottom: 1.25em;
`;

const SSideBarTweetButton = css`
  background-color: ${TwitterTheme.twitterColor} !important;
  color: white !important;
  font-weight: 900;
  border: none;
  border-radius: 30px;
  height: 3.125em;
  margin-top: 1.25em;
`;
