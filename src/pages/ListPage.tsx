import React, { useState } from "react";
import { ListPageWrapper } from "./style";
import Data from "../data/pokemonData.json";
import { SpriteIcon } from "../components/Parts/SpriteIcon";
import { ConvertTypeEnglish } from "../util/Convert";
import InfiniteScroll from "react-infinite-scroller";

const fetchSpritePath = (no: number) => {
  const pokemonNo = no;
  const fileName = ("000" + pokemonNo).slice(-3) + "MS.png";
  const bucketName = "pokedex-haru.appspot.com";
  const filePath = `sprites/${fileName}`;
  const spritePath = `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/${encodeURIComponent(
    filePath
  )}?alt=media`;
  return spritePath;
};

export const ListPage = () => {
  const [list, setList] = useState([]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const loadMore = (page: any) => {
    if (list.length <= Data.length) {
      setTimeout(() => {
        setList([...list, page]);
      }, 10);
    }
  };

  const items = (
    <div>
      {list.map((value, index) => (
        <SpriteIcon
          key={index}
          SpriteImgPath={fetchSpritePath(value)}
          type={ConvertTypeEnglish(Data[value - 1].type[0])}
          ProfilePath={`/${value}`}
        />
      ))}
    </div>
  );

  const loader = <h2>Loading...</h2>;

  return (
    <ListPageWrapper>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={true}
        loader={loader}
      >
        {items}
      </InfiniteScroll>
    </ListPageWrapper>
  );
};
