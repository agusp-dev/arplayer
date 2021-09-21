/**
 * Receive total audio seconds duration
 * and return string format audio time (03:25).
 */
export const getStringAudioTime = seconds => {
  const min = Math.floor(seconds / 60)
  const rMin = min < 10 ? `0${min}` : `${min}`
  const sec = Math.floor(seconds % 60)
  const rSec = sec < 10 ? `0${sec}` : `${sec}`
  return `${rMin}:${rSec}`
}

/**
 * Receive total audio seconds duration and current seconds
 * and return audio progress percent (78%)
 */
export const getAudioProgressPercent = 
  (audioDuration, currentTime) => (currentTime * 100 / audioDuration)

/**
 * Receive total audio seconds duration and current progress percent
 * and return audio current seconds.
 */
export const getAudioCurrentSeconds = 
  (audioDuration, currenPercent) => (currenPercent * audioDuration / 100)
