import { 
  Box, 
  Slider 
} from '@material-ui/core'
import { useStyles } from './styles'

export default function PlayerProgress ({ 
  progressRef, 
  currentTime, 
  audioDuration, 
  onChangeCurrentProgress 
}) {
  const classes = useStyles()

  const calcCurrentTime = cSeconds => (cSeconds * 100 / audioDuration)

  const calcCurrentProgress = newProgress => (newProgress * audioDuration / 100)

  return (
    <Box 
      component='div'
      className={ classes.root }>
        <Slider 
          value={ calcCurrentTime(currentTime) } 
          aria-label='Audio'
          ref={ progressRef }
          onChange={ (event, newProgress) => onChangeCurrentProgress(calcCurrentProgress(newProgress)) } 
        />
    </Box>
  )
}
