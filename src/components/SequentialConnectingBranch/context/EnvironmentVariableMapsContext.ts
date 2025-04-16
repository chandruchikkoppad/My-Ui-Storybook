import { createContext, useContext } from 'react';
import { EnvironmentVariableMaps } from '../types';

export const EnvironmentVariableMapsContext = createContext<EnvironmentVariableMaps | null>(null);

export const useEnvironmentalVariableMaps = () => useContext(EnvironmentVariableMapsContext);
