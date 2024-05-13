import ArrowDownIcon from "../assets/react-icons/ArrowDownIcon";
import DateIcon from "../assets/react-icons/DateIcon";
import LocationIcon from "../assets/react-icons/LocationIcon";
import SearchIcon from "../assets/react-icons/SearchIcon";

function LocationAndDatePicker() {
  return (
    <div className="">
      <div className="items-center inline-flex shadow-lg bg-white rounded-full py-3 px-6 gap-5">
        <LocationIcon />
        <div className="location flex flex-col items-start gap-2 justify-start">
          <div className="flex flex-row items-center gap-2">
            <label className="font-semibold text-[#808080] text-sm">
              Location
            </label>
            <ArrowDownIcon />
          </div>
          <p className="font-bold text-xs text-[#112B3C]">
            Allentown, New Mexico
          </p>
        </div>
        <div className="border-l border-[#808080] opacity-25 py-3 mx-3"></div>
        <DateIcon />
        <div className="date flex flex-col items-start gap-2">
          <div className="flex flex-row items-center gap-2">
            <label className="font-semibold text-[#808080] text-sm">Date</label>
            <ArrowDownIcon />
          </div>
          <p className="font-bold text-xs text-[#112B3C]">04 Aug, 2022</p>
        </div>
        <SearchIcon />
      </div>
    </div>
  );
}

export default LocationAndDatePicker;
