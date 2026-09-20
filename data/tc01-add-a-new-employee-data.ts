import { faker } from '@faker-js/faker';

// Define the Interface for your Data Object
export interface EmployeeData {
    firstName: string;
    middleName: string;
    lastName: string;
    employeeId: string;
}

/**
 * Generates an array of fake employee records
 * @param count Number of employee objects to create
 */
export function generateEmployeeData(count: number = 3): EmployeeData[] {
    return Array.from({ length: count }, () => ({
        firstName: faker.person.firstName(),
        middleName: faker.person.middleName(),
        lastName: faker.person.lastName(),
        employeeId: faker.number.int({ min: 100000, max: 999999 }).toString()
    }));
}