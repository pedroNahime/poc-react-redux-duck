import {runSaga} from 'redux-saga'
import {Creators as userActions} from "../../../ducks/User";
import {getUser} from '../index'
import api from '../../../../services/api'

const dispatchedActions = [];
const fakeStore = {
    dispatch: action => dispatchedActions.push(action)
};

test('should load data in case of success', async () => {
    const mockData = {"data": {"results": [{"name": {"first": "name"}}]}};

    api.get = jest.fn().mockResolvedValue(mockData);
    await runSaga(fakeStore, getUser).done;
    expect(api.get.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(
        userActions.successUser(mockData.data.results),
    );
});

test('should return error in case of failure', async () => {

    api.get = jest.fn().mockRejectedValue();
    await runSaga(fakeStore, getUser).done;
    expect(api.get.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(
        userActions.errorUser(),
    );
});