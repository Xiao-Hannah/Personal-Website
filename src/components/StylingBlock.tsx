import React from "react";

interface PageDetails {
  showName?: boolean;
  color?: string;
}
const pages: Record<string, PageDetails> = {
  "/fridgeFriend": { showName: true, color: "#C1E1C1" },
  "/about": {},
  "/": {},
};
export const StylingBlock = ({ locationPath }: { locationPath: string }) => {
  return (
    <>
      {Object.keys(pages).includes(locationPath) ? (
        <div
          className="styling-block"
          style={{
            backgroundColor: pages[locationPath].color ?? "#ABC7D6",
          }}
        >
          {pages[locationPath].showName ? <p> Hannah Xiao</p> : null}
        </div>
      ) : null}
    </>
  );
};
