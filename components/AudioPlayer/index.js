import { Box } from '@material-ui/core'
import { useStyles } from './styles'

export default function AudioPlayer () {
  const classes = useStyles()
  return (
    <Box 
      component='div'
      className={ classes.root }>
        Audio Player
    </Box>
  )
}
