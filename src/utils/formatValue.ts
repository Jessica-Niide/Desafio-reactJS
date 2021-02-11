import { createUnionOrIntersectionTypeNode } from 'typescript';

const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

export default formatValue;
