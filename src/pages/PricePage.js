import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PriceData from "../components/PriceData/PriceData";
import Loader from "../components/Loader/Loader"
import Container from "@mui/material/Container";
import axios from "axios"

const PricePage = () => {
  const { id } = useParams();

  const [precios, setPrecios] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getPrecios = async () => {
      setLoading(true)

      try {
        const preciosFromAPI = await axios.get(`https://prog-3-leads-api-rest.vercel.app/price/${id}`);
        console.log(preciosFromAPI)
        setPrecios(preciosFromAPI.data)
        setLoading(false)

      } catch (error) {
        console.log('Error del catch:', error)
        setLoading(false)
      }

    }

    getPrecios();

  }, [id])


  return (
    <>
      {loading && <Loader />}
      <Container maxWidth="md" component="main">
        {!loading && <PriceData datos={precios} />}
      </Container>
    </>
  );
};

export default PricePage;
