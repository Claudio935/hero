import React from "react";
import { Container, Grid, Typography, Box, CircularProgress, Pagination } from "@mui/material";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Header from "./header";
import useFetch from "../../hooks/useFetch";
import { StateHero, Hero } from "../../types";
import { AddSelectHero, deleteSelectHero } from "../../store";
import ModalCombat from "./modal";
import usePagination from "../../hooks/usePagination";
import { HeroCard } from "./modal/card";






const Home = () => {


    const { selectHero, quantifySelectHero, searchHero } = useSelector((state: StateHero) => ({ selectHero: state.selectHero, quantifySelectHero: state.quantifySelectHero, searchHero: state.searchHero }), shallowEqual)

    const dispatch = useDispatch()

    const { data, loading, error } = useFetch("http://homologacao3.azapfy.com.br/api/ps/metahumans")


    const { currentData, currentPage, maxPage, jump } = usePagination(data.filter((item) => item.name.includes(searchHero)), 12)


    const handleSelectCard = (hero: Hero) => {
        if (selectHero.find((heroTest) => heroTest.id === hero.id)) {
            window.alert("Personagem já adicionado")
            return
        }
        if (quantifySelectHero === 2) {
            dispatch(deleteSelectHero())
        }
        dispatch(AddSelectHero([hero]))
    }

    const handleChangePagination = (page: number) => {
        jump(page);
    };

    if (error) {
        return (<Box className=" w-screen h-screen flex items-center justify-center">
            <Typography>Erro no banco</Typography>
        </Box>)
    }

    if (!loading) {
        return (
            <Container maxWidth={"lg"} className=" p-10" >
                <Grid container rowSpacing={4} columnSpacing={2}>
                    <Grid item xs={12}>
                        <Header></Header>
                    </Grid>
                    {currentData()?.map((hero) => {
                        return (
                            <Grid item xs={12} md={2} key={hero.id} >
                                <HeroCard hero={hero} handleSelectCard={() => handleSelectCard(hero)} />
                            </Grid>
                        )
                    })}
                    <Grid item xs={12} alignItems={"center"} display={"flex"} justifyContent={"center"}>
                        <Pagination count={maxPage} page={currentPage} variant="outlined" onChange={(_, page) => handleChangePagination(page)} />
                    </Grid>
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