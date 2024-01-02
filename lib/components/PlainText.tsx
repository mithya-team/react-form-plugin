import { FC } from "react";
import { PlainTextProps } from "../@types";

const PlainText: FC<PlainTextProps> = (props) => {
  const { text, className } = props;

  return (
    <>
      {typeof text === "string" ? (
        <div
          className={`rf--plain-text ${className}`}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      ) : (
        <>{text}</>
      )}
    </>
  );
};

export default PlainText;
