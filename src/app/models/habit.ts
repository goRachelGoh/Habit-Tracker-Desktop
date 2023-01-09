import { Freqeuncy } from 'src/app/enums/frequency';

export interface Habit {
  habitId?: string;
  habitName: string;
  frequency: Freqeuncy;
  countPerFreq: number;
  iconColor: string;
  iconImage: string;
  createdOn: Date;
  completionStatus: boolean;
  archivedStatus: boolean;
}
