import * as React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import withStyles from "@material-ui/core/styles/withStyles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
    card: {
        display: 'flex',
    },
    image: {
        width: '100%',
        height: '100%',
        marginBottom: '100%',
    },
});

const EntityCard = (props) => {
    const {classes} = props;

    return (
        <Card className={classes.card}>
            <Grid item xs={3}>
                <CardMedia
                    className={classes.image}
                    image={props.image}
                />
            </Grid>
            <Grid item xs={9}>
                <CardContent className={classes.content}>
                    <Typography component="h6" variant="h6">
                        {props.label}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {props.type}
                    </Typography>
                    <Grid container direction="row" justify="center">
                        <Grid item xs={12}>
                            <Typography>Health:</Typography>
                            <LinearProgress variant="determinate" value={props.health * 100 / props.healthMax}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>Mana:</Typography>
                            <LinearProgress variant="determinate" value={props.mana * 100 / props.manaMax}/>
                        </Grid>
                    </Grid>
                </CardContent>
            </Grid>
        </Card>
    );
};

EntityCard.displayName = 'EntityCard';
export default withStyles(styles)(EntityCard);
