import {Car} from "./Car";
import {User} from "./User";

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