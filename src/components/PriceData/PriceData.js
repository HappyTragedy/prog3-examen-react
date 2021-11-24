import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import "./PriceData.css"

const PriceData = ({ datos }) => {

    return (
        <Card sx={{ minWidth: 275 }}>

            <CardContent>

                <Container sx={{ fontSize: 24 }} color="text.secondary">
                    {datos.title} Plan
                    <Divider />
                </Container>

                <Typography variant="h4" component="div">
                    The {datos.subheader} plan out there!
                </Typography>

                <Typography sx={{ mb: 3.5 }} color="text.secondary">
                    Get it now only for ${datos.price}/mo
                </Typography>

                <Typography variant="body2">
                    {datos.description}
                </Typography>

            </CardContent>

            <CardActions>
                <Button color="success" size="medium"> Buy </Button>
            </CardActions>

        </Card>
    )
}

export default PriceData
