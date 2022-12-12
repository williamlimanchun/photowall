
import { database } from "../database/config"
import { ref, get, child, update, remove, set, push } from "firebase/database"

export function removePost(index) {
    return {
        type: 'REMOVE_POST',
        index
    }
}

export function addPost(post) {
    return {
        type: 'ADD_POST',
        post
    }
}

export function addComment(comment, postId) {
    return {
        type: 'ADD_COMMENT',
        comment,
        postId
    }
}

export function startAddingPost(post) {
    return (dispatch) => {
        return update(ref(database, 'posts'), {
            [post.id]: post
        }).then(() => {
            dispatch(addPost(post))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function startAddingComment(comment, postId) {
    return (dispatch) => {
        const newComment = ref(database, `comments/${postId}`)
        return set(push(newComment), {
            comment
        }).then(() => {
            dispatch(addComment(comment, postId))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function startLoadingPosts() {
    let posts = []
    return (dispatch) => {
        return get(child(ref(database), 'posts')).then((snapshot) => {
            snapshot.forEach(childSnapshot => {
                posts.push(childSnapshot.val())
            })
            dispatch(loadPosts(posts))
        })
    }
}

export function startLoadingComments() {
    let comments = []
    return (dispatch) => {
        return get(child(ref(database), 'comments')).then((snapshot) => {
            snapshot.forEach(childSnapshot => {
                comments[childSnapshot.key] = Object.values(childSnapshot.val())
            })
            dispatch(loadComments(comments))
        })
    }
}

export function loadPosts(posts) {
    return {
        type: 'LOAD_POSTS',
        posts
    }
}

export function loadComments(comments) {
    return {
        type: 'LOAD_COMMENTS',
        comments
    }
}

export function startRemovingPost(index, id) {

    const updates = {
        [`posts/${id}`]: null,
        [`comments/${id}`]: null
    }

    return (dispatch) => {
        // return remove(ref(database, `posts/${id}`)).then(() => {
        //     dispatch(removePost(index))
        // })
        return update(ref(database), updates).then(() => {
            dispatch(removePost(index))
        }).catch((error) => {
            console.log(error)
        })
    }
}