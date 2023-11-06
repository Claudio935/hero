import { PayloadAction } from '@reduxjs/toolkit'

export type Hero = {
    id: number;
    name: string;
    images: {
        xs: string;
        sm: string;
        md: string;
    },
    powerstats: {
        combat: number,
        durability: number,
        intelligence: number;
        power: number;
        speed: number;
        strength: number;

    }
}
export type Data = Hero[]

export interface StateHero {
    searchHero: string;
    selectHero: Data;
    quantifySelectHero: number;
}
export type HeroProps = {
    searchHero: string;

}
export type SelectHero = {
    selectHero: [];
}



export type ActionSearchHero = PayloadAction<HeroProps>
export type ActionSselectHero = PayloadAction<SelectHero> 