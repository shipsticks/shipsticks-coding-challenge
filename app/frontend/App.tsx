import axios from 'axios';
import { FC } from 'react';
import { create } from 'zustand';

import { CALCULATION_FROM_DIMENSIONS } from './graphql/queries/calculationFromDimensions';

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
}

const initialDimensions: Pick<StickStore, 'length' | 'width' | 'height' | 'weight'> = {
  length: 0,
  width: 0,
  height: 0,
  weight: 0,
}

export const useStickStore = create<StickStore>((set) => ({
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
  ...initialDimensions
}));

const App: FC = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
)};

export default App;
