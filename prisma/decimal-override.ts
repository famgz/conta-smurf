import { Decimal } from '@prisma/client/runtime/library';

if (Decimal) {
  (Decimal.prototype as any).toJSON = function () {
    return this.toNumber(); // Convert to number
  };
}
