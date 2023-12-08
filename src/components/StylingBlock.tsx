import React from "react";

const pages = ["/fridgeFriend", "/about", "/"];
const showName = ["/fridgeFriend"];
export const StylingBlock = ({ locationPath }: { locationPath: string }) => {
  return (
    <>
      {pages.includes(locationPath) ? (
        <div className="styling-block">
          {showName.includes(locationPath) ? <p> Hannah Xiao</p> : null}
        </div>
      ) : null}
    </>
  );
};
