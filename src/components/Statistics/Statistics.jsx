import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <div className={styles.containerInfo}>
            <p className={styles.info}>Good: { good}</p>
            <p className={styles.info}>Neutral: {neutral}</p>
            <p className={styles.info}>Bad: {bad}</p>
            <p className={styles.info}>Total: {total}</p>
            <p className={styles.info}>Positive Percentage: {positivePercentage} %</p >
        </div>
      );
}
 

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;