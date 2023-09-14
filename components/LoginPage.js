import React, { useState } from "react";
import { TitleLogo } from "./common/Title";
import styles from "./Login.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import useAuth from "@/hooks/useAuth";

export default function LoginPage() {
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
              {errors.email && <h5>Di isi dulu bro....</h5>}
            </label>
            <label className={styles.label}>
              <input
                type="password"
                placeholder="Password"
                className={styles.input}
                {...register("password", { required: true })}
              />
              {errors.password && <h5>Di isi dulu bro....</h5>}
            </label>
            <button className={styles.button} type="submit" onClick={() => setLogin()}>
              Sign In
            </button>
            <div>
              <button className={styles.button}>
                Create Account
                </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
