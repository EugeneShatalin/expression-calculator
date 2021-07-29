function expressionCalculator(expr) {
    let arr = expr.split('');
    let leftParenthesis = 0, rightParenthesis = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == '0' && arr[i-2] == '/') {
            throw Error("TypeError: Division by zero.");
        }пше

        if(arr[i] == '(') {
            leftParenthesis += 1;
        }
        if(arr[i] == ')') {
            rightParenthesis += 1;
        }
    }

   if(leftParenthesis != rightParenthesis) {
    throw Error("ExpressionError: Brackets must be paired");
   }

   return (new Function('return ' + expr))();

  }

  module.exports = {
    expressionCalculator,
  };