import React from 'react';
import Button from '../../../reuseable/ui/Button';

const EditableRow: React.FC<{
  title: string;
  value: string;
  isEditing: boolean;
  onEdit: () => void;
  onCancel: () => void;
  onSave: () => void;
  children: React.ReactNode;
}> = ({ title, value, isEditing, onEdit, onCancel, onSave, children }) => (
  <div className="flex flex-col gap-2">
    <ul className="flex justify-between items-center">
      <li>
        <h5 className="text-base font-normal">{title}</h5>
        <p className="font-light text-sm text-[#2F3639]">{value}</p>
      </li>
      <li>
        <Button
          text={isEditing ? 'Cancel' : 'Change'}
          bgColor="bg-white"
          borderColor="border-[#E1E4EA]"
          rounded="rounded-full"
          textColor="text-[#676C6C]"
          fontSize="text-xs"
          paddingY="py-2"
          paddingX="px-3"
          onClick={isEditing ? onCancel : onEdit}
        />
      </li>
    </ul>

    {isEditing && (
      <aside className="mt-2 border-t pt-4 space-y-3">
        {children}
        <Button
          text="Save"
          rounded="rounded-full"
          fontSize="text-xs"
          paddingY="py-2"
          onClick={onSave}
        />
      </aside>
    )}
  </div>
);

export default EditableRow;