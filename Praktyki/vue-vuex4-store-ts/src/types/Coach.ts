export type CoachArea = 'frontend' | 'backend' | 'career';

export interface Coach {
  id?: string
  firstName: string,
  lastName: string,
  description: string,
  hourlyRate: number,
  areas: CoachArea[],
}