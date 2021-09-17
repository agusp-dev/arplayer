import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    // width: '200px'
  },

  volumeIcon: {
    fontSize: '24px',
    color: '#375CA4'
  },

  slider: {
    width: '40px'
  }

}))
