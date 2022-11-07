export const calculateAge = (year) => {
  return new Date().getFullYear() - Number(year);
};

export function plural(number) {
  const lastNum = Number(number.toString().slice(-1));
  if ([2, 3, 4].indexOf(lastNum) >= 0) return " года";
  if (lastNum === 1) return " год";
  return " лет";
}
export default function validator(data, config) {
  const errors = {};
  function validate(validateMethod, data, config) {
    let statusValidate;
    switch (validateMethod) {
      case "isRequired":
        statusValidate = data.trim() === "";
        break;
      case "isDate": {
        const yearRegExp = /^[12][0129][0-9]{2}$/g;
        statusValidate =
          !yearRegExp.test(data) || data > new Date().getFullYear();
        break;
      }
      case "isUrl": {
        const urlRegExp =
          /(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/g;
        statusValidate = !urlRegExp.test(data);
        break;
      }
      default:
        break;
    }
    if (statusValidate) return config.message;
  }
  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      );
      if (error && !errors[fieldName]) {
        errors[fieldName] = error;
      }
    }
  }
  return errors;
}
