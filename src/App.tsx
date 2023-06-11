import React, { useState, useEffect } from "react";
import { AppStyled } from "./app.styles";
import { InputForm } from "./components/input-form/input-form";
import { ExamDates } from "./components/exam-dates";
import { ExamDateProps } from "./components/exam-dates/exam-dates.interface";

const App: React.FC = () => {
  const [personsRemaining, setPersonsRemaining] = useState<number>(() => {
    const storedPersonsRemaining = localStorage.getItem("personsRemaining");
    return storedPersonsRemaining ? parseInt(storedPersonsRemaining) : 225;
  });

  const [lastExamDate, setLastExamDate] = useState<ExamDateProps | undefined>(
    () => {
      const storedLastExamDate = localStorage.getItem("lastExamDate");
      return storedLastExamDate ? JSON.parse(storedLastExamDate) : undefined;
    }
  );

  const [inputValue, setInputValue] = useState<number>(0);
  const [firstExamDate, setFirstExamDate] = useState<ExamDateProps | undefined>(
    undefined
  );

  useEffect(() => {
    localStorage.setItem("personsRemaining", personsRemaining.toString());
  }, [personsRemaining]);

  useEffect(() => {
    if (lastExamDate) {
      localStorage.setItem("lastExamDate", JSON.stringify(lastExamDate));
    }
  }, [lastExamDate]);

  const handlePresentedClick = () => {
    const presentedCount = 5 - inputValue;
    let updatedRemainingPersons = personsRemaining + presentedCount;

    const startDate = new Date();
    startDate.setDate(startDate.getDate() + 1);

    let currentExamDate = new Date(startDate);
    let currentId = 1;
    let firstExamDateFound = false;

    while (updatedRemainingPersons >= 0) {
      const day = currentExamDate.getDay();

      let personsForDay = day === 5 ? 3 : 5;

      if (
        day !== 0 &&
        day !== 6 &&
        currentExamDate.getMonth() !== 7 &&
        personsForDay >= 0
      ) {
        const examDate: ExamDateProps = {
          day: currentExamDate.toLocaleDateString("es-ES", {
            weekday: "long",
          }),
          date: currentExamDate.toLocaleDateString("es-ES", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          remainingPersons: updatedRemainingPersons,
          id: currentId,
        };

        if (!firstExamDateFound) {
          setFirstExamDate(examDate);
          firstExamDateFound = true;
        }

        setLastExamDate(examDate);
        updatedRemainingPersons -= personsForDay;
      }

      currentId++;
      currentExamDate.setDate(currentExamDate.getDate() + 1);
    }

    setPersonsRemaining(personsRemaining + presentedCount);
    setInputValue(0);
  };

  return (
    <AppStyled>
      <div className="c-app__date">
        <div>
          <span className="c-app__date--text">Hoy es</span>
          <strong>
            {new Date().toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </strong>
        </div>
        <div className="c-app__persons-remaining">
          Totales: <strong>{personsRemaining}</strong>
        </div>
      </div>

      <InputForm
        onPresentedClick={handlePresentedClick}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />

      <ExamDates firstExamDate={firstExamDate} lastExamDate={lastExamDate} />
    </AppStyled>
  );
};

export default App;
