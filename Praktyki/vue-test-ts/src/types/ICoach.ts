interface ICoach {
  id?: string
  firstName: string,
  lastName: string,
  description: string,
  hourlyRate: number,
  areas: ('frontend' | 'backend' | 'career')[],
}

export default ICoach;