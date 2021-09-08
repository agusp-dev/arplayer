import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
  root: {
    width: '700px',
    padding: '24px 12px',
    backgroundColor: '#FFF',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center'
  },

  audioPlayer: {
    flexGrow: 1
  }

}))
