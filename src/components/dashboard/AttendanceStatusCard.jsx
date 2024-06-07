import {
  IoCheckmarkCircleOutline,
  IoPersonAddOutline,
  IoCloseCircleOutline,
} from "react-icons/io5";
import CardColumn from "./CardColumn";

export default function AttendanceStatusCard({ guests }) {
  // Calculate the total number of guests, including plus ones
  console.log(guests);
  const totalGuests = guests.reduce((total, guest) => {
    if (guest.plus_ones) {
      return total + guest.plus_ones?.length + 1;
    } else {
      return total + 1;
    }
  }, 0);

  // Calculate the number of guests in each status
  const attending = guests.filter(
    (guest) => guest.status === "attending"
  ).length;
  const notAttending = guests.filter(
    (guest) => guest.status === "rejected"
  ).length;

  // Calculate the number of plus ones
  const plusOnes = guests.reduce((total, guest) => {
    if (guest.plus_ones) {
      return total + guest.plus_ones?.length;
    } else {
      return total;
    }
  }, 0);

  // Calculate the percentage of guests in each status
  const attendingPercentage = (attending / totalGuests) * 100;
  const notAttendingPercentage = (notAttending / totalGuests) * 100;
  const plusOnesPercentage = (plusOnes / totalGuests) * 100;

  return (
    <div className="bg-white col-span-12  w-full p-4 rounded-lg">
      <h2 className="text-3xl mb-4 font-medium text-center">
        {totalGuests} Guests
      </h2>
      <div className="flex flex-row gap-4 w-full justify-between mb-4">
        <CardColumn
          icon={<IoCheckmarkCircleOutline className="text-green-500" />}
          title={attending}
          subtitle="Attending"
          alignItems="start"
        />
        <CardColumn
          icon={<IoPersonAddOutline className="text-yellow-500" />}
          title={plusOnes}
          subtitle="Plus Ones"
          alignItems="center"
        />
        <CardColumn
          icon={<IoCloseCircleOutline className="text-red-500" />}
          title={notAttending}
          subtitle="Not Attending"
          alignItems="end"
        />
      </div>
      <div
        className="w-full h-2 rounded-lg"
        style={{
          background: `linear-gradient(90deg, rgba(0, 113, 5, 1) ${attendingPercentage}%, rgba(238, 150, 17, 1) ${attendingPercentage}% ${
            attendingPercentage + plusOnesPercentage
          }%, rgba(186, 26, 26, 1) ${
            attendingPercentage + plusOnesPercentage
          }% 100%)`,
        }}
      ></div>
    </div>
  );
}
