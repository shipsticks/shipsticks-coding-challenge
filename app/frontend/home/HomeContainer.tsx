import { FC } from 'react';

import { useStickStore } from '../App';
import SearchModal from './SearchModal';

const HomeContainer: FC = () => {
  const handleOpen = useStickStore((state) => state.openModal);
  return (
    <div>
      <SearchModal />
      <button onClick={handleOpen}>Open Modal</button>
    </div>
  )
};

export default HomeContainer;