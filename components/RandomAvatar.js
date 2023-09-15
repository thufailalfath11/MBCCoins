import React from 'react';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-identicon-sprites';

const RandomAvatar = ({ width, height }) => {

  const avatar = createAvatar(style, {
    seed: Math.random().toString(), 
  });

  return (
    <img
      src={`data:image/svg+xml;utf8,${avatar}`}
      alt="Random Avatar"
      width={width}
      height={height}
      className="rounded-full"
    />
  );
};

export default RandomAvatar;