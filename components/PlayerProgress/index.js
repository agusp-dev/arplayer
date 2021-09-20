import { Box, Slider, Typography } from '@material-ui/core'
import { useStyles } from './styles'

export default function PlayerProgress ({ progressRef, currentValue, audioDuration, changeRange }) {
  const classes = useStyles()

  const calculateTime = seconds => {
    const min = Math.floor(seconds / 60);
    const rMin = min < 10 ? `0${min}` : `${min}`;
    const sec = Math.floor(seconds % 60);
    const rSec = sec < 10 ? `0${sec}` : `${sec}`;
    return `${rMin}:${rSec}`;
  }

  return (
    <Box 
      component='div'
      className={ classes.root }>
        <Slider 
          value={ currentValue } 
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
                00:00
            </Typography>
            <Box 
              component='span'
              mx={0.5}
              className={ classes.time }>/</Box>
            <Typography 
              component='p'
              className={ classes.time }>
                {audioDuration && audioDuration > 0 ? (
                  calculateTime(audioDuration)
                ) : '00:00'}
            </Typography>
        </Box>
    </Box>
  )
}
