import React from "react";
import { Container, TextField } from "@mui/material";
import { useDispatch } from 'react-redux'
import { updateSearch } from "../../../store";


const Header = () => {
    const dispatch = useDispatch()
    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        dispatch(updateSearch(event.target.value))
    }
    return (
        <Container maxWidth={"lg"}>
            <TextField type="input" fullWidth label="Pesquisar Herói" variant="outlined" onChange={(e) => handleChangeInput(e)} />
        </Container>
    )
};

export default Header;