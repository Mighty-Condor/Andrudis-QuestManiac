import { Props } from "@spt-aki/models/eft/common/tables/ICustomizationItem";

export interface IAtlasCustomizationItem {
    clone: string;
    enable?: boolean;
    customization: IAtlasCustomClothes;
    locales: {
        Name: string;
    };
}

export interface IAtlasCustomClothes {
    _id?: string;
    _name?: string;
    _parent?: string;
    _type?: string;
    _props?: Props;
    _proto?: string; 
}