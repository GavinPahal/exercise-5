import VerticalChart from "@/components/Vertical";
import styles from "@/styles/Home.module.css";
import HoriztonalChart from "@/components/HoriztonalChart";


export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
       {/* <VerticalChart/> */}
       <HoriztonalChart/>
      </main>
    </>
  );
}
