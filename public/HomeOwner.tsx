import { Route, Routes } from "react-router-dom";
import HomeOwnerLayout from "../layout/home owner";
import { SidebarProvider } from "../components/ui/sidebar";
import Messages from "../pages/home owner/messages/index";
import Sent from "../pages/home owner/messages/Sent";
import Chats from "../pages/home owner/messages/Chats";
import Notifications from "../pages/home owner/messages/Notifications";
import MessageDetail from "../pages/home owner/messages/MessageDetail";
import Information from "../pages/home owner/Information";
import TenantLayout from "../layout/tenant";
import TenantDashboard from "../pages/tenant/Dashboard";
import TenantInformation from "../pages/tenant/Information"
import SupportTickets from "../pages/home owner/support tickets";
import Settings from "../pages/home owner/_settings";
import Dashboard from "../pages/home owner/Dashboard";
import Properties from "../pages/home owner/Properties";
import AddNewProperty from "../pages/home owner/Properties/AddNewProperty";
import BillingCenter from "../pages/home owner/Billing Center";
import BillingDetails from "../pages/home owner/Billing Center/BillingDetails";
import AccessSupporTickets from '../pages/home owner/support tickets/AccessSupporTickets';
import CreateNewSupport from '../pages/home owner/support tickets/CreateNewSupport';

const HomeOwner = () => {
  return (
    <SidebarProvider>
      <Routes>
        <Route element={<HomeOwnerLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/home-owner/add-property" element={<AddNewProperty />} />
          <Route path="/billing/invoices" element={<BillingCenter />} />
          <Route path="/billing/:billingId" element={<BillingDetails />} />
          <Route path="/messages/inbox" element={<Messages />} />
          <Route path="/messages/inbox/:id" element={<MessageDetail />} />
          <Route path="/messages/sent" element={<Sent type={'sent'} />} />
          <Route path="/messages/chats" element={<Chats />} />
          <Route path="/messages/notifications" element={<Notifications  />} />
          <Route path="/information" element={<Information  />} />
        </Route>
        <Route element={<TenantLayout />}>
          <Route path="/tenant/dashboard" element={<TenantDashboard />} />
          <Route path="/tenant/information" element={<TenantInformation />} />
          {/* Support Tickets */}
          <Route path="/supports" element={<SupportTickets  />} />
          <Route path="/access-supports" element={<AccessSupporTickets  />} />
          <Route path="/support-form" element={<CreateNewSupport  />} />

          <Route path="/settings" element={<Settings  />} />

          <Route path="/messages/notifications" element={<Notifications />} />
        </Route>
      </Routes>
    </SidebarProvider>
  );
};

export default HomeOwner;
