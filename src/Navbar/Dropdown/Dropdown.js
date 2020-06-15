import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'

function Dropdown(props) {
    const { title, menuItems } = props
    const menuComponents = menuItems.map(menuItem => <MenuItem value={menuItem}>{menuItem}</MenuItem>)
    const useStyles = makeStyles((theme) => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        }
    }))

    const classes = useStyles()

    return (
        <FormControl className={classes.formControl}>
            <InputLabel id="outlined-label">{title}</InputLabel>
            <Select
                labelId="outlined-label"
                id={'select' + title}
            >
                {menuComponents}
            </Select>
        </FormControl>
    )
}

export default Dropdown