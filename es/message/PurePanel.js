var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  };
import * as React from 'react';
import LoadingOutlined from '@ant-design/icons/es/icons/LoadingOutlined';
import ExclamationCircleFilled from '@ant-design/icons/es/icons/ExclamationCircleFilled';
import CloseCircleFilled from '@ant-design/icons/es/icons/CloseCircleFilled';
import CheckCircleFilled from '@ant-design/icons/es/icons/CheckCircleFilled';
import InfoCircleFilled from '@ant-design/icons/es/icons/InfoCircleFilled';
import { Notice } from 'rc-notification';
import classNames from 'classnames';
import useStyle from './style';
import { ConfigContext } from '../config-provider';
export const TypeIcon = {
  info: /*#__PURE__*/ React.createElement(InfoCircleFilled, null),
  success: /*#__PURE__*/ React.createElement(CheckCircleFilled, null),
  error: /*#__PURE__*/ React.createElement(CloseCircleFilled, null),
  warning: /*#__PURE__*/ React.createElement(ExclamationCircleFilled, null),
  loading: /*#__PURE__*/ React.createElement(LoadingOutlined, null),
};
export function PureContent(_ref) {
  let { prefixCls, type, icon, children } = _ref;
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: classNames(`${prefixCls}-custom-content`, `${prefixCls}-${type}`),
    },
    icon || TypeIcon[type],
    /*#__PURE__*/ React.createElement('span', null, children),
  );
}
/** @private Internal Component. Do not use in your production. */
export default function PurePanel(props) {
  const { prefixCls: staticPrefixCls, className, type, icon, content } = props,
    restProps = __rest(props, ['prefixCls', 'className', 'type', 'icon', 'content']);
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = staticPrefixCls || getPrefixCls('message');
  const [, hashId] = useStyle(prefixCls);
  return /*#__PURE__*/ React.createElement(
    Notice,
    Object.assign({}, restProps, {
      prefixCls: prefixCls,
      className: classNames(className, hashId, `${prefixCls}-notice-pure-panel`),
      eventKey: 'pure',
      duration: null,
      content: /*#__PURE__*/ React.createElement(
        PureContent,
        {
          prefixCls: prefixCls,
          type: type,
          icon: icon,
        },
        content,
      ),
    }),
  );
}
