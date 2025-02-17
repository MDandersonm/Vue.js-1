import {
    REQUEST_BOARD_LIST_TO_SPRING,
    REQUEST_BOARD_TO_SPRING,
    REQUEST_PRODUCT_LIST_TO_SPRING,
    REQUEST_PRODUCT_TO_SPRING,
    REQUEST_PRODUCT_IMAGE_LIST_TO_SPRING,
    REQUEST_ALL_PRODUCT_TO_SPRING,
} from './mutation-types'

export default {
       // states로 구성하면 안됨(예약어)
       [REQUEST_BOARD_LIST_TO_SPRING] (state, passingData) {
        state.boards = passingData//state의 boards리스트를 넘겨온 데이터로 받는다.
       },
       
    //이렇게해도 똑같이 된다.
    // REQUEST_BOARD_LIST_TO_SPRING (state, passingData) {
    //     state.boards = passingData//state의 boards리스트를 넘겨온 데이터로 받는다.
    // }
    [REQUEST_BOARD_TO_SPRING] (state, passingData) {
        console.log("1mutation의state.board: ", state.board)
        state.board = passingData//state에 전달 -> board객체 갱신오나료
        console.log("2mutation의state.board: ", state.board)
    },

    ////////////상품관리
    [REQUEST_PRODUCT_LIST_TO_SPRING] (state, passingData) {
        state.products = passingData
    },
    [REQUEST_PRODUCT_TO_SPRING] (state, passingData) {
        state.product = passingData
    },
    [REQUEST_PRODUCT_IMAGE_LIST_TO_SPRING] (state, passingData) {
        state.productImages = passingData
    },
    [REQUEST_ALL_PRODUCT_TO_SPRING] (state, passingData) {
        state.allOfProducts = passingData
    }
    
}