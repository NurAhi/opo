import React from "react";
import { ExamDatesComponentProps } from "./exam-dates.interface";
import { ExamDateStyle } from "./exam-dates.styles";

export const ExamDates: React.FC<ExamDatesComponentProps> = ({
  lastExamDate,
}) => {
  return (
    <ExamDateStyle>
      {lastExamDate && (
        <>
          <div>
            Mi examen es:
            <strong className="c-exam-date__final-date">
              {lastExamDate?.day}, {lastExamDate?.date}
            </strong>
          </div>
          <div>personas de antes: {lastExamDate?.remainingPersons}</div>

          {lastExamDate?.remainingPersons === 2 && (
            <div>eres la 3ª persona.</div>
          )}
          {lastExamDate?.remainingPersons === 1 && (
            <div>eres la 2ª persona.</div>
          )}
          {lastExamDate?.remainingPersons === 0 && (
            <div>eres la 1ª persona.</div>
          )}
          {lastExamDate?.remainingPersons >= 3 && (
            <div>
              {lastExamDate?.remainingPersons < 5 && <div>1era reserva.</div>}
              {lastExamDate?.remainingPersons === 5 && <div>2da reserva.</div>}
            </div>
          )}
        </>
      )}
    </ExamDateStyle>
  );
};
