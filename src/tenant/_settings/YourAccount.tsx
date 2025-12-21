import React, { useState } from 'react';
import FormInput from '../../../reuseable/ui/FormInput';
import Button from '../../../reuseable/ui/Button';
import PointOfInterest from './PointOfInterest';
import EditableRow from './EditableRow';

type Address = {
  street: string;
  postalCode: string;
  city: string;
  state: string;
};

const YourAccount: React.FC = () => {
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [address, setAddress] = useState<Address | null>(null);
  const [draftAddress, setDraftAddress] = useState<Address>({
    street: '',
    postalCode: '',
    city: '',
    state: '',
  });
  const [phone, setPhone] = useState<string | null>(null);
  const [draftPhone, setDraftPhone] = useState('');
  const [editPhone, setEditPhone] = useState(false);
  const [timezone, setTimezone] = useState('West Africa Time - Nigeria');
  const [draftTimezone, setDraftTimezone] = useState(timezone);
  const [editTimezone, setEditTimezone] = useState(false);
  const [locale, setLocale] = useState('English (USA)');
  const [draftLocale, setDraftLocale] = useState(locale);
  const [editLocale, setEditLocale] = useState(false);
  const [marketing, setMarketing] = useState('Subscribed');
  const [draftMarketing, setDraftMarketing] = useState(marketing);
  const [editMarketing, setEditMarketing] = useState(false);

  return (
    <form className="flex flex-col gap-6">
      <header>
        <h3 className="font-medium text-base xl:text-lg">Your Account</h3>
        <p className="font-light text-xs text-[#676C6C]">
          Manage name, role, email, password, and SSO settings.
        </p>
      </header>

      <section className="border border-[#E1E4EA] p-4 rounded-[12px] flex flex-col gap-6">
        <FormInput
          placeholder="richardokafor@gmail.com (Verified)"
          label="Email"
          rounded="rounded-full"
        />

        <PointOfInterest />
        <div className="flex flex-col gap-2">
          <ul className="flex justify-between items-center">
            <li>
              <h5 className="text-base font-normal">Address</h5>
              <p className="font-light text-sm text-[#2F3639]">
                {address
                  ? `${address.street}, ${address.postalCode}, ${address.state}`
                  : 'Add address'}
              </p>
            </li>
            <li>
              <Button
                text={address ? 'Change' : 'Add address'}
                bgColor="bg-white"
                borderColor="border-[#E1E4EA]"
                rounded="rounded-full"
                textColor="text-[#676C6C]"
                fontSize="text-xs"
                paddingY="py-2"
                paddingX="px-3"
                onClick={() => {
                  setDraftAddress(
                    address ?? {
                      street: '',
                      postalCode: '',
                      city: '',
                      state: '',
                    }
                  );
                  setShowAddressForm(true);
                }}
              />
            </li>
          </ul>

          {showAddressForm && (
            <aside className="mt-2 border-t pt-4 space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <FormInput
                  placeholder="Ocean View"
                  rounded="rounded-full"
                  value={draftAddress.street}
                  onChange={(e) =>
                    setDraftAddress({
                      ...draftAddress,
                      street: e.target.value,
                    })
                  }
                />
                <FormInput
                  placeholder="3125"
                  rounded="rounded-full"
                  value={draftAddress.postalCode}
                  onChange={(e) =>
                    setDraftAddress({
                      ...draftAddress,
                      postalCode: e.target.value,
                    })
                  }
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormInput
                  placeholder="Lagos Island"
                  rounded="rounded-full"
                  value={draftAddress.city}
                  onChange={(e) =>
                    setDraftAddress({
                      ...draftAddress,
                      city: e.target.value,
                    })
                  }
                />
                <FormInput
                  placeholder="Lagos State"
                  rounded="rounded-full"
                  value={draftAddress.state}
                  onChange={(e) =>
                    setDraftAddress({
                      ...draftAddress,
                      state: e.target.value,
                    })
                  }
                />
              </div>

              <div className="flex gap-3">
                <Button
                  text="Cancel"
                  bgColor="bg-white"
                  borderColor="border-[#E1E4EA]"
                  rounded="rounded-full"
                  textColor="text-[#676C6C]"
                  fontSize="text-xs"
                  paddingY="py-2"
                  paddingX="px-3"
                  onClick={() => setShowAddressForm(false)}
                />
                <Button
                  text="Save"
                  rounded="rounded-full"
                  fontSize="text-xs"
                  paddingY="py-2"
                  onClick={() => {
                    setAddress(draftAddress);
                    setShowAddressForm(false);
                  }}
                />
              </div>
            </aside>
          )}
        </div>
        <EditableRow
          title="Phone"
          value={phone ?? 'Add mobile phone number for notifications'}
          isEditing={editPhone}
          onEdit={() => {
            setDraftPhone(phone ?? '');
            setEditPhone(true);
          }}
          onCancel={() => setEditPhone(false)}
          onSave={() => {
            setPhone(draftPhone);
            setEditPhone(false);
          }}
        >
          <FormInput
            placeholder="+234..."
            rounded="rounded-full"
            value={draftPhone}
            onChange={(e) => setDraftPhone(e.target.value)}
          />
        </EditableRow>
        <EditableRow
          title="Timezone"
          value={timezone}
          isEditing={editTimezone}
          onEdit={() => {
            setDraftTimezone(timezone);
            setEditTimezone(true);
          }}
          onCancel={() => setEditTimezone(false)}
          onSave={() => {
            setTimezone(draftTimezone);
            setEditTimezone(false);
          }}
        >
          <FormInput
            placeholder="Timezone"
            rounded="rounded-full"
            value={draftTimezone}
            onChange={(e) => setDraftTimezone(e.target.value)}
          />
        </EditableRow>
        <EditableRow
          title="Locale"
          value={locale}
          isEditing={editLocale}
          onEdit={() => {
            setDraftLocale(locale);
            setEditLocale(true);
          }}
          onCancel={() => setEditLocale(false)}
          onSave={() => {
            setLocale(draftLocale);
            setEditLocale(false);
          }}
        >
          <FormInput
            placeholder="Locale"
            rounded="rounded-full"
            value={draftLocale}
            onChange={(e) => setDraftLocale(e.target.value)}
          />
        </EditableRow>
        <EditableRow
          title="Marketing email"
          value={marketing}
          isEditing={editMarketing}
          onEdit={() => {
            setDraftMarketing(marketing);
            setEditMarketing(true);
          }}
          onCancel={() => setEditMarketing(false)}
          onSave={() => {
            setMarketing(draftMarketing);
            setEditMarketing(false);
          }}
        >
          <FormInput
            placeholder="Subscribed / Unsubscribed"
            rounded="rounded-full"
            value={draftMarketing}
            onChange={(e) => setDraftMarketing(e.target.value)}
          />
        </EditableRow>
        <div className="flex justify-between items-center">
          <div>
            <h5 className="text-base font-normal">Delete Account</h5>
            <p className="font-light text-sm text-[#2F3639]">
              Permanently delete the account and remove access to my data.
            </p>
          </div>
          <Button
            text="Delete My Account"
            bgColor="bg-[#F65428]"
            rounded="rounded-full"
            fontSize="text-xs"
            paddingY="py-3"
            paddingX="px-3"
          />
        </div>
      </section>

      <div className="flex justify-start">
        <Button text="Save Settings" rounded="rounded-full" paddingY="py-1" />
      </div>
    </form>
  );
};

export default YourAccount;
