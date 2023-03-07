import {combineReducers} from "redux"
import storage from "redux-persist/lib/storage"
import signReducer from "./sign"
import branchReducer from "./branch"
import { persistReducer } from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'
import { encryptTransform } from 'redux-persist-transform-encrypt';
import itemReducer from "./item"

const crypt = encryptTransform({
  secretKey: "InVenT0ry-21Man-23wGMC" ,
  onError: function (error) {
    console.log(error)
  },
})

const persistConfig = {
    key: 'player',
    whitelist: ['isAuth' , "currentUser" , "teamList" ],
    storage : storageSession,
    transforms: [crypt]
  }

  const BranchpersistConfig = {
    key: 'playerRoot',
    whitelist: ['branchList' , "fail" ],
    storage : storageSession,
    transforms: [crypt]
  }

  const itempersistConfig = {
    key: 'playerSodu',
    storage : storageSession,
    transforms: [crypt]
  }

const persistedReducer = persistReducer(persistConfig , signReducer)
const ItempersistedReducer = persistReducer(itempersistConfig , itemReducer)
const BranchpersistedReducer = persistReducer(BranchpersistConfig , branchReducer)

const rootReducer = combineReducers({persistedReducer , branchReducer : BranchpersistedReducer , itemReducer : ItempersistedReducer}) 

export default rootReducer