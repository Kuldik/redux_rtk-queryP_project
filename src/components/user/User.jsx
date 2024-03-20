import { useSelector } from 'react-redux'
import { useActions } from '../../hooks/useActions'
import styles from './User.module.css'

export default function User() {
  const {isLoading, error, user} = useSelector(state => state.user)

  const {getUserById} = useActions()

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => getUserById(1)}>
        Get User
      </button>
      {isLoading 
        ? <div className={styles.loading}>Loading...</div> 
        : error 
          ? <div>{error}</div> 
          : user.name  
            ?(
                <div>
                  <h1 className={styles.title}>User: {user.name}</h1>
                </div>
              )
            : <h1>USER NOT FOUND</h1>
      }
    </div>
  );
}