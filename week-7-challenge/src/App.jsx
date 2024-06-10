import './App.css';
import CalcButton from './components/button';
import Form from './components/form';
import DisplayResult from './components/result';
import { useState } from 'react';

function App() {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  const [years, setYears] = useState('--');
  const [months, setMonths] = useState('--');
  const [days, setDays] = useState('--');

  function handleDateChange() {
    const input_year = document.getElementById("year");
    const input_month = document.getElementById("month");
    const input_day = document.getElementById("day");

    input_year.style.borderColor = input_month.style.borderColor = input_day.style.borderColor = "hsl(0, 0%, 86%)";

    const label_year = document.getElementById("label-year");
    const label_month = document.getElementById("label-month");
    const label_day = document.getElementById("label-day");

    label_year.style.color = label_month.style.color = label_day.style.color = "hsl(0, 1%, 44%)";

    const warning_year_one = document.getElementsByClassName("warning-year-one");
    const warning_year_two = document.getElementsByClassName("warning-year-two");
    const warning_month = document.getElementsByClassName("warning-month");
    const warning_day = document.getElementsByClassName("warning-day");

    warning_year_one[0].style.display = warning_year_two[0].style.display = warning_month[0].style.display = warning_day[0].style.display = 'none';

    const warning_date = document.getElementsByClassName("warning-date");

    warning_date[0].style.display = 'none';

    const today = new Date();
    const birth = new Date(year, month - 1, day);

    let flag = true;
    const lastDayOfMonth = new Date(birth.getFullYear(), birth.getMonth() + 1, 0).getDate();

    if (year < 1 || year > today.getFullYear() || isNaN(year)) {
      if(year > today.getFullYear()) {
        warning_year_one[0].style.display = 'block';
      }  else {
        warning_year_two[0].style.display = 'block';
      }

      input_year.style.borderColor = "hsl(0, 100%, 67%)";
      label_year.style.color = "hsl(0, 100%, 67%)";
      flag = false;
    }
    if (month < 1 || month > 12 || isNaN(month)) {
      warning_month[0].style.display = 'block';
      input_month.style.borderColor = "hsl(0, 100%, 67%)";
      label_month.style.color = "hsl(0, 100%, 67%)";
      flag = false;
    }
    if (day < 1 || day > 31 || isNaN(day)) {
      warning_day[0].style.display = 'block';
      input_day.style.borderColor = "hsl(0, 100%, 67%)";
      label_day.style.color = "hsl(0, 100%, 67%)";
      flag = false;
    }

    if(year <= today.getFullYear() && (today < birth || day > lastDayOfMonth)) {
      warning_year_one[0].style.display = warning_year_two[0].style.display = warning_month[0].style.display = warning_day[0].style.display = 'none';
      warning_date[0].style.display = 'block';
      input_year.style.borderColor = input_month.style.borderColor = input_day.style.borderColor = "hsl(0, 100%, 67%)";
      label_year.style.color = label_month.style.color = label_day.style.color = "hsl(0, 100%, 67%)";
      flag = false;
    }

    if (flag) {
      let y = today.getFullYear() - birth.getFullYear();
      let m = today.getMonth() - birth.getMonth();
      let d = today.getDate() - birth.getDate();

      if (d < 0) {
        m -= 1;
        d += lastDayOfMonth;
      }

      if (m < 0) {
        y -= 1;
        m += 12;
      }

      setYears(y);
      setMonths(m);
      setDays(d);

      return;
    }

    setYears('--');
    setMonths('--');
    setDays('--');
  }

  return (
    <div className="App">
      <div>
        <Form setYear={setYear} setMonth={setMonth} setDay={setDay} />
      </div>
      <div>
        <CalcButton handleDateChange={handleDateChange} />
      </div>
      <div>
        <DisplayResult years={years.toString()} months={months.toString()} days={days.toString()} />
      </div>
    </div>
  );
}

export default App;
