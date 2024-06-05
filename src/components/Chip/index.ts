import CardChip from './CardChip';
import CategoryChip from './CategoryChip';
import StatusChip from './StatusChip';
import TypeChip from './TypeChip';

export const Chip = Object.assign(TypeChip, {
  Category: CategoryChip,
  Status: StatusChip,
  Card: CardChip,
});
