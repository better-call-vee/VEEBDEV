/*
JAVASCRIPT DATE AND TIME
   - The Date object in JavaScript is used to work with dates and times.
   - It provides methods to get, set, and manipulate date and time values.
   - Essential for tasks like scheduling, timestamps, and real-time updates.
*/

// Example 1: Creating a Date Object
// Scenario: Record the current date and time when a WWE event starts.
const eventStart = new Date(); // Current date and time
console.log(`Event Start Time: ${eventStart}`); // Output: Current date and time

// Example 2: Creating Specific Dates
// Scenario: Schedule a WWE PPV event on a specific date.
const ppvDate = new Date(2024, 2, 31); // Year, Month (0-based), Day
console.log(`PPV Date: ${ppvDate}`); // Output: March 31, 2024 (Note: Months are 0-based)

// Example 3: Getting Date Components
// Scenario: Extract year, month, and day from a wrestler's debut date.
const debutDate = new Date(2010, 9, 22); // October 22, 2010
const year = debutDate.getFullYear();
const month = debutDate.getMonth() + 1; // Months are 0-based, so add 1
const day = debutDate.getDate();
console.log(`Debut Date: ${year}-${month}-${day}`); // Output: 2010-10-22

// Example 4: Getting Time Components
// Scenario: Log the start time of a wrestling match.
const matchStart = new Date();
const hours = matchStart.getHours();
const minutes = matchStart.getMinutes();
const seconds = matchStart.getSeconds();
console.log(`Match Start Time: ${hours}:${minutes}:${seconds}`); // Output: Current time in HH:MM:SS

// Example 5: Setting Date and Time
// Scenario: Reschedule a WWE event to a new date and time.
const rescheduledDate = new Date();
rescheduledDate.setFullYear(2027); // Set year to 2027
rescheduledDate.setMonth(5); // Set month to June (0-based)
rescheduledDate.setDate(15); // Set day to 15
rescheduledDate.setHours(19); // Set hour to 7 PM
rescheduledDate.setMinutes(30); // Set minutes to 30
console.log(`Rescheduled Event: ${rescheduledDate}`); // Output: June 15, 2027, 19:30

// Example 6: Calculating Time Differences
// Scenario: Calculate the duration of a wrestling match.
const matchStartTime = new Date(2023, 9, 10, 19, 0); // October 10, 2023, 7:00 PM
const matchEndTime = new Date(2023, 9, 10, 21, 30); // October 10, 2023, 9:30 PM
const durationMs = matchEndTime - matchStartTime; // Difference in milliseconds
const durationMinutes = Math.floor(durationMs / (1000 * 60)); // Convert to minutes
console.log(`Match Duration: ${durationMinutes} minutes`); // Output: Match Duration: 150 minutes

// Example 7: Formatting Dates
// Scenario: Display a WWE event date in a user-friendly format.
function formatDate(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options); // Region format 
}
const eventDate = new Date(2024, 2, 31); // March 31, 2024
console.log(`Formatted Event Date: ${formatDate(eventDate)}`); // Output: Sunday, March 31, 2024

// Example 8: Timestamps and Epoch Time
// Scenario: Generate a timestamp for a wrestler's contract signing.
const contractSigning = new Date();
const timestamp = contractSigning.getTime(); // Milliseconds since January 1, 1970 (Epoch time)
console.log(`Contract Signing Timestamp: ${timestamp}`); // Output: Milliseconds since Epoch

// Example 9: Parsing Dates
// Scenario: Parse a date string to determine how long ago a wrestler debuted.
const debutString = "October 22, 2010";
const parsedDate = new Date(debutString);
const currentDate = new Date();
const timeDifference = currentDate - parsedDate; // Difference in milliseconds
const yearsSinceDebut = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
console.log(`Years Since Debut: ${yearsSinceDebut}`); // Output: Years since October 22, 2010

// Example 10: Time Zones
// Scenario: Display the time of a WWE event in different time zones.
const eventTimeUTC = new Date(Date.UTC(2024, 2, 31, 19, 0)); // UTC time
console.log(`Event Time (UTC): ${eventTimeUTC.toISOString()}`); // Output: ISO format in UTC
console.log(`Event Time (Local): ${eventTimeUTC.toString()}`); // Output: Local time zone

/*
KEY METHODS OF THE DATE OBJECT
   - Creation: new Date(), new Date(year, month, day, hours, minutes, seconds, ms)
   - Getters: getFullYear(), getMonth(), getDate(), getHours(), getMinutes(), getSeconds(), getTime()
   - Setters: setFullYear(), setMonth(), setDate(), setHours(), setMinutes(), setSeconds()
   - Formatting: toLocaleDateString(), toISOString(), toString()
   - Timestamps: getTime(), Date.now()
*/