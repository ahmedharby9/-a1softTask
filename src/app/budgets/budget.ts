import {Account} from "../budget-accounts/account";
import {Currency} from "./currency";
import {Transaction} from "../create-transaction/transaction";

export interface Budget {
  accounts?: Account[];
  categories?: any[];
  category_groups?: any[];
  currency_format?: Currency;
  first_month?: string;
  id: string;
  last_modified_on?: string;
  last_month?: string;
  name?: string;
  payees?: any[];
  transactions?: Transaction[];
}
