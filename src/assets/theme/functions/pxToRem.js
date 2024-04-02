/**
=========================================================
* ControlWorks - v0.1.0
=========================================================

* Product Page: https://controlworksbas.com/
* Copyright 2024 ControlWorks BAS

 =========================================================

*/

/**
  The pxToRem() function helps you to convert a px unit into a rem unit, 
 */

function pxToRem(number, baseNumber = 16) {
  return `${number / baseNumber}rem`;
}

export default pxToRem;
