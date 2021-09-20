import { useEffect, useState, useRef } from 'react'
import { Box } from '@material-ui/core'
import { useStyles } from './styles'
import PlayerControls from '../PlayerControls'
import PlayerProgress from '../PlayerProgress'
import PlayerVolume from '../PlayerVolume'
import PlayerTime from '../PlayerTime'

export default function AudioPlayer () {
  const classes = useStyles()

  const AUDIO_URL = 'https://cdn.simplecast.com/audio/2db45ca2-a004-4843-b17e-79ea45f25093/episodes/17e9092f-c8e3-4cf5-9fd5-c8a29a8471cd/audio/261915f9-3469-4918-bcc2-504446d0f9a5/default_tc.mp3'

  const [isPlaying, setIsPlaying] = useState(false)

  const [currentTime, setCurrentTime] = useState(0) // audio current time
  const [duration, setDuration] = useState(0) // audio duration

  const audioPlayer = useRef()   // reference our audio component
  const progressBar = useRef()   // reference our progress bar
  const animationRef = useRef()  // reference the animation

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration)
    setDuration(seconds)
    progressBar.current.max = seconds

  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState])

  const onChangePlayerProgress = newValue => audioPlayer.current.currentTime = newValue

  const togglePlayOrPause = () => {
    const prevValue = isPlaying
    setIsPlaying(!prevValue)
    if (!prevValue) {
      audioPlayer.current.play()
      animationRef.current = requestAnimationFrame(whilePlaying)
    } else {
      audioPlayer.current.pause()
      cancelAnimationFrame(animationRef.current)
    }
  }

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime
    setCurrentTime(progressBar.current.value)
    animationRef.current = requestAnimationFrame(whilePlaying)
  }

  // const handleForward = newValue => {
  //   onChangePlayerProgress(newValue)
  // }

  // const handleRewind = newValue => {
  //   onChangePlayerProgress(newValue)
  // }

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
          ml={2}
          className={ classes.progress }>
          <PlayerProgress 
            progressRef={ progressBar }
            currentTime={ currentTime }
            audioDuration={ duration }
            onChangeCurrentProgress={ onChangePlayerProgress }
          />
        </Box>
        <Box 
          component='div' 
          mr={2}>
          <PlayerTime 
            currentTime={ currentTime }
            audioDuration={ duration }/>
        </Box>
        <Box component='div'>
          <PlayerVolume />
        </Box>
    </Box>
  )
}
