import type { NextPage } from 'next';
import Head from 'next/head';
import LoginForm from './components/login-form';
import ForgotPassword from './components/forgot-password';
import CheckYourEmail from './components/check-your-email';
import SetNewPassword from './components/set-new-password';
import PasswordReset from './components/password-reset';
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Health</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="vh-100 d-flex justify-content-center align-items-center">
        <LoginForm/>
      </main>
    
    </div>
  
  )
}

export default Home