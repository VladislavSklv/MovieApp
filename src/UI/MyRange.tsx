import classnames from 'classnames';
import React, { useCallback, useEffect, useRef } from 'react';

interface myRangeProps {
    min: number;
    max: number;
    minRange: number;
    maxRange: number;
    onChange?:  any;
    setMinRange: React.Dispatch<React.SetStateAction<number>>;
    setMaxRange: React.Dispatch<React.SetStateAction<number>>;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    label?: string;
}

const MyRange: React.FC<myRangeProps> = ({setPage, setMinRange, setMaxRange, min, max, minRange, maxRange, label}) => {
    const range = useRef<HTMLDivElement>(null)
    const minRangeRef = useRef<HTMLInputElement>(null);
    const maxRangeRef = useRef<HTMLInputElement>(null);
    
    // Convert to percentage
    const getPercent = useCallback((value: number) => {
        return Math.round(((value - min) / (max - min)) * 100);
    }, [min, max]);

    // Set width of the range to decrease from the left side
    useEffect(() => {
        if (maxRangeRef.current) {
            const minPercent: number| any = getPercent(minRange);
            const maxPercent: number | any = getPercent(+maxRangeRef.current.value); 

            if (range.current) {
                range.current.style.left = `${minPercent}%`;
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [minRange]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        if (minRangeRef.current) {
            const minPercent: any | number = getPercent(+minRangeRef.current.value);
            const maxPercent: any | number = getPercent(maxRange);

            if (range.current) {
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [maxRange]);

    return (
        <div>
            <label htmlFor="default-range" className="block mt-2 mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
            <input
                type="range"
                min={min}
                max={max}
                value={minRange}
                ref={minRangeRef}
                onChange={(event) => {
                    const value = Math.min(+event.target.value, maxRange - 1);
                    setMinRange(value);
                    setPage(1);
                    event.target.value = value.toString();
                }}
                className={classnames("thumb z-[3]", {
                    "thumb--zindex-5": minRange > max - 100
                })}
            />
            <input
                type="range"
                min={min}
                max={max}
                value={maxRange}
                ref={maxRangeRef}
                onChange={(event) => {
                    const value = Math.max(+event.target.value, minRange + 1);
                    setMaxRange(value);
                    setPage(1);
                    event.target.value = value.toString();
                }}
                className="thumb z-[4]"
            />
            <div className="relative w-[300px] mb-[40px] sm:mb-[0]">
                <div className="slider__track rounded h-[5px] absolute z-[1] bg-gray-200 w-[100%]" />
                <div ref={range} className="slider__range" />
                <div className="slider__left-value text-[12px] mt-[20px] absolute left-[6px]">от {minRange}</div>
                <div className="slider__right-value text-[12px] mt-[20px] absolute right-[2px]">до {maxRange}</div>
            </div>
        </div>
    );
};

export default MyRange;