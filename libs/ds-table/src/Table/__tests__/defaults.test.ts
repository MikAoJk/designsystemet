import {
  getDataCellAsDefault,
  getHeaderCellAsDefault,
  getTableCellAlignmentDefault,
  getTableRowExpandButtonPositionDefault,
  getTableSumAlignmentDefault,
  getTableVariantDefault,
} from '../defaults';

describe('Table defaults', () => {
  it('Når getTableVariantDefault kalles, så returnerer den riktig verdi', () => {
    expect(getTableVariantDefault()).toBe('standard');
  });
  it('Når getDataCellAsDefault kalles, så returnerer den riktig verdi', () => {
    expect(getDataCellAsDefault()).toBe('td');
  });
  it('Når getHeaderCellAsDefault kalles, så returnerer den riktig verdi', () => {
    expect(getHeaderCellAsDefault()).toBe('th');
  });
  it('Når getTableRowExpandButtonPositionDefault kalles, så returnerer den riktig verdi', () => {
    expect(getTableRowExpandButtonPositionDefault()).toBe('left');
  });
  it('Når getTableCellAlignmentDefault kalles, så returnerer den riktig verdi', () => {
    expect(getTableCellAlignmentDefault()).toBe('left');
  });
  it('Når getTableSumAlignmentDefault kalles, så returnerer den riktig verdi', () => {
    expect(getTableSumAlignmentDefault()).toBe('right');
  });
});
