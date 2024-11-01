import React from 'react'
import weightIcon from '../../assets/weight.svg'
import moreIcon from '../../assets/more-grey.svg'
import styles from '../Card/CardStyle.module.css'

function Card({ cardTitle, progressPercentage }) {
  return (
    <div className={styles.card}>
        <p className={styles.cardTitle}>
            {cardTitle}
        </p>

        <div className="card-footer">
            <div className={styles.progressInfo}>
                <div className={styles.percentage}>
                <img src={weightIcon} className="weight icon" />
                <p className='percentage-text'>{progressPercentage}</p>
                </div>

                <img src={moreIcon} className="more icon" />
            </div>
        </div>
    
    </div>

  )
}

export default Card