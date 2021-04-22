import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";

import styles from "./styles.module.scss";
export default function Header() {
  const currentDate = format(new Date(), "EEEEEE, d MMMM", {
    locale: ptBR,
  });
  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="Podcastr Logo" />
      <p className={styles.para}>O melhor para você ouvir, sempre</p>
      <span className={styles.paraSpan}>{currentDate}</span>
    </header>
  );
}
