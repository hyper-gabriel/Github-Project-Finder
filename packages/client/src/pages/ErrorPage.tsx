import React, { ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
};

const ErrorPage = ({ title = '', children }: Props) => {
  //TODO:
  return (
    <div>
      {title}
      {children}
    </div>
  );
};

export default ErrorPage;
