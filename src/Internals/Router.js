import React from 'react';
import AnalyticalDashBoard from '../app/Containers/AnalyticalDashBoard/index';
import DatabaseTableLayout from '../app/Containers/DatabaseControllPanel/index';
import AdminPanelLayout from '../app/Containers/AdminPanel/index';
import ErrorContentLayout from '../app/Containers/ErrorContents/index';
import InfoLayout from '../app/Containers/ProductInfo/index';
import SettingsLayout from '../app/Containers/ApplicationSettings/index';
import UsersLayout from '../app/Containers/ProductUsers/index';

export const DynamicContentRenderer = (content, contentData) => {
  switch (content) {
    case 'Home':
      return <AnalyticalDashBoard />;

    case 'Database Table':
      return <DatabaseTableLayout />;

    case 'Users':
      return <UsersLayout />;

    case 'Admin Panel':
      return <AdminPanelLayout />;

    case 'Settings':
      return <SettingsLayout />;

    case 'Info':
      return <InfoLayout />;

    default:
      return <ErrorContentLayout />;
  }
};
