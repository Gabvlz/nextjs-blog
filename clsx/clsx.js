import styles from './alert.module.css';
import PropTypes from 'prop-types';
import { clsx } from 'clsx';

export default function Alert({ children, type }) {
  return (
    <div
      className={clsx({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
      })}
    >
      {children}
    </div>
  );
}

Alert.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
};