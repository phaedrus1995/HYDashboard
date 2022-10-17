import React from 'react';

export interface Deadline {
    readonly customerId: string;
    readonly customerName: string;
    readonly deadline: string;

}

export interface DeadlineProps {
    deadline: Deadline[]
}


export const DeadlineReminder: React.FC<DeadlineProps> = ({ deadline }: DeadlineProps) => {
    return <div>
        {deadline.map(company => <div>{ `${ company.customerName }`}</div>)}
    </div>
}