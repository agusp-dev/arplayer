import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },

  playIcon: {
    fontSize: '26px',
    color: '#375CA4',
    margin: '0 4px'
  },

  rewindIcon: {
    fontSize: '18px',
    color: '#375CA4'
  }

}))
