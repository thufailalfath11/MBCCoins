import React, { useState } from "react";
import { TitleLogo } from "./common/Title";
import styles from "./Login.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import useAuth from "@/hooks/useAuth";

 function LoginPage() {
  const [login, setLogin] = useState(false)
  const {signIn,signUp} = useAuth() 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    if (login) {
      await signIn(email, password);
    } else {
      await signUp(email, password);
    }
  };

  return (
    <div className="container">
      <TitleLogo caption="Coins" title="MBC" className="logobg" />
      <div className={styles.kotak}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <h1 className={styles.h1}>Masuk</h1>
          <div>
            <label className={styles.label}>
              <input
                type="email"
                placeholder="Email"
                className={styles.input}
                {...register("email", { required: true })}
              />
              {errors.email && <h7>Di isi dulu bro....</h7>}
            </label>
            <label className={styles.label}>
              <input
                type="password"
                placeholder="Password"
                className={styles.input}
                {...register('password', { required: true })}
              />
              {errors.password && <h7>Di isi dulu bro....</h7>}
            </label>
            <button className={styles.button} onClick={() => setLogin(true)}>
              Masuk
            </button>
            <div>
              <button className={styles.button} type="submit" onClick={() => setLogin(false)}>
                Buat Akun
                </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default LoginPage;