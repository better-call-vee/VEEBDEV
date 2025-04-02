/*
  🛠️ JavaScript Debugging Cheat Sheet

  ✅ Common Console Methods:

  1️⃣ console.log() – Basic logging:
     ▶ console.log("Hello, world!");
     ✅ Use for general-purpose output.

  2️⃣ console.warn() – Warning message:
     ▶ console.warn("This is a warning!");
     ⚠️ Highlight potential issues (yellow text in most browsers).

  3️⃣ console.error() – Error message:
     ▶ console.error("Something went wrong!");
     ❌ Displays error messages (red text).

  4️⃣ console.info() – Informational message:
     ▶ console.info("Here is some info.");
     ℹ️ Similar to log, may be styled differently in some browsers.

  5️⃣ console.debug() – Debug-level info:
     ▶ console.debug("Debugging info here");
     🐞 Useful when filtering log levels (hidden by default in some browsers).

  6️⃣ console.dir() – View object properties as a tree:
     ▶ console.dir(document.body);
     🌳 Great for inspecting DOM or deeply nested objects.

  7️⃣ console.table() – Tabular data display:
     ▶ console.table([{ name: "John", age: 25 }, { name: "Jane", age: 30 }]);
     📊 Clean tabular view for arrays/objects.

  🔁 console.group() / console.groupEnd():
     ▶ console.group("User Info");
       console.log("Name: John");
       console.log("Age: 25");
     ▶ console.groupEnd();
     📦 Organizes logs in collapsible groups.

  🔄 console.time() / console.timeEnd():
     ▶ console.time("loop");
       for (let i = 0; i < 100000; i++) {}
     ▶ console.timeEnd("loop");
     ⏱️ Measures how long code takes to run.

  💡 Advanced Tip:
  - console.assert(condition, message)
    ▶ console.assert(2 + 2 === 5, "Math is broken!");
    ❗ Only logs if the condition is false.

  📝 Notes:
  - Open DevTools (F12 or right-click > Inspect) to view console.
  - Use these tools to trace bugs, inspect data, and measure performance.
  - Clean up logs before production deployment!


  Now:
   1️⃣ What is a Breakpoint?
     🔹 A breakpoint pauses the code execution at a specific line.
     🔹 Lets you inspect variables, the call stack, and execution flow *before* proceeding.

  2️⃣ How to Set a Breakpoint:

     ✅ Open DevTools (F12 or Right-click → Inspect → Console/Debugger)
     ✅ Go to the "Sources" tab
     ✅ Click on the line number in your JavaScript file

     ▶ The blue mark on the line means a breakpoint is active.

  3️⃣ How to Use It:

     ▶ Refresh your page — execution will pause at the breakpoint
     ▶ Inspect variables on the right (Scope, Call Stack, Watch)
     ▶ Use control buttons to step through the code:
        - ▶️ Continue (F8) – Run to next breakpoint
        - ⏭ Step Over (F10) – Next line, skip inside functions
        - ⏬ Step Into (F11) – Dive into function calls
        - ⏹ Step Out (Shift+F11) – Exit current function

  🔙 Backtracking vs. 🔜 Forward Tracking:

  🌀 Forward Tracking:
     🔹 Watching how data changes as the code moves *forward*.
     🔹 Use "Step Over" and "Step Into" to follow logic line by line.
     🔹 Useful for understanding flow and logic.

  🔄 Backtracking (not native, but simulated):
     🔹 Manually go back in code to re-run it.
     🔹 Or, place multiple breakpoints earlier to "simulate" going back.
     🔹 Use *Watch expressions* or *Console* to re-test old values.

     ⚠️ JavaScript doesn't support true reverse debugging by default.
     For advanced backtracking:
     - Use browser extensions/tools (like Time Travel Debugging in VSCode or Redux DevTools for React apps)
     - Add manual `console.log()` checkpoints in your code

  🧰 Pro Tip:
  - Use the "Watch" panel in DevTools to track specific variables.
  - Use the "Call Stack" panel to trace how you got to the current function.
  - Use conditional breakpoints by right-clicking a line number:
    ▶ Add condition: `index > 5 && item === 'apple'`

  📝 Final Notes:
  - Debugging is not just fixing errors — it’s understanding *why* they happen.
  - Combine breakpoints with `console.log()` for full control.
  - Always debug in development mode — remove logs and breakpoints before deploying.

*/
