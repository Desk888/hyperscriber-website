
import React from 'react';
import { ProcessStep } from '../types/service';

interface ServiceProcessProps {
  process: ProcessStep[];
}

export const ServiceProcess = ({ process }: ServiceProcessProps) => {
  return (
    <div className="mb-8">
      <h4 className="text-lg font-semibold mb-5">Process</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {process.map((step, i) => (
          <div key={i} className="flex gap-4">
            <div className="shrink-0 mt-1">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                {step.icon}
              </div>
            </div>
            <div>
              <h5 className="font-semibold">{step.title}</h5>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
