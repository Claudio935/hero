import React, { useEffect, useState } from "react";
import { Grid, Typography, Modal, Stack, Paper } from "@mui/material";
import { useSelector } from "react-redux";
import { Hero, StateHero } from "../../../types";
import CardCombat from "./card";


type Props = {
    handleClose: () => void
}



const ModalCombat = ({ handleClose }: Props) => {
    const [winner, setWinner] = useState<Hero | null | "Empate">(null)
    const state = useSelector((state: StateHero) => state)
    const { selectHero } = state





    useEffect(() => {
        setWinner(null)
        const interval = setInterval(() => {
            if (state?.selectHero?.length === 2) {

                const heroOneArrayValue = Object.values(selectHero[0].powerstats)

                const heroOneSome = heroOneArrayValue.reduce((valueAtual, accumulator) => valueAtual + accumulator, 0)
                const heroTwoArrayValue = Object.values(selectHero[1].powerstats)

                const herotwoSome = heroTwoArrayValue.reduce((valueAtual, accumulator) => valueAtual + accumulator, 0)

                const heroWinner = heroOneSome - herotwoSome

                setWinner(heroWinner > 0 ? state?.selectHero[0] : heroWinner < 0 ? state?.selectHero[0] : "Empate")

            } else {
                return
            }

        }, 10000);
        return () => clearInterval(interval);
    }, [state?.selectHero])

    if (winner === null) {
        return (
            <Modal
                open={state.quantifySelectHero === 2}
                onClose={handleClose}
            >
                <>
                    {state?.selectHero?.length === 2 &&
                        <Paper className="-translate-x-1/2 -translate-y-1/2  overflow-scroll md:overflow-hidden h-4/5 absolute top-1/2 left-1/2 p-[15px]" >
                            <Grid container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                                rowSpacing={2}
                            >
                                <Grid item xs={12}>
                                    <Typography variant="h3" color="text.primary" textAlign={"center"}>Batalha</Typography>
                                </Grid>
                                <Grid item xs={12} md={5} >
                                    <CardCombat dataHero={state.selectHero[0]} />

                                </Grid>
                                <Grid item xs={12} md={2} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                    <Stack direction="column" spacing={2}>
                                        <Typography variant="h3" color="text.primary" textAlign={"center"}>X</Typography>
                                    </Stack>

                                </Grid>
                                <Grid item xs={12} md={5}>
                                    <CardCombat dataHero={state.selectHero[1]} />
                                </Grid>
                            </Grid>
                        </Paper>
                    }
                </>
            </Modal>
        )
    } else if (winner !== "Empate") {
        return (
            <Modal
                open={state.quantifySelectHero === 2}
                onClose={handleClose}

            >
                <>
                    {state?.selectHero?.length === 2 &&
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
                                <Typography variant="body2" color="text.secondary" textAlign={"center"}>
                                    Combat:{winner.powerstats.combat}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" textAlign={"center"}>
                                    durability:{winner.powerstats.durability}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" textAlign={"center"}>
                                    inteligence:{winner.powerstats.intelligence}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" textAlign={"center"}>
                                    power:{winner.powerstats.power}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" textAlign={"center"}>
                                    speed:{winner.powerstats.speed}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" textAlign={"center"}>
                                    strength:{winner.powerstats.strength}
                                </Typography>
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
                    }
                </>
            </Modal>
        )
    }
    else {
        return (
            <Modal
                open={state.quantifySelectHero === 2}
                onClose={handleClose}
            >
                <>
                    {state?.selectHero?.length === 2 &&
                        <Grid container spacing={2} justifyContent="center"
                            alignItems="center"
                            maxWidth={"40%"}
                            maxHeight={"70%"}
                            bgcolor={"white"}
                            padding={"45px"}
                            position={"absolute"}
                            top={"50%"}
                            left={"50%"}
                            className="-translate-x-1/2 -translate-y-1/2 rounded-lg" >
                            <Grid item xs={12}>
                                <Typography variant="h3" color="text.primary" textAlign={"center"}>{winner}</Typography>
                            </Grid>
                        </Grid>
                    }
                </>
            </Modal>
        )
    }
};

export default ModalCombat;