import { Customer } from "./Customer";

export interface UserManagement {

    updateUserProfile(customer: Customer): void;
    changePassword(customer: Customer, newPassword: string);

}
