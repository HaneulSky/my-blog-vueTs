export interface IAbility {
    name: string;
    url: string;
}

export interface IAbilities {
    isHidden: boolean;
    slot: number;
    ability: IAbility;
}
