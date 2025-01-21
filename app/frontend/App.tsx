import axios from 'axios';
import { FC } from 'react';
import { create } from 'zustand';

import { calculationFromDimensionsQuery } from './graphql/queries/calculationFromDimensions';
import HomeContainer from 'home/HomeContainer';

interface Product {
  name: string;
  length: number;
  width: number;
  height: number;
  weight: number;
}

interface CalculationResult {
  id: string;
  product: Product;
}

interface StickStore {
  modalOpen: boolean;
  loading: boolean;
  name: string;
  length: number;
  width: number;
  height: number;
  weight: number;
  returnedCalculationResult: CalculationResult | null | undefined;
  fetchCalculation: () => void;
  resetModal: () => void;
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

export const useStickStore = create<StickStore>((set, get) => ({
  ...initialDimensions,
  modalOpen: false,
  loading: false,
  name: '',
  returnedCalculationResult: undefined,
  fetchCalculation: () => {
    const form = document.querySelector('#dimension-form') as HTMLFormElement;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    set({ loading: true });
    axios.post('/graphql', {
      query: calculationFromDimensionsQuery(get().length, get().width, get().height, get().weight)
    }).then((res) => {
      console.log(res);
      const { data } = res.data;
      if (data.calculationFromDimensions) {
        set({ returnedCalculationResult: data.calculationFromDimensions as CalculationResult });
      } else if (data.errors) {
        console.error(data.errors);
      } else {
        set({ returnedCalculationResult: null });
      }
    }).catch((err) => {
      console.error(err);
    }).finally(() => {
      set({ loading: false });
    })
  },
  resetModal: () => {
    set({ ...initialDimensions, returnedCalculationResult: undefined });
  },
  openModal: () => set({ modalOpen: true }),
  closeModal: () => set({ modalOpen: false }),
  setLength: (num: number) => set({ length: num }), // Could be much DRYer
  setWidth: (num: number) => set({ width: num }),
  setHeight: (num: number) => set({ height: num }),
  setWeight: (num: number) => set({ weight: num }),
  // isFormValid: () => {
  //   const { length, width, height, weight } = get();
  //   return length > 0 && width > 0 && height > 0 && weight > 0;
  // }
}));

const App: FC = () => {
  return (
    <div>
      <HomeContainer />
    </div>
)};

export default App;
