import React, { useState } from "react";

type POI = {
  id: string;
  label: string;
  address: string;
};

const PointOfInterest: React.FC = () => {
  const [pois, setPois] = useState<POI[]>([
    {
      id: "1",
      label: "My church",
      address: "47, Wale Adewale Street, Lekki Lagos",
    },
    {
      id: "2",
      label: "My school",
      address: "47, Wale Adewale Street, Lekki Lagos",
    },
    {
      id: "3",
      label: "My House",
      address: "47, Wale Adewale Street, Lekki Lagos",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPOI, setNewPOI] = useState({
    label: "",
    address: "",
  });

  const openModal = () => {
    setNewPOI({ label: "", address: "" });
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const savePOI = () => {
    if (!newPOI.label || !newPOI.address) return;

    setPois((prev) => [
      ...prev,
      { id: crypto.randomUUID(), ...newPOI },
    ]);

    closeModal();
  };

  return (
    <section className="w-full max-w-6xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[16px] text-[#2F3639]">
          Point of interest
        </h2>

        <button
          type="button"
          onClick={openModal}
          className="px-6 py-2 rounded-full border border-[#E0E1E1] text-[#676C6C] hover:bg-gray-100"
        >
          Add POI
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pois.map((poi) => (
          <div key={poi.id} className="space-y-2">
            <p className="text-xs text-[#2F3639]">
              {poi.label}
            </p>

            <div className="rounded-full border border-[#E1E4EA] px-4 py-3 text-[10px] text-[#676C6C]">
              {poi.address}
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={closeModal}
          />
          <div className="relative z-10 w-full max-w-md rounded-xl bg-white p-6 space-y-5">
            <h3 className="text-lg font-semibold">
              Add Point of Interest
            </h3>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">
                Label
              </label>
              <input
                type="text"
                value={newPOI.label}
                onChange={(e) =>
                  setNewPOI((p) => ({
                    ...p,
                    label: e.target.value,
                  }))
                }
                className="text-sm px-1 py-1 focus:outline-none border-b border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                value={newPOI.address}
                onChange={(e) =>
                  setNewPOI((p) => ({
                    ...p,
                    address: e.target.value,
                  }))
                }
                className="rounded-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={closeModal}
                className="text-sm text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={savePOI}
                className="rounded-full bg-black px-5 py-2 text-sm text-white hover:bg-gray-800"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PointOfInterest;
