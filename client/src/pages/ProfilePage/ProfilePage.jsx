import { Suspense, lazy } from "react";

import Footer from "../../UI/Footer/Footer";
import Header from "../../UI/Header/Header";
import styles from "./ProfilePage.module.css";

export default function ProfilePage() {
  const ProfileInfo = lazy(() => import("../../UI/ProfileInfo/ProfileInfo"));
  const OrderCard = lazy(() => import("../../UI/OrderCard/OrderCard"));
  const TipContainer = lazy(() =>
    import("../../components/TipContainer/TipContainer")
  );

  return (
    <>
      <Header />
      <Suspense>
        <ProfileInfo />
      </Suspense>
      <div className={styles.orderInfoBlock}>
        <div className={styles.orderInfoContainer}>
          <div className={styles.pointsContainer}>
            <Suspense>
              <TipContainer>У вас 44 балла</TipContainer>
            </Suspense>
            <div className={styles.pointsQuantity}>
              <span>7 баллов сгорят через 129 дней</span>
            </div>
          </div>
        </div>
        <Suspense>
          <OrderCard />
        </Suspense>
      </div>
      <Footer />
    </>
  );
}
