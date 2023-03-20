import { ILocaleBase } from "../models/spt/server/ILocaleBase";
import { ITrader } from "../models/eft/common/tables/ITrader";
import { IGlobals } from "../models/eft/common/IGlobals";
import { IAtlasItem } from "./IAtlasItem";
import { IAtlasCustomizationItem } from "./IAtlasCustomizationItem";

export interface IAtlasDatabase {
    locales?: ILocaleBase;
    old_locales?: IOldLocaleBase;
    traders?: Record<string, ITrader>;
    globals?: IGlobals;
    atlas_items?: Record<string, IAtlasItem>;
    atlas_clothes: Record<string, IAtlasCustomizationItem>;
}

export interface IOldLocaleBase {
    global: {
        ch?: IOldLocaleFormat;
        cz?: IOldLocaleFormat;
        en: IOldLocaleFormat;
        es?: IOldLocaleFormat;
        esmx?: IOldLocaleFormat;
        fr?: IOldLocaleFormat;
        ge?: IOldLocaleFormat;
        hu?: IOldLocaleFormat;
        it?: IOldLocaleFormat;
        jp?: IOldLocaleFormat;
        kr?: IOldLocaleFormat;
        pl?: IOldLocaleFormat;
        po?: IOldLocaleFormat;
        ru?: IOldLocaleFormat;
        sk?: IOldLocaleFormat;
        tu?: IOldLocaleFormat;
    }
}

export interface IOldLocaleFormat {
    templates: Record<string, string>;
    preset: Record<string, string>;
}