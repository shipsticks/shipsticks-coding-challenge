import { FC } from 'react';
import { Dialog } from '@headlessui/react';
import { useStickStore } from 'App';

const SearchModal: FC = () => {
  const {
    length,
    width,
    height,
    weight,
    closeModal,
    modalOpen,
    setLength,
    setHeight,
    setWidth,
    setWeight,
  } = useStickStore();

  return (
    <div>
      <Dialog open={modalOpen} onClose={closeModal}>
        <Dialog.Backdrop className="fixed inset-0 bg-black/50" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Dialog.Panel
              className="w-full max-w-md rounded-xl bg-white/10 p-6"
            >
              <Dialog.Title as="h3" className="text-base/7 font-medium text-white">
                Search for Product
              </Dialog.Title>
              <p className="mt-2 text-sm/6 text-white">
                Enter your dimensions below to find the correct product.
              </p>
              <form className="my-5">
                <div className="mb-5">
                  <label htmlFor="length-input" className="block mb-2 text-sm font-medium text-white">Length</label>
                  <input value={length} type="number" id="length-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="Integer in inches" required />
                </div> 
                <div className="mb-5">
                  <label htmlFor="width-input" className="block mb-2 text-sm font-medium text-white">Width</label>
                  <input value={width} type="number" id="width-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="Integer in inches" required />
                </div> 
                <div className="mb-5">
                  <label htmlFor="height-input" className="block mb-2 text-sm font-medium text-white">Height</label>
                  <input value={height} type="number" id="height-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="Integer in inches" required />
                </div> 
                <div className="mb-5">
                  <label htmlFor="weight-input" className="block mb-2 text-sm font-medium text-white">Weight</label>
                  <input value={weight} type="number" id="weight-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="Integer in pounds" required />
                </div> 
              </form>
              <div className="mt-4">
                <button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10"
                  onClick={closeModal}
                >
                  Search
                </button>
                <button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700/50 ml-3 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </div>
        </Dialog>
      </div>
  )
};

export default SearchModal;