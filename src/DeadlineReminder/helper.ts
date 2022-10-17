import { Deadline } from './View';
import moment from 'moment';

export const deadlineGrouper = (deadlines:Deadline[]) => {
    const firstDayOfThisMonth = moment().startOf('month');
    const lastDayOfThisMonth = moment().endOf('month');
    const lastDayOfNextMonth = moment().add(1, 'month').endOf('month');

    const remaining = deadlines.filter(deadline => parseInt(deadline.deadline) < firstDayOfThisMonth.valueOf())
    const thisMonth = deadlines.filter(deadline => firstDayOfThisMonth.valueOf() < parseInt(deadline.deadline) &&
        parseInt(deadline.deadline) < lastDayOfThisMonth.valueOf());
    const nextMonth = deadlines.filter(deadline => parseInt(deadline.deadline) < lastDayOfNextMonth.valueOf() &&
        parseInt(deadline.deadline) > lastDayOfThisMonth.valueOf())

    return {remaining, thisMonth, nextMonth}
}