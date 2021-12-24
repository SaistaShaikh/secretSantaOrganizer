import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '../../components/button';

export default function Display() {
  const router = useRouter();
  console.log(router.query);

  return (
    <>
      <div style={{ minHeight: '100vh !important' }}>
        <div
          style={{
            position: 'relative',
            minHeight: '100vh !important',
            margin: '2rem 0',
          }}
        >
          <ul
            style={{
              margin: '0 auto',
              padding: '2rem 0rem',
              marginBottom: '2rem',
              textAlign: 'center',
              backgroundColor: '#eeeeeea6',
              width: '60%',
              borderRadius: '1rem',
              border: '1px solid #999999',
            }}
          >
            {router.query.emailList.map((email, index) => {
              return (
                <li
                  key={index}
                  style={{
                    listStyleType: 'none',
                    fontSize: '1.2rem',
                    color: '#555555',
                    margin: '0.5rem 0',
                  }}
                >
                  <span style={{ color: '#a61715' }}>
                    {`${router.query.emailList[index]}`}'s
                  </span>{' '}
                  secret santa is{' '}
                  <span
                    style={{ color: '#a61715' }}
                  >{`${router.query.secretSanta[index]}`}</span>
                </li>
              );
            })}
          </ul>
          <div
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <Button path='/' />
          </div>
        </div>
      </div>
    </>
  );
}
