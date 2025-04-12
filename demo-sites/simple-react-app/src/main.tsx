import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { faker } from '@faker-js/faker';

import './index.css'

import App from './App.tsx'


faker.seed(1234);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
