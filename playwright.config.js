import { devices } from '@playwright/test';

export default {
  projects: [
    {
      name: 'Desktop',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
};
