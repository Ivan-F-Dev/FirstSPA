import profileReducer, {addPost, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 0, likesCount: 100, message: 'My first post!'},
    ],
}

test('length of posts should be incremented', () => {
    // 1. test data
    let action = addPost("it-kamasutra.com")
    // 2. action
    let newState = profileReducer(state,action)
    console.log(newState);
    //3. expectation
    expect(newState.posts.length).toBe( 2);
});
test('message of new post should be correct ', () => {
    // 1. test data
    let action = addPost("it-kamasutra.com")
    // 2. action
    let newState = profileReducer(state,action)
    console.log(newState);
    //3. expectation
    expect(newState.posts[1].message).toBe( "it-kamasutra.com");
});
test('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(0)
    // 2. action
    let newState = profileReducer(state,action)
    console.log(newState);
    //3. expectation
    expect(newState.posts.length).toBe( 0);
});
test('after deleting length shouldn,t be decrement if id is incorrect', () => {
    // 1. test data
    let action = deletePost(1111)
    // 2. action
    let newState = profileReducer(state,action)
    console.log(newState);
    //3. expectation
    expect(newState.posts.length).toBe( 1);
});