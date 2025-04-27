
import { ReactNode } from 'react';

export interface ProcessStep {
  title: string;
  icon: ReactNode;
  description: string;
}

export interface CaseStudy {
  client: string;
  results: string[];
}

export interface Service {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  details: string[];
  benefits: string[];
  process: ProcessStep[];
  caseStudy: CaseStudy;
  color: string;
  bgLight: string;
}
