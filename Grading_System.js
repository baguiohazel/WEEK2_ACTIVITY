function calculateGrade(scores) {
  if (!Array.isArray(scores) || scores.length === 0) {
    return "Invalid input: Provide an array of test scores.";
  }

  let adjustedScores = [...scores];

  if (adjustedScores.length > 3) {
    const min = Math.min(...adjustedScores);
    adjustedScores.splice(adjustedScores.indexOf(min), 1);
    console.log(`Dropped lowest score: ${min}`);
  }

  // Compute average
  const total = adjustedScores.reduce((sum, score) => sum + score, 0);
  const average = total / adjustedScores.length;


  let grade;
  if (average >= 90) {
    grade = 'A';
  } else if (average >= 80) {
    grade = 'B';
  } else if (average >= 70) {
    grade = 'C';
  } else if (average >= 60) {
    grade = 'D';
  } else {
    grade = 'F';
  }

  return {
    average: average.toFixed(2),
    grade: grade
  };
}


console.log(calculateGrade([90, 80, 70, 100])); 

console.log(calculateGrade([88, 76, 94])); 
