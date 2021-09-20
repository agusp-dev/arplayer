import { 
  Box, 
  Typography 
} from '@material-ui/core'
import { useStyles } from './styles'
import { getStringAudioTime } from '../../utils/calc'

export default function PlayerTime ({ currentTime, audioDuration }) {
  const classes = useStyles()
  return (
    <Box 
      component='div' 
      ml={2}
      className={ classes.timeContainer }>
        <Typography 
          component='span'
          className={ classes.time }>
            {currentTime && currentTime > 0 ? (
              getStringAudioTime(currentTime)
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
              getStringAudioTime(audioDuration)
            ) : '00:00'}
        </Typography>
    </Box>
  )
}
