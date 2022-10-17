import { deadlineGrouper } from '../helper';
import { mockDeadline } from '../../App';

describe('deadline grouper', () => {
    it('should group the data', () => {
        const {remaining, thisMonth, nextMonth} = deadlineGrouper(mockDeadline)

        expect(remaining).toEqual([mockDeadline[0]]);
        expect(thisMonth).toEqual([mockDeadline[1]]);
        expect(nextMonth).toEqual([mockDeadline[2]]);
    })
})