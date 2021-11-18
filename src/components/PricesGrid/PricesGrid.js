import { React, useState, useEffect } from 'react'
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Loader from "../Loader/Loader"
import Plan from "../Plan/Plan"
import axios from "axios"

const PricesGrid = () => {

    const [precios, setPrecios] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getPrecios = async () => {
            setLoading(true)

            try {
                const preciosFromAPI = await axios.get(`https://prog-3-leads-api-rest.vercel.app/prices`);
                console.log(preciosFromAPI)
                setPrecios(preciosFromAPI.data)
                setLoading(false)

            } catch (error) {
                console.log('Error del catch:', error)
                setLoading(false)
            }

        }

        getPrecios();

    }, [])

    return (
        <>
            {loading && <Loader />}
            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {!loading && precios.map((precio) => (
                        <Plan tier={precio} />
                    )
                    )}
                </Grid>
            </Container>
        </>
    )
}


export default PricesGrid
