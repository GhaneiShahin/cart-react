export const addCounter = (counter) => ({ // parantez ghabl az {} yani return dge nemikhad kalameye return ro benevisi
    type: 'ADD_COUNTER',
    counter
});

export const deleteCounter = (counterId) => ({
    type: 'DELETE_COUNTER',
    counterId
});

export const resetCounter = () => ({
    type: 'RESET_COUNTER'
})