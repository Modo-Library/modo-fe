import { colors } from '@packages/styles/config';

import { ReactComponent as LocationIcon } from './icons/location.circle.fill.svg';

export default function BookListRow() {
  return (
    <div className="relative w-full flex gap-5 bg-white p-4">
      <div className="min-w-[107px] min-h-[107px] rounded-xl bg-gray100"></div>
      <div className="w-full flex flex-col justify-between">
        <div>
          <div className="flex justify-between w-full">
            <p>데미안 서적 팔아요</p>
            <div className="flex items-center gap-1">
              <LocationIcon fill={colors.gray100} />
              <p className="text-gray100">1km</p>
            </div>
          </div>
          <div className="rounded-full px-2 py-0.5 bg-brown30 w-max min-w-[64px] text-center text-white text-xs">
            대여가능
          </div>
        </div>
        <div className="text-right font-bold align-baseline">20,000원</div>
      </div>
    </div>
  );
}
