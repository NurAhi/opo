export interface ExamDateProps {
    date: string;
    day: string;
    remainingPersons: number;
    id: number;
  }

export interface ExamDatesComponentProps {
    firstExamDate?: ExamDateProps;
    lastExamDate?: ExamDateProps;
  }