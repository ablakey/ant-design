import CalendarLocale from 'rc-picker/es/locale/ml_IN';
import TimePickerLocale from '../../time-picker/locale/ml_IN';
// Merge into a locale object
const locale = {
  lang: Object.assign(
    {
      placeholder: 'തിയതി തിരഞ്ഞെടുക്കുക',
      yearPlaceholder: 'വർഷം തിരഞ്ഞെടുക്കുക',
      quarterPlaceholder: 'ത്രൈമാസം തിരഞ്ഞെടുക്കുക',
      monthPlaceholder: 'മാസം തിരഞ്ഞെടുക്കുക',
      weekPlaceholder: 'വാരം തിരഞ്ഞെടുക്കുക',
      rangePlaceholder: ['ആരംഭ ദിനം', 'അവസാന ദിനം'],
      rangeYearPlaceholder: ['ആരംഭ വർഷം', 'അവസാന വർഷം'],
      rangeMonthPlaceholder: ['ആരംഭ മാസം', 'അവസാന മാസം'],
      rangeWeekPlaceholder: ['ആരംഭ വാരം', 'അവസാന വാരം'],
    },
    CalendarLocale,
  ),
  timePickerLocale: Object.assign({}, TimePickerLocale),
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
export default locale;
