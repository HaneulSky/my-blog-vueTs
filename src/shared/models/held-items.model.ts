import type {IVersion} from "./game-indices.model";

export interface IItem {
    name: string;
    url: string;
}

export interface IVersionDetails {
    rarity?: number;
    version?: IVersion;
}

export interface IHeldItems {
    item?: IItem;
    versionDetails?: IVersionDetails[];
}
