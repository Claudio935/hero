import React from "react";
import { Typography, Stack, Grid, Card, CardActionArea, CardMedia, CardContent } from "@mui/material";
import { Hero } from "../../../../types";

type CardCombatProps = {
    dataHero: Hero,
    combatColor: boolean,
    durabilityColor: boolean,
    inteligenceColor: boolean,
    powerColor: boolean,
    speedColor: boolean,
    strengthColor: boolean,
}

type WinnerProps = {
    winner: Hero,

}
type PropsCard = {
    hero: Hero,
    handleSelectCard: (hero: Hero) => void
}
export const HeroCard = ({ hero, handleSelectCard }: PropsCard) => {
    return (
        <Card className="hover:cursor-pointer hover:scale-110">
            <CardActionArea onClick={() => handleSelectCard(hero)}>
                <CardMedia
                    component="img"
                    height="154"
                    image={hero.images.md}
                    alt="Card image"
                />
                <CardContent>
                    <Typography variant="body1" color="text.primary" fontWeight={700} textAlign={"center"}>
                        {hero.name}
                    </Typography>
                </CardContent>
            </ CardActionArea>
        </Card>
    )
}
export const CardCombat = ({ dataHero, combatColor,
    durabilityColor,
    inteligenceColor,
    powerColor,
    speedColor,
    strengthColor, }: CardCombatProps) => {

    return (

        <Stack spacing={2} className="flex items-center justify-center flex-col" >
            <img

                className="h-40 w-40 rounded-full"
                src={dataHero.images.sm}
                alt="Card image"
            />
            <Stack direction={"column"} spacing={1} >

                <Typography variant="body2" color="text.secondary" textAlign={"center"} fontWeight={700}>
                    {dataHero.name}
                </Typography>
                <Stack direction={"row"}>
                    <Typography variant="body2" color="text.secondary" textAlign={"center"}>
                        Combat:
                    </Typography>
                    <Typography variant="body2" color={combatColor ? "blue" : "red"} textAlign={"center"} fontWeight={700} >
                        {dataHero.powerstats.combat}
                    </Typography>
                </Stack>
                <Stack direction={"row"}>
                    <Typography variant="body2" color="text.secondary" textAlign={"center"}>
                        durability:
                    </Typography>
                    <Typography variant="body2" color={durabilityColor ? "blue" : "red"} textAlign={"center"} fontWeight={700}>
                        {dataHero.powerstats.durability}
                    </Typography>
                </Stack>
                <Stack direction={"row"}>
                    <Typography variant="body2" color="text.secondary" textAlign={"center"}>
                        inteligence:
                    </Typography>
                    <Typography variant="body2" color={inteligenceColor ? "blue" : "red"} textAlign={"center"} fontWeight={700}>
                        {dataHero.powerstats.intelligence}
                    </Typography>
                </Stack>
                <Stack direction={"row"}>
                    <Typography variant="body2" color="text.secondary" textAlign={"center"}>
                        power:
                    </Typography>
                    <Typography variant="body2" textAlign={"center"} fontWeight={700} color={powerColor ? "blue" : "red"}>
                        {dataHero.powerstats.power}
                    </Typography>
                </Stack>
                <Stack direction={"row"}>
                    <Typography variant="body2" color="text.secondary" textAlign={"center"}>
                        speed:
                    </Typography>
                    <Typography variant="body2" color={speedColor ? "blue" : "red"} textAlign={"center"} fontWeight={700}>
                        {dataHero.powerstats.speed}
                    </Typography>
                </Stack>
                <Stack direction={"row"}>
                    <Typography variant="body2" color="text.secondary" textAlign={"center"}>
                        strength:
                    </Typography>
                    <Typography variant="body2" color={strengthColor ? "blue" : "red"} textAlign={"center"} fontWeight={700}>
                        {dataHero.powerstats.strength}
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    )
};
export const CardWinner = ({ winner }: WinnerProps) => {
    return (

        <Grid container justifyContent="center"
            alignItems="center"
            bgcolor={"white"}
            position={"absolute"}
            justifyItems={"center"}
            top={"50%"}
            left={"50%"}
            className="-translate-x-1/2 -translate-y-1/2 rounded-lg md:p-2  h-4/6  md:max-w-[45%]" >
            <Grid item xs={12}>
                <Typography textAlign={"center"} justifyContent={"center"} fontSize={"40px"} fontWeight={900} >Vencedor</Typography>
            </Grid>
            <Grid item xs={12} md={6} className="h-1/4 md:h-1/2 flex items-center justify-center">
                <img src={winner.images.md} className="h-[140px] w-[140px] rounded-full" alt="foto vencedor" />
            </Grid>
            <Grid item xs={12} md={6}>
                <Stack direction={"row"} width={"100%"}>
                    <Typography variant="body2" color="text.secondary" textAlign={"center"}>
                        Combat:
                    </Typography>
                    <Typography variant="body2" color="text.secondary" textAlign={"center"} fontWeight={700}>
                        {winner.powerstats.combat}
                    </Typography>
                </Stack>
                <Stack direction={"row"}>
                    <Typography variant="body2" color="text.secondary" textAlign={"center"}>
                        durability:
                    </Typography>
                    <Typography variant="body2" color="text.secondary" textAlign={"center"} fontWeight={700}>
                        {winner.powerstats.durability}
                    </Typography>
                </Stack>
                <Stack direction={"row"}>
                    <Typography variant="body2" color="text.secondary" textAlign={"center"}>
                        inteligence:
                    </Typography>
                    <Typography variant="body2" color="text.secondary" textAlign={"center"} fontWeight={700}>
                        {winner.powerstats.intelligence}
                    </Typography>
                </Stack>
                <Stack direction={"row"}>
                    <Typography variant="body2" color="text.secondary" textAlign={"center"}>
                        power:
                    </Typography>
                    <Typography variant="body2" color="text.secondary" textAlign={"center"} fontWeight={700}>
                        {winner.powerstats.power}
                    </Typography>
                </Stack>
                <Stack direction={"row"}>
                    <Typography variant="body2" color="text.secondary" textAlign={"center"}>
                        speed:
                    </Typography>
                    <Typography variant="body2" color="text.secondary" textAlign={"center"} fontWeight={700}>
                        {winner.powerstats.speed}
                    </Typography>
                </Stack>
                <Stack direction={"row"}>
                    <Typography variant="body2" color="text.secondary" textAlign={"center"}>
                        strength:
                    </Typography>
                    <Typography variant="body2" color="text.secondary" textAlign={"center"} fontWeight={700}>
                        {winner.powerstats.strength}
                    </Typography>
                </Stack>
            </Grid>
            <Grid item xs={12} display={"flex"} justifyContent={"center"} alignItems={"center"} fontSize={"34px"} >

                <Typography
                    color="text.primary"
                    textAlign={"center"}
                    className="text-9xl"
                    fontWeight={900}
                >
                    {`${winner.name} é o vencedor`}</Typography>
            </Grid>
        </Grid>

    )
}

