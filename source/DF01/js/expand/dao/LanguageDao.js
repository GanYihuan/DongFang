import React, {Component} from 'react';
import {
  AsyncStorage,
} from 'react-native';
import keysData from '../../../res/data/keys.json';
import langsData from '../../../res/data/langs.json';


// 标识那个模块在用
export let FLAG_LANGUAGE = {
  flag_language: 'flag_language_language8',
  flag_key: 'flag_language_key8'
}


export default class LanguageDao {
  // 那个在调用他
  constructor(flag) {
    this.flag = flag;
  }

  fetch() {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(this.flag, (error, result) => {
        if (error) {
          reject(error);
        } else {
          if (!result) {
            let data = this.flag === FLAG_LANGUAGE.flag_language ? langsData : keysData;
            this.save(data);
            resolve(data);
          } else {
            try {
              resolve(JSON.parse(result));
            } catch (e) {
              reject(e);
            }
          }
        }
      })
    })
  }

  save(data) {
    AsyncStorage.setItem(this.flag, JSON.stringify(data), (error) => {

    })
  }

  fetchNetRepository(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
          .then(response => response.json())
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
    })
  }
}

