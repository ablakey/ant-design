import dayjsGenerateConfig from 'rc-picker/es/generate/dayjs';
import genPurePanel from '../_util/PurePanel';
import generatePicker from './generatePicker';
const DatePicker = generatePicker(dayjsGenerateConfig);
// We don't care debug panel
/* istanbul ignore next */
const PurePanel = genPurePanel(DatePicker, 'picker');
DatePicker._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;
const PureRangePanel = genPurePanel(DatePicker.RangePicker, 'picker');
DatePicker._InternalRangePanelDoNotUseOrYouWillBeFired = PureRangePanel;
export default DatePicker;
