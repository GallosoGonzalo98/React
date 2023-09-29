import {useState} from 'react'

export function TwitterFollowCard({ formatUserName, userName, name }){ 

  const [isFollowing,setIsFollowing ] = useState(false)
  //const isFollowing = state[0]
  //const setIsFollowing = state[1]

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing
  ? 'tw-followcard-button is-following'
  : 'tw-followcard-button'

  const handleClick = () => 
    setIsFollowing(!isFollowing)
    
  return (
        <article className="tw-followcard">
          <header className="tw-followcard-header">
            <img className="tw-followcard-avatar" 
            src={`https://unavatar.io/${userName}`} alt="Avatar midu dev" />
            <div className="tw-followcard-info">
              <strong> {name} </strong>
              <span className="tw-followcard-infoUserName">{formatUserName(userName)}</span>
            </div >
          </header>
          <aside>
            <button className={buttonClassName} onClick={handleClick}>
            {text}
            </button>
          </aside>
        </article>
    )
}