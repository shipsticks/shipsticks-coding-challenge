import { FC } from 'react';

import { useStickStore } from '../App';
import SearchModal from './SearchModal';

const HomeContainer: FC = () => {
  const handleOpen = useStickStore((state) => state.openModal);
  return (
    <div>
      <SearchModal />
      <button className="inline-flex items-center gap-2 rounded-md bg-gray-700/50 m-11 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10" onClick={handleOpen}>Open Modal</button>
    </div>
  )
};

export default HomeContainer;