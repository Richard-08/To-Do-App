import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    actions: {
        loadTodoGroup(ctx, index) {
            ctx.commit('changeCurrentGroup', index);
        }
    },
    state: {
        todos: [
            {
                id: 1,
                title: "First group",
                tasks: [
                    {
                        id: 1,
                        name: "Do it",
                        completed: false,
                        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nostrum fuga in aliquid dolorem illum nobis quas non ab harum qui eligendi ipsa explicabo fugiat fugit laboriosam, ullam dolores ducimus!",
                        isShow: false,
                    },
                    {
                        id: 2,
                        name: "Do that",
                        completed: false,
                        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nostrum fuga in aliquid dolorem illum nobis quas non ab harum qui eligendi ipsa explicabo fugiat fugit laboriosam, ullam dolores ducimus!",
                        isShow: false,
                    },
                ],
            },
            {
                id: 2,
                title: "Second group",
                tasks: [
                    {
                        id: 1,
                        name: "Do it",
                        completed: false,
                        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nostrum fuga in aliquid dolorem illum nobis quas non ab harum qui eligendi ipsa explicabo fugiat fugit laboriosam, ullam dolores ducimus!",
                        isShow: false,
                    },
                ],
            },
        ],
        search: '',
        filter: 'All',
        currentGroup: null,
    },
    mutations: {
        addNewGroup(state, group) {
            state.todos.push(group);
        },
        deleteGroup(state, id) {
            state.todos = state.todos.filter(value => value.id !== id);
        },
        updateSearch(state, value) {
            state.search = value;
        },
        toggleTodoDescription(state, index) {
            state.todos[state.currentGroup].tasks[index].isShow = !state.todos[state.currentGroup].tasks[index].isShow;
        },
        changeTodoFilter(state, filter) {
            state.filter = filter;
        },
        changeTodoComplete(state, index) {
            state.todos[state.currentGroup].tasks[index].completed = !state.todos[state.currentGroup].tasks[index].completed;
        },
        changeCurrentGroup(state, index) {
            state.currentGroup = index;
        },
        addNewTodo(state, todo) {
            state.todos[state.currentGroup].tasks.push(todo);
        },
        deleteTodo(state, id) {
            state.todos[state.currentGroup].tasks = state.todos[state.currentGroup].tasks.filter(value => value.id !== id);
        }
    },
    getters: {
        getAllTodos(state) {
            return state.todos;
        },
        getSearchValue(state) {
            return state.search;
        },
        getFilteredTodos(state) {
            if (state.filter === "All") {
                return state.todos[state.currentGroup].tasks;
            }

            if (state.filter === "Completed") {
                return state.todos[state.currentGroup].tasks.filter(value => value.completed);
            }

            if (state.filter === "Active") {
                return state.todos[state.currentGroup].tasks.filter(value => !value.completed);
            }
        },
        getSelectedFilter(state) {
            return state.filter;
        }
    }
});