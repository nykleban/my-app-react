import { useRef, useState } from "react";

export default function Registration() {
  const emailRef = useRef();
  const genderRef = useRef();
  const ageRef = useRef();
  const passwordRef = useRef();
  const nicknameRef = useRef();

  const [submittedUser, setSubmittedUser] = useState(null);

  function submit(e) {
    e.preventDefault();
    const user = {
      nickname: nicknameRef.current.value,
      password: passwordRef.current.value,
      age: ageRef.current.value,
      email: emailRef.current.value,
      gender: genderRef.current.value,
    };
    setSubmittedUser(user);
  }

  return (
    <div className="Registration">
      <h2>Реєстрація</h2>
      <form onSubmit={submit}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
          }}
        >
          <label>
            Нікнейм:
            <input type="text" name="nickname" ref={nicknameRef} />
          </label>
          <label>
            Електронна пошта:
            <input type="email" name="email" ref={emailRef} />
          </label>
          <label>
            Стать:
            <select name="gender" ref={genderRef}>
              <option value="">Оберіть стать</option>
              <option value="male">Хлопець</option>
              <option value="female">Дівчина</option>
            </select>
          </label>
          <label>
            Пароль:
            <input type="password" name="password" ref={passwordRef} />
          </label>
        </div>
        <br />
        <label>
          Вік:
          <input type="number" name="age" min="0" ref={ageRef} />
        </label>
        <br />
        <button type="submit" className="btn-primary">
          Зареєструватися
        </button>
      </form>

      {submittedUser && ( // поміг гпт, не знав як це зробити
        <div style={{textAlign: "left", marginTop: "20px", background: "black", padding: "16px", borderRadius: "8px" }}>
          <h3>Введені дані:</h3>
          <p><b>Нікнейм:</b> {submittedUser.nickname}</p>
          <p><b>Електронна пошта:</b> {submittedUser.email}</p>
          <p><b>Стать:</b> {submittedUser.gender === "male" ? "Хлопець" : submittedUser.gender === "female" ? "Дівчина" : ""}</p>
          <p><b>Пароль:</b> {submittedUser.password}</p>
          <p><b>Вік:</b> {submittedUser.age}</p>
        </div>
      )}
    </div>
  );
}