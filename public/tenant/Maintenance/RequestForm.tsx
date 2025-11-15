import React, { useState } from 'react';

const RequestForm: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    priority: '',
    category: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-[14px] text-[#2F3639] font-semibold">
        Submit New Request
      </h2>
      <p className="text-[10px] text-[#2F3639] font-light mb-4">
        Fill out the form below to submit a maintenance request
      </p>
      <div className="flex justify-between">
        <div className="w-[49%] mb-4">
          <label className="text-[12px] text-[#2C2E33] mb-4">
            Request Title *
          </label>
          <input
            type="text"
            className="w-full px-4 placeholder:text-[10px] placeholder:text-[#596375B2] py-2 border rounded-lg mt-2 outline-none"
            placeholder="Brief description of the issue"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </div>
        <div className="w-[49%] mb-4">
          <label className="text-[12px] text-[#2C2E33] mb-4">
            Select Category *
          </label>
          <select
            className="w-full px-4 py-2 border border-[#E0E4EE] rounded-lg mt-2 outline-none"
            value={formData.priority}
            onChange={(e) =>
              setFormData({ ...formData, priority: e.target.value })
            }
          >
            <option value="">Select Category</option>
            <option value="Plumbing">Plumbing</option>
            <option value="HVAC">HVAC</option>
            <option value="Security">Security</option>
          </select>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-[49%] mb-4">
          <label className="text-[12px] text-[#2C2E33] mb-4">
            Priority Level *
          </label>
          <select
            className="w-full px-4 py-2 border border-[#E0E4EE] rounded-lg mt-2 outline-none"
            value={formData.priority}
            onChange={(e) =>
              setFormData({ ...formData, priority: e.target.value })
            }
          >
            <option value="">Select Priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div className="w-[49%] mb-4">
          <label className="text-[12px] text-[#2C2E33] mb-4">
            Attach Evidence *
          </label>
          <input
            type="text"
            className="w-full px-4 placeholder:text-[10px] placeholder:text-[#596375B2] py-2 border rounded-lg mt-2 outline-none"
            placeholder="Choose a file   No file chosen"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="text-[12px] text-[#2C2E33] mb-4">
          Detailed Description *
        </label>
        <textarea
          className="w-full px-4 py-2 border rounded-lg mt-2 placeholder:text-[10px]"
          placeholder="Please provide detailed information about the issue...."
          rows={4}
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
      </div>
      <div className="flex justify-end gap-3">
        <button
          type="button"
          className="border border-[#9797974D] text-[#2C2E33] bg-[#9797974D] text-[16px] font-semibold  px-10 py-1 rounded-full"
          onClick={() =>
            setFormData({
              title: '',
              priority: '',
              category: '',
              description: '',
            })
          }
        >
          Clear
        </button>
        <button
          type="submit"
          className="bg-[#232AAB] text-white text-[16px] font-semibold px-6 py-1 rounded-full shadow-sm shadow-[#00000040]"
        >
          Submit Request
        </button>
      </div>
    </form>
  );
};

export default RequestForm;
