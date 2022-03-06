import * as React from 'react';
import { CardHeader } from "@mui/material";
import { Grid } from "@mui/material";
import { CardActions } from "@mui/material";
import { Button } from "@mui/material";
import { CardMedia } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { Card } from "@mui/material";
//import { Box } from '@mui/system';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { blue } from '@mui/material/colors';

function Kortti(props) {
    return (
      <Grid container spacing={ 4 } sx={ { marginTop:1 } }>
  
          {
            props.tiedot.map(tieto => { 
              return (
                <Grid item key={ tieto.id }>
                    <Card sx={{ maxWidth: 300, backgroundColor: 'lightcyan', padding: 2, borderColor: 'primary.main' }} variant="outlined"> 
                    <CardActions>
                        <Button startIcon={ <AccountCircleRoundedIcon /> }>NÄYTÄ</Button>
                        <Button startIcon={ <DeleteRoundedIcon /> } color="secondary">POISTA</Button>
                    </CardActions>
                    <CardHeader 
                        title={ tieto.otsikko }
                        subheader={ tieto.paiva} /> 
                    <CardMedia component='img' height='200' width='200' image={ tieto.picture } alt={ tieto.kuvaus } />
    
                    </Card>
                </Grid>
            )
            })
          }
  
      </Grid>
    );
  }
  
  export default Kortti;