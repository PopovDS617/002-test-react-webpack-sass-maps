import React from 'react';
import './Badge.scss';

type TBadgeProps = {
  text: string;
};

export const Badge = (props: TBadgeProps) => {
  return <span className="badge">{props.text}</span>;
};
