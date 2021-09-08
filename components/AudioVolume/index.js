import { Box } from '@material-ui/core'
import { useStyles } from './styles'

export default function AudioVolume () {
  const classes = useStyles()
  return (
    <Box 
      component='div' 
      className={ classes.root }>
        Audio Volume
    </Box>
  )
}
