import { createStore } from 'vuex';

export const store = createStore({
    state() {
        return {
            checked: false,
            products: [
                {
                    id: 1,
                    code: 'BXC',
                    title: 'Вытяжное устройство BXC',
                    description: 'Вытяжное устройство для механической системы вентиляции',
                    info: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
                    shu: 'G2H1065',
                    image: 'images/cart1.png',
                    price: 12644,
                },
                {
                    id: 2,
                    code: 'G2H',
                    title: 'Вытяжное устройство G2H',
                    description:
                        'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
                    info: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
                    shu: 'G2H1065',
                    image: 'images/cart2.png',
                    price: 12644,
                },
                {
                    id: 3,
                    code: 'GHN',
                    title: 'Вытяжное устройство GHN',
                    description: 'Вытяжное устройство с датчиком присутствия',
                    info: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
                    shu: 'BAH8401',
                    image: 'images/cart3.png',
                    price: 12644,
                },
                {
                    id: 4,
                    code: 'TDA',
                    title: 'Вытяжное устройство TDA',
                    description: 'Вытяжное устройство с датчиком присутствия',
                    info: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
                    shu: 'H2D1065',
                    image: 'images/cart4.png',
                    price: 12644,
                },
                {
                    id: 5,
                    code: 'G2H',
                    title: 'Вытяжное устройство G2H',
                    description:
                        'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
                    info: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
                    shu: 'G2H1065',
                    image: 'images/cart2.png',
                    price: 12644,
                },
                {
                    id: 6,
                    code: 'GHN',
                    title: 'Вытяжное устройство GHN',
                    description: 'Вытяжное устройство с датчиком присутствия',
                    info: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
                    shu: 'A2F1225',
                    image: 'images/cart3.png',
                    price: 12644,
                },
            ],
            carts: [
                {
                    id: 1,
                    title: 'Вытяжное устройство BXC',
                    info: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
                    shu: 'G2H1065',
                    image: 'images/cart1.png',
                    price: 12644,
                    qty: 1,
                },
                {
                    id: 2,
                    title: 'Вытяжное устройство G2H',
                    info: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
                    shu: 'F2A1065',
                    image: 'images/cart2.png',
                    price: 12644,
                    qty: 2,
                },
                {
                    id: 3,
                    title: 'Вытяжное устройство GHN',
                    info: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
                    shu: 'BAH8401',
                    image: 'images/cart3.png',
                    price: 12644,
                    qty: 1,
                },
            ],
        };
    },
    mutations: {
        ADD_TO_CART: (state, payload) => ({
            ...state,
            carts: state.carts.map((el) => (el.id === payload.id ? payload : el)),
        }),
        REMOVE_FROM_CART: (state, payload) => ({
            ...state,
            carts: state.carts.map((el) => (el.id === payload.id ? payload : el)),
        }),
        DELETE_PRODUCT: (state, payload) => {
            state.carts = state.carts.filter(el => el.id !== payload);
        },
        CLEAN_CART: (state) => {
            state.carts = []
        },
        FIXING_TOGGLE: (state, payload) => {
            state.checked = payload
        }
    },
});

