import { 
	useEffect, 
	useState 
} from 'react'
import { 
  Box,
  Slider } from '@material-ui/core'
import { useStyles } from './styles'
import VolumeMuteIcon from '@material-ui/icons/VolumeMute'
import { 
	getAudioVolumePercent,
	getAudioVolumeValue
} from '../../utils/calc'

export default function PlayerVolume ({ 
	currentVolume,
	handleChangeVolume 
}) {
  const classes = useStyles()
  const [volume, setVolume] = useState(0)

	useEffect(() => {
		if (!currentVolume) return
		const volumePercent = getAudioVolumePercent(currentVolume)
		setVolume(volumePercent)
	}, [currentVolume])

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
						max={100}
            onChange={ 
							(event, newValue) => 
								handleChangeVolume(getAudioVolumeValue(newValue))
						} 
            aria-labelledby='continuous-slider'
            className={ classes.slider } />
        </Box>
    </Box>
  )
}
