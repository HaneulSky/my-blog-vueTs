import type {IAbilities} from "./ability.model";
import type {IForm} from "./form.model";
import type {IGameIndices} from "./game-indices.model";
import type {IHeldItems} from "./held-items.model";

export interface IPokemonData {
    id: number;
    name: string;
    baseExperience: number;
    height: number;
    isDefault: boolean;
    order: number;
    weight: number;
    abilities?: IAbilities[];
    forms?: IForm[];
    gameIndices?: IGameIndices[];
    heldItems?: IHeldItems[];
    locationAreaEncounters?: string;
}
