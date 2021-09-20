import { useState } from 'react'
import { 
  Box,
  Slider } from '@material-ui/core'
import { useStyles } from './styles'
import VolumeMuteIcon from '@material-ui/icons/VolumeMute'

export default function PlayerVolume () {
  const classes = useStyles()

  const [volume, setVolume] = useState(30)

  const handleChangeVolume = (event, newValue) => {
    setVolume(newValue);
  }

  return (
    <Box 
      component='div' 
      className={ classes.root }>
        <Box component='div'>
          <VolumeMuteIcon className={ classes.volumeIcon }/>
        </Box>
        <Box 
          component='div'>
          <Slider 
            value={ volume } 
            onChange={ handleChangeVolume } 
            aria-labelledby='continuous-slider'
            className={ classes.slider } />
        </Box>

    </Box>
  )
}
