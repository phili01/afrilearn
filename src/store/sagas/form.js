import { put, delay } from 'redux-saga/effects';

import * as actions from '../actions/index';
import axios from '../../axios';
import fileAxios from 'axios';

export function* fetchCategInitSaga(action) {
    try {
        yield put(actions.fetchCategStart());
        const category = yield axios.post('/category', null,{headers: {'data-categ':'category'}});
        const categ =  category.data && category.data.length > 0 ? category.data : [];
        yield put(actions.fetchCateg(categ))
    } catch(err){
        yield put(actions.fetchCategFail(err));
        yield delay(2000);
        yield put(actions.fetchCategReset());
    }
    
}

export function* addCategInitSaga(action) {
    let categs =  String(action.categ).split(',');
    let transformCateg = [];
    for (let categ of categs) {
        transformCateg.push(String(categ).trim().charAt(0).toUpperCase() + String(categ).trim().toLowerCase().slice(1));
    }

    let removeDuplicate = [...new Set(transformCateg)];
        
    yield put(actions.addCateg(removeDuplicate));
}

export function* checkLinkInitSaga(action) {
    let link = String(action.link).trim();
    try {
        let response = yield fileAxios.get(link, {responseType: 'blob', timeout: 10000});
        if (response.data.type.startsWith(action.mediaType + '/')) {
            yield put(actions.checkLink(null, {file: response.data, url: window.URL.createObjectURL(response.data)}));   
            return;
        }
        throw new Error(`Unknown format, Only ${action.mediaType} files`);
       
    } catch(err) {
        yield put(actions.checkLink(err, null));   
    }
}