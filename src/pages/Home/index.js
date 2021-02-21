import { lazy } from 'react';

import { FilterAndSortHeader } from '../../components/FilterAndSortHeader'
import { ProductsGrid } from '../../components/ProductsGrid'

const Container = lazy(() => import('../../common/Container'));
const ScrollToTop = lazy(() => import('../../common/ScrollToTop'));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <FilterAndSortHeader />
      <ProductsGrid />
    </Container>
  );
};

export default Home;
