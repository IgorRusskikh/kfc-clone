import { Suspense, lazy } from "react";

import Footer from "../../UI/Footer/Footer";
import Header from "../../UI/Header/Header";
import ProfilePoints from "../../UI/ProfilePoints/ProfilePoints";
import styles from "./ProfilePage.module.css";

export default function ProfilePage() {
  const ProfileInfo = lazy(() => import("../../UI/ProfileInfo/ProfileInfo"));
  const OrderCard = lazy(() => import("../../UI/OrderCard/OrderCard"));

  return (
    <>
      <Header />
      <Suspense>
        <ProfileInfo />
      </Suspense>
      <div className={styles.orderInfoBlock}>
        <ProfilePoints />
        <Suspense>
          <OrderCard />
        </Suspense>
      </div>
      <Footer />
    </>
  );
}
