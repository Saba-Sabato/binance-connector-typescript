import { expect } from '@jest/globals';
import { OrderListAboveBelowType, Side, Spot } from '../../../src/index';
import { mockResponse } from '../../mock_values/restful/trade/newOco';

jest.mock('../../../src/index');

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';

describe('New OCO', () => {
    const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });
    it('should return New OCO', async () => {
        const spy = jest.spyOn(client, 'newOco').mockReturnValue(Promise.resolve(mockResponse));
        const res = await client.newOco('BNBUSDT', Side.SELL, 1,  OrderListAboveBelowType.STOP_LOSS, OrderListAboveBelowType.LIMIT_MAKER);
        expect(res).toBeDefined();
        expect(res).toBe(mockResponse);
        spy.mockRestore();
    });
});
