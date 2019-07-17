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
        /*this.setState((state) => ({
            entities: {
                ...state.entities,
                pc: {
                    ...state.entities.pc,
                    vitals: {
                        ...state.entities.pc.vitals,
                        [VITALS.HEALTH]: 10,
                    }
                }
            }
        }));*/

        this.setState((state) => ({
            entities: {
                ...state.entities,
                bandit1: CHARACTERS.createNewEnemy('bandit1', 'Bandit', 'Rogue', 'bandit1.png'),
            },
        }));
    }

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
                                    health={this.state.entities.pc.vitals[VITALS.HEALTH]}
                                    healthMax={RULES.maxHealth(this.state.entities.pc)}
                                    mana={this.state.entities.pc.vitals[VITALS.MANA]}
                                    manaMax={RULES.maxMana(this.state.entities.pc)}
                                    image={this.state.entities.pc.image}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                {this.state.entities.bandit1 && <EntityCard
                                    label={this.state.entities.bandit1.label}
                                    type={this.state.entities.bandit1.type}
                                    health={this.state.entities.bandit1.vitals[VITALS.HEALTH]}
                                    healthMax={RULES.maxHealth(this.state.entities.bandit1)}
                                    mana={this.state.entities.bandit1.vitals[VITALS.MANA]}
                                    manaMax={RULES.maxMana(this.state.entities.bandit1)}
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
