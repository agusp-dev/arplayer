import { 
  Box, 
  Slider 
} from '@material-ui/core'
import { useStyles } from './styles'
import { 
  getAudioCurrentSeconds,
  getAudioProgressPercent 
} from '../../utils/calc'

export default function PlayerProgress ({ 
  progressRef, 
  currentTime, 
  audioDuration, 
  onChangeCurrentProgress 
}) {
  const classes = useStyles()

  return (
    <Box 
      component='div'
      className={ classes.root }>
        <Slider 
          value={ 
            getAudioProgressPercent(audioDuration, currentTime) 
          } 
          aria-label='Audio'
          ref={ progressRef }
          onChange={ 
            (event, newProgress) => 
              onChangeCurrentProgress(
                getAudioCurrentSeconds(audioDuration, newProgress)
              ) 
          } 
        />
    </Box>
  )
}
