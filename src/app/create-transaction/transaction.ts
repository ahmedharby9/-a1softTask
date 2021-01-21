export interface Transaction {
  account_id?: string;
  amount?: number;
  approved?: boolean;
  category_id?: string;
  cleared?: string;
  date?: string;
  deleted?: boolean;
  flag_color?: string;
  id?: string;
  import_id?: string;
  matched_transaction_id?: string;
  memo?: string;
  payee_id?: string;
  transfer_account_id?: string;
  transfer_transaction_id?: string;
}
