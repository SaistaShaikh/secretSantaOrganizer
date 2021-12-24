import styles from './Button.module.css';
import Link from 'next/link';
export default function Button(props) {
  return (
    <div className={styles.bg}>
      <div className={styles.centerer}>
        <Link href={props.path}>
          <a className={styles.button}>Ho! Ho! Ho!</a>
        </Link>
      </div>
    </div>
  );
}
