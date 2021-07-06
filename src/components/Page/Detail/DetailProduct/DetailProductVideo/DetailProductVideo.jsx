import React, {useState} from 'react'
import classes from './DetailProduckVideo.module.scss'

const DetailProductVideo = ({videoBlock}) => {
  const [video, setVideo] = useState(false)
  const elVideo = document.querySelector('[data-type="video"]')
  const videoTrigger = () => {
    setVideo(!video)
    !video ?
      elVideo.play() :
      elVideo.pause()
  }

  const videoEnded = () => {
    elVideo.currentTime = 0
    setVideo(!video)
    elVideo.pause()
  }

  return (
    <section className={classes.feedbackContainer}>
      <h3 className={classes.title}>{videoBlock.title}</h3>
      <p className={classes.description}>{videoBlock.description}</p>
      <div
        className={classes.videoContainer}
        onClick={videoTrigger}
      >
        {
          !video ?
            <div className={classes.videoMask}/>
            :
            ''
        }
        <video className={classes.video} data-type='video' onEnded={videoEnded}>
          <source src="/assets/img/detail/video/1.mp4"/>
        </video>
        <button
          className={
            !video ?
              classes.videoPlay :
              classes.videoPause
          }
        >
          {
            !video ?
              <svg className={classes.play} width="25" height="28" viewBox="0 0 25 28"
                   xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24.0586 14L0.0585938 27.8564L0.0585938 0.143594L24.0586 14Z"/>
              </svg>
              :
              <svg width="25" height="28" viewBox="-45 0 327 327" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m158 0h71c4.417969 0 8 3.582031 8 8v311c0 4.417969-3.582031 8-8 8h-71c-4.417969 0-8-3.582031-8-8v-311c0-4.417969 3.582031-8 8-8zm0 0"
                />
                <path
                  d="m8 0h71c4.417969 0 8 3.582031 8 8v311c0 4.417969-3.582031 8-8 8h-71c-4.417969 0-8-3.582031-8-8v-311c0-4.417969 3.582031-8 8-8zm0 0"
                />
              </svg>
          }
        </button>
      </div>
    </section>
  )
}

export default DetailProductVideo
