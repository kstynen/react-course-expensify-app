import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const totalAmount = selectExpensesTotal([]);
  expect(totalAmount).toBe(0);
});

test('should correctly add up a single expense', () => {
  const totalAmount = selectExpensesTotal([expenses[0]]);
  expect(totalAmount).toBe(195);
});

test('should correctly add up multiple expenses', () => {
  const totalAmount = selectExpensesTotal(expenses);
  expect(totalAmount).toBe(114195);
});