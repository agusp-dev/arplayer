import { Box, IconButton } from '@material-ui/core'
import { useStyles } from './styles'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import FastForwardIcon from '@material-ui/icons/FastForward'
import FastRewindIcon from '@material-ui/icons/FastRewind'

export default function PlayerControls ({ handleToggle }) {
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
          <IconButton 
            aria-label='Play'
            size='small'
            onClick={ handleToggle }>
            <PlayCircleFilledIcon 
              className={ classes.playIcon } />
          </IconButton>
        </Box>
        <Box component='div'>
          <FastForwardIcon className={ classes.rewindIcon } />
        </Box>
    </Box>
  )
}
