import {
  SvgAppGallery,
  SvgAppStore,
  SvgGooglePlay,
} from "../../components/Svgs/Svgs";

import FooterColumns from "./FooterColumns";
import TripleLineLogo from "../../components/TripleLineLogo/TripleLineLogo";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footer}>
        <TripleLineLogo />
        <div className={styles.footerContent}>
          <FooterColumns />
        </div>
      </div>
      <div className={styles.bottomFooter}>
        <div
          className={[styles.bottomFooterColumn, styles.switchLanguage].join(
            " "
          )}
        >
          English
        </div>
        <div>© 2023 Unirest LLC</div>
        <div
          className={[styles.bottomFooterColumn, styles.footerStores].join(" ")}
        >
          <SvgGooglePlay />
          <SvgAppStore />
          <SvgAppGallery />
        </div>
      </div>
    </div>
  );
}
