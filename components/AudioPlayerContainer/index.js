import { Box } from '@material-ui/core'
import { useStyles } from './styles'
import AudioControls from '../AudioControls'
import AudioPlayer from '../AudioPlayer'
import AudioVolume from '../AudioVolume'

export default function AudioPlayerContainer () {
  const classes = useStyles()
  return (
    <Box 
      component='div'
      className={ classes.root }>
        <Box component='div'>
          <AudioControls />
        </Box>
        <Box 
          component='div' 
          mx={2}
          className={ classes.audioPlayer }>
          <AudioPlayer />
        </Box>
        <Box component='div'>
          <AudioVolume />
        </Box>
    </Box>
  )
}
