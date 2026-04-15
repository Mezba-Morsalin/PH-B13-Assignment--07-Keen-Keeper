import { lazy, Suspense } from "react";
import Banner from "../../components/Shared/Banner/Banner";

const Friends = lazy(() => import('../../components/Shared/Friends/Friends'));

const Home = () => {
  return (
    <div>
      <Banner />

      <Suspense fallback={
        <div className="flex justify-center mt-10">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      }>
        <Friends />
      </Suspense>

    </div>
  );
};

export default Home;