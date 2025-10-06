// queries/getWorkPermit.ts
import { WorkPermit } from '../types';

// Mock work permit data
export async function getWorkPermit(): Promise<WorkPermit> {
  // Return mock data with a delay to simulate network request
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        visaStatus: "Skilled Worker Visa (Tier 2)",
        expiryDate: "2026-01-31T00:00:00.000Z",
        summary: "Eligible to work in the UK with full work authorization",
        additionalInfo: "I have the right to work in the UK and do not require sponsorship for employment."
      });
    }, 300); // Small delay to simulate network request
  });
}
