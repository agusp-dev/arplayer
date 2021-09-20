import { Box, Slider } from '@material-ui/core'
import { useStyles } from './styles'

export default function PlayerProgress ({ progressRef, currentValue, changeRange }) {
  const classes = useStyles()
  return (
    <Box 
      component='div'
      className={ classes.root }>
        <Slider 
          value={ currentValue } 
          aria-label='Audio'
          ref={ progressRef }
          onChange={ changeRange } />
    </Box>
  )
}
