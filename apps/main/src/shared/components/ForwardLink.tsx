import Link from 'next/link';
import React from 'react';

interface ForwardLinkPropsType {
  href: string;
}

const ForwardLink: React.FC<ForwardLinkPropsType> = ({ children, href }) => {
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
};

export default ForwardLink;
