import * as React from "react";
import Master from "../templates/Master";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import EntityCard from "../../cards/EntityCard";
import {VITALS} from "../../../utils/constants";
import {RULES} from "../../../game/rulesEngine";
import {CHARACTERS} from "../../../game/characterEngine";

const styles = theme => ({
    root: {
        //marginTop: theme.spacing(0),
    },
    card: {
        display: 'flex',
    },
    image: {
        width: '100%',
        height: '100%',
        marginBottom: '100%',
    },
});

class Game extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            entities: {
                pc: CHARACTERS.createNewPlayer('pc', 'Butcher of Blaviken', 'Witcher', 'butcher.png'),
            },
        };
    }

    componentDidMount() {
        this.setState((state) => ({
            entities: {
                ...state.entities,
                bandit1: CHARACTERS.createNewEnemy('bandit1', 'Bandit', 'Rogue', 'bandit1.png'),
            },
        }));
    }

    onEnemyClick = (enemyId) => () => {
        this.setState((state) => ({
            entities: {
                ...state.entities,
                [enemyId]: {
                    ...state.entities[enemyId],
                    health: Math.max(0, state.entities[enemyId].health - state.entities.pc.damage),
                },
            },
        }));
    };

    render() {
        const {classes} = this.props;

        return (
            <Master title="Butcher of Blaviken">
                <Grid container spacing={2} className={classes.root}>
                    <Grid item xs={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <EntityCard
                                    label={this.state.entities.pc.label}
                                    type={this.state.entities.pc.type}
                                    health={this.state.entities.pc.health}
                                    healthMax={this.state.entities.pc.maxHealth}
                                    mana={this.state.entities.pc.mana}
                                    manaMax={this.state.entities.pc.maxMana}
                                    image={this.state.entities.pc.image}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                {this.state.entities.bandit1 && <EntityCard
                                    onClick={this.onEnemyClick('bandit1')}
                                    label={this.state.entities.bandit1.label}
                                    type={this.state.entities.bandit1.type}
                                    health={this.state.entities.bandit1.health}
                                    healthMax={this.state.entities.bandit1.maxHealth}
                                    mana={this.state.entities.bandit1.mana}
                                    manaMax={this.state.entities.bandit1.maxMana}
                                    image={this.state.entities.bandit1.image}
                                />}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Master>
        );
    }
}

export default withStyles(styles)(Game);
