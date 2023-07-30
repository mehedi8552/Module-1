function calculateGrade(mark) {
    if (mark >= 90 && mark <= 100) {
      return "A";
    } else if (mark >= 80 && mark < 89) {
      return "B";
    } else if (mark >= 70 && mark < 79) {
      return "C";
    } else if (mark >= 60 && mark < 69) {
      return "D";
    } else if (mark <= 59) {
      return "F";
    }
  }
  
  // Example usage:
  const userInput = prompt("Enter the student's score:");
  const mark = parseFloat(userInput);
  const grade = calculateGrade(mark);
  document.write(`The student grade is: ${grade}`);