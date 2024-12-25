import { useForm, SubmitHandler } from "react-hook-form";
import classNames from "classnames";
import * as EmailValidator from "email-validator";

import {
  HeroDesktop,
  HeroMobile,
  IconArrow,
  IconError,
  Logo,
} from "../../assets/images";
import styles from "./Home.module.scss";

type Input = {
  email: string;
};

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = (data) => reset();

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <img className={styles.logo} src={Logo} alt="logo" />
        <img
          className={styles.heroMobileImage}
          src={HeroMobile}
          alt="hero-img"
        />
        <h1 className={styles.title}>
          <span className={styles.active}>We're</span> coming soon
        </h1>
        <h2 className={styles.desc}>
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </h2>
        <form
          className={classNames({
            [styles.form]: true,
            [styles.error]: errors.email,
          })}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={styles.inputContainer}>
            <div className={styles.input}>
              <input
                id="email"
                type="text"
                placeholder="Email Address"
                {...register("email", {
                  required: { value: true, message: "Email is required" },
                  validate: (val) =>
                    EmailValidator.validate(val) ||
                    "Please provide a valid email",
                })}
              />
              <img src={IconError} alt="icon-error" />
            </div>
            <button className={styles.btn} type="submit">
              <img src={IconArrow} alt="icon-arrow" />
            </button>
          </div>
          <span className={styles.errorText}>{errors.email?.message}</span>
        </form>
      </div>
      <img
        className={styles.heroDesktopImage}
        src={HeroDesktop}
        alt="hero-img"
      />
    </main>
  );
};

export default Home;
