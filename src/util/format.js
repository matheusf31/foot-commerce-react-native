import { NumberFormat } from 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export const { format: formatPrice } = new NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
