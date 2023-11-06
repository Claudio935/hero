import React from "react";
import { Typography, Stack } from "@mui/material";
import { Hero } from "../../../../types";

type Props = {
    dataHero: Hero
}

const CardCombat = ({ dataHero }: Props) => {

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
                <Typography variant="body2" color="text.secondary" textAlign={"center"}>
                    Combat:{dataHero.powerstats.combat}
                </Typography>
                <Typography variant="body2" color="text.secondary" textAlign={"center"}>
                    durability:{dataHero.powerstats.durability}
                </Typography>
                <Typography variant="body2" color="text.secondary" textAlign={"center"}>
                    inteligence:{dataHero.powerstats.intelligence}
                </Typography>
                <Typography variant="body2" color="text.secondary" textAlign={"center"}>
                    power:{dataHero.powerstats.power}
                </Typography>
                <Typography variant="body2" color="text.secondary" textAlign={"center"}>
                    speed:{dataHero.powerstats.speed}
                </Typography>
                <Typography variant="body2" color="text.secondary" textAlign={"center"}>
                    strength:{dataHero.powerstats.strength}
                </Typography>
            </Stack>

        </Stack>



    )
};

export default CardCombat;