import { Formik, Field, Form, FormikHelpers } from 'formik';
import styles from '/styles/password-reset.module.css'
interface Values {
    email: string;
    password:string;
   
}

export default function PasswordReset() {
    return (
      <><div className={styles.login_box + ' p-3'}>
        <h1 className={styles.reset}>Password reset</h1>
         
           <p className={styles.success}>Your password has been successfully reset. <br></br>Click below to log in magically</p>
           <br></br>
           <button type="submit" className={styles.continue}>Continue</button>
      </div> 
      </>
      
    );
  };