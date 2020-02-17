import Creators, {UserTypes, INITIAL_STATE, get, success, error, reducers} from "../index";

describe('Types', () => {
    test('should export the expected action types', () => {
        expect(UserTypes).toEqual({
            GET_USER: 'GET_USER',
            SUCCESS_USER: 'SUCCESS_USER',
            ERROR_USER: 'ERROR_USER'
        });
    });
});

describe('Creators', () => {
    describe('GetUsers', () => {
        test('should return the expected action', () => {
            expect(Creators.getUser()).toEqual({
                type: UserTypes.GET_USER
            })
        })
    });
    describe('SuccessUser', () => {
        test('should return the expected action', () => {
            expect(Creators.successUser()).toEqual({
                type: UserTypes.SUCCESS_USER
            })
        });
        test('should return the expected action when passed data', () => {
            expect(Creators.successUser([{name: {first: 'name'}}])).toEqual({
                type: UserTypes.SUCCESS_USER,
                data: [{name: {first: 'name'}}]
            })
        });
    });
    describe('ErrorUsers', () => {
        test('should return the expected action', () => {
            expect(Creators.errorUser()).toEqual({
                type: UserTypes.ERROR_USER
            })
        })
    });
});

describe('INITIAL_STATE', () => {
    test('should set the initial state ', () => {
        expect(INITIAL_STATE).toEqual({
            user: [],
            error: false
        });
    });
});

describe('reducers', () => {
    describe('get', () => {
        test('should do nothing (Only call saga)', () => {
            expect(get(INITIAL_STATE, {})).toEqual(INITIAL_STATE);
        });
        test('should ignore extra args', () => {
            expect(get(INITIAL_STATE, {extra: 'arg'})).toEqual(INITIAL_STATE);
        });
    });
    describe('success', () => {
        test('should set user', () => {
            expect(success(INITIAL_STATE, {data: {name: {first: 'name'}}})).toEqual({
                error: false,
                user: {name: {first: 'name'}}
            });
        });
        test('should ignore extra args', () => {
            expect(success(INITIAL_STATE, {data: {name: {first: 'name'}}, extra: 'arg'})).toEqual({
                error: false,
                user: {name: {first: 'name'}}
            });
        });
    });
    describe('error', () => {
        test('Should set error to true', () => {
            expect(error(INITIAL_STATE, {})).toEqual({
                error: true,
                user: []
            });
        });
        test('should ignore extra args', () => {
            expect(error(INITIAL_STATE, {extra: 'arg'})).toEqual({
                error: true,
                user: []
            });
        });
    });
});
describe('reducers', () => {
    test('should return initial state if passed nothing', () => {
        expect(reducers()).toEqual(INITIAL_STATE)
    });
    test('should route GET_USER to getUser', () => {
        expect(reducers(INITIAL_STATE, Creators.getUser())).toEqual(INITIAL_STATE)
    });
    test('should route SUCCESS_USER to successUser', () => {
        expect(reducers(INITIAL_STATE, Creators.successUser({name: {first: 'name'}}))).toEqual({
            error: false,
            user: {name: {first: 'name'}}
        })
    });
    test('should route ERROR_USER to getUser', () => {
        expect(reducers(INITIAL_STATE, Creators.errorUser())).toEqual({
            error: true,
            user: []
        })
    });
});