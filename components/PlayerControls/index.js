import { Box, IconButton } from '@material-ui/core'
import { useStyles } from './styles'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import FastForwardIcon from '@material-ui/icons/FastForward'
import FastRewindIcon from '@material-ui/icons/FastRewind'
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled'

export default function PlayerControls ({ 
  isPlaying, 
  handleToggle
}) {
  const classes = useStyles()
  return (
    <Box 
      component='div' 
      className={ classes.root }>
        <Box component='div'>
          <IconButton 
            size='small'
            aria-label='Rewind'>
            <FastRewindIcon 
              className={ classes.rewindIcon } />
          </IconButton>
        </Box>
        <Box 
          component='div'>
          <IconButton 
            size='small'
            aria-label='Play'
            onClick={ handleToggle }>
            {isPlaying ? (
              <PauseCircleFilledIcon 
                className={ classes.playIcon } /> 
            ) : (
              <PlayCircleFilledIcon 
                className={ classes.playIcon } /> 
            )}
          </IconButton>
        </Box>
        <Box component='div'>
          <IconButton 
            size='small'
            aria-label='Forward'>
            <FastForwardIcon 
              className={ classes.rewindIcon } />
          </IconButton>
        </Box>
    </Box>
  )
}
