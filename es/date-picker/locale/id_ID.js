import CalendarLocale from 'rc-picker/es/locale/id_ID';
import TimePickerLocale from '../../time-picker/locale/id_ID';
// Merge into a locale object
const locale = {
  lang: Object.assign(
    {
      placeholder: 'Pilih tanggal',
      rangePlaceholder: ['Mulai tanggal', 'Tanggal akhir'],
    },
    CalendarLocale,
  ),
  timePickerLocale: Object.assign({}, TimePickerLocale),
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
export default locale;
