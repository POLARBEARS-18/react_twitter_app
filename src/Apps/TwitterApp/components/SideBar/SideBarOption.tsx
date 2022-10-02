import { css } from '@emotion/react';
import { TwitterTheme } from 'Apps/TwitterApp/theme/theme';
import React, { FC } from 'react';

type SideBarOptionProps = {
  text: string;
  Icon: any;
  active?: boolean;
};

export const SideBarOption: FC<SideBarOptionProps> = (props) => {
  /* eslint-disable @typescript-eslint/no-unsafe-assignment */
  const { text, Icon, active } = props;
  return (
    <div css={[SSideBarOption, active && SSideBarActive]}>
      <Icon />
      <h2 css={SSideBarText}>{text}</h2>
    </div>
  );
};

const SSideBarOption = css`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: color 0.15s ease-out;
  margin-left: 1.25em;

  :hover {
    background-color: #e8f5fe;
    border-radius: 30px;
    color: ${TwitterTheme.twitterColor};
  }

  > .MuiSvgIcon-root {
    padding-right: 1.25em;
  }
`;

const SSideBarText = css`
  font-size: 1.25rem;
  margin-right: 1.25em;
  font-weight: 800;
`;

const SSideBarActive = css`
  color: ${TwitterTheme.twitterColor};
`;
