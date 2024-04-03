import { useEffect, useState } from "react";
import ProgressBar from "./components/progressbar/ProgressBar";
import { useMultiStep } from "./feature/MultiStepContext";
import PageFive from "./pages/PageFive";
import PageFour from "./pages/PageFour";
import PageOne from "./pages/PageOne";
import PageSeven from "./pages/PageSeven";
import PageSix from "./pages/PageSix";
import PageThird from "./pages/PageThree";
import PageTwo from "./pages/PageTwo";


function App() {
  const { currentPage } = useMultiStep()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const pages = [<PageOne />, <PageTwo />, <PageThird />, <PageFour />, <PageFive />, <PageSix />, <PageSeven />]
  const [page6, setPage6] = useState(null);

  useEffect(() => {
    if (currentPage === 5) {
      const timer = setTimeout(() => {
        setPage6(pages[6]);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentPage, pages]);
  return (
    <div>
      {currentPage !== 5 && currentPage !== 6 && <ProgressBar />}
      {currentPage === 5 ? (<div>{page6 == null && <PageSix />} {page6}</div>) : (pages[currentPage])}
    </div>
  );
}

export default App;
