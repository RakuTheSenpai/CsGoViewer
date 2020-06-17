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
            slelectedText: ''
        }
    }
    handleSelection = event => {
        const selectedValue = event.target.value
        this.setState({ slelectedText: selectedValue })
        this.props.handleSelection(selectedValue)
    }
    componentDidMount() {
        const { title, menuItems } = this.props
        this.setState({ slelectedText: title })
    }
    render() {
        const { menuItems, classes } = this.props
        const menuComponents = menuItems.map(menuItem => <MenuItem key={menuItem} value={menuItem}>{menuItem}</MenuItem>)
        return (

            <FormControl className={classes.formControl} >
                <InputLabel id="outlined-label">{this.props.title}</InputLabel>
                <Select
                    labelId="outlined-label"
                    id={'select' + this.props.title}
                    onChange={this.handleSelection}
                    defaultValue={menuItems[0]}
                >
                    {menuComponents}
                </Select>
            </FormControl>
        )
    }

}

export default withStyles(useStyles)(Dropdown)



