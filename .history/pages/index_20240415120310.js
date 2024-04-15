import VerticalChart from "@/components/Vertical";
import styles from "@/styles/Home.module.css";
import HoriztonalChart from "@/components/HoriztonalChart";
import PieChart from "@/components/PieChart";

export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
        <PieChart/>
       {<VerticalChart/>}
       <HoriztonalChart/>
      </main>
    </>
  );
}
