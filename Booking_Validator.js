const bookings = [
  { roomNumber: 101, startDate: '2025-07-25', endDate: '2025-07-28' },
  { roomNumber: 102, startDate: '2025-07-26', endDate: '2025-07-27' }
];

function isBookingValid(newBooking) {
  const newStart = new Date(newBooking.startDate);
  const newEnd = new Date(newBooking.endDate);

  if (newEnd < newStart) {
    return {
      valid: false,
      message: " Invalid booking: End date cannot be before start date."
    };
  }

  for (const booking of bookings) {
    // Check only for the same room number
    if (booking.roomNumber === newBooking.roomNumber) {
      const existingStart = new Date(booking.startDate);
      const existingEnd = new Date(booking.endDate);

      // Check overlap condition
      const isOverlapping = newStart <= existingEnd && newEnd >= existingStart;

      if (isOverlapping) {
        return {
          valid: false,
          message: ` Booking rejected: Room ${newBooking.roomNumber} is already booked from ${booking.startDate} to ${booking.endDate}.`
        };
      }
    }
  }


  bookings.push(newBooking);
  return {
    valid: true,
    message: ` Booking confirmed for Room ${newBooking.roomNumber} from ${newBooking.startDate} to ${newBooking.endDate}.`
  };
}


console.log(isBookingValid({ roomNumber: 101, startDate: '2025-07-27', endDate: '2025-07-29' }));

console.log(isBookingValid({ roomNumber: 101, startDate: '2025-07-29', endDate: '2025-07-30' }));

console.log(isBookingValid({ roomNumber: 103, startDate: '2025-07-27', endDate: '2025-07-29' }));
