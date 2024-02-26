// Add imports
import {getDataByRole, getDataByCompany} from './salaryData.js'

import salaryData from './salaryData.js'

// Get salary by role
const getAverageSalaryByRole = role => {
  const roleData = getDataByRole(role);
  const salariesOfRole = roleData.map(obj => obj.salary);
  return calculateAverage(salariesOfRole);
}

// Get average salary by company
const getAverageSalaryByCompany = company => {
  const companyData = getDataByCompany(company);
  const salariesAtCompany = companyData.map(obj => obj.salary);
  return calculateAverage(salariesAtCompany);
}

// Get salary for role at company
const getSalaryAtCompany = (role, company) => {
  const companyData = getDataByCompany(company);
  const roleAtCompany = companyData.find(obj => obj.role === role);
  return roleAtCompany.salary;
}

// Get average salary across the industry
const getIndustryAverageSalary = () => {
  const allSalaries = salaryData.map(obj => obj.salary);
  return calculateAverage(allSalaries);
}


// Helper Function. Do not edit.
// Note: This function does not need to be exported since it is only used by the functions contained within this module.
function calculateAverage(arrayOfNumbers) {
  let total = 0;
  arrayOfNumbers.forEach(number => total += number);
  return (total / arrayOfNumbers.length).toFixed(2);
}

export {getAverageSalaryByRole, getAverageSalaryByCompany, getSalaryAtCompany, getIndustryAverageSalary}
