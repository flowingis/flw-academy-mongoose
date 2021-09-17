import {Car} from "./car";
import {User} from "./user";

export type Severity = 'LOW' | 'MEDIUM' | 'HIGH';

export type Progress = 'TODO' | 'DOING' | 'DONE';

export type Maintenance = {
    id: string,
    reportingDate: Date,
    car: Car,
    assigner: User,
    assignee: User,
    faultDescription: string
    severity: Severity,
    acceptanceDate: Date | null,
    expectedTerminationDate: Date | null,
    progress: Progress,
    notes: string
}