import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'

const useStyles = theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    }
})

class Dropdown extends React.Component {
    constructor() {
        super()
        this.state = {
            titleText: ''
        }
    }
    handleSelection = event => {
        const selectedValue = event.target.value
        this.setState({ titleText: selectedValue })
        this.props.handleSelection(selectedValue)
    }
    componentDidMount() {
        const { title } = this.props
        this.setState({ titleText: title })
    }
    render() {
        const { menuItems, classes } = this.props
        const menuComponents = menuItems.map(menuItem => <MenuItem key={menuItem} value={menuItem}>{menuItem}</MenuItem>)
        return (

            <FormControl className={classes.formControl} >
                <InputLabel id="outlined-label">{this.state.titleText}</InputLabel>
                <Select
                    labelId="outlined-label"
                    id={'select' + this.state.titleText}
                    onChange={this.handleSelection}
                    value={this.state.titleText}
                >
                    {menuComponents}
                </Select>
            </FormControl>
        )
    }

}

export default withStyles(useStyles)(Dropdown)



