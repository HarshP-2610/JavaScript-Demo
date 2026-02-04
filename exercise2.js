// --- Q1. Shopping App ---
const prices1 = [200, 800, 1200, 450, 700];
const totalDiscounted = prices1
  .filter(p => p > 500)      // Keep only expensive items
  .map(p => p * 0.9)         // Give 10% off
  .reduce((s, p) => s + p, 0); // Add them all up

// --- Q2. Fitness App ---
const minutes = [20, 45, 60, 15, 90];
const totalCalories = minutes
  .filter(m => m > 30)       // Only active days
  .map(m => m * 5)           // 1 min = 5 calories
  .reduce((s, c) => s + c, 0); // Total calories

// --- Q3. Exam System ---
const marks = [35, 72, 88, 40, 25, 90];
const passed = marks.filter(m => m >= 40); // Only passing marks
const average = passed.reduce((s, m) => s + m, 0) / passed.length; // Sum divided by count

// --- Q4. Salary System ---
const wages = [300, 800, 450, 1000, 600];
const totalPayout = wages
  .filter(w => w > 500)      // Only high wages
  .map(w => w + 100)         // Add bonus
  .reduce((s, w) => s + w, 0); // Total pay

// --- Q5. Online Course ---
const progress = [20, 50, 75, 40, 100];
const totalPoints = progress
  .filter(p => p >= 50)      // Only completed lessons
  .map(p => p * 2)           // Convert % to points
  .reduce((s, p) => s + p, 0); // Total points

// --- Q6. Bank Transactions ---
const transactions = [1000, -500, 2000, -300, 1500];
const creditedAmount = transactions
  .filter(t => t > 0)        // Only money coming in
  .map(t => t * 1.02)        // Add 2% interest
  .reduce((s, t) => s + t, 0); // Final balance

// --- Q7. Game App ---
const scores = [30, 60, 90, 45, 80];
const finalScore = scores
  .filter(s => s > 50)       // High scores only
  .map(s => s + 10)          // Add bonus
  .reduce((s, s2) => s + s2, 0); // Final sum

// --- Q8. E-commerce ---
const prices2 = [500, 1200, 3000, 800, 1500];
const finalAmount = prices2
  .filter(p => p > 1000)     // Premium items
  .map(p => p * 1.18)        // Add 18% tax
  .reduce((s, p) => s + p, 0); // Total payable

// --- Q9. Attendance System ---
const hours = [6, 8, 9, 7, 10];
const totalAttPoints = hours
  .filter(h => h >= 8)       // Full days only
  .map(h => h * 10)          // 1 hour = 10 points
  .reduce((s, p) => s + p, 0); // Total earned

// --- Q10. Interview Brain Teaser ---
const numbers = [1, 2, 3, 4, 5, 6];
const sumOfSquares = numbers
  .filter(n => n % 2 === 0)  // Even only
  .map(n => n * n)           // Square them
  .reduce((s, n) => s + n, 0); // Total sum