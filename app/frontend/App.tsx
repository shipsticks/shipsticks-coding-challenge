import axios from 'axios';
import { FC } from 'react';
import { create } from 'zustand';

import { CALCULATION_FROM_DIMENSIONS } from './graphql/queries/calculationFromDimensions';
import HomeContainer from 'home/HomeContainer';

interface CalculationResult {
  name: string;
  id: string;
}

interface StickStore {
  modalOpen: boolean;
  loading: boolean;
  name: string;
  length: number;
  width: number;
  height: number;
  weight: number;
  returnedCalculationResult: CalculationResult | null;
  fetchCalculation: () => void;
  resetDimensions: () => void;
  openModal: () => void;
  closeModal: () => void;
  setLength: (num: number) => void;
  setWidth: (num: number) => void;
  setHeight: (num: number) => void;
  setWeight: (num: number) => void;
}

const initialDimensions: Pick<StickStore, 'length' | 'width' | 'height' | 'weight'> = {
  length: 0,
  width: 0,
  height: 0,
  weight: 0,
}

export const useStickStore = create<StickStore>((set) => ({
  ...initialDimensions,
  modalOpen: false,
  loading: false,
  name: '',
  returnedCalculationResult: null,
  fetchCalculation: () => {
    axios.post('/graphql', {
      query: CALCULATION_FROM_DIMENSIONS
    }).then((res) => {
      console.log(res.data);
    }).catch((err) => {
      console.error(err);
    })
  },
  resetDimensions: () => {
    set(initialDimensions);
  },
  openModal: () => set({ modalOpen: true }),
  closeModal: () => set({ modalOpen: false }),
  setLength: (num: number) => set({ length: num }), // Could be much DRYer
  setWidth: (num: number) => set({ width: num }),
  setHeight: (num: number) => set({ height: num }),
  setWeight: (num: number) => set({ weight: num }),
}));

const App: FC = () => {
  return (
    <div>
      <HomeContainer />
    </div>
)};

export default App;
