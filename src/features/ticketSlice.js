import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allTickets: [],
    selectedTickets: [],
    allUsers: [],
    preference: {
        groupBy: "status",
        orderBy: "priority"
    }
}

export const ticketSlice = createSlice({
    name: 'ticket',
    initialState,
    reducers: {
        setTickets: (state, action) => {
            state.allTickets = action.payload;
        },
        setUsers: (state, action) => {
            state.allUsers = action.payload;
        },
        setPreference: (state, action) => {
            localStorage.setItem("kanbanBoard", JSON.stringify(action.payload));
            state.preference = action.payload;
        },
        groupTickets: (state, action) => {
            // console.log("Dispatch called", action.payload);
            if (state.preference.groupBy === "status") {
                const statusList = ["Backlog", "Todo", "In progress", "Done", "Cancelled"];
                let selectedData = [];
                statusList.forEach((currStatus) => {
                    const currTickets = state.allTickets.filter(elem => {
                        return elem.status === currStatus;
                    });
                    selectedData.push({
                        title: currStatus,
                        value: currTickets
                    })
                })
                state.selectedTickets = selectedData;
            } else if (state.preference.groupBy === "priority") {
                const priorityList = ["No priority", "Low", "Medium", "High", "Urgent"];
                let selectedData = [];
                priorityList.forEach((currPriority, index) => {
                    const currTickets = state.allTickets.filter(elem => {
                        return elem.priority === index;
                    })
                    selectedData.push({
                        title: currPriority,
                        value: currTickets
                    })
                })
                state.selectedTickets = selectedData;
            } else {
                const users = state.allUsers;
                let selectedData = [];
                users.forEach((currUser) => {
                    const currTickets = state.allTickets.filter(elem => {
                        return elem.userId === currUser.id;
                    })
                    selectedData.push({
                        title: currUser.name,
                        value: currTickets
                    })
                })
                state.selectedTickets = selectedData;
            }

            if (state.preference.orderBy === "priority") {
                state.selectedTickets.forEach(elem => {
                    elem.value.sort((a, b) => {
                        return b.priority - a.priority
                    });
                })
            }
            else {
                state.selectedTickets.forEach(elem => {
                    elem.value.sort((a, b) => {
                        return a.title.localeCompare(b.title)
                    });
                })
            }
        }
    },
})

export const { setTickets, setUsers, groupTickets, setPreference } = ticketSlice.actions;

export const selectAllTickets = (state) => state.ticket.allTickets;
export const selectGroupedTickets = (state) => state.ticket.selectedTickets;

export default ticketSlice.reducer;