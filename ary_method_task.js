//============================================================
  // ✅ JAVASCRIPT ARRAY METHODS: 20 SOLUTIONS
//============================================================ */

// Q1. Shopping List – Price Increase (map)
const prices1 = [100, 200, 300];
const increasedPrices = prices1.map(price => price + 20);

// Q2. Exam Marks – Passing Students (filter)
const marks2 = [35, 60, 45, 20, 80];
const passingMarks = marks2.filter(mark => mark >= 40);

// Q3. Attendance Check (some)
const attendance3 = [80, 90, 70, 85];
const lowAttendance = attendance3.some(day => day < 75);

// Q4. Find First Discounted Item (find)
const prices4 = [1200, 800, 450, 600];
const firstDiscounted = prices4.find(price => price < 500);

// Q5. Salary Calculation (filter -> map -> reduce)
const salaries5 = [18000, 25000, 30000, 15000];
const totalSalaryPayout = salaries5
    .filter(s => s > 20000)
    .map(s => s + 2000)
    .reduce((acc, curr) => acc + curr, 0);

// Q6. Product Quality Check (every)
const ratings6 = [4, 5, 4, 4];
const allPassedCheck = ratings6.every(r => r >= 4);

// Q7. Daily Expenses – Total (reduce)
const expenses7 = [200, 150, 300, 100];
const totalExpenses = expenses7.reduce((acc, curr) => acc + curr, 0);

// Q8. Scores Update (filter -> map)
const scores8 = [45, 60, 80, 30, 70];
const updatedScores = scores8.filter(s => s > 50).map(s => s + 10);

// Q9. Array Destructuring – Top Scores
const scores9 = [95, 90, 85, 80];
const [top1, top2] = scores9;

// Q10. Shopping Cart Merge (spread)
const cart1 = [200, 400], cart2 = [300, 500];
const fullCart = [...cart1, ...cart2];

// Q11. Expense Validation (every)
const expenses11 = [200, 450, 800, 1200];
const isWithinBudget = expenses11.every(e => e < 1000);

// Q12. Transaction Analysis (find & some)
const tx12 = [500, -200, 1200, 300];
const firstHighTx = tx12.find(t => t > 1000);
const hasNegativeTx = tx12.some(t => t < 0);

// Q13. Student Result Summary (filter -> reduce)
const marks13 = [30, 45, 60, 25, 80];
const passed13 = marks13.filter(m => m >= 40);
const avgPassed = passed13.reduce((a, b) => a + b, 0) / passed13.length;

// Q14. Temperature Alert System (some & every)
const temps14 = [22, 30, 45, 28];
const dangerZone = temps14.some(t => t > 40);
const allAbove20 = temps14.every(t => t > 20);

// Q15. Spread + Reduce Combo ⭐
const a15 = [1, 2, 3], b15 = [4, 5, 6];
const combinedSum = [...a15, ...b15].reduce((acc, curr) => acc + curr, 0);

// Q16. Bonus Eligibility (every)
const scores16 = [60, 70, 80, 90];
const classAvg = scores16.reduce((a, b) => a + b) / scores16.length;
const everyAboveAvg = scores16.every(s => s > classAvg);

// Q17. First Valid Input (find)
const inputs17 = ['', '', 'name', 'email'];
const firstVal = inputs17.find(i => i !== '');

// Q18. Salary Spread (copy + add)
const sal18 = [20000, 30000, 40000];
const newSalaries = [...sal18, 50000];

// Q19. Performance Check (some & every)
const perf19 = [55, 65, 45, 80];
const anyLow = perf19.some(s => s < 50);
const allStable = perf19.every(s => s > 40); // Logical check: all above 40

// Q20. Interview Finisher ⭐⭐
const x20 = [1, 2, 3], y20 = [4, 5, 6];
const finisherResult = [...x20, ...y20]
    .filter(n => n % 2 === 0)
    .map(n => n ** 2)
    .reduce((acc, curr) => acc + curr, 0);

console.log("Q20 Result:", finisherResult); // Output: 56 (4 + 16 + 36)