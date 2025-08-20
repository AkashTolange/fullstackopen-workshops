import noteReducer from "./noteReducer";
import deepFreeze from "deep-freeze";

describe("noteReducer", () => { 
    test("returns new state with action NEW_NOTE", () => { 
        const state =[];
        const action ={ 
            //yaha key name ko value rw and name of the function hunu parxa 
            type: "notes/createNote",
            payload: { 
                content: 'the app state is in redux store',
                important: true,
                id: 1,
            },
        };

        deepFreeze(state); //it will freeze it 
        const newState = noteReducer(state, action);

        expect(newState).toHaveLength(1);
        expect(newState).toContainEqual(action.payload);
    });

    // another test
    test('returns new state with action TOGGLE_IMPORTANCE', () => { 
        const state =[
            {
                content: 'the app state is in redux store',
                important: true,
                id:1
            },
            {
                content: 'state changes are made with actions',
                important: false,
                id:2
            }]

            const action = {
                type: 'notes/toggleImportanceOf',
                // payload: { 
                //     id:2
                // }, //direct id pass garam nw hae 
                payload: 2,
            }
            deepFreeze(state);
            const newState = noteReducer(state, action);

            expect(newState).toHaveLength(2);
            expect(newState).toContainEqual({ 
                content: 'state changes are made with actions',
                important: true,
                id:2,
            });
    });
});