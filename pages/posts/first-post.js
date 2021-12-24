import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Button from '../../components/button';
export default function FirstPost() {
  const [email, setEmail] = useState('');
  const [emailList, setEmailList] = useState([]);
  const [secretSanta, setSecretSanta] = useState([]);
  const [count, setCount] = useState(0);

  function addEmail() {
    setEmailList([...emailList, email]);
    setSecretSanta([...secretSanta, email]);
    setCount((prevCount) => prevCount + 1);
  }

  for (var a = [], i = 0; i < count; ++i) {
    a[i] = i;
  }

  function shuffle(array) {
    var tmp,
      current,
      top = array.length;
    if (top)
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        if (array[top] != current) {
          tmp = array[current];
          array[current] = array[top];
          array[top] = tmp;
        } else {
          top++;
        }
      }
    return array;
  }

  a = shuffle(a);

  for (var i = 0; i < count; ++i) {
    secretSanta[a[i]] = emailList[i];
  }

  return (
    <>
      <Head>
        <link
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
          rel='stylesheet'
        />
      </Head>
      <div style={{ height: '100vh' }}>
        <div
          style={{
            position: 'relative',
            top: '50%',
            transform: 'translate(0, -50%)',
            width: '100%',
          }}
        >
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '2rem',
            }}
          >
            <input
              type='email'
              onChange={(e) => setEmail(e.target.value)}
              style={{
                height: '3rem',
                width: '40%',
                fontSize: '1.3rem',
                color: '#555555',
                outline: 'none',
              }}
              placeholder='Enter an email and click on +'
            />
            <button
              value='add'
              type='button'
              onClick={() => {
                addEmail();
              }}
              style={{
                height: '3rem',
                width: '5%',
                backgroundColor: '#a61715',
                color: 'white',
                border: 'none',
                outline: 'none',
                margin: '0',
                padding: '0',
              }}
            >
              <i className='material-icons'>add</i>
            </button>
          </div>
          <p
            style={{
              textAlign: 'center',
              margin: '4rem 0',
              fontSize: '4rem',
              color: '#5f0604',
            }}
          >
            {count}
          </p>
          <div
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <Button
              path={{
                pathname: '/posts/display',
                query: { emailList: emailList, secretSanta: secretSanta },
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
