import style from "./style.module.scss";
import Header from "../../componets/header/header";
import Footer from "../../componets/footer/Footer";
import UserInfoBlock from "./components/userInfoBlock/userInfoBlock";

function UserProfile() {
  return (
    <main className={style.user__main}>
      <Header />
      <section className={style.user}>
        <UserInfoBlock />
      </section>
      <Footer />
    </main>
  );
}

export default UserProfile;
