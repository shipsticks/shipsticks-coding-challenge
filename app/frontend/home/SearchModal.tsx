import { FC } from 'react';
import { Dialog } from '@headlessui/react';
import { useStickStore } from 'App';

const SearchModal: FC = () => {
  const {
    length,
    width,
    height,
    weight,
    returnedCalculationResult,
    modalOpen,
    closeModal,
    setLength,
    setHeight,
    setWidth,
    setWeight,
    fetchCalculation,
    resetModal
  } = useStickStore();

  const handleClose = () => {
    closeModal();
    resetModal();
  }

  return (
    <div>
      <Dialog open={modalOpen} onClose={handleClose}>
        <Dialog.Backdrop className="fixed inset-0 bg-black/50" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Dialog.Panel
              className="w-full max-w-md rounded-xl bg-white/10 p-6"
            >
              <Dialog.Title as="h3" className="text-base/7 font-medium text-white mt-0">
                Search for Product
              </Dialog.Title>
              <p className="mt-2 text-sm/6 text-white">
                Enter the dimensions of the contents below.
              </p>
              <form id="dimension-form" className="my-5">
                <div className="mb-5">
                  <label htmlFor="length-input" className="block mb-2 text-sm font-medium text-white">Length</label>
                  <input min="1" onChange={(e) => {setLength(parseInt(e.target.value))}} value={length.toString()} type="number" id="length-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="Integer in inches" required />
                </div> 
                <div className="mb-5">
                  <label htmlFor="width-input" className="block mb-2 text-sm font-medium text-white">Width</label>
                  <input min="1" onChange={(e) => {setWidth(parseInt(e.target.value))}} value={width.toString()} type="number" id="width-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="Integer in inches" required />
                </div> 
                <div className="mb-5">
                  <label htmlFor="height-input" className="block mb-2 text-sm font-medium text-white">Height</label>
                  <input min="1" onChange={(e) => {setHeight(parseInt(e.target.value))}} value={height.toString()} type="number" id="height-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="Integer in inches" required />
                </div> 
                <div className="mb-5">
                  <label htmlFor="weight-input" className="block mb-2 text-sm font-medium text-white">Weight</label>
                  <input min="1" onChange={(e) => {setWeight(parseInt(e.target.value))}} value={weight.toString()} type="number" id="weight-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="Integer in pounds" required />
                </div> 
              </form>
              {
                returnedCalculationResult !== undefined
                  ? 
                    <div className="w-full rounded-lg bg-white/20 p-2">
                      { returnedCalculationResult !== null ?
                        <>
                          <p className="text-sm/6 text-white p-3">
                            Product found!
                          </p>
                          <div className="w-full rounded-md bg-slate-800">
                            <p className="text-sm/6 text-white p-3">
                              Name: {returnedCalculationResult.product.name}
                            </p>
                            <div className="grid grid-cols-2 text-sm/6 gap-4 p-3 text-white">
                              <div>
                                Length: {returnedCalculationResult.product.length}"
                              </div>
                              <div>
                                Width: {returnedCalculationResult.product.width}"
                              </div>
                              <div>
                                Height: {returnedCalculationResult.product.height}"
                              </div>
                              <div>
                                Weight: {returnedCalculationResult.product.length} lbs.
                              </div>
                            </div>
                          </div>
                        </> :
                        <p className="text-sm/6 text-white p-3">
                          No product found for these dimensions.
                        </p>
                      }
                    </div>
                  : <></>
              }
              <div className="mt-4">
                <button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10"
                  onClick={fetchCalculation}
                >
                  Search
                </button>
                <button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700/50 ml-3 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10"
                  onClick={handleClose}
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