import React from "react";
import { Container, Grid, Card, CardMedia, CardContent, Typography, CardActionArea, Box, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Header from "./header";
import useFetch from "../../hooks/useFetch";
import { StateHero, Hero } from "../../types";
import { AddSelecHero, deleteSelectHero } from "../../store";
import ModalCombat from "./modal";




const Home = () => {

    const { data, loading, error } = useFetch("http://homologacao3.azapfy.com.br/api/ps/metahumans")
    const state = useSelector((state: StateHero) => state)
    const dispatch = useDispatch()
    const handleSelectCard = (hero: Hero) => {
        if (state.quantifySelectHero === 2) {
            dispatch(deleteSelectHero())
        }
        dispatch(AddSelecHero([hero]))

    }

    if (error) {
        return (<Box className=" w-screen h-screen flex items-center justify-center">
            <Typography>Erro no banco</Typography>
        </Box>)
    }

    if (!loading) {
        return (
            <Container maxWidth={"lg"} className=" p-10" >
                <Header></Header>

                <Grid container spacing={2} mt={"12px"}>
                    {data?.filter((item) => item.name.includes(state.searchHero)).map((hero) => {
                        return (
                            <Grid item xs={12} md={3} key={hero.id} >
                                <Card className="hover:cursor-pointer hover:scale-110">
                                    <CardActionArea onClick={() => handleSelectCard(hero)}>
                                        <CardMedia
                                            component="img"
                                            height="244"
                                            image={hero.images.sm}
                                            alt="Card image"
                                        />
                                        <CardContent>
                                            <Typography variant="h5" color="text.secondary" textAlign={"center"}>
                                                {hero.name}
                                            </Typography>
                                        </CardContent>
                                    </ CardActionArea>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>

                <ModalCombat handleClose={() => { dispatch(deleteSelectHero()) }} />
            </Container>
        )
    } else {
        return (<Box className=" w-screen h-screen flex items-center justify-center">
            <CircularProgress />
        </Box>)
    }

};

export default Home