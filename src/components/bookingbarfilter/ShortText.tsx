import React from 'react';

interface Props {
  text: string;
  maxLength: number;
}

const ShortText: React.FC<Props> = ({ text, maxLength }) => {
  const truncatedText = text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

  return <p>{truncatedText}</p>;
}

export default ShortText;