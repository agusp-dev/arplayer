import { useEffect, useState, useRef } from 'react'
import { Box } from '@material-ui/core'
import { useStyles } from './styles'
import PlayerControls from '../PlayerControls'
import PlayerProgress from '../PlayerProgress'
import PlayerVolume from '../PlayerVolume'

export default function AudioPlayer () {
  const classes = useStyles()

  const AUDIO_URL = 'https://cdn.simplecast.com/audio/2db45ca2-a004-4843-b17e-79ea45f25093/episodes/17e9092f-c8e3-4cf5-9fd5-c8a29a8471cd/audio/261915f9-3469-4918-bcc2-504446d0f9a5/default_tc.mp3'

  const [isPlaying, setIsPlaying] = useState(false)
  const [progressValue, setProgressValue] = useState(40)

  const audioPlayer = useRef()   // reference our audio component
  const progressBar = useRef()   // reference our progress bar

  // const changeRange = () => {
  //   audioPlayer.current.currentTime = progressBar.current.value
  //   changePlayerCurrentTime()
  // }

  // const changePlayerCurrentTime = () => {
  //   progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
  //   setCurrentTime(progressBar.current.value)
  // }

  const togglePlayOrPause = () => {
    const prevValue = isPlaying
    setIsPlaying(!prevValue)
    if (!prevValue) {
      console.log('togglePlayOrPause play')
      audioPlayer.current.play()
      // animationRef.current = requestAnimationFrame(whilePlaying)
    } else {
      console.log('togglePlayOrPause pause')
      audioPlayer.current.pause()
      // cancelAnimationFrame(animationRef.current);
    }
  }

  return (
    <Box 
      component='div'
      className={ classes.root }>
        
        <audio
          ref={ audioPlayer }
          src={ AUDIO_URL }
          preload='metadata'
        ></audio>

        <Box component='div'>
          <PlayerControls
            isPlaying={ isPlaying } 
            handleToggle={ togglePlayOrPause } />
        </Box>
        <Box 
          component='div' 
          mx={2}
          className={ classes.progress }>
          <PlayerProgress 
            progressRef={ progressBar }
            currentValue={ progressValue }
            changeRange={ setProgressValue }/>
        </Box>
        <Box component='div'>
          <PlayerVolume />
        </Box>
    </Box>
  )
}
