import React, { useState } from 'react';
import { Header } from '../UI';
import { Button, Drawer, List, ListItem, Toolbar, InputBase, Grid,} from '@material-ui/core';
import { Link } from 'react-router-dom';

const LoginBlock = styled.div`
  width: 500px;
  height: 570px;

  position: relative; /*추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: #8917CE;
  border: 3px solid #fcfcfc;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

function Login({ children }) {
    return <LoginBlock>{children}</LoginBlock>
}

export default Login;