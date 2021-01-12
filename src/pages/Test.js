import React from 'react';
import { LoadingIndicator } from '../components/LoadingIndicator';
import { HomePageLayout } from '../layouts/HomePage';

export const Test = () => {
  return (
    <HomePageLayout>
      <LoadingIndicator />
    </HomePageLayout>
  );
};
