import { Props } from "@spt-aki/models/eft/common/tables/ITemplateItem";
import { ISuit, IBarterScheme } from "@spt-aki/models/eft/common/tables/ITrader";
import { Item } from "@spt-aki/models/eft/common/tables/IItem";

export interface IAtlasItem {
    clone: string;
    enable: boolean;
    items: IAtlasCustomItem;
    handbook: {
        ParentId: string;
        Price: number;
    };
    locales: {
        Name: string;
        Shortname: string;
        Description: string;
    };
    traders?: {
        "54cb50c76803fa8b248b4571"?: {
            assort?:    MyTraderAssort;
            suits?:     ISuit;
        };
        "54cb57776803fa99248b456e"?: {
            assort?:    MyTraderAssort;
            suits?:     ISuit;
        };
        "58330581ace78e27b8b10cee"?: {
            assort?:    MyTraderAssort;
            suits?:     ISuit;
        };
        "5935c25fb3acc3127c3d8cd9"?: {
            assort?:    MyTraderAssort;
            suits?:     ISuit;
        };
        "5a7c2eca46aef81a7ca2145d"?: {
            assort?:    MyTraderAssort;
            suits?:     ISuit;
        };
        "5ac3b934156ae10c4430e83c"?: {
            assort?:    MyTraderAssort;
            suits?:     ISuit;
        };
        "5c0647fdd443bc2504c2d371"?: {
            assort?:    MyTraderAssort;
            suits?:     ISuit;
        };
    };
    atlasCompatibilities?: Record<string, string>;
    atlasConflicts?: Array<string>;
}

export interface IAtlasCustomItem {
    _id?: string;
    _name?: string;
    _parent?: string;
    _type?: string;
    _props?: Props;
    _proto?: string; 
}

export interface MyTraderAssort {
    items: Item[];
    barter_scheme: Record<string, IBarterScheme[][]>;
    loyal_level_items: Record<string, number>;
}