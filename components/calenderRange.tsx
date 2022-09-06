import React, {useEffect, useRef} from 'react';
import {addDays, isSameDay} from 'date-fns';
import { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker, RangeKeyDict, defaultStaticRanges } from 'react-date-range';

export interface IOnChange {
  startDate: Date;
  endDate: Date;
  key: string;
}

export type TDefaultStaticDate =
  | 'a night'
  | '2 nights'
  | '3 nights'
  | '4 nights'
  | '5 nights'
  | 'a month'
  | 'Custom';

export interface IOnChangeArgs {
  startDate: string;
  endDate: string;
  key: string;
  label?: string;
}

const rangeData = [
  {
    label: 'a night',
    startDate: addDays(new Date(), 0),
    endDate: addDays(new Date(), 1),
  },
  {
    label: '2 nights',
    startDate: addDays(new Date(), 0),
    endDate: addDays(new Date(), 2),
  },
  {
    label: '3 nights',
    startDate: addDays(new Date(), 0),
    endDate: addDays(new Date(), 3),
  },
  {
    label: '4 nights',
    startDate: addDays(new Date(), 0),
    endDate: addDays(new Date(), 4),
  },
  {
    label: '5 nights',
    startDate: addDays(new Date(), 0),
    endDate: addDays(new Date(), 5),
  },
  {
    label: 'a month',
    startDate: addDays(new Date(), 0),
    endDate: addDays(new Date(), 30),
  },
];

interface ICustomCalenderProps {
  defaultLabel?: TDefaultStaticDate;
  dateValue: IOnChange;
  onChange(values: any): void;
}

function CalenderRange({defaultLabel, onChange, dateValue}: ICustomCalenderProps) {

  const [selectedLabel, setSelectedLabel] = useState<string>();
  const isStaticRange = useRef<'static' | 'custom'>('static');

  const handleSelectionChange = (item:any) => {
    console.log(item)
    onChange(item.selection)
  }

  const handleLabel = (label: string = '') => {
    setSelectedLabel(label);
  };

  useEffect(() => {
    setSelectedLabel(defaultLabel);
  }, []);


  return (
    <DateRangePicker
      onChange={handleSelectionChange}
      showDateDisplay={false}
      moveRangeOnFirstSelection={false}
      ranges={[dateValue]}
      months={1}
      renderStaticRangeLabel={(staticLabels) => {
        return (
          <span
            id={`${staticLabels.label}`}
            onClick={() => handleLabel(staticLabels.label)}
          >
                {staticLabels.label}
              </span>
        );
      }}
      staticRanges={[
      ...rangeData.map((data) => ({
        label: data.label,
        range: () => ({
          startDate: data.startDate,
          endDate: data.endDate,
        }),
        isSelected(range: {}) {
          const definedRange = this.range();
          // @ts-ignore
          let sameDay = isSameDay(range.startDate, definedRange.startDate);
          // @ts-ignore
          let sameDay2 = isSameDay(range.endDate, definedRange.endDate);
          return sameDay && sameDay2;
        },
        hasCustomRendering: true,
      })),
      ]}
      // showMonthAndYearPickers={false}
      minDate={addDays(new Date(), 0)}
    />
  );
}

export default CalenderRange;