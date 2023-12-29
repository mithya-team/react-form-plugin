import { FC } from "react";

export interface PlainTextProps {
  text?: string | JSX.Element;
  className?: string;
}

const PlainText: FC<PlainTextProps> = (props) => {
  const { text, className } = props;

  return (
    <>
      {typeof text === "string" ? (
        <div
          className={`pain-text ${className}`}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      ) : (
        <>{text}</>
      )}
    </>
  );
};

export default PlainText;
