/* eslint-disable react/prop-types */
import { CheckOtp } from "services/Auth";
import { setCookie } from "src/utils/cookie";

function CheckOtpForm({ code, setCode, setStep, mobile }) {
  const submitHandler = async (event) => {
    event.preventDefault();
    console.log({ code, mobile });

    if (code.length !== 5) return;

    const { response, error } = await CheckOtp(mobile, code);
    if (response) {
      setCookie(response.data);
    }
    if (error) console.log(error.response.data.message);
  };
  return (
    <form onSubmit={submitHandler}>
      <p>تائید کد اس‌ام‌اس شده</p>
      <span>کد پیامک‌‌‌ شده به شماره «{mobile}» را وارد نمایید</span>
      <label htmlFor="input"> کد تائید را وارد کنید</label>
      <input
        type="text"
        id="input"
        placeholder="کد تائید"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button type="submit">ورود</button>
      <button onClick={() => setStep(1)}>تغییر شماره موبایل</button>
    </form>
  );
}

export default CheckOtpForm;
