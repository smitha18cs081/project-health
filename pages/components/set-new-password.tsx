import { Formik, Field, Form, FormikHelpers } from 'formik';
import styles from "/styles/set-password.module.css";
interface Values {
    email: string;
    password:string;
   
}

export default function SetNewPassword() {
    return (
      <><div className={styles.login_box + ' p-3'}>
        <h1 className={styles.new}>Set new password</h1>
        <Formik
          initialValues={{
            email: '',
            password:''
            
          }}

          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          } }

        >
          <Form>
           <p className={styles.paragraph}>Your new password must be different from previous used passwords.</p>
           <label className={styles.password}>Password</label>
           <input type="password" id="password" name="password" className={styles.input1}/>
            <p className={styles.password1}>Minimum 8 characters with at least 1 number.</p>
           
            <label className={styles.password2}>Password</label>
            <input type="password" id="password" name="password1" className={styles.input2}/>
            <p className={styles.password3}>Both password must match.</p>
           
            
            <button className={styles.reset} >Reset password</button>
            
            <h2 className={styles.cancel}>Cancel</h2>
           


          </Form>
        </Formik>
      </div> 
      </>
    );
  };