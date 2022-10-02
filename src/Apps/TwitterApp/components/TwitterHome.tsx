import { css } from '@emotion/react';
import React from 'react';
import { SideBar } from './SideBar/SideBar';
import { TimeLine } from './TimeLine/TimeLine';
import { Widgets } from './Widget/Widgets';

export const TwitterHome = () => (
  <div css={STwitterHome}>
    <SideBar />
    <TimeLine />
    <Widgets />
  </div>
);

const STwitterHome = css`
  display: flex;
  height: 100vh;
  max-width: 81.25em;
  margin: 0 auto;
  padding: 0 0.625em;
`;
