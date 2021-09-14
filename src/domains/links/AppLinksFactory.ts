import { IShopProduct } from "../../../data/shop/types/IShopProduct";

export const AppLinksFactory = {
  makeHomeLink() {
    return "/";
  },
  makeBrowseLink() {
    return "/browse";
  },
  makeAuthorLink(game: IShopProduct | undefined) {
    if (!game) {
      return "";
    }
    return `/browse/a/${game.authorSlug}`;
  },
  makeProductLink(game: IShopProduct | undefined) {
    if (!game) {
      return "";
    }
    return `/browse/p/${game.authorSlug}/${game.slug}`;
  },
  makeGameLink(props: { author: string; game: string; language?: string }) {
    if (!props.language || props.language === "en") {
      return `/games/${props.author}/${props.game}`;
    }
    return `/games/t/${props.language}/${props.author}/${props.game}`;
  },
  makeGameChapterLink(props: {
    author: string;
    game: string;
    chapter: string;
    language?: string;
  }) {
    if (!props.language || props.language === "en") {
      return `/games/${props.author}/${props.game}/${props.chapter}`;
    }
    return `/games/t/${props.language}/${props.author}/${props.game}/${props.chapter}`;
  },
};