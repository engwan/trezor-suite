import { encodeDataToQueryString } from '../analytics';
import fixtures from '../__fixtures__/analytics';

describe('analytics', () => {
    fixtures.forEach(f => {
        it(f.input.eventType, () => {
            expect(encodeDataToQueryString(f.input, { instanceId: '1', sessionId: '2' })).toEqual(
                f.encoded,
            );
        });
    });
});
