import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@app/styles/Home.module.css';
import Login from '@app/components/Login/index';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Usuarios Nova</title>
        <meta name="description" content="Gestionar permisos a usuarion de Nova" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/index.tsx</code>
          </p>
          <Login onSubmit={() => { }} />
        </div>
      </main>
    </>
  )
}
