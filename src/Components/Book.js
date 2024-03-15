import { React, useContext } from "react";
import Calendar from "react-calendar";
import { format } from "date-fns";
import { Show } from "../Context/Show";
import { Selected } from "../Context/Selected";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export default function Book() {
  const { setChoose, choose } = useContext(Show);
  const { date, setDate, times } = useContext(Selected);

  return (
    <div>
      <button className="text-sm font-bold flex" onClick={() => setChoose("")}>
        <MdOutlineKeyboardArrowLeft size={20} />
        view all styles
      </button>
      {choose.map((x) => {
        return (
          <div className=" p-2 mt-3 ">
            <div className=" border-4  p-2 flex sm:flex-row    mx-auto  flex-col">
              <img
                src={x.map((a) => a.i)}
                alt="look"
                className="rounded-md h-36 max-w-xs "
              />
              <div className="flex flex-col   ml-10 ">
                <h1 className="font-bold">{x.map((a) => a.name)}</h1>
                <p className="text-sm">{x.map((a) => a.time)}</p>
                <h1 className="pt-4 text-sm">- lasts {x.map((a) => a.stay)}</h1>
                <p className="text-sm">- waist length</p>
              </div>
            </div>
            <div className="mt-6">
              <div className=" bg-gray-100  p-2 flex sm:flex  m-2">
                <div className="flex md:flex-row   flex-col">
                  <Calendar
                    view="month"
                    minDate={new Date()}
                    onClickDay={(date) =>
                      setDate((prev) => ({
                        ...prev,
                        theDate: date
                      }))
                    }
                  />
                  {date.theDate ? (
                    <div className="ml-6 mt-3">
                      <h1 className="text-sm font-bold">
                        {date.theDate.toDateString()}
                      </h1>
                      <div className="w-full grid  md:grid-cols-3 sm:grid-cols-2  gap-10 text-center mt-6">
                        {times?.map((time, i) => (
                          <Link to="/Info">
                            <diV key={`time-${i}`} className="   ">
                              <button
                                className="p-5 flex justify-center border-2 font-bold"
                                onClick={() =>
                                  setDate((prev) => ({
                                    ...prev,
                                    theTime: time
                                  }))
                                }
                              >
                                {format(time, "hh:mm")}
                              </button>
                            </diV>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <h1 className="ml-6 mt-2">please select the date</h1>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
