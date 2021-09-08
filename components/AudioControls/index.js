import { Box } from '@material-ui/core'
import { useStyles } from './styles'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import FastForwardIcon from '@material-ui/icons/FastForward'
import FastRewindIcon from '@material-ui/icons/FastRewind'

export default function AudioControls () {
  const classes = useStyles()
  return (
    <Box 
      component='div' 
      className={ classes.root }>
        <Box component='div'>
          <FastRewindIcon className={ classes.rewindIcon } />
        </Box>
        <Box 
          component='div'>
          <PlayCircleFilledIcon className={ classes.playIcon } />
        </Box>
        <Box component='div'>
          <FastForwardIcon className={ classes.rewindIcon } />
        </Box>
    </Box>
  )
}
