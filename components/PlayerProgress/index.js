import { Box, Slider, Typography } from '@material-ui/core'
import { useStyles } from './styles'

export default function PlayerProgress ({ 
  progressRef, 
  currentTime, 
  audioDuration, 
  changeRange 
}) {
  const classes = useStyles()

  const calcTime = seconds => {
    const min = Math.floor(seconds / 60)
    const rMin = min < 10 ? `0${min}` : `${min}`
    const sec = Math.floor(seconds % 60)
    const rSec = sec < 10 ? `0${sec}` : `${sec}`
    return `${rMin}:${rSec}`
  }

  const calcCurrentTime = cSeconds => (cSeconds * 100 / audioDuration)

  return (
    <Box 
      component='div'
      className={ classes.root }>
        <Slider 
          value={ calcCurrentTime(currentTime) } 
          aria-label='Audio'
          ref={ progressRef }
          onChange={ changeRange } />
        
        <Box 
          component='div' 
          ml={2}
          className={ classes.timeContainer }>
            <Typography 
              component='span'
              className={ classes.time }>
                {currentTime && currentTime > 0 ? (
                  calcTime(currentTime)
                ) : '00:00'}
            </Typography>
            <Box 
              component='span'
              mx={0.5}
              className={ classes.time }>/</Box>
            <Typography 
              component='p'
              className={ classes.time }>
                {audioDuration && audioDuration > 0 ? (
                  calcTime(audioDuration)
                ) : '00:00'}
            </Typography>
        </Box>
    </Box>
  )
}
