import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Button from '../components/button';
export default function Home() {
  return (
    <div style={{ height: '100vh' }}>
      <div
        className={styles.bg}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
          top: '50%',
          transform: 'translate(0, -50%)',
        }}
      >
        <Button path='./posts/first-post' />
      </div>
    </div>
  );
}
