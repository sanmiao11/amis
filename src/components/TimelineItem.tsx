import React, {ReactNode, useState} from 'react';
import {localeable, LocaleProps} from '../locale';
import {SchemaExpression} from '../Schema';
import {themeable, ThemeProps} from '../theme';
import {Icon} from './icons';

export interface TimelineItemProps {
  /**
   * 时间点
   */
  time: string;

  /**
   * 事件名称
   */
  title?: string| ReactNode;

  /**
    * 详细内容
    */
  detail?: string;

  /**
   * detail折叠时文案
   */
  detailCollapsedText?: string;

   /**
    * detail展开时文案
    */
  detailExpandedText?: string;

  /**
   * 时间点圆圈颜色,可传入英文/颜色值/level样式（info、success、warning、danger）
   */
  color?: SchemaExpression;

  /**
   * 图标
   */
  icon?: string | ReactNode;
}

export interface TimelineItem extends ThemeProps, LocaleProps, TimelineItemProps {}

export function TimelineItem(props: TimelineItem) {
  const {
    time,
    title,
    detail,
    detailCollapsedText,
    detailExpandedText,
    color,
    icon,
    classnames: cx,
    translate: __,
  } = props;

  const [detailVisible, setDetailVisible] = useState<boolean>(false);

  const renderDetail = (detail: string, detailCollapsedText: string = __('Timeline.collapseText'), detailExpandedText: string = __('Timeline.expandText')) : ReactNode => {

    return (
      <>
        <div className={cx('TimelineItem-detail-button')} onClick={() => setDetailVisible(!detailVisible)}>
          {detailVisible ? detailExpandedText : detailCollapsedText}
          <div className={cx('TimelineItem-detail-arrow', `${detailVisible && 'TimelineItem-detail-arrow-top'}`)}>
            <Icon icon="tree-down"/>
          </div>
        </div>
        <div className={cx(`${detailVisible ? 'TimelineItem-detail-visible' : 'TimelineItem-detail-invisible'}`)}>
          {detail}
        </div>
      </>);
  }

  // 判断是否为颜色值
  const isColorVal = color && /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(color);

  // 取level级颜色
  const levelColor = !isColorVal && color;

  return (
    <div className={cx('TimelineItem')}>
      <div className={cx('TimelineItem-axle')}>
        <div className={cx('TimelineItem-line')}></div>
        {icon
          ? <div className={cx('TimelineItem-icon')}>
              <Icon icon={icon} className="icon"/>
            </div>
          : <div
              className={cx('TimelineItem-round',
                            levelColor && `TimelineItem-round--${levelColor}`)}
              style={isColorVal ? {backgroundColor: color} : undefined}
            ></div>
        }
      </div>
      <div className={cx('TimelineItem-content')}>
        <div className={cx('TimelineItem-time')}>{time}</div>
        <div className={cx('TimelineItem-title')}>{title}</div>
        {detail
          && <div className={cx('TimelineItem-detail')}>{renderDetail(detail, detailCollapsedText, detailExpandedText)}</div>}
      </div>
    </div>)
}

export default themeable(localeable(TimelineItem));
