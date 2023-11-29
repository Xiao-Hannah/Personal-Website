import React from "react";

const pages = ["/about", "/"];
export const StylingBlock = ({ locationPath }: { locationPath: string }) => {
  return (
    <>
      {pages.includes(locationPath) ? (
        <div className="styling-block"> </div>
      ) : null}
    </>
  );
};
