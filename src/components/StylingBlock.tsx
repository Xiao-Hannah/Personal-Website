import React from "react";
import constants from "../constants";
import { useWindowDimensions } from "../hooks/hooks";

interface PageDetails {
  showName?: boolean;
  color?: string;
}
const pages: Record<string, PageDetails> = {
  "/fridgeFriend": { showName: true, color: constants.fridgeFriendColor },
  "/bloome": { showName: true, color: constants.bloomeColor },
  "/about": {},
  "/": {},
};
export const StylingBlock = ({ locationPath }: { locationPath: string }) => {
  const { width, height } = useWindowDimensions();
  return (
    <>
      {Object.keys(pages).includes(locationPath) ? (
        <div
          className="styling-block"
          style={{
            width: Math.min(width / 2, 500),
            height: 500,
            backgroundColor: pages[locationPath].color ?? constants.baseColor,
          }}
        >
          {pages[locationPath].showName ? <p> Hannah Xiao</p> : null}
        </div>
      ) : null}
    </>
  );
};
